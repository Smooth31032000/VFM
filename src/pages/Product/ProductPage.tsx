/** @format */

import { Button } from "antd";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductItem, ProductItemProps } from "~/components/Product";
import { UserProfile } from "~/components/UserProfile";
import { API_ENDPOINTS, BASE_URL } from "~/services/endPoints/endpoints";
import { useStore } from "~/store";
import { useProductStore } from "~/store/Product";

export default function ProductPage() {
  const { productData, fetchProducts } = useProductStore();
  const { addItem } = useStore();
  // const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const addDrawerItem = (id: string, name: string, price: number) => {
    const body = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };
    addItem(body);
  };

  const handleClickButton = () => {};

  const handleClickCard = (id: string) => {
    navigate(`/product/product-detail/${id}`);
  };

  useEffect(() => {
    fetchProducts?.(`${BASE_URL}/${API_ENDPOINTS.PRODUCTS.GET_ALL}`);
  }, [fetchProducts]);

  return (
    <div className="container mx-auto min-h-screen flex flex-col gap-3 relative">
      <UserProfile
        image={
          "https://s3-alpha-sig.figma.com/img/3055/9751/92407659b1ea8b919e10a8a5bf9d0a92?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EYvQVrNMOXkqHbksccb3hSV9d4Mwna0ohE9U5bo1t0Gn23G8GucA-4rMc1x3dhRvMr6h7ZSpYziEiRv6ECfpPyGCnYeeptfQF~6EX26Lb~RTGgWLmRFEw684bUtV6r7MV77aYsFJuSzhAE6tACINsElxCI320M8oQgv7j4bFU69qAhuzwDeMhzN3lte~9hBuxENBZsc4ETwgYNqqXv6~4BeeCBO6shIFhDrcPSmo37TufSuO3C5sRbIHCdSSxvTyQgT2Vj5n4W8s8B7BQ0DjnceQgmOA7yesfdxb~6mI-qabrzVMGwAKbH5PDeenyPk7RFj~SdJX0jwCcctToOpMmQ__"
        }
        name="Phong Manh Trần"
        position="Staff"
        className="w-full flex gap-1 text-white text-lg"
        text="text-sm text-[#4E4E4E]"
      />
      <div className="bread">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-white text-[20px] font-medium">Đồ Ăn</h1>
          <a
            href="/detail"
            className="flex justify-end text-[#246FB5] text-[14px] font-normal"
          >
            Xem thêm
          </a>
        </div>

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
              handleOnClick={() => handleClickCard(item.id)}
            />
          ))}
        </div>
        <div className="grid grid-flow-col auto-cols-fr justify-center items-center gap-3 bg-white p-[8px] rounded-sm absolute bottom-0 w-full">
          <Button onClick={handleClickButton} color="orange" variant="outlined">
            Sản Phẩm
          </Button>
          <Button color="orange" variant="outlined">
            Order
          </Button>
          <Button color="orange" variant="outlined">
            Báo cáo
          </Button>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
