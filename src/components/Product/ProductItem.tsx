import { Rate } from 'antd';
import cx from 'classnames';
import numeral from 'numeral';
import { FC } from 'react';
import { Props } from './types';
import { SVGIcon } from '../SVGIcon';


export const  ProductItem: FC<Props> = ({
  rating,
  name,
  price,
  priceDiscount,
  shortDescription,
  image,
  productType = 'NORMAL',
  onClick,
})  => {
  return (
    <div className="rounded-lg border-[1.5px] border-white relative overflow-hidden min-h-[200px] flex-1">
      <img
        src={image}
        alt={name}
        className="w-full h-full z-[1] absolute top-0 right-0 object-cover"
      />
      <div className="flex items-center justify-between relative z-[9] px-2 pt-3">
        <div className="flex items-center gap-x-1">
          <Rate disabled value={rating} count={5} />
          <div className="bg-white w-[1px] h-[8px]"></div>
          <span className="text-white text-[8px]">{rating?.toFixed(1)}</span>
        </div>
        {productType !== "NORMAL" && (
          <div
            className={cx(
              "p-[2px] h-[14px] w-10 text-[8px] font-medium text-white text-center rounded-lg flex items-center justify-center",
              {
                "bg-green-07": productType === "HOT",
                "bg-blue-06": productType === "NEWS",
              }
            )}
          >
            {productType === "HOT" ? "Hot" : "New"}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 z-[2] w-full p-1">
        <div className="flex flex-col bg-white/70 p-2 rounded-lg">
          <span className="text-grey-10 text-xs">{name}</span>
          <div className="flex space-x-2 items-center">
            <SVGIcon name="substract" />
            <span className="text-grey-08 text-[8px] line-clamp-1 text-ellipsis">
              {shortDescription}
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <span className="text-error-06 text-xs font-semibold">
              {numeral(price).format("0,0")} đ
            </span>
            <span className="line-through text-grey-10 text-[8px]">
              {numeral(priceDiscount).format("0,0")} đ
            </span>
          </div>
          <button
            onClick={onClick}
            className="p-2 text-[10px] mt-1 h-[16px] text-white rounded-xl bg-organge-05 flex justify-center items-center w-full"
          >
            Chọn
          </button>
        </div>
      </div>
    </div>
  );
}

