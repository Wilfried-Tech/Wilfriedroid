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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 
 */
var __config = {
  password: '1234',
  volume: 100,
  power: 'off'
};

var Android = /*#__PURE__*/function () {
  function Android(views) {
    var lastConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Android);

    this.Views = views;
  } //     GETTER AND SETTER


  _createClass(Android, [{
    key: "password",
    get: function get() {
      return __config.password;
    }
  }, {
    key: "volume",
    get: function get() {
      return __config.volume;
    },
    set: function set(vol) {
      if (vol >= 0 && vol <= 100) {
        __config.volume = vol;
      }
    }
  }, {
    key: "power",
    get: function get() {
      return __config.power;
    },
    set: function set(state) {
      if (['on', 'off', 'sleep'].indexOf(state) == -1) return;
      this.Views.Tools.power.css('color', state == 'on' ? 'lime' : state == 'off' ? 'red' : state == 'sleep' ? 'orange' : '');
      __config.power = state;
    }
  }]);

  return Android;
}();



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
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./src/View.js");
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
 * select an élément in the DOM
 * @param {String} selector
 * @returns {View}
 */

function getView(selector) {
  var elt = document.querySelector(selector);
  if (!elt) return null;
  return new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt);
}
/**
 * select multiple élément in the DOM
 * @param {String} selector
 * @returns {Array<View>}
 */

function getViewGroup(selector) {
  var elts = document.querySelectorAll(selector);
  if (elts.length == 0 || !elts) return null;
  return Array.prototype.map.call(elts, function (elt) {
    return new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt);
  });
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __node = null;
/**
 * @class
 */

