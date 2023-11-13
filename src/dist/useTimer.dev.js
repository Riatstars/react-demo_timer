"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useTimer = function useTimer() {
  var ini = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _useState = (0, _react.useState)(ini),
      _useState2 = _slicedToArray(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var snapShot = (0, _react.useRef)([]);
  var isStart = (0, _react.useRef)(true);
  var active = (0, _react.useRef)();
  var refInterval = (0, _react.useRef)();

  var startTimer = function startTimer() {
    ;
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(function () {
      if (isStart.current) {
        setTime(function (time) {
          return time + 1;
        });
      }
    }, 10);
  };

  var stopTimer = function stopTimer() {
    ;
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  var resetTimer = function resetTimer() {
    ;
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  var snap = function snap() {
    snapShot.current.push(time);
  };

  return {
    time: time,
    snapShot: snapShot,
    startTimer: startTimer,
    stopTimer: stopTimer,
    resetTimer: resetTimer,
    snap: snap,
    active: active
  };
};

var _default = useTimer;
exports["default"] = _default;