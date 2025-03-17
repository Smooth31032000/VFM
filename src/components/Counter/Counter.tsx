/** @format */

import { FC } from "react";
import { Props } from "./types";
import increase from "~/assets/icons/increase.svg";
import decrease from "~/assets/icons/decrease.svg";

export const Counter: FC<Props> = ({
  count,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <div className="flex items-center justify-end gap-[8px]">
      <div className="cursor-pointer" onClick={handleDecrease}>
        <img src={decrease} />
      </div>
      <div>{String(count).padStart(2, "0")}</div>
      <div className="cursor-pointer" onClick={handleIncrease}>
        <img src={increase} />
      </div>
    </div>
  );
};
