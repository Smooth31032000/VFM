/** @format */

import { FC } from "react";
import { SVGIcon } from "../SVGIcon";
import { Props } from "./types";

export const Cart: FC<Props> = ({ count, handleClick }) => {
  return (
    <button className="w-6 h-6 relative" onClick={handleClick}>
      <SVGIcon name="cart" />
      <div className="w-2 h-2 rounded-full bg-white flex items-center justify-center text-[6px] absolute right-[-5px] top-[-5px] font-bold text-error-05">
        {count}
      </div>
    </button>
  );
};
