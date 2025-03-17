import { FC } from "react"
import { Props } from "./types"
import { DropdownComp, ListItem, TrashIcon } from "~/components"
import { PlusOutlined } from "@ant-design/icons"
import { useListStore } from "~/store"

export const DrawerWrapper: FC<Props> = ({data, toggleDropdown}) => {
    const { dataList } = useListStore();
  
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex">
        <DropdownComp           
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
                <button onClick={() => console.log('click')}>Xoá</button>
              ),
              key: "1",
              icon: <TrashIcon />,
            },
            { type: "divider" },
        ]}/>
        <div className="grid grid-cols-3 w-full justify-center">
          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>{item.quantity}</div>
        </div>
        </div>
      ))}
      <ListItem data={dataList}/>
    </div>
  )
}