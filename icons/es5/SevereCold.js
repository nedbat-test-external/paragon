function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSevereCold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.41l4-4L14.59 5 12 7.59V4h-2v3.59L7.41 5 6 6.41l4 4V12H8.41l-4-4L3 9.41 5.59 12H2v2h3.59L3 16.59 4.41 18l4-4H10v1.59l-4 4L7.41 21 10 18.41V22h2v-3.59L14.59 21 16 19.59l-4-4V14h1.59l4 4L19 16.59 16.41 14H20v-2h-8zM19 2h2v5h-2zm0 6h2v2h-2z"
  }));
}

export default SvgSevereCold;