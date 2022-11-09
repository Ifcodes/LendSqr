import * as React from "react";
import { SVGProps } from "react";

const AuditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#audit-a)" fill="#213F7D">
      <path
        opacity={0.4}
        d="M14 2.667h-3.333a2.667 2.667 0 0 1 2.666 2.666H2.667a2.667 2.667 0 0 1 2.666-2.666H2a2 2 0 0 0-2 2v14.666a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4.667a2 2 0 0 0-2-2Zm-10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM13.333 17a.333.333 0 0 1-.333.333H7A.333.333 0 0 1 6.667 17v-.667A.333.333 0 0 1 7 16h6a.333.333 0 0 1 .333.333V17Zm0-4a.333.333 0 0 1-.333.333H7A.333.333 0 0 1 6.667 13v-.667A.333.333 0 0 1 7 12h6a.333.333 0 0 1 .333.333V13Zm0-4a.333.333 0 0 1-.333.333H7A.333.333 0 0 1 6.667 9v-.667A.333.333 0 0 1 7 8h6a.333.333 0 0 1 .333.333V9Z"
      />
      <path d="M4 15.667a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6.667-5a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0-2.666 2.666h10.666a2.667 2.667 0 0 0-2.666-2.666ZM8 3.667a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </g>
    <defs>
      <clipPath id="audit-a">
        <path fill="#fff" d="M0 0h16v21.333H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default AuditIcon;
