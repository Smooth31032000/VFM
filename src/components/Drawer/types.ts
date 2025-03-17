/** @format */


export type Props = {
  title: string;
  open: boolean;
  data: DrawerItemProps[];
  handleOnclose?: () => void;
};

export type DrawerItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  kind?: string;
};

