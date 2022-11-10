/* eslint-disable react/display-name */
import React, { memo, ReactNode } from "react";

type Props = {
  width?: string;
  height?: string;
  bgColor?: string;
  icon?: ReactNode;
};

const IconWrapper = memo(({ width, height, bgColor, icon }: Props) => {
  return (
    <div
      className={` w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center ${bgColor} `}
    >
      {icon}
    </div>
  );
});

export default IconWrapper;
