/** @format */

import { ListItemIF } from "~/components/ListItem/types";

export type ListState = {
  dataList: ListItemIF[];
  addItem: () => void;
};
