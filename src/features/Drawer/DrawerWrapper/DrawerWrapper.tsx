/** @format */

import { FC, useMemo } from "react";
import { Props } from "./types";
import {
  Counter,
  DropdownComp,
  ListItem,
  TotalCost,
  TrashIcon,
} from "~/components";
import { PlusOutlined } from "@ant-design/icons";
import { useListStore, useStore } from "~/store";
import "./style.css";

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
                    icon: <TrashIcon />,
                  },
                  { type: "divider" },
                ]}
              />
              <div className="drawer-name">{item.name}</div>
            </div>
            <div className="drawer-price">{item.price}</div>
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
      <TotalCost sum={totalCost} VAT={10000} />
    </div>
  );
};
