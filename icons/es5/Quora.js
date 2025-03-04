function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgQuora(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.94 17.46h-1.11c-.06.52-.4 1.17-1.25 1.17-.78 0-1.34-.54-1.88-1.36a7.233 7.233 0 002.84-5.81C19.54 7 15.86 4 12.01 4 8.21 4 4.5 7.03 4.5 11.47c0 4.4 3.71 7.43 7.51 7.43.66 0 1.32-.09 1.95-.26.74 1.27 1.73 2.36 3.6 2.36 3.1 0 3.45-2.86 3.38-3.54zm-5.45-2.18c-.73-1.11-1.66-1.98-3.46-1.98-1.16 0-2.06.38-2.62.86l.46.92c.24-.11.49-.15.75-.15 1.35 0 2.04 1.17 2.63 2.33-.38.11-.79.16-1.24.16-2.85 0-4.08-2.01-4.08-5.95 0-3.96 1.23-5.99 4.08-5.99 2.89 0 4.13 2.03 4.13 5.99-.01 1.58-.21 2.86-.65 3.81z"
  }));
}

export default SvgQuora;