/** @format */

import { FC, useMemo } from "react";
import {
  Counter,
  DropdownComp,
  ListItem,
  SVGIcon,
  TotalCost,
} from "~/components";
import { Props } from "./types";
import { PlusOutlined } from "@ant-design/icons";
import { useListStore, useStore } from "~/store";
import "./style.css";
import numeral from "numeral";

export const DrawerWrapper: FC<Props> = ({
  data,
  toggleDropdown,
  openDropdownId,
}) => {
  const { dataList } = useListStore();
  const { increase, decrease, deleteItem, DrawerData } = useStore();
  const totalCost = useMemo(() => {
    return DrawerData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [DrawerData]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          <div className="grid grid-cols-3 w-full">
            <div className="flex items-center gap-2">
              <DropdownComp
                className="w-[24px]"
                items={[
                  {
                    label: (
                      <button onClick={() => toggleDropdown?.(item.id)}>
                        Thêm Topping
                      </button>
                    ),
                    key: "0",
                    icon: <PlusOutlined />,
                  },
                  {
                    label: (
                      <button onClick={() => deleteItem(item.id)}>Xoá</button>
                    ),
                    key: "1",
                    icon: <SVGIcon name="trash" />,
                  },
                  { type: "divider" },
                ]}
              />
              <div className="drawer-name">{item.name}</div>
            </div>
            <div className="drawer-price">
              {numeral(item.price).format("0, 0")}
            </div>
            <Counter
              count={item.quantity}
              handleIncrease={() => increase(item.id)}
              handleDecrease={() => decrease(item.id)}
            />
          </div>
          <div>
            {openDropdownId === item.id && (
              <ListItem
                className="px-5 py-2 flex flex-col gap-5"
                data={dataList}
              />
            )}
          </div>
        </div>
      ))}
      <TotalCost totalCost={totalCost} VAT={10000} service={0}>
        <div></div>
        <div className="pl-[40px] title flex flex-col gap-[8px]">
          <p>Tổng tiền</p>
          <p>VAT</p>
          <p>Phí Dịch Vụ</p>
          <p>Tổng tiền</p>
        </div>
      </TotalCost>
    </div>
  );
};
