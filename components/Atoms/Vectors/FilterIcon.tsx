import * as React from "react"
import { SVGProps } from "react"

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.222 13.333h3.556v-1.777H6.222v1.777ZM0 2.667v1.777h16V2.667H0Zm2.667 6.222h10.666V7.11H2.667V8.89Z"
      fill="#545F7D"
    />
  </svg>
)

export default FilterIcon
