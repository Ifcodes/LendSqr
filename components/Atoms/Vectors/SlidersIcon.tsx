import * as React from "react";
import { SVGProps } from "react";

const SlidersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#sliders-a)" fill="#213F7D">
      <path
        opacity={0.4}
        d="M15.5 2H9v2h6.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM.5 4H6V2H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm0 5H10V7H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm15-2H13v2h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm0 5H5v2h10.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM0 12.5v1a.5.5 0 0 0 .5.5H2v-2H.5a.5.5 0 0 0-.5.5Z"
      />
      <path d="M8.5 1h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm4 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-8 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
    </g>
    <defs>
      <clipPath id="sliders-a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SlidersIcon;
