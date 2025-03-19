/** @format */

import { Product } from "~/services/fetchAPI";

export interface ProductStoreState {
  productData: Product[];
  isLoading: boolean;
  fetchProducts?: (url: string) => Promise<void>;
  fetchProductById?: (url: string, id: string) => Promise<Product | null>;
}
