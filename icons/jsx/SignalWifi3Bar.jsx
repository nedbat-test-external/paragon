import * as React from "react";

function SvgSignalWifi3Bar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillOpacity={0.3}
        d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z"
      />
      <path d="M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z" />
    </svg>
  );
}

export default SvgSignalWifi3Bar;
