/** @format */

import { FC } from "react";
import { Props } from "./types";

export const UserProfile: FC<Props> = ({
  image,
  name,
  position,
  className = "",
  text = "text-base",
}) => {
  return (
    <div className={`${className}`}>
      <img
        className="object-cover w-[50px] h-[50px] rounded-full border-1 border-white"
        src={image}
        alt="avatar"
      />
      <div>
        <div className="font-bold">
          <span className="text-inherit">{name}</span>
        </div>
        <div className={`${text}`}>{position}</div>
      </div>
    </div>
  );
};
