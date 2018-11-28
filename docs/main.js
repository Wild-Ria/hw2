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

/***/ "./src/app/activity-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/activity-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: ActivityFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFilterPipe", function() { return ActivityFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActivityFilterPipe = /** @class */ (function () {
    function ActivityFilterPipe() {
    }
    ActivityFilterPipe.prototype.transform = function (hotels, activeHotelType) {
        if (!activeHotelType) {
            return hotels;
        }
        return hotels.filter(function (hotel) {
            return hotel.type.toLowerCase().includes(activeHotelType.toLowerCase());
        });
    };
    ActivityFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'activityFilter'
        })
    ], ActivityFilterPipe);
    return ActivityFilterPipe;
}());



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

module.exports = "<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <ng-container *ngIf=\"(hotels$ | async) as hotels; else loading\">\n    <div class=\"element-left\">\n      <app-main [hotels]=\"hotels | activityFilter: activityType\"\n                (onActivityChange)=\"onActivityChange($event)\"></app-main>\n    </div>\n    <div class=\"element-right\">\n      <app-weather [weather]=\"(hotels | activityFilter: activityType)[0].weather\"></app-weather>\n      <app-village [social]=\"(hotels | activityFilter: activityType)[0].social_info\"></app-village>\n    </div>\n  </ng-container>\n  <div class=\"clear\"> </div>\n</div>\n<ng-template #loading>\n  <h1>...loading</h1>\n</ng-template>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hotels$ = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.activityType = '';
    }
    AppComponent.prototype.onActivityChange = function (activityType) {
        this.activityType = activityType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "weather", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/activity/activity.component */ "./src/app/main/activity/activity.component.ts");
/* harmony import */ var _activity_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity-filter.pipe */ "./src/app/activity-filter.pipe.ts");
/* harmony import */ var _main_activity_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/activity/phone-number.pipe */ "./src/app/main/activity/phone-number.pipe.ts");
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
                _social_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"],
                _activity_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["ActivityFilterPipe"],
                _main_activity_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__["PhoneNumberPipe"]
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
        'img': ['../assets/img/res.jpg', '../assets/img/r1.jpg'],
        'address': 'Hotel 1 Address',
        'phone': 1285968685,
        'title': 'Hotel 1',
        'weather': {
            'title': 'Hotel 1',
            'icon': '../assets/img/cloudy.png',
            'water': 21,
            'temperature': 31
        },
        'social_info': {
            'title': 'Hotel 1',
            'img': '../assets/img/r1.jpg',
            'followers': 3080,
            'following': 100
        },
        'type': 'hotel'
    },
    {
        'img': ['../assets/img/b1.jpg'],
        'address': 'Hotel 2 Address',
        'phone': 2284968685,
        'title': 'Hotel 2',
        'weather': {
            'title': 'Hotel 2',
            'icon': '../assets/img/cloudy.png',
            'water': 23,
            'temperature': 30
        },
        'social_info': {
            'title': 'Hotel 2',
            'img': '../assets/img/r1.jpg',
            'followers': 2850,
            'following': 675
        },
        'type': 'hotel'
    },
    {
        'img': ['../assets/img/b1.jpg'],
        'address': 'Hotel 3 Address',
        'phone': 2284968685,
        'title': 'Hotel 3',
        'weather': {
            'title': 'Hotel 3',
            'icon': '../assets/img/cloudy.png',
            'water': 25,
            'temperature': 31.4
        },
        'social_info': {
            'title': 'Hotel 3',
            'img': '../assets/img/r1.jpg',
            'followers': 1800,
            'following': 1900
        },
        'type': 'hotel'
    },
    {
        'img': ['../assets/img/1.jpg'],
        'address': 'Fishing 1 Address',
        'phone': 1285968685,
        'title': 'Fishing 1',
        'weather': {
            'title': 'Fishing 1',
            'icon': '../assets/img/rainy.png',
            'water': 13,
            'temperature': 19
        },
        'social_info': {
            'title': 'Fishing 1',
            'img': '../assets/img/r1.jpg',
            'followers': 2850,
            'following': 675
        },
        'type': 'fishing'
    },
    {
        'img': ['../assets/img/1.jpg'],
        'address': 'Tours 1 Address',
        'phone': 5385923685,
        'title': 'Tours 1',
        'weather': {
            'title': 'Tours 1',
            'icon': '../assets/img/sunny.png',
            'water': 17,
            'temperature': 28
        },
        'social_info': {
            'title': 'Tours 1',
            'img': '../assets/img/r1.jpg',
            'followers': 28,
            'following': 10
        },
        'type': 'tours'
    },
    {
        'img': ['../assets/img/1.jpg'],
        'address': 'Tours 2 Address',
        'phone': 5385923685,
        'title': 'Tours 2',
        'weather': {
            'title': 'Tours 2',
            'icon': '../assets/img/sunny.png',
            'water': 19,
            'temperature': 28
        },
        'social_info': {
            'title': 'Tours 2',
            'img': '../assets/img/r1.jpg',
            'followers': 2900,
            'following': 1000
        },
        'type': 'tours'
    },
    {
        'img': ['../assets/img/1.jpg'],
        'address': 'Weather 1 Address',
        'phone': 5385962285,
        'title': 'Weather 1',
        'weather': {
            'title': 'Weather 1',
            'icon': '../assets/img/cloudy.png',
            'water': 19.5,
            'temperature': 25
        },
        'social_info': {
            'title': 'Weather 1',
            'img': '../assets/img/r1.jpg',
            'followers': 850,
            'following': 675
        },
        'type': 'weather'
    },
    {
        'img': ['../assets/img/1.jpg'],
        'address': 'Fishing 2 Address',
        'title': 'Fishing 2',
        'phone': 7385963685,
        'weather': {
            'title': 'Fishing 2',
            'icon': '../assets/img/cloudy.png',
            'water': 30,
            'temperature': 37
        },
        'social_info': {
            'title': 'Fishing 2',
            'img': '../assets/img/r1.jpg',
            'followers': 2850,
            'following': 675
        },
        'type': 'fishing'
    }
];
var data = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_data)
    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));


