/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Android.js":
/*!************************!*\
  !*** ./src/Android.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Android)
/* harmony export */ });
/**
 * 
 */

const __config = {
  password: '1234',
  volume: 100,
  power: 'off'
}

class Android {
  constructor(views, lastConfig = {}) {
    this.Views = views;
  }

  //     GETTER AND SETTER

  get password() {
    return __config.password
  }

  get volume() {
    return __config.volume
  }

  set volume(vol) {
    if (vol >= 0 && vol <= 100) {
      __config.volume = vol;
    }
  }

  get power() {
    return __config.power
  }

  set power(state) {
    if (['on', 'off', 'sleep'].indexOf(state) == -1) return
    this.Views.Tools.power.css('color', (state == 'on' ? 'lime' : (state == 'off' ? 'red' : (state == 'sleep' ? 'orange' : ''))));
    __config.power = state;
  }

  setContentView(view) {
    //this.Views.screen.node.appendChild(view.node);
    //alert(view.node.outerHTML)
  }
}


/***/ }),

/***/ "./src/Components.js":
/*!***************************!*\
  !*** ./src/Components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Components)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./src/View.js");


class Components {
  constructor(context, name, view) {
    this.name = name;
    this.context = context;
    this.showStatusBar = true
    this.activities = [];
    if (view instanceof _View_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      this.View = view;
    } else {
      this.View = _View_js__WEBPACK_IMPORTED_MODULE_0__["default"].createView('div', {
        id: this.name,
        text: view
      });
    }

    this.context.setContentView(this.View);
  }

  getView(selector, _all = false) {
    var elts = this.View.node.querySelectorAll(selector);
    if (elts.length != 0) {
      if (!_all) return new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elts[0]);
      return Array.prototype.map.call(elts, elt => new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt));
    }
  }

  onBack() {}

  onCreate() {
    this.initParams();
  }
  onPause() {}

  onStop() {}

  onRestore() {
    this.initParams();
  }

  onDestroy() {
    this.onStop();
    this.View.remove();
    //Android.unregisterComponent();
  }

  initParams() {}

}


/***/ }),

/***/ "./src/Components/OffScreen/OffScreen.js":
/*!***********************************************!*\
  !*** ./src/Components/OffScreen/OffScreen.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OffScreen)
/* harmony export */ });
/* harmony import */ var _Interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Interface.js */ "./src/Interface.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../View.js */ "./src/View.js");
/* harmony import */ var _layout_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.html */ "./src/Components/OffScreen/layout.html");
/* harmony import */ var _layout_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_html__WEBPACK_IMPORTED_MODULE_2__);




class OffScreen extends _Interface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context, 'OffScreen', context.Views.screenOff, { showStatusBar: false });
    this.View.html('<input />').css('color', '#fff');
    alert(this.View.node.outerHTML);
  }

  boot() {
    var Views = this.context.Views;
    if (this.context.power == 'off') {
      Views.screenOff.css('background', 'var(--window-boot-logo)').css('display', 'block');
      var _this = this;
      setTimeout(() => {
        Views.screenOff.css('background', 'var(--window-booting)');
        // _this.displayInterface('window').then(() => {
        //phone.screen.off.css('display', 'block');
        //});
        setTimeout(() => {
          //_this.displayInterface('lockscreen').then(() => {
          _this.context.power = 'on';
          //  Message.listenChange();
          //})
        }, 11750);
      }, 1500);
      this.context.power = 'booting';
    }
  }
}


/***/ }),

/***/ "./src/Components/OffScreen/layout.html":
/*!**********************************************!*\
  !*** ./src/Components/OffScreen/layout.html ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneEvent": () => (/* binding */ PhoneEvent),
/* harmony export */   "PhoneTimeEvent": () => (/* binding */ PhoneTimeEvent),
/* harmony export */   "PhoneBatteryEvent": () => (/* binding */ PhoneBatteryEvent),
/* harmony export */   "PhoneNetworkEvent": () => (/* binding */ PhoneNetworkEvent)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");


/**
 * 
 */
const defaultInitDict = {
  composed: false,
  bubbles: false,
  cancelable: true
}

