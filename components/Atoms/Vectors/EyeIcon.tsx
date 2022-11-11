import * as React from "react";
import { SVGProps } from "react";

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.453 7.44-.001-.002a15.094 15.094 0 0 0-2.654-2.582c-1.299-.97-2.96-1.82-4.798-1.82-1.839 0-3.5.85-4.798 1.82A15.097 15.097 0 0 0 .546 7.44a.896.896 0 0 0-.001 1.134c.411.508 1.357 1.603 2.657 2.572 1.298.968 2.96 1.818 4.798 1.818s3.5-.85 4.798-1.82a15.086 15.086 0 0 0 2.656-2.586.917.917 0 0 0 0-1.118ZM8 11.756c-1.513 0-2.932-.733-4.07-1.584-1.085-.81-1.905-1.718-2.296-2.174a13.503 13.503 0 0 1 2.29-2.182C5.063 4.969 6.486 4.243 8 4.243c1.513 0 2.932.726 4.07 1.573A13.946 13.946 0 0 1 14.366 8c-.39.468-1.21 1.377-2.296 2.184-1.138.846-2.557 1.572-4.07 1.572Z"
      fill="#545F7D"
      stroke="#545F7D"
      strokeWidth={0.2}
    />
    <path
      d="M8 4.908A3.097 3.097 0 0 0 4.908 8 3.097 3.097 0 0 0 8 11.092 3.097 3.097 0 0 0 11.092 8 3.097 3.097 0 0 0 8 4.908Zm0 4.976A1.894 1.894 0 0 1 6.116 8c0-1.033.851-1.883 1.884-1.883S9.884 6.966 9.884 8 9.033 9.884 8 9.884Z"
      fill="#545F7D"
      stroke="#545F7D"
      strokeWidth={0.2}
    />
  </svg>
);

export default EyeIcon;