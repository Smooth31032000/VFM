/** @format */

import { FC } from "react";
import { SVGIcon } from "../SVGIcon";
import { Props } from "./types";

export const Counter: FC<Props> = ({
  count,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <div className="flex items-center justify-end gap-[8px]">
      <div className="cursor-pointer" onClick={handleDecrease}>
        <SVGIcon name="decrease" />
      </div>
      <div>{String(count).padStart(2, "0")}</div>
      <div className="cursor-pointer" onClick={handleIncrease}>
        <SVGIcon name="increase" />
      </div>
    </div>
  );
};
