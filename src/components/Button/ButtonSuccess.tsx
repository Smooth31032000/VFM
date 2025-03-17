/** @format */

import { FC } from "react";
import { Props } from "./types";

export const ButtonSuccess: FC<Props> = ({ handleOnclick, text }) => {
  return (
    <div
      onClick={handleOnclick}
      className="w-[125px] h-[31px] flex items-center justify-center bg-[#6DE75E] text-[#FFFFFF] rounded-[8px] cursor-pointer"
    >
      <button className="text-[14px] font-medium leading-[21px] tracking-[-0.31%] cursor-pointer ">
        {text}
      </button>
    </div>
  );
};
