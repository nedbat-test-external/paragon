import * as React from "react";

function SvgPlusMinus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z" />
    </svg>
  );
}

export default SvgPlusMinus;
