/** @format */

import { ProductItem, ProductItemProps } from "~/components/Product";
import { Slider } from "~/components/Slider";
import { ProductItemData } from "~/services/api/index";
import { useStore } from "~/store/counterStore";
export default function HomePage() {
  const { addItem } = useStore();

  const addDrawerItem = (id: string, name: string, price: number) => {
    const body = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };
    addItem(body);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col gap-[30px]">
      <Slider />
      <div className="bread">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-white text-[20px] font-medium">Bánh Mỳ</h1>
          <a
            href="/detail"
            className="flex justify-end text-[#246FB5] text-[14px] font-normal"
          >
            Xem thêm
          </a>
        </div>
        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-2">
          {ProductItemData?.map((item: ProductItemProps) => (
            <ProductItem
              key={item.id}
              id={item.id}
              image={item.image}
              rating={4.0}
              name={item.name}
              price={item.price}
              priceDiscount={item.priceDiscount}
              productType={item.productType}
              shortDescription={item.shortDescription}
              onClick={() =>
                addDrawerItem(item.id ?? "", item.name, item.price)
              }
            />
          ))}
        </div>
      </div>

      <div className="combo">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-white text-[20px] font-medium">Combo</h1>
          <a
            href="/detail"
            className="flex justify-end text-[#246FB5] text-[14px] font-normal"
          >
            Xem thêm
          </a>
        </div>
        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-2">
          {ProductItemData.map((item: any) => (
            <ProductItem
              key={item.id}
              id={item.id}
              image={item.image ?? "undefined"}
              rating={4.0}
              name={item.name}
              price={item.price}
              priceDiscount={item.priceDiscount}
              productType={item.productType}
              shortDescription={item.shortDescription}
              onClick={() => console.log("click", item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
