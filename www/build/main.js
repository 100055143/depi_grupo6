webpackJsonp([7],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(27);
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






var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(navCtrl, navParams, afDatabase, ProjectService, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProjectService = ProjectService;
        this.UnitService = UnitService;
    }
    AddProjectPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    AddProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProjectPage');
    };
    AddProjectPage.prototype.OnAddProject = function (value, valueUnit) {
        this.ProjectService.addProject(value, valueUnit).then(function (ref) { console.log(ref.key); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-project',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-project/add-project.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddProject(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="units" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n            <ion-item>\n\n                <ion-label color="primary">Proyecto:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="projects" placeholder="Proyecto"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaDesde" [(ngModel)]="dateFrom" placeholder="Fecha desde" ngModel></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaHasta" max="2030-12-31" [(ngModel)]="dateTo" placeholder="Fecha hasta" ngModel></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-project/add-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerRegistroPage = /** @class */ (function () {
    function VerRegistroPage(navCtrl, navParams, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
        this.contact = this.navParams.data;
        console.log(this.contact.key);
    }
    VerRegistroPage.prototype.onUpdateContact = function (value) {
        this.contactService.updateContact(value);
        this.navCtrl.pop();
    };
    VerRegistroPage.prototype.onRemoveContact = function (value) {
        this.contactService.removeContact(value);
        this.navCtrl.pop();
    };
    VerRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-registro',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-registro/ver-registro.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Registro Actual</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n            <ion-item>\n              <ion-label>Proyecto</ion-label>\n              <ion-select disabled="true" type="ion-select" [(ngModel)]="contact.proyecto" name="proyecto" ngModel required>\n                \n                  <ion-option>Proyecto 1 unidad 1</ion-option>\n                  <ion-option>Proyecto 2 unidad 1</ion-option>\n                  <ion-option>Proyecto 3 unidad 1</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 2</ion-option>\n                  <ion-option>Proyecto 2 unidad 2</ion-option>\n                  <ion-option>Proyecto 3 unidad 2</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 3</ion-option>\n                  <ion-option>Proyecto 2 unidad 3</ion-option>\n                  <ion-option>Proyecto 3 unidad 3</ion-option>\n                \n              </ion-select>\n              \n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Horas</ion-label>\n                <ion-input type="number" disabled="true" [(ngModel)]="contact.horas" min="0" max="8"name="horas" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Minutos</ion-label>\n              <ion-input type="number" disabled="true" [(ngModel)]="contact.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Fecha</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" disabled="true" [(ngModel)]="contact.fecha" name="fecha" ngModel></ion-datetime>\n              </ion-item>\n\n\n    <!-- (ionChange)="onUpdateContact(contact)" -->\n\n    <ion-item>\n            <ion-label>Válido: </ion-label>\n            <ion-checkbox item-right type="boolean" [(ngModel)]="contact.valid" ngModel name="valid"></ion-checkbox>\n\n    </ion-item>\n\n         <button ion-button block (click)="onUpdateContact(contact)">Modificar Registro</button>\n\n         <button ion-button block (click)="onRemoveContact(contact)">Eliminar Registro</button>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-registro/ver-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]])
    ], VerRegistroPage);
    return VerRegistroPage;
}());

//# sourceMappingURL=ver-registro.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUnitPage = /** @class */ (function () {
    function AddUnitPage(navCtrl, navParams, afDatabase, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UnitService = UnitService;
    }
    AddUnitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUnitPage');
    };
    AddUnitPage.prototype.OnAddUnit = function (value) {
        this.UnitService.addUnit(value).then(function (ref) { console.log(ref.key); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    AddUnitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-unit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-unit/add-unit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Unidad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddUnit(f.value)" #f="ngForm">\n        <ion-list>\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="units" placeholder="Unidad"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-unit/add-unit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__services_unit_service__["a" /* UnitService */]])
    ], AddUnitPage);
    return AddUnitPage;
}());

