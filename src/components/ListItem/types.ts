/** @format */

export type Props = {
  data: ListItemIF[];
  onChecked?: (name: string, price: number, e: any) => void;
  className?: string;
};

export interface ListItemIF {
  id: string;
  name: string;
  price: number;
}
