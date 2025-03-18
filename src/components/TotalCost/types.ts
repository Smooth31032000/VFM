/** @format */

import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
  totalCost: number;
  VAT: number;
  service?: number;
};