//# sourceMappingURL=add-unit.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-project/add-project.module": [
		449,
		6
	],
	"../pages/add-unit/add-unit.module": [
		450,
		5
	],
	"../pages/assign-hours/assign-hours.module": [
		451,
		0
	],
	"../pages/login/login.module": [
		452,
		4
	],
	"../pages/unit/unit.module": [
		455,
		3
	],
	"../pages/ver-horas-extra/ver-horas-extra.module": [
		453,
		2
	],
	"../pages/ver-registro/ver-registro.module": [
		454,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_todo_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_register_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, RegisterService, TodoService) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.RegisterService = RegisterService;
        this.TodoService = TodoService;
        this.userName = null;
        this.userUnidad = null;
    }
    HomePage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.auth.Session.subscribe(function (session) {
            if (session) {
                _this.userName = session.email;
                _this.RegisterService.recibirmail(_this.userName);
                _this.TodoService.recibirmail(_this.userName);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center">Time Management</h3>\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__services_todo_service__["a" /* TodoService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerHorasExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerHorasExtraPage = /** @class */ (function () {
    function VerHorasExtraPage(navCtrl, navParams, TodoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TodoService = TodoService;
        this.tareap = this.navParams.data;
        console.log(this.tareap.key);
    }
    VerHorasExtraPage.prototype.onUpdateTarea = function (value) {
        this.TodoService.updateTarea(value);
        this.navCtrl.pop();
    };
    VerHorasExtraPage.prototype.onRemoveTarea = function (value) {
        this.TodoService.removeTarea(value);
        this.navCtrl.pop();
    };
    VerHorasExtraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-horas-extra',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-horas-extra/ver-horas-extra.html"*/'<!--\n  Generated template for the VerTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Horas Extra</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Unidad</ion-label>\n    <ion-select type="ion-select" [(ngModel)]="tareap.unidad"  name="unidad" ngModel required>\n      <ion-option>Unidad 1</ion-option>\n      <ion-option>Unidad 2</ion-option>\n      <ion-option>Unidad 3</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Proyecto</ion-label>\n    <ion-select *ngIf="tareap.unidad== \'Unidad 1\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n      <ion-option>Proyecto 1 unidad 1</ion-option>\n      <ion-option>Proyecto 2 unidad 1</ion-option>\n      <ion-option>Proyecto 3 unidad 1</ion-option>\n    </ion-select>\n\n    <ion-select *ngIf="tareap.unidad== \'Unidad 2\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n        <ion-option>Proyecto 1 unidad 2</ion-option>\n        <ion-option>Proyecto 2 unidad 2</ion-option>\n        <ion-option>Proyecto 3 unidad 2</ion-option>\n      </ion-select>\n    \n    <ion-select *ngIf="tareap.unidad== \'Unidad 3\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n        <ion-option>Proyecto 1 unidad 3</ion-option>\n        <ion-option>Proyecto 2 unidad 3</ion-option>\n        <ion-option>Proyecto 3 unidad 3</ion-option>\n      </ion-select>\n    \n  </ion-item>\n\n  <ion-item>\n      <ion-label>Horas</ion-label>\n      <ion-input type="number" [(ngModel)]="tareap.horas" min="0" max="8"name="horas" ngModel></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Minutos</ion-label>\n    <ion-input type="number" [(ngModel)]="tareap.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="tareap.fecha" name="fecha" ngModel></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="tareap.valid" ngModel name="valid"></ion-checkbox>\n\n    </ion-item>\n\n<button ion-button block (click)="onUpdateTarea(tareap)">Modificar Registro</button>\n\n<button ion-button block (click)="onRemoveTarea(tareap)">Eliminar Registro</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-horas-extra/ver-horas-extra.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _c || Object])
    ], VerHorasExtraPage);
    return VerHorasExtraPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=ver-horas-extra.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__(81);
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






var UnitPage = /** @class */ (function () {
    //nameProj: string = null;
    function UnitPage(navCtrl, navParams, alertCtrl, UnitService, ProjectService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.UnitService = UnitService;
        this.ProjectService = ProjectService;
        this.unit = this.navParams.data;
        //this.nameProj = this.unit.name;
    }
    UnitPage.prototype.ionViewWillEnter = function () {
        this.projects$ = this.ProjectService
            .getAllProjects()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    UnitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnitPage');
    };
    UnitPage.prototype.OnRemoveUnit = function (value) {
        this.UnitService.removeUnit(value);
        this.navCtrl.pop();
    };
    UnitPage.prototype.OnUpdateUnit = function (value) {
        this.UnitService.updateUnit(value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    UnitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/unit/unit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{unit.name}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div align="right">\n\n        <button ion-button icon-only (click)="OnUpdateUnit($event, unit)">\n\n            <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="OnRemoveUnit($event, unit)">\n\n            <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n    </div>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary">Unit:</ion-label>\n\n            <ion-input type="text" [(ngModel)]="unit.name" name="name" disabled="true" ngModel required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary">Project:</ion-label>\n\n            <ion-select name="projects" [(ngModel)]="projects" multiple="false">\n\n                <ion-option *ngFor="let item of projects$ | async">\n\n                    {{item.name}}\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n     \n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/unit/unit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], UnitPage);
    return UnitPage;
}());

//# sourceMappingURL=unit.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(312);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_unit_add_unit__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_project_add_project__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_unit_unit__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_project_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_todo_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_register_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyDIoXySgQ5zNAxF26KPZAtNwasnQSknRVo",
    authDomain: "asignacion-de-horas.firebaseapp.com",
    databaseURL: "https://asignacion-de-horas.firebaseio.com",
    projectId: "asignacion-de-horas",
    storageBucket: "asignacion-de-horas.appspot.com",
    messagingSenderId: "1007331298205"
};
/*
    apiKey: "AIzaSyDV2yqDjHVnlVZHc1CFE4uYTFPAJ-d0cxc",
    authDomain: "depigrupo6.firebaseapp.com",
    databaseURL: "https://depigrupo6.firebaseio.com",
    projectId: "depigrupo6",
    storageBucket: "depigrupo6.appspot.com",
    messagingSenderId: "997836190563"

*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_unit_add_unit__["a" /* AddUnitPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_unit_unit__["a" /* UnitPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-unit/add-unit.module#AddUnitPageModule', name: 'AddUnitPage', segment: 'add-unit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-hours/assign-hours.module#AssignHoursPageModule', name: 'AssignHoursPage', segment: 'assign-hours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-horas-extra/ver-horas-extra.module#VerTodoPageModule', name: 'VerHorasExtraPage', segment: 'ver-horas-extra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-registro/ver-registro.module#VerRegistroPageModule', name: 'VerRegistroPage', segment: 'ver-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unit/unit.module#UnitPageModule', name: 'UnitPage', segment: 'unit', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_unit_add_unit__["a" /* AddUnitPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_unit_unit__["a" /* UnitPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_18__services_unit_service__["a" /* UnitService */],
                __WEBPACK_IMPORTED_MODULE_19__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_20__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_21__services_register_service__["a" /* RegisterService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitService = /** @class */ (function () {
    function UnitService(db) {
        this.db = db;
        this.unitsRef = this.db.list('Units');
    }
    UnitService.prototype.addUnit = function (value) {
        return this.unitsRef.push(value);
    };
    UnitService.prototype.updateUnit = function (value) {
        return this.unitsRef.update(value.key, value);
    };
    UnitService.prototype.removeUnit = function (value) {
        return this.unitsRef.remove(value.key);
    };
    UnitService.prototype.getAllUnits = function () {
        return this.unitsRef;
    };
    UnitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UnitService);
    return UnitService;
}());