/***/ }),

/***/ "./src/app/main/activity/activity.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/activity/activity.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\">\n  <div class=\"activity-desc\">\n    <h5>Resort Address</h5>\n    <p>{{hotel.title}}</p>\n    <p>{{hotel.address}}</p>\n    <h6>Tel.: {{hotel.phone.toString() | phoneNumber}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li *ngFor=\"let image of hotel.img\">\n        <img [src]='image'  alt=\"\"/>\n      </li>\n    </ul>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/activity/activity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/activity/activity.component.ts ***!
  \*****************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
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

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityComponent.prototype, "hotel", void 0);
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/main/activity/activity.component.html")
        })
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/main/activity/phone-number.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/main/activity/phone-number.pipe.ts ***!
  \****************************************************/
/*! exports provided: PhoneNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberPipe", function() { return PhoneNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneNumberPipe = /** @class */ (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (num) {
        return "+" + num.slice(0, 2) + " " + num.slice(2, 5) + " " + num.slice(5, 8) + " " + num.slice(8);
    };
    PhoneNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'phoneNumber'
        })
    ], PhoneNumberPipe);
    return PhoneNumberPipe;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img src=\"../../assets/img/1.jpg\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li *ngFor=\"let activity of uniqueActivities\"\n          (click)=\"change(activity)\">\n        <a>{{activity}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Righteous indignation & like</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <app-activity *ngFor=\"let hotel of hotels | activityFilter: type\" [hotel]=\"hotel\"></app-activity>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.onActivityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainComponent.prototype.ngOnInit = function () {
        var result = [];
        this.hotels.forEach(function (hotel) {
            result.push(hotel.type);
        });
        this.uniqueActivities = Array.from(new Set(result));
    };
    MainComponent.prototype.change = function (activityType) {
        this.onActivityChange.emit(activityType);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MainComponent.prototype, "hotels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "hotel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainComponent.prototype, "onActivityChange", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{social.title}}</h4>\n    <span class=\"w-line\"></span>\n    <img [src]=\"social.img\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{social.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{social.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
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

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SocialComponent.prototype, "social", void 0);
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-village',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html")
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{weather.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\">\n    <img [src]=\"weather.icon\" alt=\"\">\n  </span>\n  <h2>{{weather.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{weather.water}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html")
        })
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

module.exports = __webpack_require__(/*! /Volumes/LOOPME/learning/angular/hw2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map