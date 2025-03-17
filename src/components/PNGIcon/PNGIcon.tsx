import React, { CSSProperties } from 'react';
import { Props } from './types';
import * as PNGIcons from "../../assets/images/png";

export const PNGIcon: React.FC<Props> = ({ name, width, height, ...rest }) => {
  const Icon = PNGIcons[name] || null;
  if (!Icon) return null;

  const style: CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return <img style={style} src={Icon} {...rest} />;
};
