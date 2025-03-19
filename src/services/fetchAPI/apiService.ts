/** @format */

import { API_ENDPOINTS, BASE_URL } from "../endPoints/endpoints";
import { ApiResponse, Product } from "./types";

// Cấu hình mặc định cho fetch
const defaultHeaders = {
  "Content-Type": "application/json",
};

// Hàm helper để xử lý response
const handleResponse = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Có lỗi xảy ra");
  }
  return {
    data,
    status: response.status,
    message: "Thành công",
  };
};

// Hàm fetch chung
const fetchApi = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });
    return handleResponse<T>(response);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

// Service cho Products
export const ProductService = {
  getAll: async (url: string): Promise<Product[]> => {
    const response = await fetchApi<Product[]>(url);
    return response.data;
  },

  getById: async (url: string, id: string): Promise<Product> => {
    const response = await fetchApi<Product>(`${url}/${id}`);
    return response.data;
  },

  create: async (product: Omit<Product, "id">): Promise<Product> => {
    const response = await fetchApi<Product>(
      `${BASE_URL}${API_ENDPOINTS.PRODUCTS.CREATE}`,
      {
        method: "POST",
        body: JSON.stringify(product),
      }
    );
    return response.data;
  },

  update: async (id: string, product: Partial<Product>): Promise<Product> => {
    const response = await fetchApi<Product>(
      `${BASE_URL}${API_ENDPOINTS.PRODUCTS.UPDATE(id)}`,
      {
        method: "PUT",
        body: JSON.stringify(product),
      }
    );
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await fetchApi<void>(`${BASE_URL}${API_ENDPOINTS.PRODUCTS.DELETE(id)}`, {
      method: "DELETE",
    });
  },
};

// Service cho Authentication
export const AuthService = {
  login: async (credentials: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ token: string }>> => {
    return fetchApi<{ token: string }>(
      `${BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`,
      {
        method: "POST",
        body: JSON.stringify(credentials),
      }
    );
  },

  register: async (userData: {
    email: string;
    password: string;
    name: string;
  }): Promise<ApiResponse<{ token: string }>> => {
    return fetchApi<{ token: string }>(
      `${BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`,
      {
        method: "POST",
        body: JSON.stringify(userData),
      }
    );
  },

  logout: async (): Promise<ApiResponse<void>> => {
    return fetchApi<void>(`${BASE_URL}${API_ENDPOINTS.AUTH.LOGOUT}`, {
      method: "POST",
    });
  },
};
