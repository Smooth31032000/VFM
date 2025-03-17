/** @format */

import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { DrawerInter } from "~/features/Drawer/types";
import { DrawerState } from "./types";

export const useStore = create<DrawerState>((set) => {
  const initialDrawerData: DrawerInter[] = [
    {
      id: uuidv4(),
      name: "Banh Mi Xa Xiu",
      price: 30000,
      quantity: 1,
      kind: "Food",
    },
    { id: uuidv4(), name: "CoCa", price: 10000, quantity: 1, kind: "Drink" },
    {
      id: uuidv4(),
      name: "Nem Nướng",
      price: 30000,
      quantity: 1,
      kind: "Food",
    },
  ];
  return {
    DrawerData: initialDrawerData,
    counterCard: initialDrawerData.length,
    counter: 1,
    addItem: (item) =>
      set((state) => {
        const isExist = state.DrawerData.some(
          (existingItem) => existingItem.id === item.id
        );

        if (isExist) return state;

        const updatedDrawerData = [...state.DrawerData, item];

        return {
          DrawerData: updatedDrawerData,
          counterCard: updatedDrawerData.length,
        };
      }),

    deleteItem: (id: string) =>
      set((state) => {
        const updatedDrawerData = state.DrawerData.filter(
          (item) => item.id !== id
        );

        return {
          DrawerData: updatedDrawerData,
          counterCard: updatedDrawerData.length,
        };
      }),

    increase: (id) =>
      set((state) => ({
        DrawerData: state.DrawerData.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),

    decrease: (id) =>
      set((state) => ({
        DrawerData: state.DrawerData.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      })),
  };
});
