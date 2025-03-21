/** @format */

import { useParams } from "react-router-dom";
import { useStore } from "~/store";

// import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { DrawerData } = useStore();

  // useEffect(() => {
  //   fetchProducts?.(`${BASE_URL}/${API_ENDPOINTS.PRODUCTS.GET_ALL}`);
  // }, [fetchProducts]);

  return (
    <div>
      {DrawerData.map((item) => (
        <div key={item.id}>
          {item.id === id && (
            <div>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
