/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneEvent": () => (/* binding */ PhoneEvent),
/* harmony export */   "PhoneTimeEvent": () => (/* binding */ PhoneTimeEvent),
/* harmony export */   "PhoneBatteryEvent": () => (/* binding */ PhoneBatteryEvent),
/* harmony export */   "PhoneNetworkEvent": () => (/* binding */ PhoneNetworkEvent)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * 
 */

var defaultInitDict = {
  composed: false,
  bubbles: false,
  cancelable: true
};
var PhoneEvent = /*#__PURE__*/function (_Event) {
  _inherits(PhoneEvent, _Event);

  var _super = _createSuper(PhoneEvent);

  function PhoneEvent(name, eventInitDic) {
    _classCallCheck(this, PhoneEvent);

    return _super.call(this, name, _Utils_js__WEBPACK_IMPORTED_MODULE_0__.merge(defaultInitDict, eventInitDic));
  }

  _createClass(PhoneEvent, [{
    key: "registerElement",
    value: function registerElement(element) {}
  }]);

  return PhoneEvent;
}( /*#__PURE__*/_wrapNativeSuper(Event));
var PhoneTimeEvent = /*#__PURE__*/function (_PhoneEvent) {
  _inherits(PhoneTimeEvent, _PhoneEvent);

  var _super2 = _createSuper(PhoneTimeEvent);

  function PhoneTimeEvent() {
    _classCallCheck(this, PhoneTimeEvent);

    return _super2.call(this, 'phone-time', {
      cancelable: false
    });
  }

  _createClass(PhoneTimeEvent, [{
    key: "registerElement",
    value: function registerElement(element) {
      _get(_getPrototypeOf(PhoneTimeEvent.prototype), "registerElement", this).call(this, element);

      var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
      var months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
      setInterval(function () {
        var d = new Date();

        var _ev = new PhoneTimeEvent();

        _ev.hour = d.getHours();
        _ev.minute = d.getMinutes();
        _ev.second = d.getSeconds();
        _ev.day = days[d.getDay()];
        _ev.numDay = d.getDate();
        _ev.month = months[d.getMonth()];
        _ev.year = d.getFullYear();
        _ev.time = (_ev.hour > 9 ? _ev.hour : '0' + _ev.hour) + ':' + (_ev.minute > 9 ? _ev.minute : '0' + _ev.minute);
        _ev.date = "".concat(_ev.day, "-").concat(_ev.numDay, "-").concat(_ev.month, "-").concat(_ev.year);
        element.dispatchEvent(_ev);
      }, 1000);
      return element;
    }
  }]);

  return PhoneTimeEvent;
}(PhoneEvent);
var PhoneBatteryEvent = /*#__PURE__*/function (_PhoneEvent2) {
  _inherits(PhoneBatteryEvent, _PhoneEvent2);

  var _super3 = _createSuper(PhoneBatteryEvent);

  function PhoneBatteryEvent() {
    _classCallCheck(this, PhoneBatteryEvent);

    return _super3.call(this, 'phone-battery', {
      cancelable: false
    });
  }

  _createClass(PhoneBatteryEvent, [{
    key: "registerElement",
    value: function registerElement(element) {
      _get(_getPrototypeOf(PhoneBatteryEvent.prototype), "registerElement", this).call(this, element);

      function create(e) {
        var _ev = new PhoneBatteryEvent();

        _ev.level = Math.round(e.level * 100);
        _ev.charging = e.charging;
        return _ev;
      }

      if (!('getBattery' in navigator)) {
        element.dispatchEvent(create({
          level: 100,
          charging: true
        }));
        return;
      }

      navigator.getBattery().then(function (battery) {
        element.dispatchEvent(create(battery));

        battery.onlevelchange = function (e) {
          element.dispatchEvent(create(e.target));
        };

        battery.onchargingchange = function (e) {
          element.dispatchEvent(create(e.target));
        };
      });
      return element;
    }
  }]);

  return PhoneBatteryEvent;
}(PhoneEvent);
var PhoneNetworkEvent = /*#__PURE__*/function (_PhoneEvent3) {
  _inherits(PhoneNetworkEvent, _PhoneEvent3);

  var _super4 = _createSuper(PhoneNetworkEvent);

  function PhoneNetworkEvent() {
    _classCallCheck(this, PhoneNetworkEvent);

    return _super4.call(this, 'phone-network', {
      cancelable: false
    });
  }

  _createClass(PhoneNetworkEvent, [{
    key: "registerElement",
    value: function registerElement(element) {
      _get(_getPrototypeOf(PhoneNetworkEvent.prototype), "registerElement", this).call(this, element);

      function create(info) {
        var _ev = new PhoneNetworkEvent();

        _ev.name = info.type;
        _ev.type = info.effectiveType.replace('slow-2g', '2g').toUpperCase();
        _ev.mbps = info.type != 'none' ? info.downlink : 0;
        _ev.saveData = info.saveData;
        _ev.online = info.type != 'none' ? true : false;
        return _ev;
      }

      var info = navigator.connection;

      if (!navigator.connection) {
        element.dispatchEvent(create({
          type: 'none',
          effectiveType: 'H',
          downlink: 0,
          saveData: false
        }));
        return;
      } else {
        navigator.connection.onchange = function () {
          if (info.type) {
            element.dispatchEvent(create(info));
          }
        };

        element.dispatchEvent(create(info));
      }
    }
  }]);

  return PhoneNetworkEvent;
}(PhoneEvent);

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeOf": () => (/* binding */ typeOf),
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/**           UTILS                **/

