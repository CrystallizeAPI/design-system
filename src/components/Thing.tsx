import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `I am the Thing you are looking for`}</div>;
};
