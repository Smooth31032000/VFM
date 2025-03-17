/** @format */

import { create } from "zustand";
import { ListState } from "./types";
import { v4 as uuidv4 } from "uuid";
import { ListItemProps } from "~/components/ListItem";

export const useListStore = create<ListState>(() => {
  const innitialState: ListItemProps[] = [
    { id: uuidv4(), name: "Tương ớt", price: 0 },
    { id: uuidv4(), name: "Tương cà", price: 0 },
    { id: uuidv4(), name: "Rau thơm", price: 0 },
  ];
  return {
    dataList: innitialState,
    addItem: () => {},
  };
});
