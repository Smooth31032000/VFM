/** @format */

import { create } from "zustand";
import { ProductStoreState } from "./types";
import { Product, ProductService } from "~/services/fetchAPI";

export const useProductStore = create<ProductStoreState>((set) => {
  const initialState: Product[] = [];
  return {
    productData: initialState,
    isLoading: true,

    fetchProducts: async (url: string) => {
      try {
        set({ isLoading: true });
        const data = await ProductService.getAll(url);
        set({ productData: data, isLoading: false });
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    },
  };
});
