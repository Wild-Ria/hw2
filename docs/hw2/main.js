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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <ng-container *ngIf=\"(hotels$ | async) as hotels; else loading\">\n    <div class=\"element-left\">\n      <app-main></app-main>\n    </div>\n    <div class=\"element-right\">\n      <app-weather></app-weather>\n      <app-village></app-village>\n    </div>\n  </ng-container>\n  <div class=\"clear\"> </div>\n</div>\n<ng-template #loading>\n  <h1>...loading</h1>\n</ng-template>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hotels$ = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _village_village_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./village/village.component */ "./src/app/village/village.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _village_village_component__WEBPACK_IMPORTED_MODULE_3__["VillageComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var _data = [
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "hotel"
    },
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "hotel"
    },
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "hotel"
    },
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "tours"
    },
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "weather"
    },
    {
        "img": "../assets/img/1.jpg",
        "address": "Resort Address",
        "phone": 1285968685,
        "weather": {
            "title": "Et harum quidem",
            "icon": "../assets/img/cloudy.png",
            "water": 23,
            "temperature": 30
        },
        "social_info": {
            "title": "Et harum quidem",
            "img": "../assets/img/r1.jpg",
            "followers": 2850,
            "following": 675
        },
        "type": "fishing"
    }
];
var data = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_data)
    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000));


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img src=\"../../assets/img/1.jpg\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li><a href=\"#\">Hotel</a></li>\n      <li><a href=\"#\">Fishing</a></li>\n      <li><a href=\"#\">Tours</a></li>\n      <li class=\"anc-bor\"><a href=\"#\">Weather</a></li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <div class=\"activity-row\">\n          <div class=\"activity-desc\">\n            <h5>Resort Address</h5>\n            <p>Sed perspiciatis</p>\n            <p>Et harum quidem</p>\n            <h6>Tel:+1285 968 685</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img src='../../assets/img/res.jpg'  alt=\"\"/></li>\n              <li><img src='../../assets/img/r1.jpg'  alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"> </div>\n        </div>\n        <div class=\"activity-row\">\n          <div class=\"activity-desc\">\n            <h5>Resort Address</h5>\n            <p>Sed ut perspiciatis</p>\n            <p>Et harum quidem</p>\n            <h6>Tel:+1285 968 685</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img src='../../assets/img/res.jpg'  alt=\"\"/></li>\n              <li><img src='../../assets/img/r1.jpg'  alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"> </div>\n        </div>\n        <div class=\"activity-row\">\n          <div class=\"activity-desc\">\n            <h5>Resort Address</h5>\n            <p>Sed ut perspiciatis</p>\n            <p>Et harum quidem</p>\n            <h6>Tel:+1285 968 685</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img src='../../assets/img/res.jpg'  alt=\"\"/></li>\n              <li><img src='../../assets/img/r1.jpg'  alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/village/village.component.css":
/*!***********************************************!*\
  !*** ./src/app/village/village.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbGxhZ2UvdmlsbGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/village/village.component.html":
/*!************************************************!*\
  !*** ./src/app/village/village.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>Nam libero voluptatem</h4>\n    <span class=\"w-line\"> </span>\n    <img src=\"../../assets/img/b1.jpg\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>2850</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>675</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/village/village.component.ts":
/*!**********************************************!*\
  !*** ./src/app/village/village.component.ts ***!
  \**********************************************/
/*! exports provided: VillageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageComponent", function() { return VillageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VillageComponent = /** @class */ (function () {
    function VillageComponent() {
    }
    VillageComponent.prototype.ngOnInit = function () {
    };
    VillageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-village",
            template: __webpack_require__(/*! ./village.component.html */ "./src/app/village/village.component.html"),
            styles: [__webpack_require__(/*! ./village.component.css */ "./src/app/village/village.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VillageComponent);
    return VillageComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>Et harum quidem</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>14<sup class=\"degree\">°</sup></h2>\n  <h6>Water 20<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wildria/work/hw2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map