/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/android/android.js":
/*!********************************!*\
  !*** ./src/android/android.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Android": () => (/* binding */ Android)
/* harmony export */ });
/* harmony import */ var _src_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/decorators */ "./src/decorators/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


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
    value: function setContentView(view) {//this.Views.screen.node.appendChild(view.node);
      //alert(view.node.outerHTML)
    }
  }]);

  return Android;
}();

Android = (0,_src_decorators__WEBPACK_IMPORTED_MODULE_0__.singleton)(Android);


/***/ }),

/***/ "./src/android/index.js":
/*!******************************!*\
  !*** ./src/android/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Android": () => (/* reexport safe */ _android_js__WEBPACK_IMPORTED_MODULE_0__.Android)
/* harmony export */ });
/* harmony import */ var _android_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./android.js */ "./src/android/android.js");


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffScreen": () => (/* reexport safe */ _offscreen__WEBPACK_IMPORTED_MODULE_0__.OffScreen)
/* harmony export */ });
/* harmony import */ var _offscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offscreen */ "./src/components/offscreen/index.js");


/***/ }),

/***/ "./src/components/offscreen/index.js":
/*!*******************************************!*\
  !*** ./src/components/offscreen/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffScreen": () => (/* reexport safe */ _offscreen_js__WEBPACK_IMPORTED_MODULE_0__.OffScreen)
/* harmony export */ });
/* harmony import */ var _offscreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offscreen.js */ "./src/components/offscreen/offscreen.js");


/***/ }),

/***/ "./src/components/offscreen/offscreen.js":
/*!***********************************************!*\
  !*** ./src/components/offscreen/offscreen.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffScreen": () => (/* binding */ OffScreen)
/* harmony export */ });
/* harmony import */ var _src_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/interfaces */ "./src/interfaces/index.js");
/* harmony import */ var _src_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/view */ "./src/view/index.js");
/* harmony import */ var _layout_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.html */ "./src/components/offscreen/layout.html");
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




console.log(_layout_html__WEBPACK_IMPORTED_MODULE_2__["default"]);
var OffScreen = /*#__PURE__*/function (_Interface) {
  _inherits(OffScreen, _Interface);

  var _super = _createSuper(OffScreen);

  function OffScreen(context) {
    _classCallCheck(this, OffScreen);

    return _super.call(this, context, 'OffScreen', context.Views.screenOff, {
      showStatusBar: false
    });
  }

  _createClass(OffScreen, [{
    key: "boot",
    value: function boot() {
      var _this2 = this;

      if (this.context.power == 'off') {
        this.View.css('background', 'var(--window-boot-logo)').css('display', 'block');

        var _this = this;

        setTimeout(function () {
          _this2.View.css('background', 'var(--window-booting)'); // _this.displayInterface('window').then(() => {
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
}(_src_interfaces__WEBPACK_IMPORTED_MODULE_0__.Interface);

/***/ }),

/***/ "./src/decorators/index.js":
/*!*********************************!*\
  !*** ./src/decorators/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "singleton": () => (/* reexport safe */ _singleton_js__WEBPACK_IMPORTED_MODULE_0__.singleton)
/* harmony export */ });
/* harmony import */ var _singleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleton.js */ "./src/decorators/singleton.js");


/***/ }),

/***/ "./src/decorators/singleton.js":
/*!*************************************!*\
  !*** ./src/decorators/singleton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "singleton": () => (/* binding */ singleton)
/* harmony export */ });
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var instances = {};
function singleton(cls) {
  return function () {
    if (cls.name in instances) {
      return instances[cls.name];
    } else {
      instances[cls.name] = _construct(cls, Array.prototype.slice.call(arguments));
      return instances[cls.name];
    }
  };
}

/***/ }),

/***/ "./src/events/battery.js":
/*!*******************************!*\
  !*** ./src/events/battery.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneBatteryEvent": () => (/* binding */ PhoneBatteryEvent)
