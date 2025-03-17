import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';


export const CategoryItem: FC<Props> = ({ name, img, id }) => {
  return (
    <Link to={`/category/${id}`}>
      <div className='flex flex-col gap-y-1'>
        <div className='w-[38px] h-[38px] border-primary border rounded-[6px]'>
          <img src={img} alt={id} className='size-full object-cover' />
        </div>
        <p className='text-xs text-center'>{name}</p>
      </div>
    </Link>
  );
}
