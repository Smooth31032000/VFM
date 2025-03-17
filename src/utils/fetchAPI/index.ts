import { environment } from '~/env';
import ConfigureAxios from './fetchApi';

const axiosConfig = new ConfigureAxios({
  configure: {
    method: 'GET',
    baseURL: environment.BASE_URL,
    timeout: 30000,
  },
  setAccessToken() {
    const token = '111';
    return `Bearer ${token}`;
  },
  setRefreshToken() {
    return '';
  },
});

const fetchAPI = axiosConfig.create();

axiosConfig.accessToken({
  setCondition(config) {
    return config?.url?.search(/^http/g) === -1;
  },
});

export default fetchAPI;
