(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.interfaces.ts":
/*!***********************************!*\
  !*** ./src/app/app.interfaces.ts ***!
  \***********************************/
/*! exports provided: HOURS_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_COUNT", function() { return HOURS_COUNT; });
const HOURS_COUNT = 12;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock/clock.module */ "./src/app/clock/clock.module.ts");
/* harmony import */ var _clock_effects_clock_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clock/effects/clock.effects */ "./src/app/clock/effects/clock.effects.ts");
/* harmony import */ var _app_root_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.root.reducer */ "./src/app/app.root.reducer.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__["ClockModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                _clock_effects_clock_effects__WEBPACK_IMPORTED_MODULE_7__["ClockEffects"],
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__["ClockModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _clock_clock_module__WEBPACK_IMPORTED_MODULE_6__["ClockModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                        _clock_effects_clock_effects__WEBPACK_IMPORTED_MODULE_7__["ClockEffects"],
                    ])
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.root.reducer.ts":
/*!*************************************!*\
  !*** ./src/app/app.root.reducer.ts ***!
  \*************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _clock_reducers_clock_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock/reducers/clock.reducer */ "./src/app/clock/reducers/clock.reducer.ts");

const reducers = {
    clock: _clock_reducers_clock_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/clock/actions/clock.actions.ts":
/*!************************************************!*\
  !*** ./src/app/clock/actions/clock.actions.ts ***!
  \************************************************/
/*! exports provided: UPDATE_TIME, SET_TIME, UPDATE_DATE, SET_DATE, UpdateTimeAction, SetTimeAction, UpdateDateAction, SetDateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TIME", function() { return UPDATE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIME", function() { return SET_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATE", function() { return UPDATE_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DATE", function() { return SET_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTimeAction", function() { return UpdateTimeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimeAction", function() { return SetTimeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDateAction", function() { return UpdateDateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDateAction", function() { return SetDateAction; });
const UPDATE_TIME = '[Clock] Update Time';
const SET_TIME = '[Clock] Set Time';
const UPDATE_DATE = '[Clock] Update Date';
const SET_DATE = '[Clock] Set Date';
class UpdateTimeAction {
    constructor() {
        this.type = UPDATE_TIME;
    }
}
class SetTimeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_TIME;
    }
}
class UpdateDateAction {
    constructor() {
        this.type = UPDATE_DATE;
    }
}
class SetDateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DATE;
    }
}


/***/ }),

/***/ "./src/app/clock/clock.module.ts":
/*!***************************************!*\
  !*** ./src/app/clock/clock.module.ts ***!
  \***************************************/
/*! exports provided: ClockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockModule", function() { return ClockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/analog-clock/analog-clock.component */ "./src/app/clock/components/analog-clock/analog-clock.component.ts");
/* harmony import */ var _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/clock-container/clock-container.component */ "./src/app/clock/containers/clock-container/clock-container.component.ts");
/* harmony import */ var _clock_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clock.routing */ "./src/app/clock/clock.routing.ts");
/* harmony import */ var _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/digital-clock/digital-clock.component */ "./src/app/clock/components/digital-clock/digital-clock.component.ts");
/* harmony import */ var _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/hours-time-format.pipe */ "./src/app/clock/pipes/hours-time-format.pipe.ts");
/* harmony import */ var _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/make-digits.pipe */ "./src/app/clock/pipes/make-digits.pipe.ts");
/* harmony import */ var _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/analog-angle.pipe */ "./src/app/clock/pipes/analog-angle.pipe.ts");
/* harmony import */ var _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/weekdays.pipe */ "./src/app/clock/pipes/weekdays.pipe.ts");
/* harmony import */ var _components_date_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/date/date.component */ "./src/app/clock/components/date/date.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");














