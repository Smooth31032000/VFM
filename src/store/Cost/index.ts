/** @format */

import { create } from "zustand";
import { CostState } from "./types";

export const useCost = create<CostState>(() => {
  return {
    totalCost: 0,
    VAT: 0,
    service: 0,
    discount: 0,
    finalCost: 0,
  };
});
