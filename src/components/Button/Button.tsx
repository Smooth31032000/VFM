/** @format */

import { FC } from "react";
import { Props } from "./types";

export const Button: FC<Props> = ({
  handleOnclick,
  text,
  className = "",
  size = "14px",
}) => {
  return (
    <button
      onClick={handleOnclick}
      className={`flex items-center justify-center font-medium leading-[21px] tracking-[-0.31%] cursor-pointer text-[${size}] ${className}`}
    >
      {text}
    </button>
  );
};
