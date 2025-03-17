import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart';
import { Input } from '../Input/Input';
import { PNGIcon } from '../PNGIcon';
import { Props } from './types';

export const Header: FC<Props> = ({ handleOnclick, count }) => {
  return (
    <div className="flex items-center justify-between bg-primary py-3 px-5">
      <Link to="/" className="inline-block w-[73px] h-[24px]">
        <PNGIcon name="logo" className="max-w-full max-h-full object-contain" />
      </Link>
      <div className="flex items-center gap-x-2">
        <Input
          className="w-[226px] h-[28px] rounded-lg text-xs"
          placeholder="Tìm kiếm"
          classNames={{
            input: "text-xs",
          }}
        />
        <Cart handleClick={handleOnclick} count={count} />
      </div>
    </div>
  );
};

export default memo(Header);