/* harmony export */ });
/* harmony import */ var _phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.js */ "./src/events/phone.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PhoneBatteryEvent = /*#__PURE__*/function (_PhoneEvent) {
  _inherits(PhoneBatteryEvent, _PhoneEvent);

  var _super = _createSuper(PhoneBatteryEvent);

  function PhoneBatteryEvent() {
    _classCallCheck(this, PhoneBatteryEvent);

    return _super.call(this, 'phone-battery', {
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
}(_phone_js__WEBPACK_IMPORTED_MODULE_0__.PhoneEvent);
(0,_phone_js__WEBPACK_IMPORTED_MODULE_0__.registerEvent)('phone-battery', PhoneBatteryEvent);

/***/ }),

/***/ "./src/events/index.js":
/*!*****************************!*\
  !*** ./src/events/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneLongClickEvent": () => (/* reexport safe */ _longclick_js__WEBPACK_IMPORTED_MODULE_0__.PhoneLongClickEvent),
/* harmony export */   "PhoneBatteryEvent": () => (/* reexport safe */ _battery_js__WEBPACK_IMPORTED_MODULE_1__.PhoneBatteryEvent),
/* harmony export */   "PhoneNetworkEvent": () => (/* reexport safe */ _network_js__WEBPACK_IMPORTED_MODULE_2__.PhoneNetworkEvent),
/* harmony export */   "PhoneTimeEvent": () => (/* reexport safe */ _time_js__WEBPACK_IMPORTED_MODULE_3__.PhoneTimeEvent)
/* harmony export */ });
/* harmony import */ var _longclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./longclick.js */ "./src/events/longclick.js");
/* harmony import */ var _battery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battery.js */ "./src/events/battery.js");
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.js */ "./src/events/network.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.js */ "./src/events/time.js");





/***/ }),

/***/ "./src/events/longclick.js":
/*!*********************************!*\
  !*** ./src/events/longclick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneLongClickEvent": () => (/* binding */ PhoneLongClickEvent)
/* harmony export */ });
/* harmony import */ var _phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.js */ "./src/events/phone.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PhoneLongClickEvent = /*#__PURE__*/function (_PhoneEvent) {
  _inherits(PhoneLongClickEvent, _PhoneEvent);

  var _super = _createSuper(PhoneLongClickEvent);

  function PhoneLongClickEvent() {
    _classCallCheck(this, PhoneLongClickEvent);

    return _super.call(this, 'phone-longclick', {
      bubbles: true
    });
  }

  _createClass(PhoneLongClickEvent, [{
    key: "registerElement",
    value: function registerElement(element) {
      _get(_getPrototypeOf(PhoneLongClickEvent.prototype), "registerElement", this).call(this, element);

      var start = 0,
          end = 0,
          diff = 0,
          duration = 1000;
      var id = null;

      function handler(e) {
        if (e.type == 'pointerdown') {
          start = Date.now();
          id = setInterval(function () {
            end = Date.now();
            if (start) diff = end - start;

            if (diff >= duration) {
              var e = new PhoneLongClickEvent();
              e.start = start;
              e.end = end;
              e.duration = diff;
              element.dispatchEvent(e);
              if (id) clearInterval(id);
            }
          });
        }

        if (e.type != 'pointerdown') {
          start = 0;
          end = 0;
          diff = 0;
          if (id) clearInterval(id);
        }
      }

      element.addEventListener('pointerdown', handler);
      element.addEventListener('touchmove', handler);
      element.addEventListener('pointerup', handler);
    }
  }]);

  return PhoneLongClickEvent;
}(_phone_js__WEBPACK_IMPORTED_MODULE_0__.PhoneEvent);
(0,_phone_js__WEBPACK_IMPORTED_MODULE_0__.registerEvent)('phone-longclick', PhoneLongClickEvent);

/***/ }),

/***/ "./src/events/network.js":
/*!*******************************!*\
  !*** ./src/events/network.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNetworkEvent": () => (/* binding */ PhoneNetworkEvent)
/* harmony export */ });
/* harmony import */ var _phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.js */ "./src/events/phone.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PhoneNetworkEvent = /*#__PURE__*/function (_PhoneEvent) {
  _inherits(PhoneNetworkEvent, _PhoneEvent);

  var _super = _createSuper(PhoneNetworkEvent);

  function PhoneNetworkEvent() {
    _classCallCheck(this, PhoneNetworkEvent);

    return _super.call(this, 'phone-network', {
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
}(_phone_js__WEBPACK_IMPORTED_MODULE_0__.PhoneEvent);
(0,_phone_js__WEBPACK_IMPORTED_MODULE_0__.registerEvent)('phone-network', PhoneNetworkEvent);

/***/ }),

