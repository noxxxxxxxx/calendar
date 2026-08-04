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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
var timeConstraints = {
  hours: {
    min: 0,
    max: 23,
    step: 1
  },
  minutes: {
    min: 0,
    max: 59,
    step: 1
  },
  seconds: {
    min: 0,
    max: 59,
    step: 1
  },
  milliseconds: {
    min: 0,
    max: 999,
    step: 1
  }
};
function createConstraints(overrideTimeConstraints) {
  var constraints = {};
  Object.keys(timeConstraints).forEach(function (type) {
    constraints[type] = _objectSpread(_objectSpread({}, timeConstraints[type]), overrideTimeConstraints[type] || {});
  });
  return constraints;
}
var TimeView = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeView, _React$Component);
  var _super = _createSuper(TimeView);
  function TimeView(props) {
    var _this;
    _classCallCheck(this, TimeView);
    _this = _super.call(this, props);
    _this.constraints = createConstraints(props.timeConstraints);

    // This component buffers the time part values in the state 
    // while the user is pressing down the buttons
    // and call the prop `setTime` when the buttons are released
    _this.state = _this.getTimeParts(props.selectedDate || props.viewDate);
    return _this;
  }
  _createClass(TimeView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var items = [];
      var timeParts = this.state;
      this.getCounters().forEach(function (c, i) {
        if (i && c !== 'ampm') {
          items.push( /*#__PURE__*/React.createElement("div", {
            key: "sep".concat(i),
            className: "rdtCounterSeparator"
          }, ":"));
        }
        items.push(_this2.renderCounter(c, timeParts[c]));
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "rdtTime"
      }, /*#__PURE__*/React.createElement("table", null, this.renderHeader(), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
        className: "rdtCounters"
      }, items))))));
    }
  }, {
    key: "renderCounter",
    value: function renderCounter(type, value) {
      var _this3 = this;
      if (type === 'hours' && this.isAMPM()) {
        value = (value - 1) % 12 + 1;
        if (value === 0) {
          value = 12;
        }
      }
      if (type === 'ampm') {
        if (this.props.timeFormat.indexOf(' A') !== -1) {
          value = this.props.viewDate.format('A');
        } else {
          value = this.props.viewDate.format('a');
        }
      }
      return /*#__PURE__*/React.createElement("div", {
        key: type,
        className: "rdtCounter"
      }, /*#__PURE__*/React.createElement("span", {
        className: "rdtBtn",
        onMouseDown: function onMouseDown(e) {
          return _this3.onStartClicking(e, 'increase', type);
        }
      }, "\u25B2"), /*#__PURE__*/React.createElement("div", {
        className: "rdtCount"
      }, value), /*#__PURE__*/React.createElement("span", {
        className: "rdtBtn",
        onMouseDown: function onMouseDown(e) {
          return _this3.onStartClicking(e, 'decrease', type);
        }
      }, "\u25BC"));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this4 = this;
      if (!this.props.dateFormat) return;
      var date = this.props.selectedDate || this.props.viewDate;
      return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        className: "rdtSwitch",
        colSpan: "4",
        onClick: function onClick() {
          return _this4.props.showView('days');
        }
      }, date.format(this.props.dateFormat))));
    }
  }, {
    key: "onStartClicking",
    value: function onStartClicking(e, action, type) {
      var _this5 = this;
      if (e && e.button && e.button !== 0) {
        // Only left clicks, thanks
        return;
      }
      if (type === 'ampm') return this.toggleDayPart();
      var update = {};
      var body = document.body;
      update[type] = this[action](type);
      this.setState(update);
      this.timer = setTimeout(function () {
        _this5.increaseTimer = setInterval(function () {
          update[type] = _this5[action](type);
          _this5.setState(update);
        }, 70);
      }, 500);
      this.mouseUpListener = function () {
        clearTimeout(_this5.timer);
        clearInterval(_this5.increaseTimer);
        _this5.props.setTime(type, parseInt(_this5.state[type], 10));
        body.removeEventListener('mouseup', _this5.mouseUpListener);
        body.removeEventListener('touchend', _this5.mouseUpListener);
      };
      body.addEventListener('mouseup', this.mouseUpListener);
      body.addEventListener('touchend', this.mouseUpListener);
    }
  }, {
    key: "toggleDayPart",
    value: function toggleDayPart() {
      var hours = parseInt(this.state.hours, 10);
      if (hours >= 12) {
        hours -= 12;
      } else {
        hours += 12;
      }
      this.props.setTime('hours', hours);
    }
  }, {
    key: "increase",
    value: function increase(type) {
      var tc = this.constraints[type];
      var value = parseInt(this.state[type], 10) + tc.step;
      if (value > tc.max) value = tc.min + (value - (tc.max + 1));
      return pad(type, value);
    }
  }, {
    key: "decrease",
    value: function decrease(type) {
      var tc = this.constraints[type];
      var value = parseInt(this.state[type], 10) - tc.step;
      if (value < tc.min) value = tc.max + 1 - (tc.min - value);
      return pad(type, value);
    }
  }, {
    key: "getCounters",
    value: function getCounters() {
      var counters = [];
      var format = this.props.timeFormat;
      if (format.toLowerCase().indexOf('h') !== -1) {
        counters.push('hours');
        if (format.indexOf('m') !== -1) {
          counters.push('minutes');
          if (format.indexOf('s') !== -1) {
            counters.push('seconds');
            if (format.indexOf('S') !== -1) {
              counters.push('milliseconds');
            }
          }
        }
      }
      if (this.isAMPM()) {
        counters.push('ampm');
      }
      return counters;
    }
  }, {
    key: "isAMPM",
    value: function isAMPM() {
      return this.props.timeFormat.toLowerCase().indexOf(' a') !== -1;
    }
  }, {
    key: "getTimeParts",
    value: function getTimeParts(date) {
      var hours = date.hours();
      return {
        hours: pad('hours', hours),
        minutes: pad('minutes', date.minutes()),
        seconds: pad('seconds', date.seconds()),
        milliseconds: pad('milliseconds', date.milliseconds()),
        ampm: hours < 12 ? 'am' : 'pm'
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedDate) {
        if (this.props.selectedDate !== prevProps.selectedDate) {
          this.setState(this.getTimeParts(this.props.selectedDate));
        }
      } else if (prevProps.viewDate !== this.props.viewDate) {
        this.setState(this.getTimeParts(this.props.viewDate));
      }
    }
  }]);
  return TimeView;
}(React.Component);
export { TimeView as default };
function pad(type, value) {
  var padValues = {
    hours: 1,
    minutes: 2,
    seconds: 2,
    milliseconds: 3
  };
  var str = value + '';
  while (str.length < padValues[type]) str = '0' + str;
  return str;
}