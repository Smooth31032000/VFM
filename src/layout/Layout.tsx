/** @format */

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "~/components";
import Header from "~/components/Header/Header";
import { DrawerComp } from "~/features/Drawer/DrawerComp";
import { DrawerWrapper } from "~/features/Drawer/DrawerWrapper";
import { useStore } from "~/store/counterStore";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { DrawerData, counterCard } = useStore();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container max-w-lg mx-auto">
      <Header handleOnclick={showDrawer} count={counterCard} />
      <DrawerComp
        title="Sản Phẩm đã được chọn"
        className="text-white relative"
        open={open}
        closeDrawer={closeDrawer}
      >
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-3 text-base font-normal border-b">
            <div className="flex justify-center">Sản Phẩm</div>
            <div className="flex justify-center">Giá Tiền</div>
            <div className="flex justify-center">Số Lượng</div>
          </div>
          <DrawerWrapper
            openDropdownId={openDropdownId}
            data={DrawerData}
            toggleDropdown={toggleDropdown}
          />
        </div>
        <div className="flex gap-2 absolute bottom-3 right-3">
          <Button
            className="bg-green-500 text-white w-[125px] h-[31px] rounded-md"
            size="14px"
            handleOnclick={closeDrawer}
            text="Huỷ"
          />
          <Button
            className="w-[125px] h-[31px] bg-white text-black rounded-md"
            size="14px"
            text="Thanh toán"
          />
        </div>
      </DrawerComp>
      <main className="pt-[30px] px-5 bg-primary-light relative">
        <Outlet />
      </main>
    </div>
  );
}
