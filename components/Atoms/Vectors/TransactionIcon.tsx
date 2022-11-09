import * as React from "react";
import { SVGProps } from "react";

const TransactionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 5.945V1A1.002 1.002 0 0 0 12 0H1a1 1 0 0 0-1 1v16a.999.999 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.055h-1v4.054H1V1h11v4.946h1Z"
      fill="#213F7D"
    />
    <path
      d="M2 13.995h9v1H2v-1ZM2 2.495h9v1H2v-1ZM5.75 15.495a.5.5 0 0 0 0 1h1.5a.5.5 0 1 0 0-1h-1.5ZM11 6.445H6.5v-2l-4 2.5 4 2.5v-2H11v-1Z"
      fill="#213F7D"
    />
    <path d="m16 9.445-4-2.5v2H7.5v1H12v2l4-2.5Z" fill="#213F7D" />
  </svg>
);

export default TransactionIcon;
