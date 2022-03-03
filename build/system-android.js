/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/OffScreen/layout.html":
/*!**********************************************!*\
  !*** ./src/Components/OffScreen/layout.html ***!
  \**********************************************/
/***/ (() => {



/***/ }),

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
  }, {
    key: "setContentView",
    value: function setContentView(view) {
      this.Views.screen.node.appendChild(view.node);
    }
  }]);

  return Android;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Components = /*#__PURE__*/function () {
  function Components(context, name, view) {
    _classCallCheck(this, Components);

    this.name = name;
    this.context = context;
    this.showStatusBar = true;
    this.activities = [];
    this.View = _View_js__WEBPACK_IMPORTED_MODULE_0__["default"].createView('div', {
      id: this.name,
      text: view
    });
    this.context.setContentView(this.View);
  }

  _createClass(Components, [{
    key: "getView",
    value: function getView(selector) {
      var _all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var elts = this.View.node.querySelectorAll(selector);

      if (elts.length != 0) {
        if (!_all) return new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elts[0]);
        return Array.prototype.map.call(elts, function (elt) {
          return new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](elt);
        });
      }
    }
  }, {
    key: "onBack",
    value: function onBack() {}
  }, {
    key: "onCreate",
    value: function onCreate() {
      this.initParams();
    }
  }, {
    key: "onPause",
    value: function onPause() {}
  }, {
    key: "onStop",
    value: function onStop() {}
  }, {
    key: "onRestore",
    value: function onRestore() {
      this.initParams();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.onStop();
      this.View.remove(); //Android.unregisterComponent();
    }
  }, {
    key: "initParams",
    value: function initParams() {}
  }]);

  return Components;
}();



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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var OffScreen = /*#__PURE__*/function (_Interface) {
  _inherits(OffScreen, _Interface);

  var _super = _createSuper(OffScreen);

  function OffScreen(context) {
    var _this2;

    _classCallCheck(this, OffScreen);

    _this2 = _super.call(this, context, 'OffScreen', (_layout_html__WEBPACK_IMPORTED_MODULE_2___default()), {
      showStatusBar: false
    });
    _this2.View = context.Views.screenOff;

    _this2.View.html('<input />').css('color', '#fff');

    alert(_this2.View.node.outerHTML);
    return _this2;
  }

  _createClass(OffScreen, [{
    key: "boot",
    value: function boot() {
      var Views = this.context.Views;

      if (this.context.power == 'off') {
        Views.screenOff.css('background', 'var(--window-boot-logo)').css('display', 'block');

        var _this = this;

        setTimeout(function () {
          Views.screenOff.css('background', 'var(--window-booting)'); // _this.displayInterface('window').then(() => {
          //phone.screen.off.css('display', 'block');
          //});

          setTimeout(function () {
            //_this.displayInterface('lockscreen').then(() => {
            _this.context.power = 'on'; //  Message.listenChange();
            //})
          }, 11750);
        }, 1500);
        this.context.power = 'booting';
      }
    }
  }]);

  return OffScreen;
}(_Interface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Interface = /*#__PURE__*/function (_Components) {
  _inherits(Interface, _Components);

  var _super = _createSuper(Interface);

  function Interface(context, name, view, param) {
    var _thisSuper, _this;

    _classCallCheck(this, Interface);

    _this = _super.call(this, context, name, view);
    _this.showStatusBar = param.showStatusBar;

    _this.View.node.classList.add('interface');

    _this.View.context = _assertThisInitialized(_this);

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Interface.prototype)), "initParams", _thisSuper).call(_thisSuper);

    return _this;
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


  return _createClass(Interface);
}(_Components_js__WEBPACK_IMPORTED_MODULE_0__["default"]); //AndroidUtils.Interface = Interface;




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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFtSCxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7QUFDZHBKLEVBQUFBLE9BQU8sRUFBUEEsbURBRGM7QUFFZGEsRUFBQUEsSUFBSSxFQUFKQSxnREFGYztBQUdkQyxFQUFBQSxVQUFVLEVBQUU7QUFDVndCLElBQUFBLFNBQVMsRUFBVEEsMEVBQVNBO0FBREMsR0FIRTtBQU1kTyxFQUFBQSxLQUFLLEVBQUxBLHNDQU5jO0FBT2RxRyxFQUFBQSxNQUFNLEVBQU5BLHVDQVBjO0FBUWR2QixFQUFBQSxPQUFPLEVBQUU5RSw4Q0FSSztBQVNkaUYsRUFBQUEsWUFBWSxFQUFFakYsbURBQWtCaUY7QUFUbEIsQ0FBaEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9BbmRyb2lkLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9Db21wb25lbnRzLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9Db21wb25lbnRzL09mZlNjcmVlbi9PZmZTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkLy4vc3JjL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3dpbGZyaWVkcm9pZC8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly93aWxmcmllZHJvaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dpbGZyaWVkcm9pZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2lsZnJpZWRyb2lkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKi9cblxuY29uc3QgX19jb25maWcgPSB7XG4gIHBhc3N3b3JkOiAnMTIzNCcsXG4gIHZvbHVtZTogMTAwLFxuICBwb3dlcjogJ29mZidcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5kcm9pZCB7XG4gIGNvbnN0cnVjdG9yKHZpZXdzLCBsYXN0Q29uZmlnID0ge30pIHtcbiAgICB0aGlzLlZpZXdzID0gdmlld3M7XG4gIH1cblxuICAvLyAgICAgR0VUVEVSIEFORCBTRVRURVJcblxuICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIF9fY29uZmlnLnBhc3N3b3JkXG4gIH1cblxuICBnZXQgdm9sdW1lKCkge1xuICAgIHJldHVybiBfX2NvbmZpZy52b2x1bWVcbiAgfVxuXG4gIHNldCB2b2x1bWUodm9sKSB7XG4gICAgaWYgKHZvbCA+PSAwICYmIHZvbCA8PSAxMDApIHtcbiAgICAgIF9fY29uZmlnLnZvbHVtZSA9IHZvbDtcbiAgICB9XG4gIH1cblxuICBnZXQgcG93ZXIoKSB7XG4gICAgcmV0dXJuIF9fY29uZmlnLnBvd2VyXG4gIH1cblxuICBzZXQgcG93ZXIoc3RhdGUpIHtcbiAgICBpZiAoWydvbicsICdvZmYnLCAnc2xlZXAnXS5pbmRleE9mKHN0YXRlKSA9PSAtMSkgcmV0dXJuXG4gICAgdGhpcy5WaWV3cy5Ub29scy5wb3dlci5jc3MoJ2NvbG9yJywgKHN0YXRlID09ICdvbicgPyAnbGltZScgOiAoc3RhdGUgPT0gJ29mZicgPyAncmVkJyA6IChzdGF0ZSA9PSAnc2xlZXAnID8gJ29yYW5nZScgOiAnJykpKSk7XG4gICAgX19jb25maWcucG93ZXIgPSBzdGF0ZTtcbiAgfVxuICBcbiAgc2V0Q29udGVudFZpZXcodmlldyl7XG4gICAgdGhpcy5WaWV3cy5zY3JlZW4ubm9kZS5hcHBlbmRDaGlsZCh2aWV3Lm5vZGUpXG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHZpZXcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zaG93U3RhdHVzQmFyID0gdHJ1ZVxuICAgIHRoaXMuYWN0aXZpdGllcyA9IFtdO1xuICAgIHRoaXMuVmlldyA9IFZpZXcuY3JlYXRlVmlldygnZGl2Jywge1xuICAgICAgaWQ6IHRoaXMubmFtZSxcbiAgICAgIHRleHQ6IHZpZXdcbiAgICB9KTtcblxuICAgIHRoaXMuY29udGV4dC5zZXRDb250ZW50Vmlldyh0aGlzLlZpZXcpO1xuICB9XG5cbiAgZ2V0VmlldyhzZWxlY3RvciwgX2FsbCA9IGZhbHNlKSB7XG4gICAgdmFyIGVsdHMgPSB0aGlzLlZpZXcubm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBpZiAoZWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgaWYgKCFfYWxsKSByZXR1cm4gbmV3IFZpZXcoZWx0c1swXSk7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsdHMsIGVsdCA9PiBuZXcgVmlldyhlbHQpKTtcbiAgICB9XG4gIH1cblxuICBvbkJhY2soKSB7fVxuXG4gIG9uQ3JlYXRlKCkge1xuICAgIHRoaXMuaW5pdFBhcmFtcygpO1xuICB9XG4gIG9uUGF1c2UoKSB7fVxuXG4gIG9uU3RvcCgpIHt9XG5cbiAgb25SZXN0b3JlKCkge1xuICAgIHRoaXMuaW5pdFBhcmFtcygpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMub25TdG9wKCk7XG4gICAgdGhpcy5WaWV3LnJlbW92ZSgpO1xuICAgIC8vQW5kcm9pZC51bnJlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICBpbml0UGFyYW1zKCkge31cblxufVxuIiwiaW1wb3J0IEludGVyZmFjZSBmcm9tICcuLi8uLi9JbnRlcmZhY2UuanMnXG5pbXBvcnQgVmlldyBmcm9tICcuLi8uLi9WaWV3LmpzJ1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9sYXlvdXQuaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmU2NyZWVuIGV4dGVuZHMgSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQsICdPZmZTY3JlZW4nLCBjb250ZW50LCB7IHNob3dTdGF0dXNCYXI6IGZhbHNlIH0pO1xuICAgIHRoaXMuVmlldyA9IGNvbnRleHQuVmlld3Muc2NyZWVuT2ZmO1xuICAgIHRoaXMuVmlldy5odG1sKCc8aW5wdXQgLz4nKS5jc3MoJ2NvbG9yJywnI2ZmZicpO1xuICAgIGFsZXJ0KHRoaXMuVmlldy5ub2RlLm91dGVySFRNTCk7XG4gIH1cblxuICBib290KCkge1xuICAgIHZhciBWaWV3cyA9IHRoaXMuY29udGV4dC5WaWV3cztcbiAgICBpZiAodGhpcy5jb250ZXh0LnBvd2VyID09ICdvZmYnKSB7XG4gICAgICBWaWV3cy5zY3JlZW5PZmYuY3NzKCdiYWNrZ3JvdW5kJywgJ3ZhcigtLXdpbmRvdy1ib290LWxvZ28pJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFZpZXdzLnNjcmVlbk9mZi5jc3MoJ2JhY2tncm91bmQnLCAndmFyKC0td2luZG93LWJvb3RpbmcpJyk7XG4gICAgICAgIC8vIF90aGlzLmRpc3BsYXlJbnRlcmZhY2UoJ3dpbmRvdycpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvL3Bob25lLnNjcmVlbi5vZmYuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIC8vfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vX3RoaXMuZGlzcGxheUludGVyZmFjZSgnbG9ja3NjcmVlbicpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgX3RoaXMuY29udGV4dC5wb3dlciA9ICdvbic7XG4gICAgICAgICAgLy8gIE1lc3NhZ2UubGlzdGVuQ2hhbmdlKCk7XG4gICAgICAgICAgLy99KVxuICAgICAgICB9LCAxMTc1MCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHRoaXMuY29udGV4dC5wb3dlciA9ICdib290aW5nJztcbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9VdGlscy5qcydcblxuLyoqXG4gKiBcbiAqL1xuY29uc3QgZGVmYXVsdEluaXREaWN0ID0ge1xuICBjb21wb3NlZDogZmFsc2UsXG4gIGJ1YmJsZXM6IGZhbHNlLFxuICBjYW5jZWxhYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBldmVudEluaXREaWMpIHtcbiAgICBzdXBlcihuYW1lLCBVdGlscy5tZXJnZShkZWZhdWx0SW5pdERpY3QsIGV2ZW50SW5pdERpYykpO1xuICB9XG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVUaW1lRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLXRpbWUnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIHZhciBkYXlzID0gWydkaW1hbmNoZScsICdsdW5kaScsICdtYXJkaScsICdtZXJjcmVkaScsICdqZXVkaScsICd2ZW5kcmVkaScsICdzYW1lZGknXTtcbiAgICB2YXIgbW9udGhzID0gWydqYW52aWVyJywgJ2ZldnJpZXInLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsICdqdWlsbGV0JywgJ2FvdXQnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZGVjZW1icmUnXTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lVGltZUV2ZW50KCk7XG4gICAgICBfZXYuaG91ciA9IGQuZ2V0SG91cnMoKTtcbiAgICAgIF9ldi5taW51dGUgPSBkLmdldE1pbnV0ZXMoKTtcbiAgICAgIF9ldi5zZWNvbmQgPSBkLmdldFNlY29uZHMoKTtcbiAgICAgIF9ldi5kYXkgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgX2V2Lm51bURheSA9IGQuZ2V0RGF0ZSgpO1xuICAgICAgX2V2Lm1vbnRoID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgICBfZXYueWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgIF9ldi50aW1lID0gKF9ldi5ob3VyID4gOSA/IF9ldi5ob3VyIDogJzAnICsgX2V2LmhvdXIpICsgJzonICsgKF9ldi5taW51dGUgPiA5ID8gX2V2Lm1pbnV0ZSA6ICcwJyArIF9ldi5taW51dGUpO1xuICAgICAgX2V2LmRhdGUgPSBgJHtfZXYuZGF5fS0ke19ldi5udW1EYXl9LSR7X2V2Lm1vbnRofS0ke19ldi55ZWFyfWA7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoX2V2KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUJhdHRlcnlFdmVudCBleHRlbmRzIFBob25lRXZlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGhvbmUtYmF0dGVyeScsIHsgY2FuY2VsYWJsZTogZmFsc2UgfSk7XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShlKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lQmF0dGVyeUV2ZW50KCk7XG4gICAgICBfZXYubGV2ZWwgPSBNYXRoLnJvdW5kKGUubGV2ZWwgKiAxMDApO1xuICAgICAgX2V2LmNoYXJnaW5nID0gZS5jaGFyZ2luZ1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cblxuICAgIGlmICghKCdnZXRCYXR0ZXJ5JyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKHtcbiAgICAgICAgbGV2ZWw6IDEwMCxcbiAgICAgICAgY2hhcmdpbmc6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpLnRoZW4oYmF0dGVyeSA9PiB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGJhdHRlcnkpKVxuICAgICAgYmF0dGVyeS5vbmxldmVsY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlKGUudGFyZ2V0KSlcbiAgICAgIH1cbiAgICAgIGJhdHRlcnkub25jaGFyZ2luZ2NoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShlLnRhcmdldCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVOZXR3b3JrRXZlbnQgZXh0ZW5kcyBQaG9uZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3Bob25lLW5ldHdvcmsnLCB7IGNhbmNlbGFibGU6IGZhbHNlIH0pXG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyRWxlbWVudChlbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShpbmZvKSB7XG4gICAgICB2YXIgX2V2ID0gbmV3IFBob25lTmV0d29ya0V2ZW50KCk7XG4gICAgICBfZXYubmFtZSA9IGluZm8udHlwZTtcbiAgICAgIF9ldi50eXBlID0gaW5mby5lZmZlY3RpdmVUeXBlLnJlcGxhY2UoJ3Nsb3ctMmcnLCAnMmcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgX2V2Lm1icHMgPSAoaW5mby50eXBlICE9ICdub25lJykgPyBpbmZvLmRvd25saW5rIDogMDtcbiAgICAgIF9ldi5zYXZlRGF0YSA9IGluZm8uc2F2ZURhdGE7XG4gICAgICBfZXYub25saW5lID0gKGluZm8udHlwZSAhPSAnbm9uZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIF9ldlxuICAgIH1cbiAgICBcbiAgICB2YXIgaW5mbyA9IG5hdmlnYXRvci5jb25uZWN0aW9uO1xuICAgIGlmICghbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGUoe1xuICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgIGVmZmVjdGl2ZVR5cGU6ICdIJyxcbiAgICAgICAgZG93bmxpbms6IDAsXG4gICAgICAgIHNhdmVEYXRhOiBmYWxzZVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0b3IuY29ubmVjdGlvbi5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaW5mby50eXBlKSB7XG4gICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZShpbmZvKSlcbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9Db21wb25lbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmZhY2UgZXh0ZW5kcyBDb21wb25lbnRzIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbmFtZSwgdmlldywgcGFyYW0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBuYW1lLCB2aWV3KTtcbiAgICB0aGlzLnNob3dTdGF0dXNCYXIgPSBwYXJhbS5zaG93U3RhdHVzQmFyO1xuICAgIHRoaXMuVmlldy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2ludGVyZmFjZScpO1xuICAgIHRoaXMuVmlldy5jb250ZXh0ID0gdGhpcztcbiAgICBzdXBlci5pbml0UGFyYW1zKCk7XG4gIH1cbiAgLypzdGF0aWMgY3JlYXRlKCRpbnRlcmZhY2UpIHtcbiAgICB2YXIgJEludGVyZmFjZSA9IEludGVyZmFjZVskaW50ZXJmYWNlLm5hbWVbMF0udG9VcHBlckNhc2UoKSArICRpbnRlcmZhY2UubmFtZS5zbGljZSgxKV07XG4gICAgaWYgKCRJbnRlcmZhY2UpIHtcbiAgICAgIHJldHVybiBuZXcgJEludGVyZmFjZSgkaW50ZXJmYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSAkeyRpbnRlcmZhY2UubmFtZX0gaW50ZXJmYWNlYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0qL1xuXG59XG5cbi8vQW5kcm9pZFV0aWxzLkludGVyZmFjZSA9IEludGVyZmFjZTtcbiIsIi8qKiAgICAgICAgICAgVVRJTFMgICAgICAgICAgICAgICAgKiovXG5cbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcydcblxuLyoqXG4gKiBnaXZlIHRoZSB0eXBlIG9mIGFuIHZhcmlhYmxlXG4gKiBAcGFyYW0geyp9IGFyZ1xuICogcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGFyZykge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpO1xuICAvXFxbb2JqZWN0IChcXHcrKVxcXS9pLmV4ZWMocyk7XG4gIHJldHVybiBSZWdFeHAuJDEucmVwbGFjZSgvSFRNTHxFbGVtZW50L2csICcnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIG1lcmdlIDIgb3IgbWFueSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhLCAuLi5iKSB7XG4gIGlmICghYSB8fCB0eXBlT2YoYSkgIT09ICdvYmplY3QnIHx8IGIubGVuZ3RoID09IDApIHJldHVybiBhO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICBPYmplY3Qua2V5cyhiW2ldKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBhW2tleV0gPT0gYltpXVtrZXldO1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogc2VsZWN0IGFuIMOpbMOpbWVudCBpbiB0aGUgRE9NXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtWaWV3fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlldyhzZWxlY3Rvcikge1xuICB2YXIgZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmICghZWx0KSByZXR1cm4gbnVsbFxuICByZXR1cm4gbmV3IFZpZXcoZWx0KTtcbn1cblxuLyoqXG4gKiBzZWxlY3QgbXVsdGlwbGUgw6lsw6ltZW50IGluIHRoZSBET01cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge0FycmF5PFZpZXc+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dyb3VwKHNlbGVjdG9yKSB7XG4gIHZhciBlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGlmIChlbHRzLmxlbmd0aCA9PSAwIHx8ICFlbHRzKSByZXR1cm4gbnVsbFxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsdHMsIGVsdCA9PiBuZXcgVmlldyhlbHQpKTtcblxufVxuIiwidmFyIF9fbm9kZSA9IG51bGw7XG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgKi9cbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIF9fbm9kZSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gX19ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldC9zZXQgY3NzIHN0eWxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdXG4gICAqIEByZXR1cm5zIHtWaWV3fFN0cmluZ31cbiAgICovXG4gIGNzcyhwcm9wLCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQvc2V0IGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0ck5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAgICogQHJldHVybnMge1N0cmluZ3xWaWV3fVxuICAgKi9cbiAgYXR0cihhdHRyTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmdldEF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZShwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBjb250ZW50IG9mIHZpZXcgYW5kIGV2YWx1YXRlIGhpdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2h0bWxTdHJpbmddXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Vmlld31cbiAgICovXG4gIGh0bWwoaHRtbFN0cmluZykge1xuICAgIGlmICghaHRtbFN0cmluZykgcmV0dXJuIHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0L3NldCBjb250ZW50IG9mIHZpZXcgYXMgcmF3XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdGV4dF1cbiAgICogQHJldHVybnMge1N0cmluZ3xWaWV3fVxuICAgKi9cbiAgY29udGVudCh0ZXh0KSB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gdGhpcy5ub2RlLmlubmVyVGV4dDtcbiAgICB0aGlzLm5vZGUuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYW4gZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0clxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge0FycmF5PEhUTUxFbGVtZW50Pn0gY2hpbGRyZW5cbiAgICogQHJldHVybiB7Vmlld31cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVWaWV3KHRhZ05hbWUsIGF0dHIsIGRhdGEsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gYXR0cikge1xuICAgICAgICBpZiAocHJvcCAhPSAndGV4dCcpIHtcbiAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXR0ci50ZXh0KSB7XG4gICAgICAgIGVsdC5pbm5lckhUTUwgPSBhdHRyLnRleHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGRhdGEpIHtcbiAgICAgICAgZWx0W3Byb3BdID0gZGF0YVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZWx0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFZpZXcoZWx0KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vVXRpbHMuanMnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9FdmVudHMuanMnXG5pbXBvcnQgQW5kcm9pZCBmcm9tICcuL0FuZHJvaWQuanMnXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnXG5pbXBvcnQgT2ZmU2NyZWVuIGZyb20gJy4vQ29tcG9uZW50cy9PZmZTY3JlZW4vT2ZmU2NyZWVuLmpzJ1xuXG53aW5kb3cuU3lzdGVtID0ge1xuICBBbmRyb2lkLFxuICBWaWV3LFxuICBDb21wb25lbnRzOiB7XG4gICAgT2ZmU2NyZWVuXG4gIH0sXG4gIFV0aWxzLFxuICBFdmVudHMsXG4gIGdldFZpZXc6IFV0aWxzLmdldFZpZXcsXG4gIGdldFZpZXdHcm91cDogVXRpbHMuZ2V0Vmlld0dyb3VwXG59OyJdLCJuYW1lcyI6WyJfX2NvbmZpZyIsInBhc3N3b3JkIiwidm9sdW1lIiwicG93ZXIiLCJBbmRyb2lkIiwidmlld3MiLCJsYXN0Q29uZmlnIiwiVmlld3MiLCJ2b2wiLCJzdGF0ZSIsImluZGV4T2YiLCJUb29scyIsImNzcyIsInZpZXciLCJzY3JlZW4iLCJub2RlIiwiYXBwZW5kQ2hpbGQiLCJWaWV3IiwiQ29tcG9uZW50cyIsImNvbnRleHQiLCJuYW1lIiwic2hvd1N0YXR1c0JhciIsImFjdGl2aXRpZXMiLCJjcmVhdGVWaWV3IiwiaWQiLCJ0ZXh0Iiwic2V0Q29udGVudFZpZXciLCJzZWxlY3RvciIsIl9hbGwiLCJlbHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwibWFwIiwiY2FsbCIsImVsdCIsImluaXRQYXJhbXMiLCJvblN0b3AiLCJyZW1vdmUiLCJJbnRlcmZhY2UiLCJjb250ZW50IiwiT2ZmU2NyZWVuIiwic2NyZWVuT2ZmIiwiaHRtbCIsImFsZXJ0Iiwib3V0ZXJIVE1MIiwiX3RoaXMiLCJzZXRUaW1lb3V0IiwiVXRpbHMiLCJkZWZhdWx0SW5pdERpY3QiLCJjb21wb3NlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiUGhvbmVFdmVudCIsImV2ZW50SW5pdERpYyIsIm1lcmdlIiwiZWxlbWVudCIsIkV2ZW50IiwiUGhvbmVUaW1lRXZlbnQiLCJkYXlzIiwibW9udGhzIiwic2V0SW50ZXJ2YWwiLCJkIiwiRGF0ZSIsIl9ldiIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwiZGF5IiwiZ2V0RGF5IiwibnVtRGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0aW1lIiwiZGF0ZSIsImRpc3BhdGNoRXZlbnQiLCJQaG9uZUJhdHRlcnlFdmVudCIsImNyZWF0ZSIsImUiLCJsZXZlbCIsIk1hdGgiLCJyb3VuZCIsImNoYXJnaW5nIiwibmF2aWdhdG9yIiwiZ2V0QmF0dGVyeSIsInRoZW4iLCJiYXR0ZXJ5Iiwib25sZXZlbGNoYW5nZSIsInRhcmdldCIsIm9uY2hhcmdpbmdjaGFuZ2UiLCJQaG9uZU5ldHdvcmtFdmVudCIsImluZm8iLCJ0eXBlIiwiZWZmZWN0aXZlVHlwZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsIm1icHMiLCJkb3dubGluayIsInNhdmVEYXRhIiwib25saW5lIiwiY29ubmVjdGlvbiIsIm9uY2hhbmdlIiwicGFyYW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJ0eXBlT2YiLCJhcmciLCJzIiwiT2JqZWN0IiwidG9TdHJpbmciLCJleGVjIiwiUmVnRXhwIiwiJDEiLCJ0b0xvd2VyQ2FzZSIsImEiLCJiIiwiaSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0VmlldyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldFZpZXdHcm91cCIsIl9fbm9kZSIsIkhUTUxFbGVtZW50IiwicHJvcCIsInZhbHVlIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2V0UHJvcGVydHkiLCJhdHRyTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImh0bWxTdHJpbmciLCJpbm5lckhUTUwiLCJpbm5lclRleHQiLCJ0YWdOYW1lIiwiYXR0ciIsImRhdGEiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkV2ZW50cyIsIndpbmRvdyIsIlN5c3RlbSJdLCJzb3VyY2VSb290IjoiIn0=