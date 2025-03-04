import * as React from "react";

function SvgSquare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 3h18v18H3z" />
    </svg>
  );
}

export default SvgSquare;
