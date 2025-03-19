/** @format */

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  rating: number;
  image: string;
  price: number;
  priceDiscount: number;
  productType: "HOT" | "NEWS" | "NORMAL";
  createdAt?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
