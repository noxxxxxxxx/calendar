function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
import PropTypes from 'prop-types';
import moment from 'moment';
import React from 'react';
import DaysView from "./views/DaysView";
import MonthsView from "./views/MonthsView";
import YearsView from "./views/YearsView";
import TimeView from "./views/TimeView";
import onClickOutside from 'react-onclickoutside';
var viewModes = {
  YEARS: 'years',
  MONTHS: 'months',
  DAYS: 'days',
  TIME: 'time'
};
var TYPES = PropTypes;
var nofn = function nofn() {};
var datetype = TYPES.oneOfType([TYPES.instanceOf(moment), TYPES.instanceOf(Date), TYPES.string]);
var Datetime = /*#__PURE__*/function (_React$Component) {
  _inherits(Datetime, _React$Component);
  var _super = _createSuper(Datetime);
  function Datetime(_props) {
    var _this;
    _classCallCheck(this, Datetime);
    _this = _super.call(this, _props);
    _defineProperty(_assertThisInitialized(_this), "_renderCalendar", function () {
      var props = _this.props;
      var state = _this.state;
      var viewProps = {
        viewDate: state.viewDate.clone(),
        selectedDate: _this.getSelectedDate(),
        isValidDate: props.isValidDate,
        updateDate: _this._updateDate,
        navigate: _this._viewNavigate,
        moment: moment,
        showView: _this._showView
      };

      // Probably updateOn, updateSelectedDate and setDate can be merged in the same method
      // that would update viewDate or selectedDate depending on the view and the dateFormat
      switch (state.currentView) {
        case viewModes.YEARS:
          // Used viewProps
          // { viewDate, selectedDate, renderYear, isValidDate, navigate, showView, updateDate }
          viewProps.renderYear = props.renderYear;
          return /*#__PURE__*/React.createElement(YearsView, viewProps);
        case viewModes.MONTHS:
          // { viewDate, selectedDate, renderMonth, isValidDate, navigate, showView, updateDate }
          viewProps.renderMonth = props.renderMonth;
          return /*#__PURE__*/React.createElement(MonthsView, viewProps);
        case viewModes.DAYS:
          // { viewDate, selectedDate, renderDay, isValidDate, navigate, showView, updateDate, timeFormat 
          viewProps.renderDay = props.renderDay;
          viewProps.timeFormat = _this.getFormat('time');
          return /*#__PURE__*/React.createElement(DaysView, viewProps);
        default:
          // { viewDate, selectedDate, timeFormat, dateFormat, timeConstraints, setTime, showView }
          viewProps.dateFormat = _this.getFormat('date');
          viewProps.timeFormat = _this.getFormat('time');
          viewProps.timeConstraints = props.timeConstraints;
          viewProps.setTime = _this._setTime;
          return /*#__PURE__*/React.createElement(TimeView, viewProps);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_showView", function (view, date) {
      var d = (date || _this.state.viewDate).clone();
      var nextView = _this.props.onBeforeNavigate(view, _this.state.currentView, d);
      if (nextView && _this.state.currentView !== nextView) {
        _this.props.onNavigate(nextView);
        _this.setState({
          currentView: nextView
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "viewToMethod", {
      days: 'date',
      months: 'month',
      years: 'year'
    });
    _defineProperty(_assertThisInitialized(_this), "nextView", {
      days: 'time',
      months: 'days',
      years: 'months'
    });
    _defineProperty(_assertThisInitialized(_this), "_updateDate", function (e) {
      var state = _this.state;
      var currentView = state.currentView;
      var updateOnView = _this.getUpdateOn(_this.getFormat('date'));
      var viewDate = _this.state.viewDate.clone();

      // Set the value into day/month/year
      viewDate[_this.viewToMethod[currentView]](parseInt(e.target.getAttribute('data-value'), 10));

      // Need to set month and year will for days view (prev/next month)
      if (currentView === 'days') {
        viewDate.month(parseInt(e.target.getAttribute('data-month'), 10));
        viewDate.year(parseInt(e.target.getAttribute('data-year'), 10));
      }
      var update = {
        viewDate: viewDate
      };
      if (currentView === updateOnView) {
        update.selectedDate = viewDate.clone();
        update.inputValue = viewDate.format(_this.getFormat('datetime'));
        if (_this.props.open === undefined && _this.props.input && _this.props.closeOnSelect) {
          _this._closeCalendar();
        }
        _this.props.onChange(viewDate.clone());
      } else {
        _this._showView(_this.nextView[currentView], viewDate);
      }
      _this.setState(update);
    });
    _defineProperty(_assertThisInitialized(_this), "_viewNavigate", function (modifier, unit) {
      var viewDate = _this.state.viewDate.clone();

      // Subtracting is just adding negative time
      viewDate.add(modifier, unit);
      if (modifier > 0) {
        _this.props.onNavigateForward(modifier, unit);
      } else {
        _this.props.onNavigateBack(-modifier, unit);
      }
      _this.setState({
        viewDate: viewDate
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_setTime", function (type, value) {
      var date = (_this.getSelectedDate() || _this.state.viewDate).clone();
      date[type](value);
      if (!_this.props.value) {
        _this.setState({
          selectedDate: date,
          viewDate: date.clone(),
          inputValue: date.format(_this.getFormat('datetime'))
        });
      }
      _this.props.onChange(date);
    });
    _defineProperty(_assertThisInitialized(_this), "_openCalendar", function () {
      if (_this.isOpen()) return;
      _this.setState({
        open: true
      }, _this.props.onOpen);
    });
    _defineProperty(_assertThisInitialized(_this), "_closeCalendar", function () {
      if (!_this.isOpen()) return;
      _this.setState({
        open: false
      }, function () {
        _this.props.onClose(_this.state.selectedDate || _this.state.inputValue);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_handleClickOutside", function () {
      var props = _this.props;
      if (props.input && _this.state.open && props.open === undefined && props.closeOnClickOutside) {
        _this._closeCalendar();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onInputFocus", function (e) {
      if (!_this.callHandler(_this.props.inputProps.onFocus, e)) return;
      _this._openCalendar();
    });
    _defineProperty(_assertThisInitialized(_this), "_onInputChange", function (e) {
      if (!_this.callHandler(_this.props.inputProps.onChange, e)) return;
      var value = e.target ? e.target.value : e;
      var localMoment = _this.localMoment(value, _this.getFormat('datetime'));
      var update = {
        inputValue: value
      };
      if (localMoment.isValid()) {
        update.selectedDate = localMoment;
        update.viewDate = localMoment.clone().startOf('month');
      } else {
        update.selectedDate = null;
      }
      _this.setState(update, function () {
        _this.props.onChange(localMoment.isValid() ? localMoment : _this.state.inputValue);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_onInputKeyDown", function (e) {
      if (!_this.callHandler(_this.props.inputProps.onKeyDown, e)) return;
      if (e.which === 9 && _this.props.closeOnTab) {
        _this._closeCalendar();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onInputClick", function (e) {
      // Focus event should open the calendar, but there is some case where
      // the input is already focused and the picker is closed, so clicking the input
      // should open it again see https://github.com/arqex/react-datetime/issues/717
      if (!_this.callHandler(_this.props.inputProps.onClick, e)) return;
      _this._openCalendar();
    });
    _this.state = _this.getInitialState();
    return _this;
  }
  _createClass(Datetime, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ClickableWrapper, {
        className: this.getClassName(),
        onClickOut: this._handleClickOutside
      }, this.renderInput(), /*#__PURE__*/React.createElement("div", {
        className: "rdtPicker"
      }, this.renderView()));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      if (!this.props.input) return;
      var finalInputProps = _objectSpread(_objectSpread({
        type: 'text',
        className: 'form-control',
        value: this.getInputValue()
      }, this.props.inputProps), {}, {
        onFocus: this._onInputFocus,
        onChange: this._onInputChange,
        onKeyDown: this._onInputKeyDown,
        onClick: this._onInputClick
      });
      if (this.props.renderInput) {
        return /*#__PURE__*/React.createElement("div", null, this.props.renderInput(finalInputProps, this._openCalendar, this._closeCalendar));
      }
      return /*#__PURE__*/React.createElement("input", finalInputProps);
    }
  }, {
    key: "renderView",
    value: function renderView() {
      return this.props.renderView(this.state.currentView, this._renderCalendar);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      var props = this.props;
      var inputFormat = this.getFormat('datetime');
      var selectedDate = this.parseDate(props.value || props.initialValue, inputFormat);
      this.checkTZ();
      return {
        open: !props.input,
        currentView: props.initialViewMode || this.getInitialView(),
        viewDate: this.getInitialViewDate(selectedDate),
        selectedDate: selectedDate && selectedDate.isValid() ? selectedDate : undefined,
        inputValue: this.getInitialInputValue(selectedDate)
      };
    }
  }, {
    key: "getInitialViewDate",
    value: function getInitialViewDate(selectedDate) {
      var propDate = this.props.initialViewDate;
      var viewDate;
      if (propDate) {
        viewDate = this.parseDate(propDate, this.getFormat('datetime'));
        if (viewDate && viewDate.isValid()) {
          return viewDate;
        } else {
          log('The initialViewDated given "' + propDate + '" is not valid. Using current date instead.');
        }
      } else if (selectedDate && selectedDate.isValid()) {
        return selectedDate.clone();
      }
      return this.getInitialDate();
    }
  }, {
    key: "getInitialDate",
    value: function getInitialDate() {
      var m = this.localMoment();
      m.hour(0).minute(0).second(0).millisecond(0);
      return m;
    }
  }, {
    key: "getInitialView",
    value: function getInitialView() {
      var dateFormat = this.getFormat('date');
      return dateFormat ? this.getUpdateOn(dateFormat) : viewModes.TIME;
    }
  }, {
    key: "parseDate",
    value: function parseDate(date, dateFormat) {
      var parsedDate;
      if (date && typeof date === 'string') parsedDate = this.localMoment(date, dateFormat);else if (date) parsedDate = this.localMoment(date);
      if (parsedDate && !parsedDate.isValid()) parsedDate = null;
      return parsedDate;
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var cn = 'rdt';
      var props = this.props;
      var propCn = props.className;
      if (Array.isArray(propCn)) {
        cn += ' ' + propCn.join(' ');
      } else if (propCn) {
        cn += ' ' + propCn;
      }
      if (!props.input) {
        cn += ' rdtStatic';
      }
      if (this.isOpen()) {
        cn += ' rdtOpen';
      }
      return cn;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return !this.props.input || (this.props.open === undefined ? this.state.open : this.props.open);
    }
  }, {
    key: "getUpdateOn",
    value: function getUpdateOn(dateFormat) {
      if (this.props.updateOnView) {
        return this.props.updateOnView;
      }
      if (dateFormat.match(/[lLD]/)) {
        return viewModes.DAYS;
      }
      if (dateFormat.indexOf('M') !== -1) {
        return viewModes.MONTHS;
      }
      if (dateFormat.indexOf('Y') !== -1) {
        return viewModes.YEARS;
      }
      return viewModes.DAYS;
    }
  }, {
    key: "getLocaleData",
    value: function getLocaleData() {
      var p = this.props;
      return this.localMoment(p.value || p.defaultValue || new Date()).localeData();
    }
  }, {
    key: "getDateFormat",
    value: function getDateFormat() {
      var locale = this.getLocaleData();
      var format = this.props.dateFormat;
      if (format === true) return locale.longDateFormat('L');
      if (format) return format;
      return '';
    }
  }, {
    key: "getTimeFormat",
    value: function getTimeFormat() {
      var locale = this.getLocaleData();
      var format = this.props.timeFormat;
      if (format === true) {
        return locale.longDateFormat('LT');
      }
      return format || '';
    }
  }, {
    key: "getFormat",
    value: function getFormat(type) {
      if (type === 'date') {
        return this.getDateFormat();
      } else if (type === 'time') {
        return this.getTimeFormat();
      }
      var dateFormat = this.getDateFormat();
      var timeFormat = this.getTimeFormat();
      return dateFormat && timeFormat ? dateFormat + ' ' + timeFormat : dateFormat || timeFormat;
    }
  }, {
    key: "updateTime",
    value: function updateTime(op, amount, type, toSelected) {
      var update = {};
      var date = toSelected ? 'selectedDate' : 'viewDate';
      update[date] = this.state[date].clone()[op](amount, type);
      this.setState(update);
    }
  }, {
    key: "localMoment",
    value: function localMoment(date, format, props) {
      props = props || this.props;
      var m = null;
      if (props.utc) {
        m = moment.utc(date, format, props.strictParsing);
      } else if (props.displayTimeZone) {
        m = moment.tz(date, format, props.displayTimeZone);
      } else {
        m = moment(date, format, props.strictParsing);
      }
      if (props.locale) m.locale(props.locale);
      return m;
    }
  }, {
    key: "checkTZ",
    value: function checkTZ() {
      var displayTimeZone = this.props.displayTimeZone;
      if (displayTimeZone && !this.tzWarning && !moment.tz) {
        this.tzWarning = true;
        log('displayTimeZone prop with value "' + displayTimeZone + '" is used but moment.js timezone is not loaded.', 'error');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props) return;
      var needsUpdate = false;
      var thisProps = this.props;
      ['locale', 'utc', 'displayZone', 'dateFormat', 'timeFormat'].forEach(function (p) {
        prevProps[p] !== thisProps[p] && (needsUpdate = true);
      });
      if (needsUpdate) {
        this.regenerateDates();
      }
      if (thisProps.value && thisProps.value !== prevProps.value) {
        this.setViewDate(thisProps.value);
      }
      this.checkTZ();
    }
  }, {
    key: "regenerateDates",
    value: function regenerateDates() {
      var props = this.props;
      var viewDate = this.state.viewDate.clone();
      var selectedDate = this.state.selectedDate && this.state.selectedDate.clone();
      if (props.locale) {
        viewDate.locale(props.locale);
        selectedDate && selectedDate.locale(props.locale);
      }
      if (props.utc) {
        viewDate.utc();
        selectedDate && selectedDate.utc();
      } else if (props.displayTimeZone) {
        viewDate.tz(props.displayTimeZone);
        selectedDate && selectedDate.tz(props.displayTimeZone);
      } else {
        viewDate.locale();
        selectedDate && selectedDate.locale();
      }
      var update = {
        viewDate: viewDate,
        selectedDate: selectedDate
      };
      if (selectedDate && selectedDate.isValid()) {
        update.inputValue = selectedDate.format(this.getFormat('datetime'));
      }
      this.setState(update);
    }
  }, {
    key: "getSelectedDate",
    value: function getSelectedDate() {
      if (this.props.value === undefined) return this.state.selectedDate;
      var selectedDate = this.parseDate(this.props.value, this.getFormat('datetime'));
      return selectedDate && selectedDate.isValid() ? selectedDate : false;
    }
  }, {
    key: "getInitialInputValue",
    value: function getInitialInputValue(selectedDate) {
      var props = this.props;
      if (props.inputProps.value) return props.inputProps.value;
      if (selectedDate && selectedDate.isValid()) return selectedDate.format(this.getFormat('datetime'));
      if (props.value && typeof props.value === 'string') return props.value;
      if (props.initialValue && typeof props.initialValue === 'string') return props.initialValue;
      return '';
    }
  }, {
    key: "getInputValue",
    value: function getInputValue() {
      var selectedDate = this.getSelectedDate();
      return selectedDate ? selectedDate.format(this.getFormat('datetime')) : this.state.inputValue;
    }

    /**
     * Set the date that is currently shown in the calendar.
     * This is independent from the selected date and it's the one used to navigate through months or days in the calendar.
     * @param dateType date
     * @public
     */
  }, {
    key: "setViewDate",
    value: function setViewDate(date) {
      var logError = function logError() {
        return log('Invalid date passed to the `setViewDate` method: ' + date);
      };
      if (!date) return logError();
      var viewDate;
      if (typeof date === 'string') {
        viewDate = this.localMoment(date, this.getFormat('datetime'));
      } else {
        viewDate = this.localMoment(date);
      }
      if (!viewDate || !viewDate.isValid()) return logError();
      this.setState({
        viewDate: viewDate
      });
    }

    /**
     * Set the view currently shown by the calendar. View modes shipped with react-datetime are 'years', 'months', 'days' and 'time'.
     * @param TYPES.string mode 
     */
  }, {
    key: "navigate",
    value: function navigate(mode) {
      this._showView(mode);
    }
  }, {
    key: "callHandler",
    value: function callHandler(method, e) {
      if (!method) return true;
      return method(e) !== false;
    }
  }]);
  return Datetime;
}(React.Component);
_defineProperty(Datetime, "propTypes", {
  value: datetype,
  initialValue: datetype,
  initialViewDate: datetype,
  initialViewMode: TYPES.oneOf([viewModes.YEARS, viewModes.MONTHS, viewModes.DAYS, viewModes.TIME]),
  onOpen: TYPES.func,
  onClose: TYPES.func,
  onChange: TYPES.func,
  onNavigate: TYPES.func,
  onBeforeNavigate: TYPES.func,
  onNavigateBack: TYPES.func,
  onNavigateForward: TYPES.func,
  updateOnView: TYPES.string,
  locale: TYPES.string,
  utc: TYPES.bool,
  displayTimeZone: TYPES.string,
  input: TYPES.bool,
  dateFormat: TYPES.oneOfType([TYPES.string, TYPES.bool]),
  timeFormat: TYPES.oneOfType([TYPES.string, TYPES.bool]),
  inputProps: TYPES.object,
  timeConstraints: TYPES.object,
  isValidDate: TYPES.func,
  open: TYPES.bool,
  strictParsing: TYPES.bool,
  closeOnSelect: TYPES.bool,
  closeOnTab: TYPES.bool,
  renderView: TYPES.func,
  renderInput: TYPES.func,
  renderDay: TYPES.func,
  renderMonth: TYPES.func,
  renderYear: TYPES.func
});
_defineProperty(Datetime, "defaultProps", {
  onOpen: nofn,
  onClose: nofn,
  onCalendarOpen: nofn,
  onCalendarClose: nofn,
  onChange: nofn,
  onNavigate: nofn,
  onBeforeNavigate: function onBeforeNavigate(next) {
    return next;
  },
  onNavigateBack: nofn,
  onNavigateForward: nofn,
  dateFormat: true,
  timeFormat: true,
  utc: false,
  className: '',
  input: true,
  inputProps: {},
  timeConstraints: {},
  isValidDate: function isValidDate() {
    return true;
  },
  strictParsing: true,
  closeOnSelect: false,
  closeOnTab: true,
  closeOnClickOutside: true,
  renderView: function renderView(_, renderFunc) {
    return renderFunc();
  }
});
// Make moment accessible through the Datetime class
_defineProperty(Datetime, "moment", moment);
export { Datetime as default };
function log(message, method) {
  var con = typeof window !== 'undefined' && window.console;
  if (!con) return;
  if (!method) {
    method = 'warn';
  }
  con[method]('***react-datetime:' + message);
}
var ClickOutBase = /*#__PURE__*/function (_React$Component2) {
  _inherits(ClickOutBase, _React$Component2);
  var _super2 = _createSuper(ClickOutBase);
  function ClickOutBase() {
    var _this2;
    _classCallCheck(this, ClickOutBase);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "container", /*#__PURE__*/React.createRef());
    return _this2;
  }
  _createClass(ClickOutBase, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.className,
        ref: this.container
      }, this.props.children);
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      this.props.onClickOut(e);
    }
  }, {
    key: "setClickOutsideRef",
    value: function setClickOutsideRef() {
      return this.container.current;
    }
  }]);
  return ClickOutBase;
}(React.Component);
var ClickableWrapper = onClickOutside(ClickOutBase);