class ClockModule {
}
ClockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClockModule });
ClockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClockModule_Factory(t) { return new (t || ClockModule)(); }, imports: [[
            _clock_routing__WEBPACK_IMPORTED_MODULE_5__["ClockRouting"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClockModule, { declarations: [_containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_4__["ClockContainerComponent"],
        _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_6__["DigitalClockComponent"],
        _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_3__["AnalogClockComponent"],
        _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__["HoursTimeFormatPipe"],
        _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_8__["MakeDigitsPipe"],
        _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_9__["AnalogAnglePipe"],
        _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_10__["WeekdaysPipe"],
        _components_date_date_component__WEBPACK_IMPORTED_MODULE_11__["DateComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_4__["ClockContainerComponent"],
                    _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_6__["DigitalClockComponent"],
                    _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_3__["AnalogClockComponent"],
                    _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__["HoursTimeFormatPipe"],
                    _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_8__["MakeDigitsPipe"],
                    _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_9__["AnalogAnglePipe"],
                    _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_10__["WeekdaysPipe"],
                    _components_date_date_component__WEBPACK_IMPORTED_MODULE_11__["DateComponent"],
                ],
                imports: [
                    _clock_routing__WEBPACK_IMPORTED_MODULE_5__["ClockRouting"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clock/clock.routing.ts":
/*!****************************************!*\
  !*** ./src/app/clock/clock.routing.ts ***!
  \****************************************/
/*! exports provided: ClockRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockRouting", function() { return ClockRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/clock-container/clock-container.component */ "./src/app/clock/containers/clock-container/clock-container.component.ts");


const routes = [
    {
        path: '',
        component: _containers_clock_container_clock_container_component__WEBPACK_IMPORTED_MODULE_1__["ClockContainerComponent"],
    },
];
const ClockRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/clock/components/analog-clock/analog-clock.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/clock/components/analog-clock/analog-clock.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnalogClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function() { return AnalogClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_clock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/clock.service */ "./src/app/clock/services/clock.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/analog-angle.pipe */ "./src/app/clock/pipes/analog-angle.pipe.ts");






function AnalogClockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "analogAngle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "analogAngle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "analogAngle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r0.analogTime.hours));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r0.analogTime.minutes));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r0.analogTime.seconds));
} }
class AnalogClockComponent {
    constructor(clockService) {
        this.clockService = clockService;
    }
    ngOnChanges(changes) {
        if (changes.time) {
            this.analogTime = this.clockService.convertToAnalog(changes.time.currentValue);
        }
    }
}
AnalogClockComponent.ɵfac = function AnalogClockComponent_Factory(t) { return new (t || AnalogClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"])); };
AnalogClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalogClockComponent, selectors: [["app-analog-clock"]], inputs: { time: "time" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "shield"], ["src", "assets/shield.png"], [1, "hours", 3, "ngStyle"], ["src", "assets/hours.png"], [1, "minutes", 3, "ngStyle"], ["src", "assets/minutes.png"], [1, "seconds", 3, "ngStyle"], ["src", "assets/seconds.png"]], template: function AnalogClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnalogClockComponent_div_0_Template, 12, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.time);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_pipes_analog_angle_pipe__WEBPACK_IMPORTED_MODULE_3__["AnalogAnglePipe"]], styles: [".minutes[_ngcontent-%COMP%], .seconds[_ngcontent-%COMP%], .hours[_ngcontent-%COMP%], .shield[_ngcontent-%COMP%] {\n  pointer-events: none;\n  position: absolute;\n}\n\n.hours[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.seconds[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n\n.minutes[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2svY29tcG9uZW50cy9hbmFsb2ctY2xvY2svQzpcXFVzZXJzXFx0aGV0b1xcRG9jdW1lbnRzXFxjbG9jay1hbmd1bGFyL3NyY1xcYXBwXFxjbG9ja1xcY29tcG9uZW50c1xcYW5hbG9nLWNsb2NrXFxhbmFsb2ctY2xvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nsb2NrL2NvbXBvbmVudHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURJQTtFQUVFLFVBQUE7QUNGRjs7QURJQTtFQUVFLFVBQUE7QUNGRjs7QURJQTtFQUVFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2Nsb2NrL2NvbXBvbmVudHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVwb3NpdGlvbi1hYnNvbHV0ZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zaGllbGQge1xyXG4gIEBleHRlbmQgJXBvc2l0aW9uLWFic29sdXRlO1xyXG59XHJcbi5ob3VycyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2Vjb25kcyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ubWludXRlcyB7XHJcbiAgQGV4dGVuZCAlcG9zaXRpb24tYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iLCIubWludXRlcywgLnNlY29uZHMsIC5ob3VycywgLnNoaWVsZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ob3VycyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zZWNvbmRzIHtcbiAgei1pbmRleDogMztcbn1cblxuLm1pbnV0ZXMge1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analog-clock',
                templateUrl: './analog-clock.component.html',
                styleUrls: ['./analog-clock.component.scss']
            }]
    }], function () { return [{ type: _services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"] }]; }, { time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/clock/components/date/date.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/clock/components/date/date.component.ts ***!
  \*********************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/make-digits.pipe */ "./src/app/clock/pipes/make-digits.pipe.ts");
/* harmony import */ var _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/weekdays.pipe */ "./src/app/clock/pipes/weekdays.pipe.ts");





function DateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "weekdays");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r0.date.day), ".", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.date.month), ".", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, ctx_r0.date.year, 4), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx_r0.date.weekDay), " ");
} }
class DateComponent {
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(); };
DateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["app-date"]], inputs: { date: "date" }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateComponent_div_0_Template, 7, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.date);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_2__["MakeDigitsPipe"], _pipes_weekdays_pipe__WEBPACK_IMPORTED_MODULE_3__["WeekdaysPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date',
                templateUrl: './date.component.html',
            }]
    }], null, { date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/clock/components/digital-clock/digital-clock.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/clock/components/digital-clock/digital-clock.component.ts ***!
  \***************************************************************************/
/*! exports provided: DigitalClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function() { return DigitalClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.interfaces */ "./src/app/app.interfaces.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/make-digits.pipe */ "./src/app/clock/pipes/make-digits.pipe.ts");
/* harmony import */ var _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/hours-time-format.pipe */ "./src/app/clock/pipes/hours-time-format.pipe.ts");








function DigitalClockComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.time.hours < ctx_r1.hoursCount ? "am" : "pm", " ");
} }
function DigitalClockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "hoursTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "makeDigits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DigitalClockComponent_div_0_span_7_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r0.time.hours, ctx_r0.timeFormat.value)), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx_r0.time.minutes), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx_r0.time.seconds), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeFormat.value !== "24h");
} }
class DigitalClockComponent {
    constructor() {
        this.timeFormat = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('24h');
        this.hoursCount = _app_interfaces__WEBPACK_IMPORTED_MODULE_2__["HOURS_COUNT"];
    }
}
DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) { return new (t || DigitalClockComponent)(); };
DigitalClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigitalClockComponent, selectors: [["app-digital-clock"]], inputs: { time: "time" }, decls: 7, vars: 2, consts: [[4, "ngIf"], [3, "formControl"], ["value", "24h"], ["value", "ampm"]], template: function DigitalClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DigitalClockComponent_div_0_Template, 8, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 24h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " AM/PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.timeFormat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_pipes_make_digits_pipe__WEBPACK_IMPORTED_MODULE_4__["MakeDigitsPipe"], _pipes_hours_time_format_pipe__WEBPACK_IMPORTED_MODULE_5__["HoursTimeFormatPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-digital-clock',
                templateUrl: './digital-clock.component.html',
            }]
    }], null, { time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/clock/containers/clock-container/clock-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/clock/containers/clock-container/clock-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClockContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockContainerComponent", function() { return ClockContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/clock.actions */ "./src/app/clock/actions/clock.actions.ts");
/* harmony import */ var _components_date_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/date/date.component */ "./src/app/clock/components/date/date.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/digital-clock/digital-clock.component */ "./src/app/clock/components/digital-clock/digital-clock.component.ts");
/* harmony import */ var _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/analog-clock/analog-clock.component */ "./src/app/clock/components/analog-clock/analog-clock.component.ts");












