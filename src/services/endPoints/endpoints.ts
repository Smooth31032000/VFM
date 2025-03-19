/** @format */
export const BASE_URL = "https://67d2b19990e0670699beb93f.mockapi.io";

export const API_ENDPOINTS = {
  // Product endpoints
  PRODUCTS: {
    GET_ALL: "/product",
    GET_BY_ID: (id: string) => `/product/${id}`,
    CREATE: "/product",
    UPDATE: (id: string) => `/product/${id}`,
    DELETE: (id: string) => `/product/${id}`,
  },

  // Categories endpoints
  CATEGORIES: {
    GET_ALL: "/categories",
    GET_BY_ID: (id: string) => `/categories/${id}`,
  },

  // Auth endpoints
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
  },
} as const;
