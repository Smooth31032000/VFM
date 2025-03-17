import { ReactNode } from "react";

export type Props = {
  title: string;
  open: boolean
  children?: ReactNode;
  showDrawer?: () => void;
  closeDrawer?: () => void;
}

export interface DrawerInter {
  id: string;
  name: string;
  price: number;
  quantity: number;
  kind?:'Food' | 'Drink' ;
}