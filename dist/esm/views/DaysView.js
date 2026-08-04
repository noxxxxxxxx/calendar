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
var DaysView = /*#__PURE__*/function (_React$Component) {
  _inherits(DaysView, _React$Component);
  var _super = _createSuper(DaysView);
  function DaysView() {
    var _this;
    _classCallCheck(this, DaysView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_setDate", function (e) {
      _this.props.updateDate(e);
    });
    return _this;
  }
  _createClass(DaysView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "rdtDays"
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, this.renderNavigation(), this.renderDayHeaders()), /*#__PURE__*/React.createElement("tbody", null, this.renderDays()), this.renderFooter()));
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var _this2 = this;
      var date = this.props.viewDate;
      var locale = date.localeData();
      return /*#__PURE__*/React.createElement(ViewNavigation, {
        onClickPrev: function onClickPrev() {
          return _this2.props.navigate(-1, 'months');
        },
        onClickSwitch: function onClickSwitch() {
          return _this2.props.showView('months');
        },
        onClickNext: function onClickNext() {
          return _this2.props.navigate(1, 'months');
        },
        switchContent: locale.months(date) + ' ' + date.year(),
        switchColSpan: 5,
        switchProps: {
          'data-value': this.props.viewDate.month()
        }
      });
    }
  }, {
    key: "renderDayHeaders",
    value: function renderDayHeaders() {
      var locale = this.props.viewDate.localeData();
      var dayItems = getDaysOfWeek(locale).map(function (day, index) {
        return /*#__PURE__*/React.createElement("th", {
          key: day + index,
          className: "dow"
        }, day);
      });
      return /*#__PURE__*/React.createElement("tr", null, dayItems);
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var date = this.props.viewDate;
      var startOfMonth = date.clone().startOf('month');
      var endOfMonth = date.clone().endOf('month');

      // We need 42 days in 6 rows
      // starting in the last week of the previous month
      var rows = [[], [], [], [], [], []];
      var startDate = date.clone().subtract(1, 'months');
      startDate.date(startDate.daysInMonth()).startOf('week');
      var endDate = startDate.clone().add(42, 'd');
      var i = 0;
      while (startDate.isBefore(endDate)) {
        var row = getRow(rows, i++);
        row.push(this.renderDay(startDate, startOfMonth, endOfMonth));
        startDate.add(1, 'd');
      }
      return rows.map(function (r, i) {
        return /*#__PURE__*/React.createElement("tr", {
          key: "".concat(endDate.month(), "_").concat(i)
        }, r);
      });
    }
  }, {
    key: "renderDay",
    value: function renderDay(date, startOfMonth, endOfMonth) {
      var selectedDate = this.props.selectedDate;
      var dayProps = {
        key: date.format('M_D'),
        'data-value': date.date(),
        'data-month': date.month(),
        'data-year': date.year()
      };
      var className = 'rdtDay';
      if (date.isBefore(startOfMonth)) {
        className += ' rdtOld';
      } else if (date.isAfter(endOfMonth)) {
        className += ' rdtNew';
      }
      if (selectedDate && date.isSame(selectedDate, 'day')) {
        className += ' rdtActive';
      }
      if (date.isSame(this.props.moment(), 'day')) {
        className += ' rdtToday';
      }
      if (this.props.isValidDate(date)) {
        dayProps.onClick = this._setDate;
      } else {
        className += ' rdtDisabled';
      }
      dayProps.className = className;
      return this.props.renderDay(dayProps, date.clone(), selectedDate && selectedDate.clone());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this3 = this;
      if (!this.props.timeFormat) return;
      var date = this.props.viewDate;
      return /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        onClick: function onClick() {
          return _this3.props.showView('time');
        },
        colSpan: 7,
        className: "rdtTimeToggle"
      }, date.format(this.props.timeFormat))));
    }
  }]);
  return DaysView;
}(React.Component);
_defineProperty(DaysView, "defaultProps", {
  isValidDate: function isValidDate() {
    return true;
  },
  renderDay: function renderDay(props, date) {
    return /*#__PURE__*/React.createElement("td", props, date.date());
  }
});
export { DaysView as default };
function getRow(rows, day) {
  return rows[Math.floor(day / 7)];
}

/**
 * Get a list of the days of the week
 * depending on the current locale
 * @return {array} A list with the shortname of the days
 */
function getDaysOfWeek(locale) {
  var first = locale.firstDayOfWeek();
  var dow = [];
  var i = 0;
  locale._weekdaysMin.forEach(function (day) {
    dow[(7 + i++ - first) % 7] = day;
  });
  return dow;
}