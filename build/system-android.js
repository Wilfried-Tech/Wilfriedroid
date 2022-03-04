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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OffScreen)
/* harmony export */ });
/* harmony import */ var _Interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Interface.js */ "./src/Interface.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../View.js */ "./src/View.js");
/* harmony import */ var _layout_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.html */ "./src/Components/OffScreen/layout.html");




console.log(_layout_html__WEBPACK_IMPORTED_MODULE_2__["default"]);
class OffScreen extends _Interface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context, 'OffScreen', context.Views.screenOff, { showStatusBar: false });
    
  }

  boot() {
    if (this.context.power == 'off') {
      this.View.css('background', 'var(--window-boot-logo)').css('display', 'block');
      var _this = this;
      setTimeout(() => {
        this.View.css('background', 'var(--window-booting)');
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
/* harmony export */   "PhoneNetworkEvent": () => (/* binding */ PhoneNetworkEvent),
/* harmony export */   "PhoneLongClickEvent": () => (/* binding */ PhoneLongClickEvent)
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

class PhoneLongClickEvent extends PhoneEvent {
  constructor() {
    super('phone-longclick', { bubbles: true })
  }

  registerElement(element) {
    var start = 0,
      end = 0,
      diff = 0,
      duration = 1000;
    var id = null;

    function handler(e) {
      if (e.type == 'pointerdown') {
        start = Date.now()
        id = setInterval(() => {
          end = Date.now();
          if (start) diff = end - start;
          if (diff >= duration) {
            var e = new PhoneLongClickEvent();
            e.start = start
            e.end = end
            e.duration = diff

            element.dispatchEvent(e);
            if (id) clearInterval(id);
          }
        })
      }
        if (e.type != 'pointerdown') {
          start = 0
          end = 0
          diff = 0
          if (id) clearInterval(id);
        }
      }
      element.addEventListener('pointerdown', handler);
      element.addEventListener('touchmove', handler);
      element.addEventListener('pointerup', handler);
    }
  }


/***/ }),

/***/ "./src/Interface.js":
/*!**************************!*\
  !*** ./src/Interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  //return elt
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/**
 * @class
 */
class View {
  /**
   * @param {HTMLElement} node
   */
  constructor(node) {
    if (node instanceof HTMLElement) {
      this.__node = node;
    } else {
      return null;
    }
  }

  /**
   * @returns {HTMLElement}
   */
  get node() {
    return this.__node;
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
   * add an Event Listenner on element
   * @param {String} ev
   * @param {Function} callback
   */
   on(ev,callback){
     this.node.addEventListener(ev,callback);
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


/***/ }),

/***/ "./src/Components/OffScreen/layout.html":
/*!**********************************************!*\
  !*** ./src/Components/OffScreen/layout.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<input type=\"text\">\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsb0JBQW9CO0FBQ2pDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7VUNIbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDRTtBQUNIO0FBQ047QUFDK0I7O0FBRTNEO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0gsT0FBTztBQUNQLFFBQVE7QUFDUixXQUFXLDhDQUFhO0FBQ3hCLGdCQUFnQixtREFBa0I7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XaWxmcmllZHJvaWQvLi9zcmMvQW5kcm9pZC5qcyIsIndlYnBhY2s6Ly9XaWxmcmllZHJvaWQvLi9zcmMvQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9XaWxmcmllZHJvaWQvLi9zcmMvQ29tcG9uZW50cy9PZmZTY3JlZW4vT2ZmU2NyZWVuLmpzIiwid2VicGFjazovL1dpbGZyaWVkcm9pZC8uL3NyYy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vV2lsZnJpZWRyb2lkLy4vc3JjL0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9XaWxmcmllZHJvaWQvLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vV2lsZnJpZWRyb2lkLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vV2lsZnJpZWRyb2lkLy4vc3JjL0NvbXBvbmVudHMvT2ZmU2NyZWVuL2xheW91dC5odG1sIiwid2VicGFjazovL1dpbGZyaWVkcm9pZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XaWxmcmllZHJvaWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dpbGZyaWVkcm9pZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICovXG5cbmNvbnN0IF9fY29uZmlnID0ge1xuICBwYXNzd29yZDogJzEyMzQnLFxuICB2b2x1bWU6IDEwMCxcbiAgcG93ZXI6ICdvZmYnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZHJvaWQge1xuICBjb25zdHJ1Y3Rvcih2aWV3cywgbGFzdENvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5WaWV3cyA9IHZpZXdzO1xuICB9XG5cbiAgLy8gICAgIEdFVFRFUiBBTkQgU0VUVEVSXG5cbiAgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiBfX2NvbmZpZy5wYXNzd29yZFxuICB9XG5cbiAgZ2V0IHZvbHVtZSgpIHtcbiAgICByZXR1cm4gX19jb25maWcudm9sdW1lXG4gIH1cblxuICBzZXQgdm9sdW1lKHZvbCkge1xuICAgIGlmICh2b2wgPj0gMCAmJiB2b2wgPD0gMTAwKSB7XG4gICAgICBfX2NvbmZpZy52b2x1bWUgPSB2b2w7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvd2VyKCkge1xuICAgIHJldHVybiBfX2NvbmZpZy5wb3dlclxuICB9XG5cbiAgc2V0IHBvd2VyKHN0YXRlKSB7XG4gICAgaWYgKFsnb24nLCAnb2ZmJywgJ3NsZWVwJ10uaW5kZXhPZihzdGF0ZSkgPT0gLTEpIHJldHVyblxuICAgIHRoaXMuVmlld3MuVG9vbHMucG93ZXIuY3NzKCdjb2xvcicsIChzdGF0ZSA9PSAnb24nID8gJ2xpbWUnIDogKHN0YXRlID09ICdvZmYnID8gJ3JlZCcgOiAoc3RhdGUgPT0gJ3NsZWVwJyA/ICdvcmFuZ2UnIDogJycpKSkpO1xuICAgIF9fY29uZmlnLnBvd2VyID0gc3RhdGU7XG4gIH1cblxuICBzZXRDb250ZW50Vmlldyh2aWV3KSB7XG4gICAgLy90aGlzLlZpZXdzLnNjcmVlbi5ub2RlLmFwcGVuZENoaWxkKHZpZXcubm9kZSk7XG4gICAgLy9hbGVydCh2aWV3Lm5vZGUub3V0ZXJIVE1MKVxuICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBuYW1lLCB2aWV3KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc2hvd1N0YXR1c0JhciA9IHRydWVcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSBbXTtcbiAgICBpZiAodmlldyBpbnN0YW5jZW9mIFZpZXcpIHtcbiAgICAgIHRoaXMuVmlldyA9IHZpZXc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuVmlldyA9IFZpZXcuY3JlYXRlVmlldygnZGl2Jywge1xuICAgICAgICBpZDogdGhpcy5uYW1lLFxuICAgICAgICB0ZXh0OiB2aWV3XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQuc2V0Q29udGVudFZpZXcodGhpcy5WaWV3KTtcbiAgfVxuXG4gIGdldFZpZXcoc2VsZWN0b3IsIF9hbGwgPSBmYWxzZSkge1xuICAgIHZhciBlbHRzID0gdGhpcy5WaWV3Lm5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgaWYgKGVsdHMubGVuZ3RoICE9IDApIHtcbiAgICAgIGlmICghX2FsbCkgcmV0dXJuIG5ldyBWaWV3KGVsdHNbMF0pO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbHRzLCBlbHQgPT4gbmV3IFZpZXcoZWx0KSk7XG4gICAgfVxuICB9XG5cbiAgb25CYWNrKCkge31cblxuICBvbkNyZWF0ZSgpIHtcbiAgICB0aGlzLmluaXRQYXJhbXMoKTtcbiAgfVxuICBvblBhdXNlKCkge31cblxuICBvblN0b3AoKSB7fVxuXG4gIG9uUmVzdG9yZSgpIHtcbiAgICB0aGlzLmluaXRQYXJhbXMoKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uU3RvcCgpO1xuICAgIHRoaXMuVmlldy5yZW1vdmUoKTtcbiAgICAvL0FuZHJvaWQudW5yZWdpc3RlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgaW5pdFBhcmFtcygpIHt9XG5cbn1cbiIsImltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi4vLi4vSW50ZXJmYWNlLmpzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi4vLi4vVmlldy5qcydcbmltcG9ydCBjb250ZW50IGZyb20gJy4vbGF5b3V0Lmh0bWwnXG5cbmNvbnNvbGUubG9nKGNvbnRlbnQpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmU2NyZWVuIGV4dGVuZHMgSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQsICdPZmZTY3JlZW4nLCBjb250ZXh0LlZpZXdzLnNjcmVlbk9mZiwgeyBzaG93U3RhdHVzQmFyOiBmYWxzZSB9KTtcbiAgICBcbiAgfVxuXG4gIGJvb3QoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5wb3dlciA9PSAnb2ZmJykge1xuICAgICAgdGhpcy5WaWV3LmNzcygnYmFja2dyb3VuZCcsICd2YXIoLS13aW5kb3ctYm9vdC1sb2dvKScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLlZpZXcuY3NzKCdiYWNrZ3JvdW5kJywgJ3ZhcigtLXdpbmRvdy1ib290aW5nKScpO1xuICAgICAgICAvLyBfdGhpcy5kaXNwbGF5SW50ZXJmYWNlKCd3aW5kb3cnKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy9waG9uZS5zY3JlZW4ub2ZmLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAvL30pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL190aGlzLmRpc3BsYXlJbnRlcmZhY2UoJ2xvY2tzY3JlZW4nKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBfdGhpcy5jb250ZXh0LnBvd2VyID0gJ29uJztcbiAgICAgICAgICAvLyAgTWVzc2FnZS5saXN0ZW5DaGFuZ2UoKTtcbiAgICAgICAgICAvL30pXG4gICAgICAgIH0sIDExNzUwKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgdGhpcy5jb250ZXh0LnBvd2VyID0gJ2Jvb3RpbmcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcblxuLyoqXG4gKiBcbiAqL1xuY29uc3QgZGVmYXVsdEluaXREaWN0ID0ge1xuICBjb21wb3NlZDogZmFsc2UsXG4gIGJ1YmJsZXM6IGZhbHNlLFxuICBjYW5jZWxhYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBldmVudEluaXREaWMpIHtcbiAgICBzdXBlcihuYW1lLCBVdGlscy5tZXJnZShkZWZhdWx0SW5pdERpY3QsIGV2ZW50SW5pdERpYykpO1xuICB9XG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVUaW1lRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLXRpbWUnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIHZhciBkYXlzID0gWydkaW1hbmNoZScsICdsdW5kaScsICdtYXJkaScsICdtZXJjcmVkaScsICdqZXVkaScsICd2ZW5kcmVkaScsICdzYW1lZGknXTtcbiAgICB2YXIgbW9udGhzID0gWydqYW52aWVyJywgJ2ZldnJpZXInLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsICdqdWlsbGV0JywgJ2FvdXQnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZGVjZW1icmUnXTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lVGltZUV2ZW50KCk7XG4gICAgICBfZXYuaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgIF9ldi5taW51dGUgPSBkLmdldE1pbnV0ZXMoKTtcbiAgICAgIF9ldi5zZWNvbmQgPSBkLmdldFNlY29uZHMoKTtcbiAgICAgIF9ldi5kYXkgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgX2V2Lm51bURheSA9IGQuZ2V0RGF0ZSgpO1xuICAgICAgX2V2Lm1vbnRoID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgICBfZXYueWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIF9ldi50aW1lID0gKF9ldi5ob3VyID4gOSA/IF9ldi5ob3VyIDogJzAnICsgX2V2LmhvdXIpICsgJzonICsgKF9ldi5taW51dGUgPiA5ID8gX2V2Lm1pbnV0ZSA6ICcwJyArIF9ldi5taW51dGUpO1xuICAgICAgX2V2LmRhdGUgPSBgJHtfZXYuZGF5fS0ke19ldi5udW1EYXl9LSR7X2V2Lm1vbnRofS0ke19ldi55ZWFyfWA7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoX2V2KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUJhdHRlcnlFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtYmF0dGVyeScsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSk7XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShlKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lQmF0dGVyeUV2ZW50KCk7XG4gICAgICBfZXYubGV2ZWwgPSBNYXRoLnJvdW5kKGUubGV2ZWwgKiAxMDApO1xuICAgICAgX2V2LmNoYXJnaW5nID0gZS5jaGFyZ2luZ1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cblxuICAgIGlmICghKCdnZXRCYXR0ZXJ5JyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKHtcbiAgICAgICAgbGV2ZWw6IDEwMCxcbiAgICAgICAgY2hhcmdpbmc6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpLnRoZW4oYmF0dGVyeSA9PiB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGJhdHRlcnkpKVxuICAgICAgYmF0dGVyeS5vbmxldmVsY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGUudGFyZ2V0KSlcbiAgICAgIH1cbiAgICAgIGJhdHRlcnkub25jaGFyZ2luZ2NoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShlLnRhcmdldCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVOZXR3b3JrRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLW5ldHdvcmsnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShpbmZvKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lTmV0d29ya0V2ZW50KCk7XG4gICAgICBfZXYubmFtZSA9IGluZm8udHlwZTtcbiAgICAgIF9ldi50eXBlID0gaW5mby5lZmZlY3RpdmVUeXBlLnJlcGxhY2UoJ3Nsb3ctMmcnLCAnMmcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgX2V2Lm1icHMgPSAoaW5mby50eXBlICE9ICdub25lJykgPyBpbmZvLmRvd25saW5rIDogMDtcbiAgICAgIF9ldi5zYXZlRGF0YSA9IGluZm8uc2F2ZURhdGE7XG4gICAgICBfZXYub25saW5lID0gKGluZm8udHlwZSAhPSAnbm9uZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cblxuICAgIHZhciBpbmZvID0gbmF2aWdhdG9yLmNvbm5lY3Rpb247XG4gICAgaWYgKCFuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZSh7XG4gICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgZWZmZWN0aXZlVHlwZTogJ0gnLFxuICAgICAgICBkb3dubGluazogMCxcbiAgICAgICAgc2F2ZURhdGE6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYXRvci5jb25uZWN0aW9uLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpbmZvLnR5cGUpIHtcbiAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGluZm8pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGluZm8pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVMb25nQ2xpY2tFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtbG9uZ2NsaWNrJywgeyBidWJibGVzOiB0cnVlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciBzdGFydCA9IDAsXG4gICAgICBlbmQgPSAwLFxuICAgICAgZGlmZiA9IDAsXG4gICAgICBkdXJhdGlvbiA9IDEwMDA7XG4gICAgdmFyIGlkID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgaWYgKGUudHlwZSA9PSAncG9pbnRlcmRvd24nKSB7XG4gICAgICAgIHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgICBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBlbmQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIGlmIChzdGFydCkgZGlmZiA9IGVuZCAtIHN0YXJ0O1xuICAgICAgICAgIGlmIChkaWZmID49IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBQaG9uZUxvbmdDbGlja0V2ZW50KCk7XG4gICAgICAgICAgICBlLnN0YXJ0ID0gc3RhcnRcbiAgICAgICAgICAgIGUuZW5kID0gZW5kXG4gICAgICAgICAgICBlLmR1cmF0aW9uID0gZGlmZlxuXG4gICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICBpZiAoaWQpIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgICAgaWYgKGUudHlwZSAhPSAncG9pbnRlcmRvd24nKSB7XG4gICAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgICAgZW5kID0gMFxuICAgICAgICAgIGRpZmYgPSAwXG4gICAgICAgICAgaWYgKGlkKSBjbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZXIpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVyKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlcik7XG4gICAgfVxuICB9XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL0NvbXBvbmVudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyZmFjZSBleHRlbmRzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBuYW1lLCB2aWV3LCBwYXJhbSkge1xuICAgIHN1cGVyKGNvbnRleHQsIG5hbWUsIHZpZXcpO1xuICAgIHRoaXMuc2hvd1N0YXR1c0JhciA9IHBhcmFtLnNob3dTdGF0dXNCYXI7XG4gICAgdGhpcy5WaWV3Lm5vZGUuY2xhc3NMaXN0LmFkZCgnaW50ZXJmYWNlJyk7XG4gICAgdGhpcy5WaWV3LmNvbnRleHQgPSB0aGlzO1xuICAgIHN1cGVyLmluaXRQYXJhbXMoKTtcbiAgfVxuICAvKnN0YXRpYyBjcmVhdGUoJGludGVyZmFjZSkge1xuICAgIHZhciAkSW50ZXJmYWNlID0gSW50ZXJmYWNlWyRpbnRlcmZhY2UubmFtZVswXS50b1VwcGVyQ2FzZSgpICsgJGludGVyZmFjZS5uYW1lLnNsaWNlKDEpXTtcbiAgICBpZiAoJEludGVyZmFjZSkge1xuICAgICAgcmV0dXJuIG5ldyAkSW50ZXJmYWNlKCRpbnRlcmZhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gY3JlYXRlICR7JGludGVyZmFjZS5uYW1lfSBpbnRlcmZhY2VgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSovXG5cbn1cblxuLy9BbmRyb2lkVXRpbHMuSW50ZXJmYWNlID0gSW50ZXJmYWNlO1xuIiwiLyoqICAgICAgICAgICBVVElMUyAgICAgICAgICAgICAgICAqKi9cblxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJ1xuXG4vKipcbiAqIGdpdmUgdGhlIHR5cGUgb2YgYW4gdmFyaWFibGVcbiAqIEBwYXJhbSB7Kn0gYXJnXG4gKiByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlT2YoYXJnKSB7XG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZyk7XG4gIC9cXFtvYmplY3QgKFxcdyspXFxdL2kuZXhlYyhzKTtcbiAgcmV0dXJuIFJlZ0V4cC4kMS5yZXBsYWNlKC9IVE1MfEVsZW1lbnQvZywgJycpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogbWVyZ2UgMiBvciBtYW55IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gYlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGEsIC4uLmIpIHtcbiAgaWYgKCFhIHx8IHR5cGVPZihhKSAhPT0gJ29iamVjdCcgfHwgYi5sZW5ndGggPT0gMCkgcmV0dXJuIGE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgIE9iamVjdC5rZXlzKGJbaV0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGFba2V5XSA9PSBiW2ldW2tleV07XG4gICAgfSlcbiAgfVxuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBzZWxlY3QgYW4gw6lsw6ltZW50IGluIHRoZSBET01cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge1ZpZXd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3KHNlbGVjdG9yKSB7XG4gIHZhciBlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgLy9yZXR1cm4gZWx0XG4gIHJldHVybiAoIWVsdCkgPyBudWxsIDogbmV3IFZpZXcoZWx0KTtcbn1cblxuLyoqXG4gKiBzZWxlY3QgbXVsdGlwbGUgw6lsw6ltZW50IGluIHRoZSBET01cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge0FycmF5PFZpZXc+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dyb3VwKHNlbGVjdG9yKSB7XG4gIHZhciBlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGlmIChlbHRzLmxlbmd0aCA9PSAwIHx8ICFlbHRzKSByZXR1cm4gbnVsbFxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsdHMsIGVsdCA9PiBuZXcgVmlldyhlbHQpKTtcblxufVxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy5fX25vZGUgPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IG5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldC9zZXQgY3NzIHN0eWxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdXG4gICAqIEByZXR1cm5zIHtWaWV3fFN0cmluZ31cbiAgICovXG4gIGNzcyhwcm9wLCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQvc2V0IGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0ck5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAgICogQHJldHVybnMge1N0cmluZ3xWaWV3fVxuICAgKi9cbiAgYXR0cihhdHRyTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmdldEF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZShwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBjb250ZW50IG9mIHZpZXcgYW5kIGV2YWx1YXRlIGhpdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2h0bWxTdHJpbmddXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Vmlld31cbiAgICovXG4gIGh0bWwoaHRtbFN0cmluZykge1xuICAgIGlmICghaHRtbFN0cmluZykgcmV0dXJuIHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBjb250ZW50IG9mIHZpZXcgYXMgcmF3XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdGV4dF1cbiAgICogQHJldHVybnMge1N0cmluZ3xWaWV3fVxuICAgKi9cbiAgY29udGVudCh0ZXh0KSB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gdGhpcy5ub2RlLmlubmVyVGV4dDtcbiAgICB0aGlzLm5vZGUuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIGFkZCBhbiBFdmVudCBMaXN0ZW5uZXIgb24gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gICBvbihldixjYWxsYmFjayl7XG4gICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKGV2LGNhbGxiYWNrKTtcbiAgIH1cbiAgXG4gIC8qKlxuICAgKiBjcmVhdGUgYW4gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0clxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0FycmF5PEhUTUxFbGVtZW50Pn0gY2hpbGRyZW5cbiAgICogQHJldHVybiB7Vmlld31cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVWaWV3KHRhZ05hbWUsIGF0dHIsIGRhdGEsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gYXR0cikge1xuICAgICAgICBpZiAocHJvcCAhPSAndGV4dCcpIHtcbiAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXR0ci50ZXh0KSB7XG4gICAgICAgIGVsdC5pbm5lckhUTUwgPSBhdHRyLnRleHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGRhdGEpIHtcbiAgICAgICAgZWx0W3Byb3BdID0gZGF0YVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZWx0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFZpZXcoZWx0KTtcbiAgfVxufVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vVXRpbHMuanMnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9FdmVudHMuanMnXG5pbXBvcnQgQW5kcm9pZCBmcm9tICcuL0FuZHJvaWQuanMnXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnXG5pbXBvcnQgT2ZmU2NyZWVuIGZyb20gJy4vQ29tcG9uZW50cy9PZmZTY3JlZW4vT2ZmU2NyZWVuLmpzJ1xuXG53aW5kb3cuU3lzdGVtID0ge1xuICBBbmRyb2lkLFxuICBWaWV3LFxuICBDb21wb25lbnRzOiB7XG4gICAgT2ZmU2NyZWVuXG4gIH0sXG4gIFV0aWxzLFxuICBFdmVudHMsXG4gIGdldFZpZXc6IFV0aWxzLmdldFZpZXcsXG4gIGdldFZpZXdHcm91cDogVXRpbHMuZ2V0Vmlld0dyb3VwXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9