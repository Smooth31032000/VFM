/** @format */
import "./style.css";
import { FC } from "react";
import numeral from "numeral";
import { Props } from "./types";
export const TotalCost: FC<Props> = ({ totalCost, VAT, service, children }) => {
  const finalTotal: number = totalCost + VAT + (service ?? 0);
  return (
    <div className="total-cost">
      {children}
      <div className="price flex flex-col gap-[3px] items-end">
        <p>{numeral(totalCost).format("0,0")}đ</p>
        <p>{numeral(VAT).format("0,0")}đ</p>
        <p>{numeral(service).format("0,0")}đ</p>
        <p>{numeral(finalTotal).format("0,0")}đ</p>
      </div>
    </div>
  );
};