/***/ "./src/events/phone.js":
/*!*****************************!*\
  !*** ./src/events/phone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneEvent": () => (/* binding */ PhoneEvent),
/* harmony export */   "registerEvent": () => (/* binding */ registerEvent),
/* harmony export */   "registerElementForEvent": () => (/* binding */ registerElementForEvent)
/* harmony export */ });
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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


var defaultInitDict = {
  composed: false,
  bubbles: false,
  cancelable: true
};
var registeredEvent = {};
var PhoneEvent = /*#__PURE__*/function (_Event) {
  _inherits(PhoneEvent, _Event);

  var _super = _createSuper(PhoneEvent);

  function PhoneEvent(name, eventInitDic) {
    _classCallCheck(this, PhoneEvent);

    return _super.call(this, name, (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(defaultInitDict, eventInitDic));
  }

  _createClass(PhoneEvent, [{
    key: "registerElement",
    value: function registerElement(element) {}
  }]);

  return PhoneEvent;
}( /*#__PURE__*/_wrapNativeSuper(Event));
function registerEvent(name, Class) {
  if (!(name in registeredEvent)) {
    registeredEvent[name] = Class;
  }
}
function registerElementForEvent(ev, element) {
  if (ev.toLowerCase() in registeredEvent) {
    new registeredEvent[ev.toLowerCase()]().registerElement(element);
  }
}

/***/ }),

/***/ "./src/events/time.js":
/*!****************************!*\
  !*** ./src/events/time.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneTimeEvent": () => (/* binding */ PhoneTimeEvent)
/* harmony export */ });
/* harmony import */ var _phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.js */ "./src/events/phone.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PhoneTimeEvent = /*#__PURE__*/function (_PhoneEvent) {
  _inherits(PhoneTimeEvent, _PhoneEvent);

  var _super = _createSuper(PhoneTimeEvent);

  function PhoneTimeEvent() {
    _classCallCheck(this, PhoneTimeEvent);

    return _super.call(this, 'phone-time', {
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
}(_phone_js__WEBPACK_IMPORTED_MODULE_0__.PhoneEvent);
(0,_phone_js__WEBPACK_IMPORTED_MODULE_0__.registerEvent)('phone-time', PhoneTimeEvent);

/***/ }),

