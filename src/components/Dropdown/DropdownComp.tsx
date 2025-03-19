/** @format */
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { FC } from "react";
import "./style.css";
import { SVGIcon } from "../SVGIcon";

export const DropdownComp: FC<MenuProps> = ({ items, className = "" }) => {
  return (
    <div>
      <Dropdown
        arrow={{ pointAtCenter: true }}
        overlayClassName="custom-dropdown"
        menu={{ items }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className={` ${className}`}>
              <SVGIcon name="circleVertical" />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