class PhoneEvent extends Event {
  constructor(name, eventInitDic) {
    super(name, _Utils_js__WEBPACK_IMPORTED_MODULE_0__.merge(defaultInitDict, eventInitDic));
  }
  registerElement(element) {}
}

class PhoneTimeEvent extends PhoneEvent {
  constructor() {
    super('phone-time', { cancelable: false })
  }

  registerElement(element) {
    super.registerElement(element);

    var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
    setInterval(() => {
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
      _ev.date = `${_ev.day}-${_ev.numDay}-${_ev.month}-${_ev.year}`;
      element.dispatchEvent(_ev);
    }, 1000);
    return element
  }
}

class PhoneBatteryEvent extends PhoneEvent {
  constructor() {
    super('phone-battery', { cancelable: false });
  }

  registerElement(element) {
    super.registerElement(element);

    function create(e) {
      var _ev = new PhoneBatteryEvent();
      _ev.level = Math.round(e.level * 100);
      _ev.charging = e.charging
      return _ev
    }

    if (!('getBattery' in navigator)) {
      element.dispatchEvent(create({
        level: 100,
        charging: true
      }));
      return
    }
    navigator.getBattery().then(battery => {
      element.dispatchEvent(create(battery))
      battery.onlevelchange = function(e) {
        element.dispatchEvent(create(e.target))
      }
      battery.onchargingchange = function(e) {
        element.dispatchEvent(create(e.target))
      }
    })
    return element;
  }
}

class PhoneNetworkEvent extends PhoneEvent {
  constructor() {
    super('phone-network', { cancelable: false })
  }

  registerElement(element) {
    super.registerElement(element);

    function create(info) {
      var _ev = new PhoneNetworkEvent();
      _ev.name = info.type;
      _ev.type = info.effectiveType.replace('slow-2g', '2g').toUpperCase();
      _ev.mbps = (info.type != 'none') ? info.downlink : 0;
      _ev.saveData = info.saveData;
      _ev.online = (info.type != 'none') ? true : false;
      return _ev
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
      navigator.connection.onchange = function() {
        if (info.type) {
          element.dispatchEvent(create(info))
        }
      }
      element.dispatchEvent(create(info))
    }
  }
}



/***/ }),

/***/ "./src/Interface.js":
/*!**************************!*\
  !*** ./src/Interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var _Components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components.js */ "./src/Components.js");


class Interface extends _Components_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context, name, view, param) {
    super(context, name, view);
    this.showStatusBar = param.showStatusBar;
    this.View.node.classList.add('interface');
    this.View.context = this;
    super.initParams();
  }
  /*static create($interface) {
    var $Interface = Interface[$interface.name[0].toUpperCase() + $interface.name.slice(1)];
    if ($Interface) {
      return new $Interface($interface);
    } else {
      console.error(`Unable to create ${$interface.name} interface`);
      return null;
    }
  }*/

}

//AndroidUtils.Interface = Interface;


/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function merge(a, ...b) {
  if (!a || typeOf(a) !== 'object' || b.length == 0) return a;
  for (var i = 0; i < b.length; i++) {
    Object.keys(b[i]).forEach(key => {
      a[key] == b[i][key];
    })
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
  return (!elt) ? null : new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt);
}

/**
 * select multiple élément in the DOM
 * @param {String} selector
 * @returns {Array<View>}
 */
function getViewGroup(selector) {
  var elts = document.querySelectorAll(selector);
  if (elts.length == 0 || !elts) return null
  return Array.prototype.map.call(elts, elt => new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt));

}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
var __node = null;

/**
 * @class
 */
class View {
  /**
   * @param {HTMLElement} node
   */
  constructor(node) {
    if (node instanceof HTMLElement) {
      __node = node;
    } else {
      return null;
    }
  }

  /**
   * @returns {HTMLElement}
   */
  get node() {
    return __node;
  }