function ClockContainerComponent_app_digital_clock_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-digital-clock", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("time", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.currentTime$));
} }
function ClockContainerComponent_app_analog_clock_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analog-clock", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("time", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.currentTime$));
} }
class ClockContainerComponent {
    constructor(store) {
        this.store = store;
        this.clockType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('digital');
    }
    ngOnInit() {
        this.currentTime$ = this.store.select(state => state.clock.currentTime);
        this.currentDate$ = this.store.select(state => state.clock.currentDate);
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 500).subscribe(() => {
            this.store.dispatch(new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTimeAction"]());
            this.store.dispatch(new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateDateAction"]());
        });
    }
    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
}
ClockContainerComponent.ɵfac = function ClockContainerComponent_Factory(t) { return new (t || ClockContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ClockContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockContainerComponent, selectors: [["app-clock-container"]], decls: 10, vars: 6, consts: [[3, "date"], [3, "formControl"], ["value", "digital"], ["value", "analog"], [3, "time", 4, "ngIf"], [3, "time"]], template: function ClockContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-date", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Digital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Analog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClockContainerComponent_app_digital_clock_8_Template, 2, 3, "app-digital-clock", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClockContainerComponent_app_analog_clock_9_Template, 2, 3, "app-analog-clock", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.currentDate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.clockType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clockType.value === "digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clockType.value === "analog");
    } }, directives: [_components_date_date_component__WEBPACK_IMPORTED_MODULE_5__["DateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_7__["DigitalClockComponent"], _components_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clock-container',
                templateUrl: './clock-container.component.html',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clock/effects/clock.effects.ts":
/*!************************************************!*\
  !*** ./src/app/clock/effects/clock.effects.ts ***!
  \************************************************/
/*! exports provided: ClockEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockEffects", function() { return ClockEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/clock.actions */ "./src/app/clock/actions/clock.actions.ts");
/* harmony import */ var _services_clock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/clock.service */ "./src/app/clock/services/clock.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









class ClockEffects {
    constructor(actions$, clockService) {
        this.actions$ = actions$;
        this.clockService = clockService;
        this.updateTime$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_TIME"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["SetTimeAction"](this.clockService.getTime())));
        this.updateDate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_DATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new _actions_clock_actions__WEBPACK_IMPORTED_MODULE_4__["SetDateAction"](this.clockService.getDate())));
    }
}
ClockEffects.ɵfac = function ClockEffects_Factory(t) { return new (t || ClockEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_clock_service__WEBPACK_IMPORTED_MODULE_5__["ClockService"])); };
ClockEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClockEffects, factory: ClockEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
], ClockEffects.prototype, "updateTime$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
], ClockEffects.prototype, "updateDate$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_clock_service__WEBPACK_IMPORTED_MODULE_5__["ClockService"] }]; }, { updateTime$: [], updateDate$: [] }); })();


/***/ }),

/***/ "./src/app/clock/pipes/analog-angle.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/clock/pipes/analog-angle.pipe.ts ***!
  \**************************************************/
/*! exports provided: AnalogAnglePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogAnglePipe", function() { return AnalogAnglePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnalogAnglePipe {
    transform(value) {
        return {
            WebkitTransform: `rotate(${value}deg)`,
            MozTransform: `rotate(${value}deg)`,
            MsTransform: `rotate(${value}deg)`,
            OTransform: `rotate(${value}deg)`,
            Transform: `rotate(${value}deg)`
        };
    }
}
AnalogAnglePipe.ɵfac = function AnalogAnglePipe_Factory(t) { return new (t || AnalogAnglePipe)(); };
AnalogAnglePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "analogAngle", type: AnalogAnglePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogAnglePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'analogAngle'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clock/pipes/hours-time-format.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/clock/pipes/hours-time-format.pipe.ts ***!
  \*******************************************************/
