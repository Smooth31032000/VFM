import { Drawer } from 'antd';
import { FC } from 'react';
import { Props } from './types';
import "./style.css"
export const DrawerComp: FC<Props> = ({closeDrawer, open, children, ...props}) => {

  return (
    <div>
      <Drawer title={props.title} onClose={closeDrawer} open={open} className='custom-drawer'>
        {children }
      </Drawer>
    </div>
  );
}