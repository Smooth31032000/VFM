import React, { CSSProperties } from 'react';
import * as SVGIcons from "../../assets/images/svg";
import { Props } from './types';

export const SVGIcon: React.FC<Props> = ({ name, width, height, ...rest }) => {
  const Icon = SVGIcons[name] || null;
  if (!Icon) return null;

  const style: CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return <img style={style} src={Icon} {...rest} />;
};