/*! exports provided: HoursTimeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursTimeFormatPipe", function() { return HoursTimeFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.interfaces */ "./src/app/app.interfaces.ts");



class HoursTimeFormatPipe {
    transform(value, format) {
        if (format === '24h') {
            return value;
        }
        return value > _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"] ? value - _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"] : value;
    }
}
HoursTimeFormatPipe.ɵfac = function HoursTimeFormatPipe_Factory(t) { return new (t || HoursTimeFormatPipe)(); };
HoursTimeFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "hoursTimeFormat", type: HoursTimeFormatPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoursTimeFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'hoursTimeFormat'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clock/pipes/make-digits.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/clock/pipes/make-digits.pipe.ts ***!
  \*************************************************/
/*! exports provided: MakeDigitsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeDigitsPipe", function() { return MakeDigitsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MakeDigitsPipe {
    transform(value, count = 2) {
        let stringValue = String(value);
        while (stringValue.length < count) {
            stringValue = `0${stringValue}`;
        }
        return stringValue;
    }
}
MakeDigitsPipe.ɵfac = function MakeDigitsPipe_Factory(t) { return new (t || MakeDigitsPipe)(); };
MakeDigitsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "makeDigits", type: MakeDigitsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakeDigitsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'makeDigits'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clock/pipes/weekdays.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/clock/pipes/weekdays.pipe.ts ***!
  \**********************************************/
/*! exports provided: WeekdaysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekdaysPipe", function() { return WeekdaysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WeekdaysPipe {
    constructor() {
        this.weekdaysDict = [
            'Sunday',
            'Monday',
            'Tuesday',
            'wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    }
    transform(value) {
        return this.weekdaysDict[value] || this.weekdaysDict[0];
    }
}
WeekdaysPipe.ɵfac = function WeekdaysPipe_Factory(t) { return new (t || WeekdaysPipe)(); };
WeekdaysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "weekdays", type: WeekdaysPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekdaysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'weekdays'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clock/reducers/clock.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/clock/reducers/clock.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/clock.actions */ "./src/app/clock/actions/clock.actions.ts");

const initialState = {
    currentTime: null,
    currentDate: null,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TIME"]:
            return Object.assign(Object.assign({}, state), { currentTime: action.payload });
        case _actions_clock_actions__WEBPACK_IMPORTED_MODULE_0__["SET_DATE"]:
            return Object.assign(Object.assign({}, state), { currentDate: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/clock/services/clock.service.ts":
/*!*************************************************!*\
  !*** ./src/app/clock/services/clock.service.ts ***!
  \*************************************************/
/*! exports provided: ClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockService", function() { return ClockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.interfaces */ "./src/app/app.interfaces.ts");



class ClockService {
    constructor() {
        this.SEC_MIN_ADJUST = 6;
        this.HOURS_ADJUST = 30;
        this.HOURS_MIN_ADJUST = 0.5;
    }
    getTime() {
        const currentDate = new Date();
        return {
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds(),
        };
    }
    getDate() {
        const currentDate = new Date();
        return {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear(),
            weekDay: currentDate.getDay(),
        };
    }
    convertToAnalog(time) {
        const seconds = time.seconds * this.SEC_MIN_ADJUST;
        const minutes = time.minutes * this.SEC_MIN_ADJUST;
        const hours = this.HOURS_ADJUST * (time.hours % _app_interfaces__WEBPACK_IMPORTED_MODULE_1__["HOURS_COUNT"]) + time.minutes * this.HOURS_MIN_ADJUST;
        return { seconds, minutes, hours };
    }
}
ClockService.ɵfac = function ClockService_Factory(t) { return new (t || ClockService)(); };
ClockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClockService, factory: ClockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\theto\Documents\clock-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map