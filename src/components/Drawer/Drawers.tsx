/** @format */

import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import numeral from "numeral";
import { FC, useMemo, useState } from "react";
import { useListStore } from "~/store";
import { useStore } from "~/store/counterStore";
import { ButtonCancel, ButtonSuccess } from "../Button";
import { DropdownComp } from "../Dropdown";
import { ListItem, ListItemProps } from "../ListItem";
import { TotalCost } from "../TotalCost";
import "./style.css";
import { DrawerItemProps, Props } from "./types";
import { TrashIcon } from "~/components/TrashIcon";
import { Counter } from "../Counter";

// type Item = { name: string; price: number };

export const Drawers: FC<Props> = ({ handleOnclose, open, title, data }) => {
  const { decrease, increase, deleteItem, DrawerData } = useStore();
  const { dataList } = useListStore();
  // const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const totalCost = useMemo(() => {
    return DrawerData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [DrawerData]);

  // const handleSelectChange = (name: string, price: number, isChecked: any) => {
  //   setSelectedItems((prev: any) =>
  //     isChecked
  //       ? [...prev, { name, price }]
  //       : prev.filter((item: any) => item.name !== name)
  //   );
  //   console.log(selectedItems);
  // };

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleCloseDrawer = () => {
    setOpenDropdownId(null);
    if (handleOnclose) {
      handleOnclose();
    }
  };

  return (
    <div>
      <Drawer title={title} open={open} className="custom-drawer">
        <div className="drawer-title">
          <p className="text product">Sản phẩm</p>
          <p className="text">Giá tiền</p>
          <p className="text quantity">Số lượng</p>
        </div>
        {(data || []).map((item: DrawerItemProps) => (
          <div key={item.id}>
            <div className="grid grid-cols-3 m-[8px] items-center">
              <div className="flex gap-[12px] items-center">
                <DropdownComp
                  items={[
                    {
                      label: (
                        <button onClick={() => toggleDropdown(item.id)}>
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
                <p className="w-full font-medium text-[18px] leading-[18px]">
                  {item.name}
                </p>
              </div>
              <p className="text-center font-medium text-[16px] leading-[18px]">
                {numeral(item.price).format("0,0")}
              </p>
              <Counter
                count={item.quantity}
                handleIncrease={() => increase(item.id)}
                handleDecrease={() => decrease(item.id)}
              />
            </div>
            {openDropdownId === item.id && (
              <div className="list-background">
                <div className="head-line"></div>
                {/* {(dataList || []).map((item: ListItemProps) => (
                  <div key={item.id}>
                    <ListItem
                      // id={item.id}
                      // name={item.name}
                      // price={item.price}
                      // onChecked={handleSelectChange}
                    />
                  </div>
                ))} */}
              </div>
            )}
          </div>
        ))}
        <TotalCost sum={totalCost} VAT={10000} />
        <div className="absolute bottom-5 right-5 flex gap-[8px] ">
          <ButtonCancel handleOnclick={handleCloseDrawer} text="Huỷ" />
          <ButtonSuccess text="Thanh Toán" />
        </div>
      </Drawer>
    </div>
  );
};
