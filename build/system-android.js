/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Android.js":
/*!************************!*\
  !*** ./src/Android.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Android)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 */
var Android = /*#__PURE__*/_createClass(function Android(views) {
  var lastConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Android);

  this.views = views;
});



/***/ }),

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
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "getView": () => (/* binding */ getView),
/* harmony export */   "getViewGroup": () => (/* binding */ getViewGroup)
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
/**
 * select multiples élément in the DOM
 * @param {String} selector
 * @returns {HTMLElement}
 */

function getView(selector) {
  var elt = document.querySelector(selector);
  if (!elt) return null;

  elt.css = function (prop, value) {
    elt.style.setProperty(prop, value);
    return elt;
  };

  return elt;
}
/**
 * select an élément in the DOM
 * @param {String} selector
 * @returns {NodeListOf<HTMLElement>}
 */

function getViewGroup(selector) {
  var elts = document.querySelectorAll(selector);
  if (elts.length == 0 || !elts) return null;

  elts.css = function (prop, value) {
    elts.forEach(function (elt) {
      return elt.css(prop, value);
    });
  };

  elts.forEach(function (elt) {
    elt.css = function (prop, value) {
      elt.style.setProperty(prop, value);
      return elt;
    };
  });
  return elts;
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
/* harmony import */ var _Android_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Android.js */ "./src/Android.js");



