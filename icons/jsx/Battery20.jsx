import * as React from "react";

function SvgBattery20(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 17v5h10v-5H7z" />
      <path fillOpacity={0.3} d="M17 4h-3V2h-4v2H7v13h10V4z" />
    </svg>
  );
}

export default SvgBattery20;
