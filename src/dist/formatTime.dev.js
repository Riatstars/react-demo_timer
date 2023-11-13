"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = void 0;

var formatTime = function formatTime(time) {
  var centiseconds = time % 100;
  var getCentiseconds = centiseconds < 10 ? '0' + centiseconds : centiseconds;
  var seconds = Math.floor(time / 100 % 60);
  var getSeconds = seconds < 10 ? '0' + seconds : seconds;
  var minutes = Math.floor(time / 6000 % 60);
  var getMinutes = minutes < 10 ? '0' + minutes : minutes;
  var hours = Math.floor(time / 360000);
  var getHours = hours < 10 ? '0' + hours : hours;
  return "".concat(getHours, " : ").concat(getMinutes, " : ").concat(getSeconds, " : ").concat(getCentiseconds);
};

exports.formatTime = formatTime;