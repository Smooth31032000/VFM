/** @format */
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { FC } from "react";
import icon from "~/assets/icons/circleVertical.svg";
import "./style.css";

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
              <img src={icon} alt="icon" />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
