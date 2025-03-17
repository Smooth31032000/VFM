/** @format */

import { useState } from "react";
import { Outlet } from "react-router-dom";
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
        open={open}
        closeDrawer={closeDrawer}
      >
        <div className="flex justify-center gap-8">
          <p>Sản Phẩm</p>
          <p>Giá Tiền</p>
          <p>Số Lượng</p>
        </div>
        <DrawerWrapper data={DrawerData} toggleDropdown={toggleDropdown} />
      </DrawerComp>
      <main className="pt-[30px] px-5 bg-primary-light relative">
        <Outlet />
      </main>
    </div>
  );
}
