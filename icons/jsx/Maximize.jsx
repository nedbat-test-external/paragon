import * as React from "react";

function SvgMaximize(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 3h18v2H3V3z" />
    </svg>
  );
}

export default SvgMaximize;
