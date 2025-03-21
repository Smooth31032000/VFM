export interface Props {
  id: string;
  rating: number;
  name: string;
  price: number;
  shortDescription: string;
  image: string;
  productType: "HOT" | "NEWS" | "NORMAL";
  priceDiscount: number;
  onClick?: () => void;
  handleOnClick?: () => void;
}
