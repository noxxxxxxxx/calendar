function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import ViewNavigation from "../parts/ViewNavigation";
var YearsView = /*#__PURE__*/function (_React$Component) {
  _inherits(YearsView, _React$Component);
  var _super = _createSuper(YearsView);
  function YearsView() {
    var _this;
    _classCallCheck(this, YearsView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "disabledYearsCache", {});
    _defineProperty(_assertThisInitialized(_this), "_updateSelectedYear", function (event) {
      _this.props.updateDate(event);
    });
    return _this;
  }
  _createClass(YearsView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "rdtYears"
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, this.renderNavigation())), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, this.renderYears())));
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var _this2 = this;
      var viewYear = this.getViewYear();
      return /*#__PURE__*/React.createElement(ViewNavigation, {
        onClickPrev: function onClickPrev() {
          return _this2.props.navigate(-10, 'years');
        },
        onClickSwitch: function onClickSwitch() {
          return _this2.props.showView('years');
        },
        onClickNext: function onClickNext() {
          return _this2.props.navigate(10, 'years');
        },
        switchContent: "".concat(viewYear, "-").concat(viewYear + 9)
      });
    }
  }, {
    key: "renderYears",
    value: function renderYears() {
      var viewYear = this.getViewYear();
      // 12 years in 3 rows for every view
      var rows = [[], [], []];
      for (var year = viewYear - 1; year < viewYear + 11; year++) {
        var row = getRow(rows, year - viewYear);
        row.push(this.renderYear(year));
      }
      return rows.map(function (years, i) {
        return /*#__PURE__*/React.createElement("tr", {
          key: i
        }, years);
      });
    }
  }, {
    key: "renderYear",
    value: function renderYear(year) {
      var selectedYear = this.getSelectedYear();
      var className = 'rdtYear';
      var onClick;
      if (this.isDisabledYear(year)) {
        className += ' rdtDisabled';
      } else {
        onClick = this._updateSelectedYear;
      }
      if (selectedYear === year) {
        className += ' rdtActive';
      }
      var props = {
        key: year,
        className: className,
        'data-value': year,
        onClick: onClick
      };
      return this.props.renderYear(props, year, this.props.selectedDate && this.props.selectedDate.clone());
    }
  }, {
    key: "getViewYear",
    value: function getViewYear() {
      return parseInt(this.props.viewDate.year() / 10, 10) * 10;
    }
  }, {
    key: "getSelectedYear",
    value: function getSelectedYear() {
      return this.props.selectedDate && this.props.selectedDate.year();
    }
  }, {
    key: "isDisabledYear",
    value: function isDisabledYear(year) {
      var cache = this.disabledYearsCache;
      if (cache[year] !== undefined) {
        return cache[year];
      }
      var isValidDate = this.props.isValidDate;
      if (!isValidDate) {
        // If no validator is set, all days are valid
        return false;
      }

      // If one day in the year is valid, the year should be clickable
      var date = this.props.viewDate.clone().set({
        year: year
      });
      var day = date.endOf('year').dayOfYear() + 1;
      while (day-- > 1) {
        if (isValidDate(date.dayOfYear(day))) {
          cache[year] = false;
          return false;
        }
      }
      cache[year] = true;
      return true;
    }
  }]);
  return YearsView;
}(React.Component);
_defineProperty(YearsView, "defaultProps", {
  renderYear: function renderYear(props, year) {
    return /*#__PURE__*/React.createElement("td", props, year);
  }
});
export { YearsView as default };
function getRow(rows, year) {
  if (year < 3) {
    return rows[0];
  }
  if (year < 7) {
    return rows[1];
  }
  return rows[2];
}