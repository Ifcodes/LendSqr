import * as React from "react";
import { SVGProps } from "react";

const OptionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10 6.111c.922 0 1.667-.744 1.667-1.667 0-.922-.745-1.666-1.667-1.666s-1.667.744-1.667 1.666c0 .923.745 1.667 1.667 1.667Zm0 2.222c-.922 0-1.667.745-1.667 1.667s.745 1.667 1.667 1.667 1.667-.745 1.667-1.667S10.922 8.333 10 8.333Zm0 5.556c-.922 0-1.667.744-1.667 1.667 0 .922.745 1.666 1.667 1.666s1.667-.744 1.667-1.667c0-.922-.745-1.666-1.667-1.666Z"
        fill="#545F7D"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default OptionsIcon;