  /**
   * get/set css style
   * @param {String} prop
   * @param {String} [value]
   * @returns {View|String}
   */
  css(prop, value) {
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
  attr(attrName, value) {
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
  html(htmlString) {
    if (!htmlString) return this.node.innerHTML;
    this.node.innerHTML = htmlString;
    return this;
  }

  /**
   * get/set content of view as raw
   * @param {String} [text]
   * @returns {String|View}
   */
  content(text) {
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
  static createView(tagName, attr, data, children) {
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
      children.forEach(child => {
        elt.appendChild(child);
      });
    }
    return new View(elt);
  }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");
/* harmony import */ var _Events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.js */ "./src/Events.js");
/* harmony import */ var _Android_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Android.js */ "./src/Android.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./src/View.js");
/* harmony import */ var _Components_OffScreen_OffScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/OffScreen/OffScreen.js */ "./src/Components/OffScreen/OffScreen.js");






window.System = {
  Android: _Android_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  View: _View_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  Components: {
    OffScreen: _Components_OffScreen_OffScreen_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  Utils: _Utils_js__WEBPACK_IMPORTED_MODULE_0__,
  Events: _Events_js__WEBPACK_IMPORTED_MODULE_1__,
  getView: _Utils_js__WEBPACK_IMPORTED_MODULE_0__.getView,
  getViewGroup: _Utils_js__WEBPACK_IMPORTED_MODULE_0__.getViewGroup
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7Ozs7OztVQzFHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDRTtBQUNIO0FBQ047QUFDK0I7O0FBRTNEO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0gsT0FBTztBQUNQLFFBQVE7QUFDUixXQUFXLDhDQUFhO0FBQ3hCLGdCQUFnQixtREFBa0I7QUFDbEMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9BbmRyb2lkLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9Db21wb25lbnRzLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9Db21wb25lbnRzL09mZlNjcmVlbi9PZmZTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkLy4vc3JjL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKi9cblxuY29uc3QgX19jb25maWcgPSB7XG4gIHBhc3N3b3JkOiAnMTIzNCcsXG4gIHZvbHVtZTogMTAwLFxuICBwb3dlcjogJ29mZidcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5kcm9pZCB7XG4gIGNvbnN0cnVjdG9yKHZpZXdzLCBsYXN0Q29uZmlnID0ge30pIHtcbiAgICB0aGlzLlZpZXdzID0gdmlld3M7XG4gIH1cblxuICAvLyAgICAgR0VUVEVSIEFORCBTRVRURVJcblxuICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIF9fY29uZmlnLnBhc3N3b3JkXG4gIH1cblxuICBnZXQgdm9sdW1lKCkge1xuICAgIHJldHVybiBfX2NvbmZpZy52b2x1bWVcbiAgfVxuXG4gIHNldCB2b2x1bWUodm9sKSB7XG4gICAgaWYgKHZvbCA+PSAwICYmIHZvbCA8PSAxMDApIHtcbiAgICAgIF9fY29uZmlnLnZvbHVtZSA9IHZvbDtcbiAgICB9XG4gIH1cblxuICBnZXQgcG93ZXIoKSB7XG4gICAgcmV0dXJuIF9fY29uZmlnLnBvd2VyXG4gIH1cblxuICBzZXQgcG93ZXIoc3RhdGUpIHtcbiAgICBpZiAoWydvbicsICdvZmYnLCAnc2xlZXAnXS5pbmRleE9mKHN0YXRlKSA9PSAtMSkgcmV0dXJuXG4gICAgdGhpcy5WaWV3cy5Ub29scy5wb3dlci5jc3MoJ2NvbG9yJywgKHN0YXRlID09ICdvbicgPyAnbGltZScgOiAoc3RhdGUgPT0gJ29mZicgPyAncmVkJyA6IChzdGF0ZSA9PSAnc2xlZXAnID8gJ29yYW5nZScgOiAnJykpKSk7XG4gICAgX19jb25maWcucG93ZXIgPSBzdGF0ZTtcbiAgfVxuXG4gIHNldENvbnRlbnRWaWV3KHZpZXcpIHtcbiAgICAvL3RoaXMuVmlld3Muc2NyZWVuLm5vZGUuYXBwZW5kQ2hpbGQodmlldy5ub2RlKTtcbiAgICAvL2FsZXJ0KHZpZXcubm9kZS5vdXRlckhUTUwpXG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHZpZXcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zaG93U3RhdHVzQmFyID0gdHJ1ZVxuICAgIHRoaXMuYWN0aXZpdGllcyA9IFtdO1xuICAgIGlmICh2aWV3IGluc3RhbmNlb2YgVmlldykge1xuICAgICAgdGhpcy5WaWV3ID0gdmlldztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5WaWV3ID0gVmlldy5jcmVhdGVWaWV3KCdkaXYnLCB7XG4gICAgICAgIGlkOiB0aGlzLm5hbWUsXG4gICAgICAgIHRleHQ6IHZpZXdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dC5zZXRDb250ZW50Vmlldyh0aGlzLlZpZXcpO1xuICB9XG5cbiAgZ2V0VmlldyhzZWxlY3RvciwgX2FsbCA9IGZhbHNlKSB7XG4gICAgdmFyIGVsdHMgPSB0aGlzLlZpZXcubm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBpZiAoZWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgaWYgKCFfYWxsKSByZXR1cm4gbmV3IFZpZXcoZWx0c1swXSk7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsdHMsIGVsdCA9PiBuZXcgVmlldyhlbHQpKTtcbiAgICB9XG4gIH1cblxuICBvbkJhY2soKSB7fVxuXG4gIG9uQ3JlYXRlKCkge1xuICAgIHRoaXMuaW5pdFBhcmFtcygpO1xuICB9XG4gIG9uUGF1c2UoKSB7fVxuXG4gIG9uU3RvcCgpIHt9XG5cbiAgb25SZXN0b3JlKCkge1xuICAgIHRoaXMuaW5pdFBhcmFtcygpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMub25TdG9wKCk7XG4gICAgdGhpcy5WaWV3LnJlbW92ZSgpO1xuICAgIC8vQW5kcm9pZC51bnJlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICBpbml0UGFyYW1zKCkge31cblxufVxuIiwiaW1wb3J0IEludGVyZmFjZSBmcm9tICcuLi8uLi9JbnRlcmZhY2UuanMnXG5pbXBvcnQgVmlldyBmcm9tICcuLi8uLi9WaWV3LmpzJ1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9sYXlvdXQuaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmU2NyZWVuIGV4dGVuZHMgSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQsICdPZmZTY3JlZW4nLCBjb250ZXh0LlZpZXdzLnNjcmVlbk9mZiwgeyBzaG93U3RhdHVzQmFyOiBmYWxzZSB9KTtcbiAgICB0aGlzLlZpZXcuaHRtbCgnPGlucHV0IC8+JykuY3NzKCdjb2xvcicsICcjZmZmJyk7XG4gICAgYWxlcnQodGhpcy5WaWV3Lm5vZGUub3V0ZXJIVE1MKTtcbiAgfVxuXG4gIGJvb3QoKSB7XG4gICAgdmFyIFZpZXdzID0gdGhpcy5jb250ZXh0LlZpZXdzO1xuICAgIGlmICh0aGlzLmNvbnRleHQucG93ZXIgPT0gJ29mZicpIHtcbiAgICAgIFZpZXdzLnNjcmVlbk9mZi5jc3MoJ2JhY2tncm91bmQnLCAndmFyKC0td2luZG93LWJvb3QtbG9nbyknKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgVmlld3Muc2NyZWVuT2ZmLmNzcygnYmFja2dyb3VuZCcsICd2YXIoLS13aW5kb3ctYm9vdGluZyknKTtcbiAgICAgICAgLy8gX3RoaXMuZGlzcGxheUludGVyZmFjZSgnd2luZG93JykudGhlbigoKSA9PiB7XG4gICAgICAgIC8vcGhvbmUuc2NyZWVuLm9mZi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgLy99KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy9fdGhpcy5kaXNwbGF5SW50ZXJmYWNlKCdsb2Nrc2NyZWVuJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgX3RoaXMuY29udGV4dC5wb3dlciA9ICdvbic7XG4gICAgICAgICAgLy8gIE1lc3NhZ2UubGlzdGVuQ2hhbmdlKCk7XG4gICAgICAgICAgLy99KVxuICAgICAgICB9LCAxMTc1MCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHRoaXMuY29udGV4dC5wb3dlciA9ICdib290aW5nJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vVXRpbHMuanMnXG5cbi8qKlxuICogXG4gKi9cbmNvbnN0IGRlZmF1bHRJbml0RGljdCA9IHtcbiAgY29tcG9zZWQ6IGZhbHNlLFxuICBidWJibGVzOiBmYWxzZSxcbiAgY2FuY2VsYWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZXZlbnRJbml0RGljKSB7XG4gICAgc3VwZXIobmFtZSwgVXRpbHMubWVyZ2UoZGVmYXVsdEluaXREaWN0LCBldmVudEluaXREaWMpKTtcbiAgfVxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBob25lVGltZUV2ZW50IGV4dGVuZHMgUGhvbmVFdmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwaG9uZS10aW1lJywgeyBjYW5jZWxhYmxlOiBmYWxzZSB9KVxuICB9XG5cbiAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBzdXBlci5yZWdpc3RlckVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB2YXIgZGF5cyA9IFsnZGltYW5jaGUnLCAnbHVuZGknLCAnbWFyZGknLCAnbWVyY3JlZGknLCAnamV1ZGknLCAndmVuZHJlZGknLCAnc2FtZWRpJ107XG4gICAgdmFyIG1vbnRocyA9IFsnamFudmllcicsICdmZXZyaWVyJywgJ21hcnMnLCAnYXZyaWwnLCAnbWFpJywgJ2p1aW4nLCAnanVpbGxldCcsICdhb3V0JywgJ3NlcHRlbWJyZScsICdvY3RvYnJlJywgJ25vdmVtYnJlJywgJ2RlY2VtYnJlJ107XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIF9ldiA9IG5ldyBQaG9uZVRpbWVFdmVudCgpO1xuICAgICAgX2V2LmhvdXIgPSBkLmdldEhvdXJzKCk7XG4gICAgICBfZXYubWludXRlID0gZC5nZXRNaW51dGVzKCk7XG4gICAgICBfZXYuc2Vjb25kID0gZC5nZXRTZWNvbmRzKCk7XG4gICAgICBfZXYuZGF5ID0gZGF5c1tkLmdldERheSgpXTtcbiAgICAgIF9ldi5udW1EYXkgPSBkLmdldERhdGUoKTtcbiAgICAgIF9ldi5tb250aCA9IG1vbnRoc1tkLmdldE1vbnRoKCldO1xuICAgICAgX2V2LnllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICBfZXYudGltZSA9IChfZXYuaG91ciA+IDkgPyBfZXYuaG91ciA6ICcwJyArIF9ldi5ob3VyKSArICc6JyArIChfZXYubWludXRlID4gOSA/IF9ldi5taW51dGUgOiAnMCcgKyBfZXYubWludXRlKTtcbiAgICAgIF9ldi5kYXRlID0gYCR7X2V2LmRheX0tJHtfZXYubnVtRGF5fS0ke19ldi5tb250aH0tJHtfZXYueWVhcn1gO1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KF9ldik7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVCYXR0ZXJ5RXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLWJhdHRlcnknLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBzdXBlci5yZWdpc3RlckVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoZSkge1xuICAgICAgdmFyIF9ldiA9IG5ldyBQaG9uZUJhdHRlcnlFdmVudCgpO1xuICAgICAgX2V2LmxldmVsID0gTWF0aC5yb3VuZChlLmxldmVsICogMTAwKTtcbiAgICAgIF9ldi5jaGFyZ2luZyA9IGUuY2hhcmdpbmdcbiAgICAgIHJldHVybiBfZXZcbiAgICB9XG5cbiAgICBpZiAoISgnZ2V0QmF0dGVyeScgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZSh7XG4gICAgICAgIGxldmVsOiAxMDAsXG4gICAgICAgIGNoYXJnaW5nOiB0cnVlXG4gICAgICB9KSk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbmF2aWdhdG9yLmdldEJhdHRlcnkoKS50aGVuKGJhdHRlcnkgPT4ge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShiYXR0ZXJ5KSlcbiAgICAgIGJhdHRlcnkub25sZXZlbGNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShlLnRhcmdldCkpXG4gICAgICB9XG4gICAgICBiYXR0ZXJ5Lm9uY2hhcmdpbmdjaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoZS50YXJnZXQpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBob25lTmV0d29ya0V2ZW50IGV4dGVuZHMgUGhvbmVFdmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwaG9uZS1uZXR3b3JrJywgeyBjYW5jZWxhYmxlOiBmYWxzZSB9KVxuICB9XG5cbiAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBzdXBlci5yZWdpc3RlckVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoaW5mbykge1xuICAgICAgdmFyIF9ldiA9IG5ldyBQaG9uZU5ldHdvcmtFdmVudCgpO1xuICAgICAgX2V2Lm5hbWUgPSBpbmZvLnR5cGU7XG4gICAgICBfZXYudHlwZSA9IGluZm8uZWZmZWN0aXZlVHlwZS5yZXBsYWNlKCdzbG93LTJnJywgJzJnJykudG9VcHBlckNhc2UoKTtcbiAgICAgIF9ldi5tYnBzID0gKGluZm8udHlwZSAhPSAnbm9uZScpID8gaW5mby5kb3dubGluayA6IDA7XG4gICAgICBfZXYuc2F2ZURhdGEgPSBpbmZvLnNhdmVEYXRhO1xuICAgICAgX2V2Lm9ubGluZSA9IChpbmZvLnR5cGUgIT0gJ25vbmUnKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiBfZXZcbiAgICB9XG4gICAgXG4gICAgdmFyIGluZm8gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbjtcbiAgICBpZiAoIW5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKHtcbiAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICBlZmZlY3RpdmVUeXBlOiAnSCcsXG4gICAgICAgIGRvd25saW5rOiAwLFxuICAgICAgICBzYXZlRGF0YTogZmFsc2VcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2aWdhdG9yLmNvbm5lY3Rpb24ub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGluZm8udHlwZSkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoaW5mbykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoaW5mbykpXG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vQ29tcG9uZW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJmYWNlIGV4dGVuZHMgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHZpZXcsIHBhcmFtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgbmFtZSwgdmlldyk7XG4gICAgdGhpcy5zaG93U3RhdHVzQmFyID0gcGFyYW0uc2hvd1N0YXR1c0JhcjtcbiAgICB0aGlzLlZpZXcubm9kZS5jbGFzc0xpc3QuYWRkKCdpbnRlcmZhY2UnKTtcbiAgICB0aGlzLlZpZXcuY29udGV4dCA9IHRoaXM7XG4gICAgc3VwZXIuaW5pdFBhcmFtcygpO1xuICB9XG4gIC8qc3RhdGljIGNyZWF0ZSgkaW50ZXJmYWNlKSB7XG4gICAgdmFyICRJbnRlcmZhY2UgPSBJbnRlcmZhY2VbJGludGVyZmFjZS5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyAkaW50ZXJmYWNlLm5hbWUuc2xpY2UoMSldO1xuICAgIGlmICgkSW50ZXJmYWNlKSB7XG4gICAgICByZXR1cm4gbmV3ICRJbnRlcmZhY2UoJGludGVyZmFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgJHskaW50ZXJmYWNlLm5hbWV9IGludGVyZmFjZWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9Ki9cblxufVxuXG4vL0FuZHJvaWRVdGlscy5JbnRlcmZhY2UgPSBJbnRlcmZhY2U7XG4iLCIvKiogICAgICAgICAgIFVUSUxTICAgICAgICAgICAgICAgICoqL1xuXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnXG5cbi8qKlxuICogZ2l2ZSB0aGUgdHlwZSBvZiBhbiB2YXJpYWJsZVxuICogQHBhcmFtIHsqfSBhcmdcbiAqIHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZihhcmcpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKTtcbiAgL1xcW29iamVjdCAoXFx3KylcXF0vaS5leGVjKHMpO1xuICByZXR1cm4gUmVnRXhwLiQxLnJlcGxhY2UoL0hUTUx8RWxlbWVudC9nLCAnJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBtZXJnZSAyIG9yIG1hbnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBiXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYSwgLi4uYikge1xuICBpZiAoIWEgfHwgdHlwZU9mKGEpICE9PSAnb2JqZWN0JyB8fCBiLmxlbmd0aCA9PSAwKSByZXR1cm4gYTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgT2JqZWN0LmtleXMoYltpXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgYVtrZXldID09IGJbaV1ba2V5XTtcbiAgICB9KVxuICB9XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIHNlbGVjdCBhbiDDqWzDqW1lbnQgaW4gdGhlIERPTVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7Vmlld31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXcoc2VsZWN0b3IpIHtcbiAgdmFyIGVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gKCFlbHQpID8gbnVsbCA6IG5ldyBWaWV3KGVsdCk7XG59XG5cbi8qKlxuICogc2VsZWN0IG11bHRpcGxlIMOpbMOpbWVudCBpbiB0aGUgRE9NXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtBcnJheTxWaWV3Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdHcm91cChzZWxlY3Rvcikge1xuICB2YXIgZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBpZiAoZWx0cy5sZW5ndGggPT0gMCB8fCAhZWx0cykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbHRzLCBlbHQgPT4gbmV3IFZpZXcoZWx0KSk7XG5cbn0iLCJ2YXIgX19ub2RlID0gbnVsbDtcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgX19ub2RlID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiBfX25vZGU7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBjc3Mgc3R5bGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAgICogQHJldHVybnMge1ZpZXd8U3RyaW5nfVxuICAgKi9cbiAgY3NzKHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICAgIH1cbiAgICB0aGlzLm5vZGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldC9zZXQgYXR0cmlidXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfFZpZXd9XG4gICAqL1xuICBhdHRyKGF0dHJOYW1lLCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKHByb3AsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQvc2V0IGNvbnRlbnQgb2YgdmlldyBhbmQgZXZhbHVhdGUgaGl0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbaHRtbFN0cmluZ11cbiAgICogQHJldHVybnMge1N0cmluZ3xWaWV3fVxuICAgKi9cbiAgaHRtbChodG1sU3RyaW5nKSB7XG4gICAgaWYgKCFodG1sU3RyaW5nKSByZXR1cm4gdGhpcy5ub2RlLmlubmVySFRNTDtcbiAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQvc2V0IGNvbnRlbnQgb2YgdmlldyBhcyByYXdcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt0ZXh0XVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfFZpZXd9XG4gICAqL1xuICBjb250ZW50KHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHJldHVybiB0aGlzLm5vZGUuaW5uZXJUZXh0O1xuICAgIHRoaXMubm9kZS5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0YWdOYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEBwYXJhbSB7QXJyYXk8SFRNTEVsZW1lbnQ+fSBjaGlsZHJlblxuICAgKiBAcmV0dXJuIHtWaWV3fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVZpZXcodGFnTmFtZSwgYXR0ciwgZGF0YSwgY2hpbGRyZW4pIHtcbiAgICB2YXIgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoYXR0cikge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBhdHRyKSB7XG4gICAgICAgIGlmIChwcm9wICE9ICd0ZXh0Jykge1xuICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cltwcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhdHRyLnRleHQpIHtcbiAgICAgICAgZWx0LmlubmVySFRNTCA9IGF0dHIudGV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gZGF0YSkge1xuICAgICAgICBlbHRbcHJvcF0gPSBkYXRhW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBlbHQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVmlldyhlbHQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL0V2ZW50cy5qcydcbmltcG9ydCBBbmRyb2lkIGZyb20gJy4vQW5kcm9pZC5qcydcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcydcbmltcG9ydCBPZmZTY3JlZW4gZnJvbSAnLi9Db21wb25lbnRzL09mZlNjcmVlbi9PZmZTY3JlZW4uanMnXG5cbndpbmRvdy5TeXN0ZW0gPSB7XG4gIEFuZHJvaWQsXG4gIFZpZXcsXG4gIENvbXBvbmVudHM6IHtcbiAgICBPZmZTY3JlZW5cbiAgfSxcbiAgVXRpbHMsXG4gIEV2ZW50cyxcbiAgZ2V0VmlldzogVXRpbHMuZ2V0VmlldyxcbiAgZ2V0Vmlld0dyb3VwOiBVdGlscy5nZXRWaWV3R3JvdXBcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9