/***/ "./src/interfaces/application/application.js":
/*!***************************************************!*\
  !*** ./src/interfaces/application/application.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/interfaces/component/index.js");
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

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Application = /*#__PURE__*/function (_Components) {
  _inherits(Application, _Components);

  var _super = _createSuper(Application);

  function Application(appName) {
    var _thisSuper, _this;

    _classCallCheck(this, Application);

    _this = _super.call(this, appName);

    _this.NodeElement.classList.add('application');

    _this.NodeElement.ref = _assertThisInitialized(_this);
    _this.launchedActivity = [];

    _this.launchedActivity.push(_this.activities[0]);

    _this.activities.forEach(function (activity, i) {
      if (i) activity.style.display = 'none';
    });

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Application.prototype)), "initParams", _thisSuper).call(_thisSuper);

    return _this;
  }

  _createClass(Application, [{
    key: "startActivity",
    value: function startActivity(id) {
      var _this2 = this;

      if (this.activities.findIndex(function (act) {
        return act.id == id;
      }) == -1) {
        console.error('activity ' + id + ' not found in ' + this.name + ' application');
        return;
      }

      this.activities.forEach(function (activity) {
        if (activity.id == id) {
          activity.style.display = 'block';

          _this2.launchedActivity.push(activity);
        } else {
          activity.style.display = 'none';
        }
      }.bind(this));
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.launchedActivity.length > 1) {
        var activity = this.launchedActivity.pop();
        activity.style.display = 'none';
        this.launchedActivity[this.launchedActivity.length - 1].style.display = 'block';
      } else {
        this.onDestroy();
      }
    }
  }], [{
    key: "rename",
    value: function rename(name) {
      name = name[0].toUpperCase() + name.slice(1);
      return name.split('_').map(function (s) {
        return s = s[0].toUpperCase() + s.slice(1);
      }).join('');
    }
  }, {
    key: "create",
    value: function create(appName) {
      var application = Application[Application.rename(appName)];
      return new Promise(function (resolve, reject) {
        if (application) {
          resolve(new application(appName));
        } else {
          console.error("Unable to create ".concat(appName, " application"));
          reject('l\'application <b style=\'text-transform: capitalize;\'>' + appName.replace(/_/g, ' ') + '</b> s\'est arrêtée');
        }
      });
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return {
        'message': ''
      };
    }
  }, {
    key: "launcherOf",
    value: function launcherOf(appName) {
      var AppList = {
        "agenda": "assets/images/agenda.png",
        "android": "assets/images/android.png",
        "apple_contacts": "assets/images/apple-contacts.png",
        "camera_digital": "assets/images/camera-2.png",
        "camera": "assets/images/camera.png",
        "chrome": "assets/images/chrome.png",
        "contacts": "assets/images/contact.png",
        "discord": "assets/images/discord.png",
        "facebook": "assets/images/facebook-circled.png",
        "fichiers": "assets/images/files.png",
        "galerie": "assets/images/gallery.png",
        "jeux": "assets/images/game.png",
        "google_duo": "assets/images/google-duo.png",
        "google_map": "assets/images/google-maps.png",
        "google_photo": "assets/images/google-photos.png",
        "google_play_music": "assets/images/google-play-music.png",
        "play_store": "assets/images/google-play.png",
        "gps": "assets/images/gps-device.png",
        "horloge": "assets/images/horloge.png",
        "html": "assets/images/html-5.png",
        "imessage": "assets/images/imessage.png",
        "instagram": "assets/images/instagram.png",
        "message": "assets/images/message.png",
        "messenger": "assets/images/messenger.png",
        "mytikr": "assets/images/mytikr.png",
        "notepad": "assets/images/notepad.png",
        "telephone": "assets/images/phone-dial.png",
        "parametre": "assets/images/settings.png",
        "snapchat_1": "assets/images/snapchat-squared.png",
        "snapchat": "assets/images/snapchat.png",
        "sololearn": "assets/images/sololearn.png",
        "sublime_text": "assets/images/sublime-text.png",
        "telegram": "assets/images/telegram.png",
        "twitter": "assets/images/twitter.png",
        "uc_browser": "assets/images/uc-browser.png",
        "viber": "assets/images/viber.png",
        "whatsapp": "assets/images/whatsapp.png",
        "explorer_fichiers": "assets/images/windows-explorer.png",
        "youtube": "assets/images/youtube.png"
      };

      if (isNaN(appName)) {
        return AppList[appName];
      } else {
        var i = 0;

        for (var launcher in AppList) {
          if (i == appName) {
            return launcher;
          }

          i++;
        }

        return launcher;
      }
    }
  }]);

  return Application;
}(_component__WEBPACK_IMPORTED_MODULE_0__.Components);

/***/ }),

/***/ "./src/interfaces/application/index.js":
/*!*********************************************!*\
  !*** ./src/interfaces/application/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.js */ "./src/interfaces/application/application.js");


/***/ }),

/***/ "./src/interfaces/component/component.js":
/*!***********************************************!*\
  !*** ./src/interfaces/component/component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => (/* binding */ Components)
