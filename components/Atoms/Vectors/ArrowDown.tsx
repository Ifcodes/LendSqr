import * as React from "react";
import { SVGProps } from "react";

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.392 4.052a.802.802 0 0 0 1.216 0L7.483.857c.336-.373.202-.675-.299-.675H.816C.315.182.184.487.517.857l2.875 3.195Z"
      fill="#213F7D"
    />
  </svg>
);

export default ArrowDown;
