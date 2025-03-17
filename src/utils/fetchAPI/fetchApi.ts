import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface Configure {
  configure: AxiosRequestConfig;
  setAccessToken: () => string;
  setRefreshToken: () => string;
}

type Success<ResponseDataT> = (
  res: AxiosResponse<ResponseDataT>,
  originalRequest: AxiosRequestConfig
) => void;

type Failure = (error: AxiosError) => void;

interface AccessTokenParams {
  setCondition: (config: AxiosRequestConfig) => boolean;
}

interface Config<ResponseDataT, AxiosDataReturnT> {
  url: string;
  setRefreshCondition: (error: AxiosError) => boolean;
  axiosData: (refreshToken: string, accessToken: string) => AxiosDataReturnT;
  success: Success<ResponseDataT>;
  failure: Failure;
}

const { CancelToken } = axios;

export default class ConfigureAxios {
  private axiosInstance: AxiosInstance;
  private setAccessToken: () => string;
  private setRefreshToken: () => string;

  public constructor({
    configure,
    setAccessToken,
    setRefreshToken,
  }: Configure) {
    this.setAccessToken = setAccessToken;
    this.setRefreshToken = setRefreshToken;
    this.axiosInstance = axios.create(configure);
  }

  public create = (cancel = "") => {
    return {
      request: (requestConfig: AxiosRequestConfig) => {
        const source = CancelToken.source();
        const request = this.axiosInstance({
          ...requestConfig,
          cancelToken: source.token,
        });
        if (!!cancel) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          request[cancel] = source.cancel;
        }
        return request;
      },
    };
  };

  public accessToken = ({ setCondition }: AccessTokenParams) => {
    this.axiosInstance.interceptors.request.use((config) => {
      if (!config?.url) {
        return config;
      }
      const accessToken = this.setAccessToken();
      if (setCondition(config) && !config?.headers?.Authorization) {
        if (!!accessToken) {
          config.headers.Authorization = accessToken;
        }
      }
      return config;
    });
  };

  private handleRefreshTokenAsync = async <ResponseDataT, AxiosDataReturnT>(
    config: Config<ResponseDataT, AxiosDataReturnT>,
    error: AxiosError
  ) => {
    const { url, axiosData, success, failure } = config;
    try {
      const refreshToken = this.setRefreshToken();
      const accessToken = this.setAccessToken();
      const res = await this.axiosInstance.post<ResponseDataT>(
        url,
        axiosData(refreshToken, accessToken)
      );
      !!error.config && success(res, error.config);
      return !!error.config && (await this.axiosInstance.request(error.config));
    } catch (_) {
      failure(error);
      return await Promise.reject(error);
    } finally {
      this.refreshToken(config);
    }
  };

  private handleLogout = async <ResponseDataT, AxiosDataReturnT>(
    config: Config<ResponseDataT, AxiosDataReturnT>,
    response: AxiosResponse
  ) => {
    config.failure(response.data);
    this.logout(config);
    return await Promise.reject(response);
  };

  public refreshToken = <ResponseDataT = any, AxiosDataReturnT = any>(
    config: Config<ResponseDataT, AxiosDataReturnT>
  ) => {
    const interceptor = this.axiosInstance.interceptors.response.use(
      undefined,
      (error: AxiosError) => {
        if (!config.setRefreshCondition(error)) {
          return Promise.reject(error);
        }
        this.axiosInstance.interceptors.response.eject(interceptor);
        return this.handleRefreshTokenAsync(config, error);
      }
    );
  };

  public logout = <ResponseDataT = any, AxiosDataReturnT = any>(
    config: Config<ResponseDataT, AxiosDataReturnT>
  ) => {
    const interceptor = this.axiosInstance.interceptors.response.use(
      (response: any) => {
        if (response.data.code === 1003) {
          this.axiosInstance.interceptors.response.eject(interceptor);
          return this.handleLogout(config, response.data);
        }
        return response;
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
}
