import { Drawer } from 'antd';
import { FC } from 'react';
import { Props } from './types';
import "./style.css"
export const DrawerComp: FC<Props> = ({
  closeDrawer,
  open,
  children,
  className = "",
  ...props
}) => {
  return (
    <div>
      <Drawer
        title={props.title}
        onClose={closeDrawer}
        open={open}
        className={`custom-drawer ${className}`}
      >
        {children}
      </Drawer>
    </div>
  );
};