/**
 * give the type of an variable
 * @param {*} arg
 * returns {String}
 */
function typeOf(arg) {
  var s = Object.prototype.toString.call(arg);
  /\[object (\w+)\]/i.exec(s);
  return RegExp.$1.replace(/HTML|Element/g, '').toLowerCase();
}
/**
 * merge 2 or many object
 * @param {Object} a
 * @param {Array<Object>} b
 * @returns {Object}
 */

function merge(a) {
  for (var _len = arguments.length, b = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    b[_key - 1] = arguments[_key];
  }

  if (!a || typeOf(a) !== 'object' || b.length == 0) return a;

  for (var i = 0; i < b.length; i++) {
    Object.keys(b[i]).forEach(function (key) {
      a[key] == b[i][key];
    });
  }

  return a;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");
/* harmony import */ var _Events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.js */ "./src/Events.js");


window.System = {
  Utils: _Utils_js__WEBPACK_IMPORTED_MODULE_0__,
  Events: _Events_js__WEBPACK_IMPORTED_MODULE_1__
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDN0IsTUFBSSxDQUFDRCxDQUFELElBQU1YLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLEtBQWMsUUFBcEIsSUFBZ0NDLENBQUMsQ0FBQ0MsTUFBRixJQUFZLENBQWhELEVBQW1ELE9BQU9GLENBQVA7O0FBQ25ELE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsQ0FBQyxDQUFDQyxNQUF0QixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNqQ1gsSUFBQUEsTUFBTSxDQUFDWSxJQUFQLENBQVlILENBQUMsQ0FBQ0UsQ0FBRCxDQUFiLEVBQWtCRSxPQUFsQixDQUEwQixVQUFBQyxHQUFHLEVBQUk7QUFDL0JOLE1BQUFBLENBQUMsQ0FBQ00sR0FBRCxDQUFELElBQVVMLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUtHLEdBQUwsQ0FBVjtBQUNELEtBRkQ7QUFHRDs7QUFDRCxTQUFPTixDQUFQO0FBQ0Q7Ozs7OztVQzNCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQVEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCO0FBQ2RqRixFQUFBQSxLQUFLLEVBQUxBLHNDQURjO0FBRWQrRSxFQUFBQSxNQUFNLEVBQU5BLHVDQUFNQTtBQUZRLENBQWhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcblxuLyoqXG4gKiBcbiAqL1xuY29uc3QgZGVmYXVsdEluaXREaWN0ID0ge1xuICBjb21wb3NlZDogZmFsc2UsXG4gIGJ1YmJsZXM6IGZhbHNlLFxuICBjYW5jZWxhYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBldmVudEluaXREaWMpIHtcbiAgICBzdXBlcihuYW1lLCBVdGlscy5tZXJnZShkZWZhdWx0SW5pdERpY3QsIGV2ZW50SW5pdERpYykpO1xuICB9XG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVUaW1lRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLXRpbWUnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIHZhciBkYXlzID0gWydkaW1hbmNoZScsICdsdW5kaScsICdtYXJkaScsICdtZXJjcmVkaScsICdqZXVkaScsICd2ZW5kcmVkaScsICdzYW1lZGknXTtcbiAgICB2YXIgbW9udGhzID0gWydqYW52aWVyJywgJ2ZldnJpZXInLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsICdqdWlsbGV0JywgJ2FvdXQnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZGVjZW1icmUnXTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lVGltZUV2ZW50KCk7XG4gICAgICBfZXYuaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgIF9ldi5taW51dGUgPSBkLmdldE1pbnV0ZXMoKTtcbiAgICAgIF9ldi5zZWNvbmQgPSBkLmdldFNlY29uZHMoKTtcbiAgICAgIF9ldi5kYXkgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgX2V2Lm51bURheSA9IGQuZ2V0RGF0ZSgpO1xuICAgICAgX2V2Lm1vbnRoID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgICBfZXYueWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIF9ldi50aW1lID0gKF9ldi5ob3VyID4gOSA/IF9ldi5ob3VyIDogJzAnICsgX2V2LmhvdXIpICsgJzonICsgKF9ldi5taW51dGUgPiA5ID8gX2V2Lm1pbnV0ZSA6ICcwJyArIF9ldi5taW51dGUpO1xuICAgICAgX2V2LmRhdGUgPSBgJHtfZXYuZGF5fS0ke19ldi5udW1EYXl9LSR7X2V2Lm1vbnRofS0ke19ldi55ZWFyfWA7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoX2V2KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUJhdHRlcnlFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtYmF0dGVyeScsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSk7XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShlKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lQmF0dGVyeUV2ZW50KCk7XG4gICAgICBfZXYubGV2ZWwgPSBNYXRoLnJvdW5kKGUubGV2ZWwgKiAxMDApO1xuICAgICAgX2V2LmNoYXJnaW5nID0gZS5jaGFyZ2luZ1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cblxuICAgIGlmICghKCdnZXRCYXR0ZXJ5JyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKHtcbiAgICAgICAgbGV2ZWw6IDEwMCxcbiAgICAgICAgY2hhcmdpbmc6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpLnRoZW4oYmF0dGVyeSA9PiB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGJhdHRlcnkpKVxuICAgICAgYmF0dGVyeS5vbmxldmVsY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGUudGFyZ2V0KSlcbiAgICAgIH1cbiAgICAgIGJhdHRlcnkub25jaGFyZ2luZ2NoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShlLnRhcmdldCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVOZXR3b3JrRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLW5ldHdvcmsnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShpbmZvKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lTmV0d29ya0V2ZW50KCk7XG4gICAgICBfZXYubmFtZSA9IGluZm8udHlwZTtcbiAgICAgIF9ldi50eXBlID0gaW5mby5lZmZlY3RpdmVUeXBlLnJlcGxhY2UoJ3Nsb3ctMmcnLCAnMmcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgX2V2Lm1icHMgPSAoaW5mby50eXBlICE9ICdub25lJykgPyBpbmZvLmRvd25saW5rIDogMDtcbiAgICAgIF9ldi5zYXZlRGF0YSA9IGluZm8uc2F2ZURhdGE7XG4gICAgICBfZXYub25saW5lID0gKGluZm8udHlwZSAhPSAnbm9uZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cbiAgICBcbiAgICB2YXIgaW5mbyA9IG5hdmlnYXRvci5jb25uZWN0aW9uO1xuICAgIGlmICghbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoe1xuICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgIGVmZmVjdGl2ZVR5cGU6ICdIJyxcbiAgICAgICAgZG93bmxpbms6IDAsXG4gICAgICAgIHNhdmVEYXRhOiBmYWxzZVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0b3IuY29ubmVjdGlvbi5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaW5mby50eXBlKSB7XG4gICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcblxuICAgIH1cbiAgfVxufVxuIiwiLyoqICAgICAgICAgICBVVElMUyAgICAgICAgICAgICAgICAqKi9cblxuLyoqXG4gKiBnaXZlIHRoZSB0eXBlIG9mIGFuIHZhcmlhYmxlXG4gKiBAcGFyYW0geyp9IGFyZ1xuICogcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGFyZykge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpO1xuICAvXFxbb2JqZWN0IChcXHcrKVxcXS9pLmV4ZWMocyk7XG4gIHJldHVybiBSZWdFeHAuJDEucmVwbGFjZSgvSFRNTHxFbGVtZW50L2csICcnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIG1lcmdlIDIgb3IgbWFueSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhLCAuLi5iKSB7XG4gIGlmICghYSB8fCB0eXBlT2YoYSkgIT09ICdvYmplY3QnIHx8IGIubGVuZ3RoID09IDApIHJldHVybiBhO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICBPYmplY3Qua2V5cyhiW2ldKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBhW2tleV0gPT0gYltpXVtrZXldO1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGE7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vVXRpbHMuanMnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9FdmVudHMuanMnXG5cbndpbmRvdy5TeXN0ZW0gPSB7XG4gIFV0aWxzLFxuICBFdmVudHNcbn07XG4iXSwibmFtZXMiOlsiVXRpbHMiLCJkZWZhdWx0SW5pdERpY3QiLCJjb21wb3NlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiUGhvbmVFdmVudCIsIm5hbWUiLCJldmVudEluaXREaWMiLCJtZXJnZSIsImVsZW1lbnQiLCJFdmVudCIsIlBob25lVGltZUV2ZW50IiwiZGF5cyIsIm1vbnRocyIsInNldEludGVydmFsIiwiZCIsIkRhdGUiLCJfZXYiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsImRheSIsImdldERheSIsIm51bURheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidGltZSIsImRhdGUiLCJkaXNwYXRjaEV2ZW50IiwiUGhvbmVCYXR0ZXJ5RXZlbnQiLCJjcmVhdGUiLCJlIiwibGV2ZWwiLCJNYXRoIiwicm91bmQiLCJjaGFyZ2luZyIsIm5hdmlnYXRvciIsImdldEJhdHRlcnkiLCJ0aGVuIiwiYmF0dGVyeSIsIm9ubGV2ZWxjaGFuZ2UiLCJ0YXJnZXQiLCJvbmNoYXJnaW5nY2hhbmdlIiwiUGhvbmVOZXR3b3JrRXZlbnQiLCJpbmZvIiwidHlwZSIsImVmZmVjdGl2ZVR5cGUiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJtYnBzIiwiZG93bmxpbmsiLCJzYXZlRGF0YSIsIm9ubGluZSIsImNvbm5lY3Rpb24iLCJvbmNoYW5nZSIsInR5cGVPZiIsImFyZyIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJleGVjIiwiUmVnRXhwIiwiJDEiLCJ0b0xvd2VyQ2FzZSIsImEiLCJiIiwibGVuZ3RoIiwiaSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiRXZlbnRzIiwid2luZG93IiwiU3lzdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==