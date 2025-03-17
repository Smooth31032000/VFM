import { Flex, Spin } from 'antd';
import { FC } from 'react';
import { Props } from './types';

export const Loading:FC<Props> = ({size}) => {
  return (
  <div>
    <Flex align="center" gap="middle">
      <Spin size={size} />
    </Flex>
  </div>
  )
}