/** @format */

import { FC } from "react";
import { Props } from "./types";
import "./style.css";

export const ListItem: FC<Props> = ({
  data,
  onChecked,
  className = "",
  ...props
}) => {
  return (
    <div className={`bg-white ${className}`} {...props}>
      {data.map((item) => (
        <div className="grid grid-cols-2">
          <div className="pl-[28px]">
            <div className="name">{item.name}</div>
            <div className="price-list">{item.price}đ</div>
          </div>
          <label className="custom-checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                onChecked?.(item.name, item.price, e.target.value)
              }
            />
            <span className="check-mark">✔</span>
          </label>
        </div>
      ))}
    </div>
  );
};
