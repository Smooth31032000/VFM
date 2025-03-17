import * as SVGIcons from "../../assets/images/svg";

export type SVGIconNames = keyof typeof SVGIcons;

export type Props = {
  name: SVGIconNames;
  width?: string | number;
  height?: string | number;
} & React.HTMLAttributes<HTMLImageElement>;
