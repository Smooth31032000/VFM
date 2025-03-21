/** @format */

import { memo, useEffect } from "react";
import { Loading } from "~/components/Loading";
import { ProductItem, ProductItemProps } from "~/components/Product";
import { Slider } from "~/components/Slider";
import { API_ENDPOINTS, BASE_URL } from "~/services/endPoints/endpoints";
import { useStore } from "~/store/counterStore";
import { useProductStore } from "~/store/Product";

function HomePage() {
  const { addItem } = useStore();
  const { productData, fetchProducts, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts?.(`${BASE_URL}/${API_ENDPOINTS.PRODUCTS.GET_ALL}`);
  }, [fetchProducts]);

  console.log("productData", productData);

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
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-2">
            {productData?.map((item: ProductItemProps) => (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}
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
        )}
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
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-2">
            {productData?.map((item: ProductItemProps) => (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}
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
        )}
      </div>
    </div>
  );
}
export default memo(HomePage);