window.System = {
  Android: _Android_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  Utils: _Utils_js__WEBPACK_IMPORTED_MODULE_0__,
  Events: _Events_js__WEBPACK_IMPORTED_MODULE_1__,
  getView: _Utils_js__WEBPACK_IMPORTED_MODULE_0__.getView,
  getViewGroup: _Utils_js__WEBPACK_IMPORTED_MODULE_0__.getViewGroup
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBUEEsbURBRGM7QUFFZEcsRUFBQUEsS0FBSyxFQUFMQSxzQ0FGYztBQUdkNEYsRUFBQUEsTUFBTSxFQUFOQSx1Q0FIYztBQUlkYixFQUFBQSxPQUFPLEVBQUUvRSw4Q0FKSztBQUtkeUYsRUFBQUEsWUFBWSxFQUFFekYsbURBQWtCeUY7QUFMbEIsQ0FBaEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9BbmRyb2lkLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkLy4vc3JjL1V0aWxzLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmRyb2lkIHtcbiAgY29uc3RydWN0b3Iodmlld3MsIGxhc3RDb25maWcgPSB7fSkge1xuICAgIHRoaXMudmlld3MgPSB2aWV3cztcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcblxuLyoqXG4gKiBcbiAqL1xuY29uc3QgZGVmYXVsdEluaXREaWN0ID0ge1xuICBjb21wb3NlZDogZmFsc2UsXG4gIGJ1YmJsZXM6IGZhbHNlLFxuICBjYW5jZWxhYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBldmVudEluaXREaWMpIHtcbiAgICBzdXBlcihuYW1lLCBVdGlscy5tZXJnZShkZWZhdWx0SW5pdERpY3QsIGV2ZW50SW5pdERpYykpO1xuICB9XG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVUaW1lRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLXRpbWUnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIHZhciBkYXlzID0gWydkaW1hbmNoZScsICdsdW5kaScsICdtYXJkaScsICdtZXJjcmVkaScsICdqZXVkaScsICd2ZW5kcmVkaScsICdzYW1lZGknXTtcbiAgICB2YXIgbW9udGhzID0gWydqYW52aWVyJywgJ2ZldnJpZXInLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsICdqdWlsbGV0JywgJ2FvdXQnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZGVjZW1icmUnXTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lVGltZUV2ZW50KCk7XG4gICAgICBfZXYuaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgIF9ldi5taW51dGUgPSBkLmdldE1pbnV0ZXMoKTtcbiAgICAgIF9ldi5zZWNvbmQgPSBkLmdldFNlY29uZHMoKTtcbiAgICAgIF9ldi5kYXkgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgX2V2Lm51bURheSA9IGQuZ2V0RGF0ZSgpO1xuICAgICAgX2V2Lm1vbnRoID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgICBfZXYueWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIF9ldi50aW1lID0gKF9ldi5ob3VyID4gOSA/IF9ldi5ob3VyIDogJzAnICsgX2V2LmhvdXIpICsgJzonICsgKF9ldi5taW51dGUgPiA5ID8gX2V2Lm1pbnV0ZSA6ICcwJyArIF9ldi5taW51dGUpO1xuICAgICAgX2V2LmRhdGUgPSBgJHtfZXYuZGF5fS0ke19ldi5udW1EYXl9LSR7X2V2Lm1vbnRofS0ke19ldi55ZWFyfWA7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoX2V2KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUJhdHRlcnlFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtYmF0dGVyeScsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSk7XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShlKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lQmF0dGVyeUV2ZW50KCk7XG4gICAgICBfZXYubGV2ZWwgPSBNYXRoLnJvdW5kKGUubGV2ZWwgKiAxMDApO1xuICAgICAgX2V2LmNoYXJnaW5nID0gZS5jaGFyZ2luZ1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cblxuICAgIGlmICghKCdnZXRCYXR0ZXJ5JyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKHtcbiAgICAgICAgbGV2ZWw6IDEwMCxcbiAgICAgICAgY2hhcmdpbmc6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpLnRoZW4oYmF0dGVyeSA9PiB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGJhdHRlcnkpKVxuICAgICAgYmF0dGVyeS5vbmxldmVsY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGUudGFyZ2V0KSlcbiAgICAgIH1cbiAgICAgIGJhdHRlcnkub25jaGFyZ2luZ2NoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShlLnRhcmdldCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVOZXR3b3JrRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLW5ldHdvcmsnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShpbmZvKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lTmV0d29ya0V2ZW50KCk7XG4gICAgICBfZXYubmFtZSA9IGluZm8udHlwZTtcbiAgICAgIF9ldi50eXBlID0gaW5mby5lZmZlY3RpdmVUeXBlLnJlcGxhY2UoJ3Nsb3ctMmcnLCAnMmcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgX2V2Lm1icHMgPSAoaW5mby50eXBlICE9ICdub25lJykgPyBpbmZvLmRvd25saW5rIDogMDtcbiAgICAgIF9ldi5zYXZlRGF0YSA9IGluZm8uc2F2ZURhdGE7XG4gICAgICBfZXYub25saW5lID0gKGluZm8udHlwZSAhPSAnbm9uZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cbiAgICBcbiAgICB2YXIgaW5mbyA9IG5hdmlnYXRvci5jb25uZWN0aW9uO1xuICAgIGlmICghbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoe1xuICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgIGVmZmVjdGl2ZVR5cGU6ICdIJyxcbiAgICAgICAgZG93bmxpbms6IDAsXG4gICAgICAgIHNhdmVEYXRhOiBmYWxzZVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0b3IuY29ubmVjdGlvbi5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaW5mby50eXBlKSB7XG4gICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcbiAgICB9XG4gIH1cbn1cblxuIiwiLyoqICAgICAgICAgICBVVElMUyAgICAgICAgICAgICAgICAqKi9cblxuLyoqXG4gKiBnaXZlIHRoZSB0eXBlIG9mIGFuIHZhcmlhYmxlXG4gKiBAcGFyYW0geyp9IGFyZ1xuICogcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGFyZykge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpO1xuICAvXFxbb2JqZWN0IChcXHcrKVxcXS9pLmV4ZWMocyk7XG4gIHJldHVybiBSZWdFeHAuJDEucmVwbGFjZSgvSFRNTHxFbGVtZW50L2csICcnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIG1lcmdlIDIgb3IgbWFueSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhLCAuLi5iKSB7XG4gIGlmICghYSB8fCB0eXBlT2YoYSkgIT09ICdvYmplY3QnIHx8IGIubGVuZ3RoID09IDApIHJldHVybiBhO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICBPYmplY3Qua2V5cyhiW2ldKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBhW2tleV0gPT0gYltpXVtrZXldO1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogc2VsZWN0IG11bHRpcGxlcyDDqWzDqW1lbnQgaW4gdGhlIERPTVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3KHNlbGVjdG9yKSB7XG4gIHZhciBlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKCFlbHQpIHJldHVybiBudWxsXG4gIGVsdC5jc3MgPSBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgIGVsdC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGVsdFxuICB9XG4gIHJldHVybiBlbHRcbn1cblxuLyoqXG4gKiBzZWxlY3QgYW4gw6lsw6ltZW50IGluIHRoZSBET01cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dyb3VwKHNlbGVjdG9yKSB7XG4gIHZhciBlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGlmIChlbHRzLmxlbmd0aCA9PSAwIHx8ICFlbHRzKSByZXR1cm4gbnVsbFxuICBlbHRzLmNzcyA9IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgZWx0cy5mb3JFYWNoKGVsdCA9PiBlbHQuY3NzKHByb3AsIHZhbHVlKSlcbiAgfVxuICBlbHRzLmZvckVhY2goZWx0ID0+IHtcbiAgICBlbHQuY3NzID0gZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgIGVsdC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gZWx0XG4gICAgfVxuICB9KVxuICByZXR1cm4gZWx0c1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL1V0aWxzLmpzJ1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4vRXZlbnRzLmpzJ1xuaW1wb3J0IEFuZHJvaWQgZnJvbSAnLi9BbmRyb2lkLmpzJ1xuXG53aW5kb3cuU3lzdGVtID0ge1xuICBBbmRyb2lkLFxuICBVdGlscyxcbiAgRXZlbnRzLFxuICBnZXRWaWV3OiBVdGlscy5nZXRWaWV3LFxuICBnZXRWaWV3R3JvdXA6IFV0aWxzLmdldFZpZXdHcm91cFxufTtcbiJdLCJuYW1lcyI6WyJBbmRyb2lkIiwidmlld3MiLCJsYXN0Q29uZmlnIiwiVXRpbHMiLCJkZWZhdWx0SW5pdERpY3QiLCJjb21wb3NlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiUGhvbmVFdmVudCIsIm5hbWUiLCJldmVudEluaXREaWMiLCJtZXJnZSIsImVsZW1lbnQiLCJFdmVudCIsIlBob25lVGltZUV2ZW50IiwiZGF5cyIsIm1vbnRocyIsInNldEludGVydmFsIiwiZCIsIkRhdGUiLCJfZXYiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsImRheSIsImdldERheSIsIm51bURheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidGltZSIsImRhdGUiLCJkaXNwYXRjaEV2ZW50IiwiUGhvbmVCYXR0ZXJ5RXZlbnQiLCJjcmVhdGUiLCJlIiwibGV2ZWwiLCJNYXRoIiwicm91bmQiLCJjaGFyZ2luZyIsIm5hdmlnYXRvciIsImdldEJhdHRlcnkiLCJ0aGVuIiwiYmF0dGVyeSIsIm9ubGV2ZWxjaGFuZ2UiLCJ0YXJnZXQiLCJvbmNoYXJnaW5nY2hhbmdlIiwiUGhvbmVOZXR3b3JrRXZlbnQiLCJpbmZvIiwidHlwZSIsImVmZmVjdGl2ZVR5cGUiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJtYnBzIiwiZG93bmxpbmsiLCJzYXZlRGF0YSIsIm9ubGluZSIsImNvbm5lY3Rpb24iLCJvbmNoYW5nZSIsInR5cGVPZiIsImFyZyIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJleGVjIiwiUmVnRXhwIiwiJDEiLCJ0b0xvd2VyQ2FzZSIsImEiLCJiIiwibGVuZ3RoIiwiaSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0VmlldyIsInNlbGVjdG9yIiwiZWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3NzIiwicHJvcCIsInZhbHVlIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldFZpZXdHcm91cCIsImVsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRXZlbnRzIiwid2luZG93IiwiU3lzdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==