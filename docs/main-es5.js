function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/analog-clock/analog-clock.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/analog-clock/analog-clock.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClockComponentsAnalogClockAnalogClockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"time\">\r\n  <div class=\"shield\">\r\n    <img src=\"assets/shield.png\" />\r\n  </div>\r\n  <div class=\"hours\" [ngStyle]=\"analogTime.hours | analogAngle\">\r\n    <img src=\"assets/hours.png\" />\r\n  </div>\r\n  <div class=\"minutes\" [ngStyle]=\"analogTime.minutes | analogAngle\">\r\n    <img src=\"assets/minutes.png\" />\r\n  </div>\r\n  <div class=\"seconds\" [ngStyle]=\"analogTime.seconds | analogAngle\">\r\n    <img src=\"assets/seconds.png\" />\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/date/date.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/date/date.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClockComponentsDateDateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"date\">\n  <span>\n    {{ date.day | makeDigits }}.{{ date.month | makeDigits }}.{{ date.year | makeDigits:4 }}\n    {{ date.weekDay | weekdays }}\n  </span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/digital-clock/digital-clock.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/digital-clock/digital-clock.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClockComponentsDigitalClockDigitalClockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"time\">\r\n  <span>\r\n    {{ time.hours | hoursTimeFormat:timeFormat.value | makeDigits }}:{{ time.minutes | makeDigits }}\r\n    {{ time.seconds | makeDigits }}\r\n  </span>\r\n  <span *ngIf=\"timeFormat.value !== '24h'\">\r\n    {{ time.hours < hoursCount ? 'am' : 'pm' }}\r\n  </span>\r\n</div>\r\n<div>\r\n  <select [formControl]=\"timeFormat\">\r\n    <option value=\"24h\">\r\n      24h\r\n    </option>\r\n    <option value=\"ampm\">\r\n      AM/PM\r\n    </option>\r\n  </select>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/containers/clock-container/clock-container.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clock/containers/clock-container/clock-container.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClockContainersClockContainerClockContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-date [date]=\"currentDate$ | async\">\r\n</app-date>\r\n<div>\r\n  <select [formControl]=\"clockType\">\r\n    <option value=\"digital\">\r\n      Digital\r\n    </option>\r\n    <option value=\"analog\">\r\n      Analog\r\n    </option>\r\n  </select>\r\n</div>\r\n<app-digital-clock\r\n  *ngIf=\"clockType.value === 'digital'\"\r\n  [time]=\"currentTime$ | async\">\r\n</app-digital-clock>\r\n<app-analog-clock\r\n  *ngIf=\"clockType.value === 'analog'\"\r\n  [time]=\"currentTime$ | async\">\r\n</app-analog-clock>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.interfaces.ts":
  /*!***********************************!*\
    !*** ./src/app/app.interfaces.ts ***!
    \***********************************/

  /*! exports provided: HOURS_COUNT */

  /***/
  function srcAppAppInterfacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOURS_COUNT", function () {
      return HOURS_COUNT;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HOURS_COUNT = 12;
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clock/clock.module */
    "./src/app/clock/clock.module.ts");
    /* harmony import */


    var _clock_effects_clock_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./clock/effects/clock.effects */
    "./src/app/clock/effects/clock.effects.ts");
    /* harmony import */


    var _app_root_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.root.reducer */
    "./src/app/app.root.reducer.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__["ClockModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_clock_effects_clock_effects__WEBPACK_IMPORTED_MODULE_7__["ClockEffects"]])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.root.reducer.ts":
  /*!*************************************!*\
    !*** ./src/app/app.root.reducer.ts ***!
    \*************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppAppRootReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _clock_reducers_clock_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./clock/reducers/clock.reducer */
    "./src/app/clock/reducers/clock.reducer.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var reducers = {
      clock: _clock_reducers_clock_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/clock/actions/clock.actions.ts":
  /*!************************************************!*\
    !*** ./src/app/clock/actions/clock.actions.ts ***!
    \************************************************/

  /*! exports provided: UPDATE_TIME, SET_TIME, UPDATE_DATE, SET_DATE, UpdateTimeAction, SetTimeAction, UpdateDateAction, SetDateAction */

  /***/
  function srcAppClockActionsClockActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_TIME", function () {
      return UPDATE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SET_TIME", function () {
      return SET_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_DATE", function () {
      return UPDATE_DATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SET_DATE", function () {
      return SET_DATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTimeAction", function () {
      return UpdateTimeAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetTimeAction", function () {
      return SetTimeAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateDateAction", function () {
      return UpdateDateAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetDateAction", function () {
      return SetDateAction;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UPDATE_TIME = '[Clock] Update Time';
    var SET_TIME = '[Clock] Set Time';
    var UPDATE_DATE = '[Clock] Update Date';
    var SET_DATE = '[Clock] Set Date';

    var UpdateTimeAction = function UpdateTimeAction() {
      _classCallCheck(this, UpdateTimeAction);

      this.type = UPDATE_TIME;
    };

    var SetTimeAction = function SetTimeAction(payload) {
      _classCallCheck(this, SetTimeAction);

      this.payload = payload;
      this.type = SET_TIME;
    };

    var UpdateDateAction = function UpdateDateAction() {
      _classCallCheck(this, UpdateDateAction);

      this.type = UPDATE_DATE;
    };

    var SetDateAction = function SetDateAction(payload) {
      _classCallCheck(this, SetDateAction);

      this.payload = payload;
      this.type = SET_DATE;
    };
    /***/

  },

  /***/
  "./src/app/clock/clock.module.ts":
  /*!***************************************!*\
    !*** ./src/app/clock/clock.module.ts ***!
    \***************************************/

  /*! exports provided: ClockModule */

  /***/
  function srcAppClockClockModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockModule", function () {
      return ClockModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/analog-clock/analog-clock.component */
    "./src/app/clock/components/analog-clock/analog-clock.component.ts");
    /* harmony import */


    var _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers/clock-container/clock-container.component */
    "./src/app/clock/containers/clock-container/clock-container.component.ts");
    /* harmony import */


    var _clock_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clock.routing */
    "./src/app/clock/clock.routing.ts");
    /* harmony import */


    var _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/digital-clock/digital-clock.component */
    "./src/app/clock/components/digital-clock/digital-clock.component.ts");
    /* harmony import */


    var _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipes/hours-time-format.pipe */
    "./src/app/clock/pipes/hours-time-format.pipe.ts");
    /* harmony import */


    var _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/make-digits.pipe */
    "./src/app/clock/pipes/make-digits.pipe.ts");
    /* harmony import */


    var _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipes/analog-angle.pipe */
    "./src/app/clock/pipes/analog-angle.pipe.ts");
    /* harmony import */


    var _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/weekdays.pipe */
    "./src/app/clock/pipes/weekdays.pipe.ts");
    /* harmony import */


    var _components_date_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/date/date.component */
    "./src/app/clock/components/date/date.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ClockModule = function ClockModule() {
      _classCallCheck(this, ClockModule);
    };

    ClockModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_4__["ClockContainerComponent"], _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_6__["DigitalClockComponent"], _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_3__["AnalogClockComponent"], _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__["HoursTimeFormatPipe"], _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_8__["MakeDigitsPipe"], _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_9__["AnalogAnglePipe"], _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_10__["WeekdaysPipe"], _components_date_date_component__WEBPACK_IMPORTED_MODULE_11__["DateComponent"]],
      imports: [_clock_routing__WEBPACK_IMPORTED_MODULE_5__["ClockRouting"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    })], ClockModule);
    /***/
  },

  /***/
  "./src/app/clock/clock.routing.ts":
  /*!****************************************!*\
    !*** ./src/app/clock/clock.routing.ts ***!
    \****************************************/

  /*! exports provided: ClockRouting */

  /***/
  function srcAppClockClockRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockRouting", function () {
      return ClockRouting;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./containers/clock-container/clock-container.component */
    "./src/app/clock/containers/clock-container/clock-container.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_1__["ClockContainerComponent"]
    }];

    var ClockRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/clock/components/analog-clock/analog-clock.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/clock/components/analog-clock/analog-clock.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClockComponentsAnalogClockAnalogClockComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".minutes, .seconds, .hours, .shield {\n  pointer-events: none;\n  position: absolute;\n}\n\n.hours {\n  z-index: 2;\n}\n\n.seconds {\n  z-index: 3;\n}\n\n.minutes {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2svY29tcG9uZW50cy9hbmFsb2ctY2xvY2svQzpcXFVzZXJzXFx0aGV0b1xcRG9jdW1lbnRzXFxjbG9jay1hbmd1bGFyL3NyY1xcYXBwXFxjbG9ja1xcY29tcG9uZW50c1xcYW5hbG9nLWNsb2NrXFxhbmFsb2ctY2xvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nsb2NrL2NvbXBvbmVudHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUVFLFVBQUE7QUNGRjs7QURJQTtFQUVFLFVBQUE7QUNGRjs7QURJQTtFQUVFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2Nsb2NrL2NvbXBvbmVudHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVwb3NpdGlvbi1hYnNvbHV0ZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zaGllbGQge1xyXG4gIEBleHRlbmQgJXBvc2l0aW9uLWFic29sdXRlO1xyXG59XHJcbi5ob3VycyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2Vjb25kcyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ubWludXRlcyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iLCIubWludXRlcywgLnNlY29uZHMsIC5ob3VycywgLnNoaWVsZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ob3VycyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zZWNvbmRzIHtcbiAgei1pbmRleDogMztcbn1cblxuLm1pbnV0ZXMge1xuICB6LWluZGV4OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/clock/components/analog-clock/analog-clock.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/clock/components/analog-clock/analog-clock.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AnalogClockComponent */

  /***/
  function srcAppClockComponentsAnalogClockAnalogClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function () {
      return AnalogClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_clock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/clock.service */
    "./src/app/clock/services/clock.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AnalogClockComponent = /*#__PURE__*/function () {
      function AnalogClockComponent(clockService) {
        _classCallCheck(this, AnalogClockComponent);

        this.clockService = clockService;
      }

      _createClass(AnalogClockComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.time) {
            this.analogTime = this.clockService.convertToAnalog(changes.time.currentValue);
          }
        }
      }]);

      return AnalogClockComponent;
    }();

    AnalogClockComponent.ctorParameters = function () {
      return [{
        type: _services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], AnalogClockComponent.prototype, "time", void 0);

    AnalogClockComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-analog-clock',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./analog-clock.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/analog-clock/analog-clock.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./analog-clock.component.scss */
      "./src/app/clock/components/analog-clock/analog-clock.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]])], AnalogClockComponent);
    /***/
  },

  /***/
  "./src/app/clock/components/date/date.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/clock/components/date/date.component.ts ***!
    \*********************************************************/

  /*! exports provided: DateComponent */

  /***/
  function srcAppClockComponentsDateDateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateComponent", function () {
      return DateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DateComponent = function DateComponent() {
      _classCallCheck(this, DateComponent);
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DateComponent.prototype, "date", void 0);

    DateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-date',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./date.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/date/date.component.html"))["default"]
    })], DateComponent);
    /***/
  },

  /***/
  "./src/app/clock/components/digital-clock/digital-clock.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/clock/components/digital-clock/digital-clock.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DigitalClockComponent */

  /***/
  function srcAppClockComponentsDigitalClockDigitalClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function () {
      return DigitalClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.interfaces */
    "./src/app/app.interfaces.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DigitalClockComponent = function DigitalClockComponent() {
      _classCallCheck(this, DigitalClockComponent);

      this.timeFormat = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('24h');
      this.hoursCount = _app_interfaces__WEBPACK_IMPORTED_MODULE_2__["HOURS_COUNT"];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DigitalClockComponent.prototype, "time", void 0);

    DigitalClockComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-digital-clock',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./digital-clock.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/components/digital-clock/digital-clock.component.html"))["default"]
    })], DigitalClockComponent);
    /***/
  },

  /***/
  "./src/app/clock/containers/clock-container/clock-container.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/clock/containers/clock-container/clock-container.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ClockContainerComponent */

  /***/
  function srcAppClockContainersClockContainerClockContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockContainerComponent", function () {
      return ClockContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../actions/clock.actions */
    "./src/app/clock/actions/clock.actions.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ClockContainerComponent = /*#__PURE__*/function () {
      function ClockContainerComponent(store) {
        _classCallCheck(this, ClockContainerComponent);

        this.store = store;
        this.clockType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('digital');
      }

      _createClass(ClockContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.currentTime$ = this.store.select(function (state) {
            return state.clock.currentTime;
          });
          this.currentDate$ = this.store.select(function (state) {
            return state.clock.currentDate;
          });
          this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 500).subscribe(function () {
            _this.store.dispatch(new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTimeAction"]());

            _this.store.dispatch(new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateDateAction"]());
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.timerSubscription.unsubscribe();
        }
      }]);

      return ClockContainerComponent;
    }();

    ClockContainerComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ClockContainerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-clock-container',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./clock-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clock/containers/clock-container/clock-container.component.html"))["default"]
    }), __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], ClockContainerComponent);
    /***/
  },

  /***/
  "./src/app/clock/effects/clock.effects.ts":
  /*!************************************************!*\
    !*** ./src/app/clock/effects/clock.effects.ts ***!
    \************************************************/

  /*! exports provided: ClockEffects */

  /***/
  function srcAppClockEffectsClockEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockEffects", function () {
      return ClockEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/clock.actions */
    "./src/app/clock/actions/clock.actions.ts");
    /* harmony import */


    var _services_clock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/clock.service */
    "./src/app/clock/services/clock.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ClockEffects = function ClockEffects(actions$, clockService) {
      var _this2 = this;

      _classCallCheck(this, ClockEffects);

      this.actions$ = actions$;
      this.clockService = clockService;
      this.updateTime$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_TIME"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
        return new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["SetTimeAction"](_this2.clockService.getTime());
      }));
      this.updateDate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_DATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
        return new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["SetDateAction"](_this2.clockService.getDate());
      }));
    };

    ClockEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
      }, {
        type: _services_clock_service__WEBPACK_IMPORTED_MODULE_5__["ClockService"]
      }];
    };

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], ClockEffects.prototype, "updateTime$", void 0);

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], ClockEffects.prototype, "updateDate$", void 0);

    ClockEffects = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_clock_service__WEBPACK_IMPORTED_MODULE_5__["ClockService"]])], ClockEffects);
    /***/
  },

  /***/
  "./src/app/clock/pipes/analog-angle.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/clock/pipes/analog-angle.pipe.ts ***!
    \**************************************************/

  /*! exports provided: AnalogAnglePipe */

  /***/
  function srcAppClockPipesAnalogAnglePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalogAnglePipe", function () {
      return AnalogAnglePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AnalogAnglePipe = /*#__PURE__*/function () {
      function AnalogAnglePipe() {
        _classCallCheck(this, AnalogAnglePipe);
      }

      _createClass(AnalogAnglePipe, [{
        key: "transform",
        value: function transform(value) {
          return {
            WebkitTransform: "rotate(".concat(value, "deg)"),
            MozTransform: "rotate(".concat(value, "deg)"),
            MsTransform: "rotate(".concat(value, "deg)"),
            OTransform: "rotate(".concat(value, "deg)"),
            Transform: "rotate(".concat(value, "deg)")
          };
        }
      }]);

      return AnalogAnglePipe;
    }();

    AnalogAnglePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'analogAngle'
    })], AnalogAnglePipe);
    /***/
  },

  /***/
  "./src/app/clock/pipes/hours-time-format.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/clock/pipes/hours-time-format.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: HoursTimeFormatPipe */

  /***/
  function srcAppClockPipesHoursTimeFormatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoursTimeFormatPipe", function () {
      return HoursTimeFormatPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.interfaces */
    "./src/app/app.interfaces.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HoursTimeFormatPipe = /*#__PURE__*/function () {
      function HoursTimeFormatPipe() {
        _classCallCheck(this, HoursTimeFormatPipe);
      }

      _createClass(HoursTimeFormatPipe, [{
        key: "transform",
        value: function transform(value, format) {
          if (format === '24h') {
            return value;
          }

          return value > _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"] ? value - _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"] : value;
        }
      }]);

      return HoursTimeFormatPipe;
    }();

    HoursTimeFormatPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'hoursTimeFormat'
    })], HoursTimeFormatPipe);
    /***/
  },

  /***/
  "./src/app/clock/pipes/make-digits.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/clock/pipes/make-digits.pipe.ts ***!
    \*************************************************/

  /*! exports provided: MakeDigitsPipe */

  /***/
  function srcAppClockPipesMakeDigitsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MakeDigitsPipe", function () {
      return MakeDigitsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MakeDigitsPipe = /*#__PURE__*/function () {
      function MakeDigitsPipe() {
        _classCallCheck(this, MakeDigitsPipe);
      }

      _createClass(MakeDigitsPipe, [{
        key: "transform",
        value: function transform(value) {
          var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
          var stringValue = String(value);

          while (stringValue.length < count) {
            stringValue = "0".concat(stringValue);
          }

          return stringValue;
        }
      }]);

      return MakeDigitsPipe;
    }();

    MakeDigitsPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'makeDigits'
    })], MakeDigitsPipe);
    /***/
  },

  /***/
  "./src/app/clock/pipes/weekdays.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/clock/pipes/weekdays.pipe.ts ***!
    \**********************************************/

  /*! exports provided: WeekdaysPipe */

  /***/
  function srcAppClockPipesWeekdaysPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekdaysPipe", function () {
      return WeekdaysPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WeekdaysPipe = /*#__PURE__*/function () {
      function WeekdaysPipe() {
        _classCallCheck(this, WeekdaysPipe);

        this.weekdaysDict = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
      }

      _createClass(WeekdaysPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.weekdaysDict[value] || this.weekdaysDict[0];
        }
      }]);

      return WeekdaysPipe;
    }();

    WeekdaysPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'weekdays'
    })], WeekdaysPipe);
    /***/
  },

  /***/
  "./src/app/clock/reducers/clock.reducer.ts":
  /*!*************************************************!*\
    !*** ./src/app/clock/reducers/clock.reducer.ts ***!
    \*************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppClockReducersClockReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/clock.actions */
    "./src/app/clock/actions/clock.actions.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var initialState = {
      currentTime: null,
      currentDate: null
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TIME"]:
          return Object.assign({}, state, {
            currentTime: action.payload
          });

        case _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__["SET_DATE"]:
          return Object.assign({}, state, {
            currentDate: action.payload
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/clock/services/clock.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/clock/services/clock.service.ts ***!
    \*************************************************/

  /*! exports provided: ClockService */

  /***/
  function srcAppClockServicesClockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockService", function () {
      return ClockService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.interfaces */
    "./src/app/app.interfaces.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ClockService = /*#__PURE__*/function () {
      function ClockService() {
        _classCallCheck(this, ClockService);

        this.SEC_MIN_ADJUST = 6;
        this.HOURS_ADJUST = 30;
        this.HOURS_MIN_ADJUST = 0.5;
      }

      _createClass(ClockService, [{
        key: "getTime",
        value: function getTime() {
          var currentDate = new Date();
          return {
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds()
          };
        }
      }, {
        key: "getDate",
        value: function getDate() {
          var currentDate = new Date();
          return {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear(),
            weekDay: currentDate.getDay()
          };
        }
      }, {
        key: "convertToAnalog",
        value: function convertToAnalog(time) {
          var seconds = time.seconds * this.SEC_MIN_ADJUST;
          var minutes = time.minutes * this.SEC_MIN_ADJUST;
          var hours = this.HOURS_ADJUST * (time.hours % _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"]) + time.minutes * this.HOURS_MIN_ADJUST;
          return {
            seconds: seconds,
            minutes: minutes,
            hours: hours
          };
        }
      }]);

      return ClockService;
    }();

    ClockService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    })], ClockService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\theto\Documents\clock-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map