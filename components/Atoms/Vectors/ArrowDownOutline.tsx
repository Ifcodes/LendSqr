import * as React from "react";
import { SVGProps } from "react";

const ArrowDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.057 3.994c.841-.841 2.102.462 1.261 1.26l-4.75 4.752a.842.842 0 0 1-1.261 0L1.64 5.38c-.799-.84.463-2.102 1.303-1.26l3.994 3.993 4.12-4.12Z"
      fill="#213F7D"
    />
  </svg>
);

export default ArrowDownOutline;
