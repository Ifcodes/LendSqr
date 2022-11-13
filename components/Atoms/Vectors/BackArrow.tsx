import * as React from "react";
import { SVGProps } from "react";

const BackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.95 5.356c.045.115.111.22.197.31l3.75 3.75a.94.94 0 1 0 1.331-1.332L4.072 5.938h22.584a.937.937 0 1 0 0-1.875H4.072l2.156-2.147A.94.94 0 1 0 4.897.585l-3.75 3.75a.935.935 0 0 0-.197.309A.929.929 0 0 0 .875 5a.929.929 0 0 0 .075.356Z"
      fill="#545F7D"
    />
  </svg>
);

export default BackArrow;
