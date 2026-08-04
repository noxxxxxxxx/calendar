function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export default function ViewNavigation(_ref) {
  var onClickPrev = _ref.onClickPrev,
    onClickSwitch = _ref.onClickSwitch,
    onClickNext = _ref.onClickNext,
    switchContent = _ref.switchContent,
    switchColSpan = _ref.switchColSpan,
    switchProps = _ref.switchProps;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "rdtPrev",
    onClick: onClickPrev
  }, /*#__PURE__*/React.createElement("span", null, "\u2039")), /*#__PURE__*/React.createElement("th", _extends({
    className: "rdtSwitch",
    colSpan: switchColSpan,
    onClick: onClickSwitch
  }, switchProps), switchContent), /*#__PURE__*/React.createElement("th", {
    className: "rdtNext",
    onClick: onClickNext
  }, /*#__PURE__*/React.createElement("span", null, "\u203A")));
}