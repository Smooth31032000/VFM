/** @format */
import "./style.css";
import { FC } from "react";
import numeral from "numeral";
import { Props } from "./types";
export const TotalCost: FC<Props> = ({ sum, VAT }) => {
  const finalTotal: number = sum + VAT;
  return (
    <div className="total-cost">
      <div></div>
      <div className="pl-[40px] title flex flex-col gap-[8px]">
        <p>Tổng tiền</p>
        <p>VAT</p>
        <p>Phí Dịch Vụ</p>
        <p>Tổng tiền</p>
      </div>
      <div className="price flex flex-col gap-[3px] items-end">
        <p>{numeral(sum).format("0,0")}đ</p>
        <p>{numeral(VAT).format("0,0")}đ</p>
        <p>0đ</p>
        <p>{numeral(finalTotal).format("0,0")}đ</p>
      </div>
    </div>
  );
};
