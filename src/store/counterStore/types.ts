/** @format */

import { DrawerInter } from "~/features/Drawer/types";

export type DrawerState = {
  DrawerData: DrawerInter[];
  counterCard: number;
  counter: number;
  addItem: (item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }) => void;
  deleteItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
};
