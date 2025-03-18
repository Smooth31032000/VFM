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
    <div className={`rounded-lg bg-white ${className}`} {...props}>
      {data.map((item) => (
        <div key={item.id} className="grid grid-cols-2">
          <div>
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
            <span className="check-mark">✓</span>
          </label>
        </div>
      ))}
    </div>
  );
};