//# sourceMappingURL=unit.service.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_unit_add_unit__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_project_add_project__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.userName = null;
        this.hideLogout = null;
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Revisión de horas', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Añadir unidad', component: __WEBPACK_IMPORTED_MODULE_8__pages_add_unit_add_unit__["a" /* AddUnitPage */] },
            { title: 'Añadir proyecto', component: __WEBPACK_IMPORTED_MODULE_9__pages_add_project_add_project__["a" /* AddProjectPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */];
                    _this.hideLogout = false;
                    _this.userName = session.email;
                }
                else {
                    _this.hideLogout = true;
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.CloseSession = function () {
        this.auth.logout();
        this.hideLogout = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <h3 align="center">{{userName}}</h3>\n     \n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose [hidden]="hideLogout" ion-item (click)="CloseSession()">\n\n            Logout\n\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_register_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ver_registro_ver_registro__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(290);
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









var ListPage = /** @class */ (function () {
    //dbs$: Observable<any[]>;
    function ListPage(navCtrl, navParams, afDatabase, auth, UnitService, RegisterService, TodoService, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.UnitService = UnitService;
        this.RegisterService = RegisterService;
        this.TodoService = TodoService;
        this.db = db;
        this.userName = null;
        this.userUnidad = null;
        //this.selectedItem = navParams.get('unit');
    }
    ListPage.prototype.ionViewWillEnter = function () {
        /*    this.dbs$ = this.db.list('m').snapshotChanges()
             .map(
               changes => {
                 return changes.map(c=> ({
                   key: c.payload.key, ...c.payload.val()
                 }));
               });
               */
        var _this = this;
        this.auth.Session.subscribe(function (session) {
            if (session) {
                _this.userName = session.email;
                _this.RegisterService.recibirmail(_this.userName);
                _this.TodoService.recibirmail(_this.userName);
            }
        });
        this.registros$ = this.RegisterService
            .getContacts() //Retorna la DB
            .snapshotChanges() //retorna los cambios en la DB (key and value)
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.tareas$ = this.TodoService
            .getTarea()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ListPage.prototype.itemTapped = function ($event, Registro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */], Registro);
    };
    ListPage.prototype.itemExtraTapped = function ($event, Tarea) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */], Tarea);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Revisión de horas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div align="center">\n\n        <p><strong> {{userName}} </strong></p>\n\n    </div>\n    <div>\n\n        <ion-select placeholder="Seleccione unidad" type="ion-select" [(ngModel)]="unidad" name="unidad" ngModel required>\n\n            <ion-option *ngFor="let item of units$ | async">\n                {{item.name}}\n            </ion-option>\n\n        </ion-select>\n\n    </div>\n\n\n\n    <!--<ion-select [(ngModel)]="task">\n\n        <ng-container *ngFor="let task of tasks">\n\n            <ion-option [value]="task" *ngIf="task.ProjectId == project.Id">{{task.Title}}</ion-option>\n\n        </ng-container>\n\n    </ion-select>-->\n\n\n\n    <ion-list>\n\n       <!-- <button ion-item *ngFor="let item of dbs$ | async" (click)="itemTapped($event, item)">\n            <p> {{item}}</p>\n        </button>-->\n\n        <button ion-item *ngFor="let item of registros$ | async" (click)="itemTapped($event, item)">\n\n            <!--<ng-container [value]="item" *ngIf="item.unit == unidad">-->\n\n                <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n                <p><strong>Horas: </strong>{{item.horas}}</p>\n\n                <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n                <p><strong>Fecha: </strong>{{item.fecha}}</p>\n\n                <p><strong>Tipo: </strong> Horas normales</p>\n\n            <!--</ng-container>-->\n\n        </button>\n\n        <button ion-item *ngFor="let item of tareas$ | async" (click)="itemExtraTapped($event, item)">\n\n            <p><strong>Unidad: </strong>{{item.unidad}}</p>\n\n            <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n            <p><strong>Horas: </strong>{{item.horas}}</p>\n\n            <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n            <p><strong>Fecha: </strong>{{item.fecha}}</p>\n            <p><strong>Tipo:</strong> Horas extra</p>\n\n        </button>\n\n        \n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_unit_service__["a" /* UnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_unit_service__["a" /* UnitService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_register_service__["a" /* RegisterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_todo_service__["a" /* TodoService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _h || Object])
    ], ListPage);
    return ListPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        console.log('Hello AuthProvider Provider');
    }
    // User Register
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) { })
            .catch(function (err) { return Promise.reject(err); });
    };
    // User Login
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    //User Check
    AuthProvider.prototype.checkUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Get Session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    // User Logout
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () { });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(db) {
        this.db = db;
    }
    TodoService.prototype.recibirmail = function (value) {
        this.mail = value;
        var split = this.mail.split('@', 2);
        this.tabla = split[0];
        //console.log(this.tabla);
        this.tareasRef = this.db.list(this.tabla + '/Horas Extra');
    };
    TodoService.prototype.addTarea = function (value) {
        return this.tareasRef.push(value);
    };
    TodoService.prototype.updateTarea = function (value) {
        return this.tareasRef.update(value.key, value);
    };
    TodoService.prototype.removeTarea = function (value) {
        return this.tareasRef.remove(value.key);
    };
    TodoService.prototype.getTarea = function () {
        return this.tareasRef;
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(db) {
        this.db = db;
    }
    RegisterService.prototype.recibirunidad = function (value) {
        this.unidad = value;
        console.log(this.unidad);
    };
    RegisterService.prototype.recibirmail = function (value) {
        this.mail = value;
        var split = this.mail.split('@', 2);
        this.tabla = split[0];
        this.contactsRef = this.db.list(this.tabla + '/Horas Ingresadas');
    };
    RegisterService.prototype.addContact = function (value) {
        return this.contactsRef.push(value);
    };
    RegisterService.prototype.updateContact = function (value) {
        return this.contactsRef.update(value.key, value);
    };
    RegisterService.prototype.removeContact = function (value) {
        return this.contactsRef.remove(value.key);
    };
    RegisterService.prototype.getContacts = function () {
        return this.contactsRef;
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //AngularFireList

var ProjectService = /** @class */ (function () {
    function ProjectService(db, alertCtrl) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.projectRef = this.db.list('projects');
    }
    ProjectService.prototype.addProject = function (value, valueUnit) {
        return this.projectRef.push(value);
    };
    ProjectService.prototype.updateProject = function (value) {
        return this.projectRef.update(value.key, value);
    };
    ProjectService.prototype.removeProject = function (value) {
        return this.projectRef.remove(value.key);
    };
    ProjectService.prototype.getAllProjects = function () {
        return this.projectRef;
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.user = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.OnLogin = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password)
            .then(function (user) {
            // El usuario se ha creado correctamente
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3 align="center">Acceso a Time Management</h3>\n\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.email"\n\n                       name="email"\n\n                       type="text"\n                       placeholder="User email"\n\n                       autocapitalize="off"\n\n                       required>\n            </ion-input>\n        </ion-item>\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.password"\n\n                       name="password"\n                       placeholder="Password"\n\n                       type="password"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" color="primary" block (click)="OnLogin()">Acceder</button>\n    <button ion-button (click)="signin()" type="submit" color="secondary" block>Registrarse</button>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map