/* harmony export */ });
/* harmony import */ var _src_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/view */ "./src/view/index.js");
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

    if (view instanceof _src_view__WEBPACK_IMPORTED_MODULE_0__.View) {
      this.View = view;
    } else {
      this.View = _src_view__WEBPACK_IMPORTED_MODULE_0__.View.createView('div', {
        id: this.name,
        text: view
      });
    }

    this.context.setContentView(this.View);
  }

  _createClass(Components, [{
    key: "getView",
    value: function getView(selector) {
      var _all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var elts = this.View.node.querySelectorAll(selector);

      if (elts.length != 0) {
        if (!_all) return new _src_view__WEBPACK_IMPORTED_MODULE_0__.View(elts[0]);
        return Array.prototype.map.call(elts, function (elt) {
          return new _src_view__WEBPACK_IMPORTED_MODULE_0__.View(elt);
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

/***/ "./src/interfaces/component/index.js":
/*!*******************************************!*\
  !*** ./src/interfaces/component/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => (/* reexport safe */ _component_js__WEBPACK_IMPORTED_MODULE_0__.Components)
/* harmony export */ });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/interfaces/component/component.js");


/***/ }),

/***/ "./src/interfaces/index.js":
/*!*********************************!*\
  !*** ./src/interfaces/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.Components),
/* harmony export */   "Interface": () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.Interface)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/interfaces/component/index.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application */ "./src/interfaces/application/index.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interfaces/interface/index.js");




/***/ }),

/***/ "./src/interfaces/interface/index.js":
/*!*******************************************!*\
  !*** ./src/interfaces/interface/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interface": () => (/* reexport safe */ _interface_js__WEBPACK_IMPORTED_MODULE_0__.Interface)
/* harmony export */ });
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface.js */ "./src/interfaces/interface/interface.js");


/***/ }),

/***/ "./src/interfaces/interface/interface.js":
/*!***********************************************!*\
  !*** ./src/interfaces/interface/interface.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interface": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./src/interfaces/component/index.js");
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
}(_component__WEBPACK_IMPORTED_MODULE_0__.Components);

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeOf": () => (/* binding */ typeOf),
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
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
      a[key] = b[i][key];
    });
  }

  return a;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getView": () => (/* reexport safe */ _selector_js__WEBPACK_IMPORTED_MODULE_0__.getView),
/* harmony export */   "getViewGroup": () => (/* reexport safe */ _selector_js__WEBPACK_IMPORTED_MODULE_0__.getViewGroup),
/* harmony export */   "merge": () => (/* reexport safe */ _common_js__WEBPACK_IMPORTED_MODULE_1__.merge),
/* harmony export */   "typeOf": () => (/* reexport safe */ _common_js__WEBPACK_IMPORTED_MODULE_1__.typeOf)
/* harmony export */ });
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector.js */ "./src/utils/selector.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./src/utils/common.js");



/***/ }),

/***/ "./src/utils/selector.js":
/*!*******************************!*\
  !*** ./src/utils/selector.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getView": () => (/* binding */ getView),
/* harmony export */   "getViewGroup": () => (/* binding */ getViewGroup)
/* harmony export */ });
/* harmony import */ var _src_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/view */ "./src/view/index.js");

/**
 * select an élément in the DOM
 * @param {String} selector
 * @returns {View}
 */

function getView(selector) {
  var elt = document.querySelector(selector); //return elt

  return !elt ? null : new _src_view__WEBPACK_IMPORTED_MODULE_0__.View(elt);
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
    return new _src_view__WEBPACK_IMPORTED_MODULE_0__.View(elt);
  });
}

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* reexport safe */ _view_js__WEBPACK_IMPORTED_MODULE_0__.View)
/* harmony export */ });
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/view/view.js");


/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _src_events_phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/events/phone.js */ "./src/events/phone.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


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
      this.__node = node;
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
      return this.__node;
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
     * add an Event Listenner on element
     * @param {String} ev
     * @param {Function} callback
     */

  }, {
    key: "on",
    value: function on(ev, callback) {
      (0,_src_events_phone_js__WEBPACK_IMPORTED_MODULE_0__.registerElementForEvent)(ev, this.node);
      this.node.addEventListener(ev, callback);
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

/***/ }),

/***/ "./src/components/offscreen/layout.html":
/*!**********************************************!*\
  !*** ./src/components/offscreen/layout.html ***!
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getView": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getView),
/* harmony export */   "getViewGroup": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getViewGroup),
/* harmony export */   "Android": () => (/* reexport safe */ _android__WEBPACK_IMPORTED_MODULE_1__.Android),
/* harmony export */   "Events": () => (/* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "Interface": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_3__.Interface),
/* harmony export */   "Components": () => (/* reexport module object */ _components__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./android */ "./src/android/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events/index.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./src/interfaces/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/components/index.js");







})();

window.System = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Wilfriedroid.js.map