var View = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} node
   */
  function View(node) {
    _classCallCheck(this, View);

    if (node instanceof HTMLElement) {
      __node = node;
    } else {
      return null;
    }
  }
  /**
   * @returns {HTMLElement}
   */


  _createClass(View, [{
    key: "node",
    get: function get() {
      return __node;
    }
    /**
     * get/set css style
     * @param {String} prop
     * @param {String} [value]
     * @returns {View|String}
     */

  }, {
    key: "css",
    value: function css(prop, value) {
      if (!value) {
        return this.node.style.getPropertyValue(prop);
      }

      this.node.style.setProperty(prop, value);
      return this;
    }
    /**
     * get/set attribute value
     * @param {String} attrName
     * @param {String} [value]
     * @returns {String|View}
     */

  }, {
    key: "attr",
    value: function attr(attrName, value) {
      if (!value) {
        return this.node.getAttribute(prop);
      }

      this.node.setAttribute(prop, value);
      return this;
    }
    /**
     * get/set content of view and evaluate hit
     * @param {String} [htmlString]
     * @returns {String|View}
     */

  }, {
    key: "html",
    value: function html(htmlString) {
      if (!htmlString) return this.node.innerHTML;
      this.node.innerHTML = htmlString;
      return this;
    }
    /**
     * get/set content of view as raw
     * @param {String} [text]
     * @returns {String|View}
     */

  }, {
    key: "content",
    value: function content(text) {
      if (!text) return this.node.innerText;
      this.node.innerText = text;
      return this;
    }
    /**
     * create an element
     * @param {String} tagName
     * @param {Object} attr
     * @param {Object} data
     * @param {Array<HTMLElement>} children
     * @return {View}
     */

  }], [{
    key: "createView",
    value: function createView(tagName, attr, data, children) {
      var elt = document.createElement(tagName);

      if (attr) {
        for (var prop in attr) {
          if (prop != 'text') {
            elt.setAttribute(prop, attr[prop]);
          }
        }

        if (attr.text) {
          elt.innerHTML = attr.text;
        }
      }

      if (data) {
        for (var prop in data) {
          elt[prop] = data[prop];
        }
      }

      if (children) {
        children.forEach(function (child) {
          elt.appendChild(child);
        });
      }

      return new View(elt);
    }
  }]);

  return View;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSWpELElBQUosQ0FBU3FCLEdBQVQsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7VUN6R0g7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUErQixNQUFNLENBQUNDLE1BQVAsR0FBZ0I7QUFDZDNILEVBQUFBLE9BQU8sRUFBUEEsbURBRGM7QUFFZFMsRUFBQUEsS0FBSyxFQUFMQSxzQ0FGYztBQUdkZ0gsRUFBQUEsTUFBTSxFQUFOQSx1Q0FIYztBQUlkaEMsRUFBQUEsT0FBTyxFQUFFaEYsOENBSks7QUFLZHFGLEVBQUFBLFlBQVksRUFBRXJGLG1EQUFrQnFGO0FBTGxCLENBQWhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvQW5kcm9pZC5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqL1xuXG5jb25zdCBfX2NvbmZpZyA9IHtcbiAgcGFzc3dvcmQ6ICcxMjM0JyxcbiAgdm9sdW1lOiAxMDAsXG4gIHBvd2VyOiAnb2ZmJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmRyb2lkIHtcbiAgY29uc3RydWN0b3Iodmlld3MsIGxhc3RDb25maWcgPSB7fSkge1xuICAgIHRoaXMuVmlld3MgPSB2aWV3cztcbiAgfVxuXG4gIC8vICAgICBHRVRURVIgQU5EIFNFVFRFUlxuXG4gIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gX19jb25maWcucGFzc3dvcmRcbiAgfVxuXG4gIGdldCB2b2x1bWUoKSB7XG4gICAgcmV0dXJuIF9fY29uZmlnLnZvbHVtZVxuICB9XG5cbiAgc2V0IHZvbHVtZSh2b2wpIHtcbiAgICBpZiAodm9sID49IDAgJiYgdm9sIDw9IDEwMCkge1xuICAgICAgX19jb25maWcudm9sdW1lID0gdm9sO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwb3dlcigpIHtcbiAgICByZXR1cm4gX19jb25maWcucG93ZXJcbiAgfVxuXG4gIHNldCBwb3dlcihzdGF0ZSkge1xuICAgIGlmIChbJ29uJywgJ29mZicsICdzbGVlcCddLmluZGV4T2Yoc3RhdGUpID09IC0xKSByZXR1cm5cbiAgICB0aGlzLlZpZXdzLlRvb2xzLnBvd2VyLmNzcygnY29sb3InLCAoc3RhdGUgPT0gJ29uJyA/ICdsaW1lJyA6IChzdGF0ZSA9PSAnb2ZmJyA/ICdyZWQnIDogKHN0YXRlID09ICdzbGVlcCcgPyAnb3JhbmdlJyA6ICcnKSkpKTtcbiAgICBfX2NvbmZpZy5wb3dlciA9IHN0YXRlO1xuICB9XG4gIFxuICBcbn0iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL1V0aWxzLmpzJ1xuXG4vKipcbiAqIFxuICovXG5jb25zdCBkZWZhdWx0SW5pdERpY3QgPSB7XG4gIGNvbXBvc2VkOiBmYWxzZSxcbiAgYnViYmxlczogZmFsc2UsXG4gIGNhbmNlbGFibGU6IHRydWVcbn1cblxuZXhwb3J0IGNsYXNzIFBob25lRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGV2ZW50SW5pdERpYykge1xuICAgIHN1cGVyKG5hbWUsIFV0aWxzLm1lcmdlKGRlZmF1bHRJbml0RGljdCwgZXZlbnRJbml0RGljKSk7XG4gIH1cbiAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZVRpbWVFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtdGltZScsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSlcbiAgfVxuXG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7XG4gICAgc3VwZXIucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdmFyIGRheXMgPSBbJ2RpbWFuY2hlJywgJ2x1bmRpJywgJ21hcmRpJywgJ21lcmNyZWRpJywgJ2pldWRpJywgJ3ZlbmRyZWRpJywgJ3NhbWVkaSddO1xuICAgIHZhciBtb250aHMgPSBbJ2phbnZpZXInLCAnZmV2cmllcicsICdtYXJzJywgJ2F2cmlsJywgJ21haScsICdqdWluJywgJ2p1aWxsZXQnLCAnYW91dCcsICdzZXB0ZW1icmUnLCAnb2N0b2JyZScsICdub3ZlbWJyZScsICdkZWNlbWJyZSddO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBfZXYgPSBuZXcgUGhvbmVUaW1lRXZlbnQoKTtcbiAgICAgIF9ldi5ob3VyID0gZC5nZXRIb3VycygpO1xuICAgICAgX2V2Lm1pbnV0ZSA9IGQuZ2V0TWludXRlcygpO1xuICAgICAgX2V2LnNlY29uZCA9IGQuZ2V0U2Vjb25kcygpO1xuICAgICAgX2V2LmRheSA9IGRheXNbZC5nZXREYXkoKV07XG4gICAgICBfZXYubnVtRGF5ID0gZC5nZXREYXRlKCk7XG4gICAgICBfZXYubW9udGggPSBtb250aHNbZC5nZXRNb250aCgpXTtcbiAgICAgIF9ldi55ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICAgICAgX2V2LnRpbWUgPSAoX2V2LmhvdXIgPiA5ID8gX2V2LmhvdXIgOiAnMCcgKyBfZXYuaG91cikgKyAnOicgKyAoX2V2Lm1pbnV0ZSA+IDkgPyBfZXYubWludXRlIDogJzAnICsgX2V2Lm1pbnV0ZSk7XG4gICAgICBfZXYuZGF0ZSA9IGAke19ldi5kYXl9LSR7X2V2Lm51bURheX0tJHtfZXYubW9udGh9LSR7X2V2LnllYXJ9YDtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChfZXYpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBob25lQmF0dGVyeUV2ZW50IGV4dGVuZHMgUGhvbmVFdmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwaG9uZS1iYXR0ZXJ5JywgeyBjYW5jZWxhYmxlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7XG4gICAgc3VwZXIucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlKGUpIHtcbiAgICAgIHZhciBfZXYgPSBuZXcgUGhvbmVCYXR0ZXJ5RXZlbnQoKTtcbiAgICAgIF9ldi5sZXZlbCA9IE1hdGgucm91bmQoZS5sZXZlbCAqIDEwMCk7XG4gICAgICBfZXYuY2hhcmdpbmcgPSBlLmNoYXJnaW5nXG4gICAgICByZXR1cm4gX2V2XG4gICAgfVxuXG4gICAgaWYgKCEoJ2dldEJhdHRlcnknIGluIG5hdmlnYXRvcikpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoe1xuICAgICAgICBsZXZlbDogMTAwLFxuICAgICAgICBjaGFyZ2luZzogdHJ1ZVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG5hdmlnYXRvci5nZXRCYXR0ZXJ5KCkudGhlbihiYXR0ZXJ5ID0+IHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoYmF0dGVyeSkpXG4gICAgICBiYXR0ZXJ5Lm9ubGV2ZWxjaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoZS50YXJnZXQpKVxuICAgICAgfVxuICAgICAgYmF0dGVyeS5vbmNoYXJnaW5nY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGUudGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZU5ldHdvcmtFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtbmV0d29yaycsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSlcbiAgfVxuXG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7XG4gICAgc3VwZXIucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlKGluZm8pIHtcbiAgICAgIHZhciBfZXYgPSBuZXcgUGhvbmVOZXR3b3JrRXZlbnQoKTtcbiAgICAgIF9ldi5uYW1lID0gaW5mby50eXBlO1xuICAgICAgX2V2LnR5cGUgPSBpbmZvLmVmZmVjdGl2ZVR5cGUucmVwbGFjZSgnc2xvdy0yZycsICcyZycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICBfZXYubWJwcyA9IChpbmZvLnR5cGUgIT0gJ25vbmUnKSA/IGluZm8uZG93bmxpbmsgOiAwO1xuICAgICAgX2V2LnNhdmVEYXRhID0gaW5mby5zYXZlRGF0YTtcbiAgICAgIF9ldi5vbmxpbmUgPSAoaW5mby50eXBlICE9ICdub25lJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICByZXR1cm4gX2V2XG4gICAgfVxuICAgIFxuICAgIHZhciBpbmZvID0gbmF2aWdhdG9yLmNvbm5lY3Rpb247XG4gICAgaWYgKCFuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZSh7XG4gICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgZWZmZWN0aXZlVHlwZTogJ0gnLFxuICAgICAgICBkb3dubGluazogMCxcbiAgICAgICAgc2F2ZURhdGE6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYXRvci5jb25uZWN0aW9uLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpbmZvLnR5cGUpIHtcbiAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGluZm8pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGluZm8pKVxuICAgIH1cbiAgfVxufVxuXG4iLCIvKiogICAgICAgICAgIFVUSUxTICAgICAgICAgICAgICAgICoqL1xuXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnXG5cbi8qKlxuICogZ2l2ZSB0aGUgdHlwZSBvZiBhbiB2YXJpYWJsZVxuICogQHBhcmFtIHsqfSBhcmdcbiAqIHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZihhcmcpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKTtcbiAgL1xcW29iamVjdCAoXFx3KylcXF0vaS5leGVjKHMpO1xuICByZXR1cm4gUmVnRXhwLiQxLnJlcGxhY2UoL0hUTUx8RWxlbWVudC9nLCAnJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBtZXJnZSAyIG9yIG1hbnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBiXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYSwgLi4uYikge1xuICBpZiAoIWEgfHwgdHlwZU9mKGEpICE9PSAnb2JqZWN0JyB8fCBiLmxlbmd0aCA9PSAwKSByZXR1cm4gYTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgT2JqZWN0LmtleXMoYltpXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgYVtrZXldID09IGJbaV1ba2V5XTtcbiAgICB9KVxuICB9XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIHNlbGVjdCBhbiDDqWzDqW1lbnQgaW4gdGhlIERPTVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7Vmlld31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXcoc2VsZWN0b3IpIHtcbiAgdmFyIGVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAoIWVsdCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIG5ldyBWaWV3KGVsdCk7XG59XG5cbi8qKlxuICogc2VsZWN0IG11bHRpcGxlIMOpbMOpbWVudCBpbiB0aGUgRE9NXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtBcnJheTxWaWV3Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdHcm91cChzZWxlY3Rvcikge1xuICB2YXIgZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBpZiAoZWx0cy5sZW5ndGggPT0gMCB8fCAhZWx0cykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbHRzLCBlbHQgPT4gbmV3IFZpZXcoZWx0KSk7XG5cbn1cbiIsInZhciBfX25vZGUgPSBudWxsO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBfX25vZGUgPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IG5vZGUoKSB7XG4gICAgcmV0dXJuIF9fbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQvc2V0IGNzcyBzdHlsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXVxuICAgKiBAcmV0dXJucyB7Vmlld3xTdHJpbmd9XG4gICAqL1xuICBjc3MocHJvcCwgdmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gICAgfVxuICAgIHRoaXMubm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Vmlld31cbiAgICovXG4gIGF0dHIoYXR0ck5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUocHJvcCwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldC9zZXQgY29udGVudCBvZiB2aWV3IGFuZCBldmFsdWF0ZSBoaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtodG1sU3RyaW5nXVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfFZpZXd9XG4gICAqL1xuICBodG1sKGh0bWxTdHJpbmcpIHtcbiAgICBpZiAoIWh0bWxTdHJpbmcpIHJldHVybiB0aGlzLm5vZGUuaW5uZXJIVE1MO1xuICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldC9zZXQgY29udGVudCBvZiB2aWV3IGFzIHJhd1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW3RleHRdXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Vmlld31cbiAgICovXG4gIGNvbnRlbnQodGV4dCkge1xuICAgIGlmICghdGV4dCkgcmV0dXJuIHRoaXMubm9kZS5pbm5lclRleHQ7XG4gICAgdGhpcy5ub2RlLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRhZ05hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtBcnJheTxIVE1MRWxlbWVudD59IGNoaWxkcmVuXG4gICAqIEByZXR1cm4ge1ZpZXd9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlVmlldyh0YWdOYW1lLCBhdHRyLCBkYXRhLCBjaGlsZHJlbikge1xuICAgIHZhciBlbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChhdHRyKSB7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGF0dHIpIHtcbiAgICAgICAgaWYgKHByb3AgIT0gJ3RleHQnKSB7XG4gICAgICAgICAgZWx0LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF0dHIudGV4dCkge1xuICAgICAgICBlbHQuaW5uZXJIVE1MID0gYXR0ci50ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBkYXRhKSB7XG4gICAgICAgIGVsdFtwcm9wXSA9IGRhdGFbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGVsdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBWaWV3KGVsdCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL0V2ZW50cy5qcydcbmltcG9ydCBBbmRyb2lkIGZyb20gJy4vQW5kcm9pZC5qcydcblxud2luZG93LlN5c3RlbSA9IHtcbiAgQW5kcm9pZCxcbiAgVXRpbHMsXG4gIEV2ZW50cyxcbiAgZ2V0VmlldzogVXRpbHMuZ2V0VmlldyxcbiAgZ2V0Vmlld0dyb3VwOiBVdGlscy5nZXRWaWV3R3JvdXBcbn07XG4iXSwibmFtZXMiOlsiX19jb25maWciLCJwYXNzd29yZCIsInZvbHVtZSIsInBvd2VyIiwiQW5kcm9pZCIsInZpZXdzIiwibGFzdENvbmZpZyIsIlZpZXdzIiwidm9sIiwic3RhdGUiLCJpbmRleE9mIiwiVG9vbHMiLCJjc3MiLCJVdGlscyIsImRlZmF1bHRJbml0RGljdCIsImNvbXBvc2VkIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJQaG9uZUV2ZW50IiwibmFtZSIsImV2ZW50SW5pdERpYyIsIm1lcmdlIiwiZWxlbWVudCIsIkV2ZW50IiwiUGhvbmVUaW1lRXZlbnQiLCJkYXlzIiwibW9udGhzIiwic2V0SW50ZXJ2YWwiLCJkIiwiRGF0ZSIsIl9ldiIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwiZGF5IiwiZ2V0RGF5IiwibnVtRGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0aW1lIiwiZGF0ZSIsImRpc3BhdGNoRXZlbnQiLCJQaG9uZUJhdHRlcnlFdmVudCIsImNyZWF0ZSIsImUiLCJsZXZlbCIsIk1hdGgiLCJyb3VuZCIsImNoYXJnaW5nIiwibmF2aWdhdG9yIiwiZ2V0QmF0dGVyeSIsInRoZW4iLCJiYXR0ZXJ5Iiwib25sZXZlbGNoYW5nZSIsInRhcmdldCIsIm9uY2hhcmdpbmdjaGFuZ2UiLCJQaG9uZU5ldHdvcmtFdmVudCIsImluZm8iLCJ0eXBlIiwiZWZmZWN0aXZlVHlwZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsIm1icHMiLCJkb3dubGluayIsInNhdmVEYXRhIiwib25saW5lIiwiY29ubmVjdGlvbiIsIm9uY2hhbmdlIiwiVmlldyIsInR5cGVPZiIsImFyZyIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJleGVjIiwiUmVnRXhwIiwiJDEiLCJ0b0xvd2VyQ2FzZSIsImEiLCJiIiwibGVuZ3RoIiwiaSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0VmlldyIsInNlbGVjdG9yIiwiZWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Vmlld0dyb3VwIiwiZWx0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsIm1hcCIsIl9fbm9kZSIsIm5vZGUiLCJIVE1MRWxlbWVudCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNldFByb3BlcnR5IiwiYXR0ck5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJodG1sU3RyaW5nIiwiaW5uZXJIVE1MIiwidGV4dCIsImlubmVyVGV4dCIsInRhZ05hbWUiLCJhdHRyIiwiZGF0YSIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJFdmVudHMiLCJ3aW5kb3ciLCJTeXN0ZW0iXSwic291cmNlUm9vdCI6IiJ9