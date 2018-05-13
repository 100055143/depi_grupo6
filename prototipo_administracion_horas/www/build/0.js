webpackJsonp([0],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignHoursPageModule", function() { return AssignHoursPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_hours__ = __webpack_require__(646);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssignHoursPageModule = /** @class */ (function () {
    function AssignHoursPageModule() {
    }
    AssignHoursPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assign_hours__["a" /* AssignHoursPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assign_hours__["a" /* AssignHoursPage */]),
            ],
        })
    ], AssignHoursPageModule);
    return AssignHoursPageModule;
}());

//# sourceMappingURL=assign-hours.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignHoursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__(88);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignHoursPage = /** @class */ (function () {
    function AssignHoursPage(navCtrl, navParams, afDatabase, UnitService, ProjectService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UnitService = UnitService;
        this.ProjectService = ProjectService;
    }
    AssignHoursPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.projects$ = this.ProjectService
            .getAllProjects()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    AssignHoursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignHoursPage');
    };
    //Add Time
    AssignHoursPage.prototype.OnAdd = function (value) {
        this.UnitService.addUnit(value).then(function (ref) { console.log(ref.key); });
        this.navCtrl.pop();
        //this.navCtrl.push(ListPage);
    };
    AssignHoursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assign-hours',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/assign-hours/assign-hours.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assign Time</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAdd(f.value)" #f="ngForm">\n\n        <ion-list>\n            <ion-item>\n\n                <ion-label color="primary">Unit:</ion-label>\n\n                <ion-select name="units" [(ngModel)]="units" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">\n\n                        {{item.name}}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Project:</ion-label>\n\n                <ion-select name="projects" [(ngModel)]="projects" multiple="false">\n\n                    <ion-option *ngFor="let item of projects$ | async">\n\n                        {{item.name}}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n                                                                  \n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Add Time</button>\n\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/assign-hours/assign-hours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], AssignHoursPage);
    return AssignHoursPage;
}());

//# sourceMappingURL=assign-hours.js.map

/***/ })

});
//# sourceMappingURL=0.js.map