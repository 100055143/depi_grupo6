webpackJsonp([17],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelUnitEmplService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelUnitEmplService = /** @class */ (function () {
    function RelUnitEmplService(db) {
        this.db = db;
        this.relunitemplRef = this.db.list('relunitempl/');
        this.emplsRef = this.db.list('Usuarios/');
        this.relunitprojRef = this.db.list('relunitproj/');
    }
    RelUnitEmplService.prototype.addRelUnitProj = function (value) {
        return this.relunitprojRef.push(value);
    };
    RelUnitEmplService.prototype.addRelUnitEmployee = function (value) {
        return this.relunitemplRef.push(value);
    };
    RelUnitEmplService.prototype.updateRelUnitEmployee = function (value) {
        return this.relunitemplRef.update(value.key, value);
    };
    RelUnitEmplService.prototype.removeRelUnitEmployee = function (value) {
        return this.relunitemplRef.remove(value.key);
    };
    RelUnitEmplService.prototype.getRelUnitEmployees = function () {
        return this.relunitemplRef;
    };
    RelUnitEmplService.prototype.getEmpls = function () {
        return this.emplsRef;
    };
    RelUnitEmplService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RelUnitEmplService);
    return RelUnitEmplService;
}());

//# sourceMappingURL=relunitempl.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
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
        this.navCtrl.pop();
    };
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-project',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/add-project/add-project.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddProject(f.value)" #f="ngForm">\n        <ion-list>\n\n            <!--<ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="units" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>-->\n\n\n            <ion-item>\n\n                <ion-label color="primary">Proyecto:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="projects" placeholder="Proyecto"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/add-project/add-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
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
        this.navCtrl.pop();
    };
    AddUnitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-unit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/add-unit/add-unit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Unidad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddUnit(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="units" placeholder="Unidad"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Añadir</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/add-unit/add-unit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__services_unit_service__["a" /* UnitService */]])
    ], AddUnitPage);
    return AddUnitPage;
}());

//# sourceMappingURL=add-unit.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verunidades_verunidades__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verproyectos_verproyectos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__relunidadempleado_relunidadempleado__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__relunitproject_relunitproject__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.onViewUnits = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verunidades_verunidades__["a" /* VerunidadesPage */]);
    };
    AdminPage.prototype.onViewProjects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__verproyectos_verproyectos__["a" /* VerproyectosPage */]);
    };
    AdminPage.prototype.onViewRelUnitEmployee = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__relunidadempleado_relunidadempleado__["a" /* RelunidadempleadoPage */]);
    };
    AdminPage.prototype.onViewRelUnitProject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__relunitproject_relunitproject__["a" /* RelunitprojectPage */]);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/admin/admin.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Admnistración</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-col width-50 class="center2">\n\n        <button ion-button large (click)="onViewUnits()">Unidades</button>\n\n    </ion-col>\n\n    <ion-col width-50 class="center">\n\n        <button ion-button large (click)="onViewProjects()">Proyectos</button>\n\n    </ion-col>\n\n    <ion-col width-50 class="center3">\n\n        <button ion-button large (click)="onViewRelUnitEmployee()">Unidad<br/>Empleado</button>\n\n    </ion-col>\n\n    <ion-col width-50 class="center4">\n\n        <button ion-button large (click)="onViewRelUnitProject()">Unidad<br/>Proyecto</button>\n\n    </ion-col>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerunidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_unit_add_unit__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editunit_editunit__ = __webpack_require__(153);
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





var VerunidadesPage = /** @class */ (function () {
    function VerunidadesPage(navCtrl, navParams, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UnitService = UnitService;
    }
    VerunidadesPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    VerunidadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerunidadesPage');
    };
    VerunidadesPage.prototype.onAddUnit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_unit_add_unit__["a" /* AddUnitPage */]);
    };
    VerunidadesPage.prototype.itemTapped = function ($event, unit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editunit_editunit__["a" /* EditunitPage */], unit);
    };
    VerunidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verunidades',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verunidades/verunidades.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Unidades</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddUnit()"> + </ion-icon>\n\n    <ion-list>\n        <button ion-item *ngFor="let item of units$ | async" (click)="itemTapped($event, item)">\n\n            <p><strong>Unidad:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </button>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verunidades/verunidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], VerunidadesPage);
    return VerunidadesPage;
}());

//# sourceMappingURL=verunidades.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditunitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditunitPage = /** @class */ (function () {
    function EditunitPage(navCtrl, navParams, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UnitService = UnitService;
        this.units = this.navParams.data;
        console.log(this.units.key);
    }
    EditunitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditunitPage');
    };
    EditunitPage.prototype.onUpdate = function (value) {
        this.UnitService.updateUnit(value);
        this.navCtrl.pop();
    };
    EditunitPage.prototype.onRemove = function (value) {
        this.UnitService.removeUnit(value);
        this.navCtrl.pop();
    };
    EditunitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editunit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editunit/editunit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Editar Unidad</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label color="primary">Unidad:</ion-label>\n\n            <ion-input name="name" [(ngModel)]="units.name" placeholder="Unidad"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Fecha desde:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="units.fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Fecha hasta:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="units.fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block (click)="onUpdate(units)">Modificar Registro</button>\n\n\n\n    <button ion-button block color="danger" (click)="onRemove(units)">Eliminar Registro</button>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editunit/editunit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_unit_service__["a" /* UnitService */]])
    ], EditunitPage);
    return EditunitPage;
}());

//# sourceMappingURL=editunit.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerproyectosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project_add_project__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editproject_editproject__ = __webpack_require__(155);
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





var VerproyectosPage = /** @class */ (function () {
    function VerproyectosPage(navCtrl, navParams, ProjectService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProjectService = ProjectService;
    }
    VerproyectosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerproyectosPage');
    };
    VerproyectosPage.prototype.ionViewWillEnter = function () {
        this.projects$ = this.ProjectService
            .getAllProjects()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    VerproyectosPage.prototype.onAddProject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_project_add_project__["a" /* AddProjectPage */]);
    };
    VerproyectosPage.prototype.itemTapped = function ($event, projects) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editproject_editproject__["a" /* EditprojectPage */], projects);
    };
    VerproyectosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verproyectos',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verproyectos/verproyectos.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Proyectos</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddProject()"> + </ion-icon>\n\n\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of projects$ | async" (click)="itemTapped($event, item)">\n\n            <!--<p><strong>Unidad:</strong> {{ item.units }}</p>-->\n\n            <p><strong>Proyecto:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </button>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verproyectos/verproyectos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], VerproyectosPage);
    return VerproyectosPage;
}());

//# sourceMappingURL=verproyectos.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprojectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(28);
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




var EditprojectPage = /** @class */ (function () {
    function EditprojectPage(navCtrl, navParams, ProjectService, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProjectService = ProjectService;
        this.UnitService = UnitService;
        this.project = this.navParams.data;
        console.log(this.project.key);
    }
    EditprojectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprojectPage');
    };
    EditprojectPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    EditprojectPage.prototype.onUpdate = function (value) {
        this.ProjectService.updateProject(value);
        this.navCtrl.pop();
    };
    EditprojectPage.prototype.onRemove = function (value) {
        this.ProjectService.removeProject(value);
        this.navCtrl.pop();
    };
    EditprojectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editproject',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editproject/editproject.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Editar Proyecto</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <!--<ion-item>\n\n            <ion-label color="primary">Unidad:</ion-label>\n\n            <ion-select placeholder="Unidad" name="units" [(ngModel)]="project.units" multiple="false">\n\n                <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>-->\n\n        <ion-item>\n\n            <ion-label color="primary">Proyecto:</ion-label>\n\n            <ion-input name="name" [(ngModel)]="project.name" placeholder="Proyecto"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Fecha desde:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechaDesde" [(ngModel)]="project.fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Fecha hasta:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechaHasta" max="2030-12-31" [(ngModel)]="project.fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block (click)="onUpdate(project)">Modificar Registro</button>\n\n    <button ion-button block color="danger" (click)="onRemove(project)">Eliminar Registro</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editproject/editproject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], EditprojectPage);
    return EditprojectPage;
}());

//# sourceMappingURL=editproject.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelunidadempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_relunitempl_service__ = __webpack_require__(126);
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




var RelunidadempleadoPage = /** @class */ (function () {
    function RelunidadempleadoPage(navCtrl, navParams, UnitService, RelUnitEmplService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UnitService = UnitService;
        this.RelUnitEmplService = RelUnitEmplService;
    }
    RelunidadempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelunidadempleadoPage');
    };
    RelunidadempleadoPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.empls$ = this.RelUnitEmplService
            .getEmpls()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    RelunidadempleadoPage.prototype.onAddRelUnitEmpl = function (value) {
        this.RelUnitEmplService.addRelUnitEmployee(value);
        this.navCtrl.pop();
    };
    RelunidadempleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relunidadempleado',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/relunidadempleado/relunidadempleado.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Relación<br />Unidad-Empleado</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onAddRelUnitEmpl(f.value)" #f="ngForm">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="unidad" [(ngModel)]="unidad" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Empleado:</ion-label>\n\n                <ion-select placeholder="Empleado" name="empleado" [(ngModel)]="empleado" multiple="false">\n\n                    <ion-option *ngFor="let item of empls$ | async">{{item.key}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Añadir</button>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/relunidadempleado/relunidadempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_3__services_relunitempl_service__["a" /* RelUnitEmplService */]])
    ], RelunidadempleadoPage);
    return RelunidadempleadoPage;
}());

//# sourceMappingURL=relunidadempleado.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelunitprojectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_relunitempl_service__ = __webpack_require__(126);
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






var RelunitprojectPage = /** @class */ (function () {
    function RelunitprojectPage(navCtrl, navParams, afDatabase, ProjectService, UnitService, RelUnitEmplService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProjectService = ProjectService;
        this.UnitService = UnitService;
        this.RelUnitEmplService = RelUnitEmplService;
    }
    RelunitprojectPage.prototype.ionViewWillEnter = function () {
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
    RelunitprojectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelunitprojectPage');
    };
    RelunitprojectPage.prototype.OnAddProject = function (value) {
        this.RelUnitEmplService.addRelUnitProj(value).then(function (ref) { console.log(ref.key); });
        this.navCtrl.pop();
    };
    RelunitprojectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relunitproject',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/relunitproject/relunitproject.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Relación <br/> Unidad-Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddProject(f.value)" #f="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label color="primary">Unidad:</ion-label>\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="units" multiple="false">\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color="primary">Proyecto:</ion-label>\n                <ion-select placeholder="Proyecto" name="projects" [(ngModel)]="projects" multiple="false">\n                    <ion-option *ngFor="let item of projects$ | async">{{item.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Fecha desde:</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Fecha hasta:</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n            </ion-item>\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/relunitproject/relunitproject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_5__services_relunitempl_service__["a" /* RelUnitEmplService */]])
    ], RelunitprojectPage);
    return RelunitprojectPage;
}());

//# sourceMappingURL=relunitproject.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(47);
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






var AltaempleadoPage = /** @class */ (function () {
    function AltaempleadoPage(navCtrl, navParams, alertCtrl, auth, UserService, UnitService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.UserService = UserService;
        this.UnitService = UnitService;
        this.user = { email: '', password: '' };
    }
    AltaempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaempleadoPage');
    };
    AltaempleadoPage.prototype.ionViewWillEnter = function () {
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    AltaempleadoPage.prototype.onAddUser = function (value) {
        this.UserService.recibirmail(value.email);
        this.UserService.addUser(value);
        this.signin();
        this.navCtrl.pop();
    };
    AltaempleadoPage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password).then(function (user) {
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            //alert.present();
        });
    };
    AltaempleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-altaempleado',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/altaempleado/altaempleado.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Alta Empleado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onAddUser(f.value)" #f="ngForm">\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="user.unidad" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">Nombre:</ion-label>\n\n                <ion-input [(ngModel)]="user.nombre"\n\n                           name="nombre"\n\n                           type="text"\n\n                           placeholder="Nombre empleado"\n\n                           autocapitalize="off"\n\n                           required>\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">Email:</ion-label>\n\n                <ion-input [(ngModel)]="user.email"\n\n                           name="email"\n\n                           type="text"\n\n                           placeholder="User email"\n\n                           autocapitalize="off"\n\n                           required>\n\n                </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Password:</ion-label>\n\n                <ion-input [(ngModel)]="user.password"\n\n                           name="password"\n\n                           placeholder="Password"\n\n                           type="password"\n\n                           required>\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="user.fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="user.fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n        <button ion-button (click)="signin()" type="submit" color="secondary" block>Registrar empleado</button>\n     </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/altaempleado/altaempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], AltaempleadoPage);
    return AltaempleadoPage;
}());

//# sourceMappingURL=altaempleado.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Unidad1M", "Unidad2M", "Unidad3M", "Unidad4M", "Unidad5M", "Unidad6M"],
                datasets: [{
                        label: 'Número de Horas',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "doughnutCanvas", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Dashboards</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Horas trabajadas por unidades\n\n        </ion-card-header>\n\n        <ion-card-content style="position: relative; height:70vh; width:80vw">\n\n            <canvas style="position: relative; height:80vh; width:80vw" #doughnutCanvas></canvas>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditempleadoPage = /** @class */ (function () {
    function EditempleadoPage(navCtrl, navParams, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        //this.user = this.navParams.data;
        this.user = this.UserService.getUserData(this.navParams.data);
    }
    EditempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditempleadoPage');
    };
    EditempleadoPage.prototype.onUpdate = function (value) {
        //this.UserService.(value);
        this.navCtrl.pop();
    };
    EditempleadoPage.prototype.onRemove = function (value) {
        //this.UserService.removeUnit(value);
        this.navCtrl.pop();
    };
    EditempleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editempleado',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editempleado/editempleado.html"*/'<ion-header>\n    <ion-navbar>\n    <ion-title>Empleado</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label color="primary">Unidad:</ion-label>\n\n            <ion-select placeholder="Unidad" name="units" [(ngModel)]="user.unidad" multiple="false">\n\n                <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Nombre:</ion-label>\n\n            <ion-input [(ngModel)]="user.nombre"\n\n                       name="nombre"\n\n                       type="text"\n\n                       placeholder="Nombre empleado"\n\n                       autocapitalize="off"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Email:</ion-label>\n\n            <ion-input [(ngModel)]="user.email"\n\n                       name="email"\n\n                       type="text"\n\n                       placeholder="User email"\n\n                       autocapitalize="off"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Password:</ion-label>\n\n            <ion-input [(ngModel)]="user.password"\n\n                       name="password"\n\n                       placeholder="Password"\n\n                       type="password"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Fecha desde:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="user.fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Fecha hasta:</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="user.fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="onUpdate(units)">Modificar Empleado</button>\n\n    <button ion-button block color="danger" (click)="onRemove(units)">Eliminar Empleado</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/editempleado/editempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], EditempleadoPage);
    return EditempleadoPage;
}());

//# sourceMappingURL=editempleado.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerHorasExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(84);
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
    VerHorasExtraPage.prototype.onChangeNoValid = function (value) {
        value.valid = false;
    };
    VerHorasExtraPage.prototype.onChangeValid = function (value) {
        value.novalid = false;
    };
    VerHorasExtraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-horas-extra',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/ver-horas-extra/ver-horas-extra.html"*/'<!--\n  Generated template for the VerTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Horas Extra</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label>Unidad</ion-label>\n\n        <ion-select disabled="true" type="ion-select" [(ngModel)]="tareap.unidad" name="unidad" ngModel required>\n\n            <ion-option>Unidad 1</ion-option>\n\n            <ion-option>Unidad 2</ion-option>\n\n            <ion-option>Unidad 3</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Proyecto</ion-label>\n\n        <ion-select disabled="true" *ngIf="tareap.unidad== \'Unidad 1\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n\n            <ion-option>Proyecto 1 unidad 1</ion-option>\n\n            <ion-option>Proyecto 2 unidad 1</ion-option>\n\n            <ion-option>Proyecto 3 unidad 1</ion-option>\n\n        </ion-select>\n\n        <ion-select disabled="true" *ngIf="tareap.unidad== \'Unidad 2\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n\n            <ion-option>Proyecto 1 unidad 2</ion-option>\n\n            <ion-option>Proyecto 2 unidad 2</ion-option>\n\n            <ion-option>Proyecto 3 unidad 2</ion-option>\n\n        </ion-select>\n\n\n\n        <ion-select disabled="true" *ngIf="tareap.unidad== \'Unidad 3\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n\n            <ion-option>Proyecto 1 unidad 3</ion-option>\n\n            <ion-option>Proyecto 2 unidad 3</ion-option>\n\n            <ion-option>Proyecto 3 unidad 3</ion-option>\n\n        </ion-select>\n\n\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Horas</ion-label>\n\n        <ion-input type="number" disabled="true" [(ngModel)]="tareap.horas" min="0" max="8" name="horas" ngModel></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Minutos</ion-label>\n\n        <ion-input  type="number" disabled="true" [(ngModel)]="tareap.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fecha</ion-label>\n\n        <ion-datetime disabled="true" displayFormat="YYYY-MM-DD" [(ngModel)]="tareap.fecha" name="fecha" ngModel></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="tareap.valid" ngModel name="valid" (ionChange)="onChangeValid(tareap)"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>No válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="tareap.novalid" ngModel name="novalid" (ionChange)="onChangeNoValid(tareap)"></ion-checkbox>\n\n    </ion-item>\n\n\n    <button ion-button block (click)="onUpdateTarea(tareap)">Modificar Registro</button>\n\n    <button ion-button block (click)="onRemoveTarea(tareap)">Eliminar Registro</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/ver-horas-extra/ver-horas-extra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]])
    ], VerHorasExtraPage);
    return VerHorasExtraPage;
}());

//# sourceMappingURL=ver-horas-extra.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    VerRegistroPage.prototype.onChangeNoValid = function (value) {
        value.valid = false;
    };
    VerRegistroPage.prototype.onChangeValid = function (value) {
        value.novalid = false;
    };
    VerRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-registro',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/ver-registro/ver-registro.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Registro Actual</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label>Proyecto</ion-label>\n\n        <ion-select disabled="true" type="ion-select" [(ngModel)]="contact.proyecto" name="proyecto" ngModel required>\n\n\n\n            <ion-option>Proyecto 1 unidad 1</ion-option>\n\n            <ion-option>Proyecto 2 unidad 1</ion-option>\n\n            <ion-option>Proyecto 3 unidad 1</ion-option>\n\n\n\n            <ion-option>Proyecto 1 unidad 2</ion-option>\n\n            <ion-option>Proyecto 2 unidad 2</ion-option>\n\n            <ion-option>Proyecto 3 unidad 2</ion-option>\n\n\n\n            <ion-option>Proyecto 1 unidad 3</ion-option>\n\n            <ion-option>Proyecto 2 unidad 3</ion-option>\n\n            <ion-option>Proyecto 3 unidad 3</ion-option>\n\n\n\n        </ion-select>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Horas</ion-label>\n\n        <ion-input type="number" disabled="true" [(ngModel)]="contact.horas" min="0" max="8" name="horas" ngModel></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Minutos</ion-label>\n\n        <ion-input type="number" disabled="true" [(ngModel)]="contact.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fecha</ion-label>\n\n        <ion-datetime displayFormat="YYYY-MM-DD" disabled="true" [(ngModel)]="contact.fecha" name="fecha" ngModel></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="contact.valid" ngModel name="valid" (ionChange)="onChangeValid(contact)"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>No válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="contact.novalid" ngModel name="novalid" (ionChange)="onChangeNoValid(contact)"></ion-checkbox>\n\n    </ion-item>\n\n\n    <button ion-button block (click)="onUpdateContact(contact)">Modificar Registro</button>\n\n    <button ion-button block (click)="onRemoveContact(contact)">Eliminar Registro</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/ver-registro/ver-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]])
    ], VerRegistroPage);
    return VerRegistroPage;
}());

//# sourceMappingURL=ver-registro.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__altaempleado_altaempleado__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editempleado_editempleado__ = __webpack_require__(160);
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







var VerempleadoPage = /** @class */ (function () {
    function VerempleadoPage(navCtrl, navParams, alertCtrl, auth, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.UserService = UserService;
    }
    VerempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerempleadoPage');
    };
    VerempleadoPage.prototype.ionViewWillEnter = function () {
        this.users$ = this.UserService
            .getAllUsers()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    VerempleadoPage.prototype.onAddUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__altaempleado_altaempleado__["a" /* AltaempleadoPage */]);
    };
    VerempleadoPage.prototype.itemTapped = function ($event, value) {
        this.user = this.UserService.getUserData(value.toString()).snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editempleado_editempleado__["a" /* EditempleadoPage */], value);
    };
    VerempleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verempleado',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verempleado/verempleado.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Empleados</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ion-icon ion-button (click)="onAddUser()"> + </ion-icon>\n\n\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of users$ | async" (click)="itemTapped($event, item.key)">\n\n            <p><strong>Empleado:</strong> {{ item.key }}</p>\n\n        </button>\n\n    </ion-list>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/verempleado/verempleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], VerempleadoPage);
    return VerempleadoPage;
}());

//# sourceMappingURL=verempleado.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-project/add-project.module": [
		645,
		16
	],
	"../pages/add-unit/add-unit.module": [
		646,
		15
	],
	"../pages/admin/admin.module": [
		647,
		14
	],
	"../pages/altaempleado/altaempleado.module": [
		648,
		13
	],
	"../pages/assign-hours/assign-hours.module": [
		649,
		0
	],
	"../pages/dashboard/dashboard.module": [
		650,
		12
	],
	"../pages/editempleado/editempleado.module": [
		651,
		11
	],
	"../pages/editproject/editproject.module": [
		652,
		10
	],
	"../pages/editunit/editunit.module": [
		653,
		9
	],
	"../pages/login/login.module": [
		654,
		8
	],
	"../pages/relunidadempleado/relunidadempleado.module": [
		655,
		7
	],
	"../pages/relunitproject/relunitproject.module": [
		656,
		6
	],
	"../pages/ver-horas-extra/ver-horas-extra.module": [
		657,
		5
	],
	"../pages/ver-registro/ver-registro.module": [
		658,
		4
	],
	"../pages/verempleado/verempleado.module": [
		659,
		3
	],
	"../pages/verproyectos/verproyectos.module": [
		660,
		2
	],
	"../pages/verunidades/verunidades.module": [
		661,
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_todo_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_register_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(47);
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
    function HomePage(navCtrl, auth, RegisterService, TodoService, UserService) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.RegisterService = RegisterService;
        this.TodoService = TodoService;
        this.UserService = UserService;
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
                _this.UserService.recibirmail(_this.userName);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center">Time Management</h3>\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <h4>Sobre la App</h4>\n\n    <p>Aplicación para gestión del tiempo por parte del departamento de RRHH.</p>\n\n    <h4>Grupo de desarrollo</h4>\n\n    <p><strong>Grupo 6</strong></p>\n\n    <p>https://github.com/delafuente28/IonicTimeManagementApp</p>\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_todo_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_register_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ver_registro_ver_registro__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(161);
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
    function ListPage(navCtrl, navParams, afDatabase, auth, UnitService, RegisterService, TodoService, db, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.UnitService = UnitService;
        this.RegisterService = RegisterService;
        this.TodoService = TodoService;
        this.db = db;
        this.UserService = UserService;
        this.userName = null;
        this.userUnidad = null;
    }
    ListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.auth.Session.subscribe(function (session) {
            if (session) {
                _this.userName = session.email;
                _this.RegisterService.recibirmail(_this.userName);
                _this.TodoService.recibirmail(_this.userName);
            }
        });
        this.units$ = this.UnitService
            .getAllUnits()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.users$ = this.UserService
            .getAllUsers()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.horasIngresadas$ = this.RegisterService
            .getHoras('jose')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.tareas$ = this.TodoService
            .getHoras('jose')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ListPage.prototype.itemTapped = function ($event, Registro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */], Registro);
    };
    ListPage.prototype.itemExtraTapped = function ($event, Tarea) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */], Tarea);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Revisión de horas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n\n        <ion-select placeholder="Seleccione unidad" type="ion-select" [(ngModel)]="unidad" name="unidad" ngModel required>\n\n            <ion-option *ngFor="let item of units$ | async">\n                {{item.name}}\n            </ion-option>\n\n        </ion-select>\n\n    </div>\n\n\n    <ion-list *ngFor="let item of users$ | async">\n\n\n\n        <p align="center"><strong>Empleado:</strong> {{ item.key }}</p>\n\n        <hr />\n\n\n        <button ion-item *ngFor="let item of horasIngresadas$ | async" (click)="itemTapped($event, item)">\n\n            <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n            <p><strong>Horas: </strong>{{item.horas}}</p>\n\n            <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n            <p><strong>Fecha: </strong>{{item.fecha}}</p>\n\n            <p><strong>Tipo: </strong> Horas normales</p>\n\n        </button>\n\n\n\n        <button ion-item *ngFor="let item of tareas$ | async" (click)="itemExtraTapped($event, item)">\n\n            <p><strong>Unidad: </strong>{{item.unidad}}</p>\n\n            <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n            <p><strong>Horas: </strong>{{item.horas}}</p>\n\n            <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n            <p><strong>Fecha: </strong>{{item.fecha}}</p>\n\n            <p><strong>Tipo:</strong> Horas extra</p>\n\n        </button>\n\n\n\n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_7__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_unit_add_unit__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_project_add_project__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_verunidades_verunidades__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_verproyectos_verproyectos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editunit_editunit__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_editproject_editproject__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_relunidadempleado_relunidadempleado__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_verempleado_verempleado__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_altaempleado_altaempleado__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_editempleado_editempleado__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_relunitproject_relunitproject__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_unit_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_project_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_relunitempl_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_user_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_todo_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_register_service__ = __webpack_require__(85);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_unit_add_unit__["a" /* AddUnitPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_verunidades_verunidades__["a" /* VerunidadesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_verproyectos_verproyectos__["a" /* VerproyectosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_editunit_editunit__["a" /* EditunitPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_editproject_editproject__["a" /* EditprojectPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_relunidadempleado_relunidadempleado__["a" /* RelunidadempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_verempleado_verempleado__["a" /* VerempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_editempleado_editempleado__["a" /* EditempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_relunitproject_relunitproject__["a" /* RelunitprojectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-unit/add-unit.module#AddUnitPageModule', name: 'AddUnitPage', segment: 'add-unit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/altaempleado/altaempleado.module#AltaempleadoPageModule', name: 'AltaempleadoPage', segment: 'altaempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-hours/assign-hours.module#AssignHoursPageModule', name: 'AssignHoursPage', segment: 'assign-hours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editempleado/editempleado.module#EditempleadoPageModule', name: 'EditempleadoPage', segment: 'editempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editproject/editproject.module#EditprojectPageModule', name: 'EditprojectPage', segment: 'editproject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editunit/editunit.module#EditunitPageModule', name: 'EditunitPage', segment: 'editunit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relunidadempleado/relunidadempleado.module#RelunidadempleadoPageModule', name: 'RelunidadempleadoPage', segment: 'relunidadempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relunitproject/relunitproject.module#RelunitprojectPageModule', name: 'RelunitprojectPage', segment: 'relunitproject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-horas-extra/ver-horas-extra.module#VerTodoPageModule', name: 'VerHorasExtraPage', segment: 'ver-horas-extra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-registro/ver-registro.module#VerRegistroPageModule', name: 'VerRegistroPage', segment: 'ver-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verempleado/verempleado.module#VerempleadoPageModule', name: 'VerempleadoPage', segment: 'verempleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verproyectos/verproyectos.module#VerproyectosPageModule', name: 'VerproyectosPage', segment: 'verproyectos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verunidades/verunidades.module#VerunidadesPageModule', name: 'VerunidadesPage', segment: 'verunidades', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_11__pages_add_unit_add_unit__["a" /* AddUnitPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__["a" /* VerRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__["a" /* VerHorasExtraPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_verunidades_verunidades__["a" /* VerunidadesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_verproyectos_verproyectos__["a" /* VerproyectosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_editunit_editunit__["a" /* EditunitPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_editproject_editproject__["a" /* EditprojectPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_relunidadempleado_relunidadempleado__["a" /* RelunidadempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_verempleado_verempleado__["a" /* VerempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_altaempleado_altaempleado__["a" /* AltaempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_editempleado_editempleado__["a" /* EditempleadoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_relunitproject_relunitproject__["a" /* RelunitprojectPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_28__services_unit_service__["a" /* UnitService */],
                __WEBPACK_IMPORTED_MODULE_29__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_32__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_33__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_30__services_relunitempl_service__["a" /* RelUnitEmplService */],
                __WEBPACK_IMPORTED_MODULE_31__services_user_service__["a" /* UserService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
        this.usersSystemRef = this.db.list('Usuarios/');
    }
    UserService.prototype.recibirmail = function (value) {
        this.mail = value;
        var split = this.mail.split('@', 2);
        this.tabla = split[0];
        this.usersRef = this.db.list('Usuarios/' + this.tabla + '/DatosUsuario');
    };
    UserService.prototype.getUserData = function (value) {
        this.usersRef = this.db.object('Usuarios/' + value + '/DatosUsuario');
        return this.usersRef;
    };
    UserService.prototype.addUser = function (value) {
        return this.usersRef.push(value);
    };
    UserService.prototype.getAllUsers = function () {
        return this.usersSystemRef;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 273,
	"./af.js": 273,
	"./ar": 274,
	"./ar-dz": 275,
	"./ar-dz.js": 275,
	"./ar-kw": 276,
	"./ar-kw.js": 276,
	"./ar-ly": 277,
	"./ar-ly.js": 277,
	"./ar-ma": 278,
	"./ar-ma.js": 278,
	"./ar-sa": 279,
	"./ar-sa.js": 279,
	"./ar-tn": 280,
	"./ar-tn.js": 280,
	"./ar.js": 274,
	"./az": 281,
	"./az.js": 281,
	"./be": 282,
	"./be.js": 282,
	"./bg": 283,
	"./bg.js": 283,
	"./bm": 284,
	"./bm.js": 284,
	"./bn": 285,
	"./bn.js": 285,
	"./bo": 286,
	"./bo.js": 286,
	"./br": 287,
	"./br.js": 287,
	"./bs": 288,
	"./bs.js": 288,
	"./ca": 289,
	"./ca.js": 289,
	"./cs": 290,
	"./cs.js": 290,
	"./cv": 291,
	"./cv.js": 291,
	"./cy": 292,
	"./cy.js": 292,
	"./da": 293,
	"./da.js": 293,
	"./de": 294,
	"./de-at": 295,
	"./de-at.js": 295,
	"./de-ch": 296,
	"./de-ch.js": 296,
	"./de.js": 294,
	"./dv": 297,
	"./dv.js": 297,
	"./el": 298,
	"./el.js": 298,
	"./en-au": 299,
	"./en-au.js": 299,
	"./en-ca": 300,
	"./en-ca.js": 300,
	"./en-gb": 301,
	"./en-gb.js": 301,
	"./en-ie": 302,
	"./en-ie.js": 302,
	"./en-il": 303,
	"./en-il.js": 303,
	"./en-nz": 304,
	"./en-nz.js": 304,
	"./eo": 305,
	"./eo.js": 305,
	"./es": 306,
	"./es-do": 307,
	"./es-do.js": 307,
	"./es-us": 308,
	"./es-us.js": 308,
	"./es.js": 306,
	"./et": 309,
	"./et.js": 309,
	"./eu": 310,
	"./eu.js": 310,
	"./fa": 311,
	"./fa.js": 311,
	"./fi": 312,
	"./fi.js": 312,
	"./fo": 313,
	"./fo.js": 313,
	"./fr": 314,
	"./fr-ca": 315,
	"./fr-ca.js": 315,
	"./fr-ch": 316,
	"./fr-ch.js": 316,
	"./fr.js": 314,
	"./fy": 317,
	"./fy.js": 317,
	"./gd": 318,
	"./gd.js": 318,
	"./gl": 319,
	"./gl.js": 319,
	"./gom-latn": 320,
	"./gom-latn.js": 320,
	"./gu": 321,
	"./gu.js": 321,
	"./he": 322,
	"./he.js": 322,
	"./hi": 323,
	"./hi.js": 323,
	"./hr": 324,
	"./hr.js": 324,
	"./hu": 325,
	"./hu.js": 325,
	"./hy-am": 326,
	"./hy-am.js": 326,
	"./id": 327,
	"./id.js": 327,
	"./is": 328,
	"./is.js": 328,
	"./it": 329,
	"./it.js": 329,
	"./ja": 330,
	"./ja.js": 330,
	"./jv": 331,
	"./jv.js": 331,
	"./ka": 332,
	"./ka.js": 332,
	"./kk": 333,
	"./kk.js": 333,
	"./km": 334,
	"./km.js": 334,
	"./kn": 335,
	"./kn.js": 335,
	"./ko": 336,
	"./ko.js": 336,
	"./ky": 337,
	"./ky.js": 337,
	"./lb": 338,
	"./lb.js": 338,
	"./lo": 339,
	"./lo.js": 339,
	"./lt": 340,
	"./lt.js": 340,
	"./lv": 341,
	"./lv.js": 341,
	"./me": 342,
	"./me.js": 342,
	"./mi": 343,
	"./mi.js": 343,
	"./mk": 344,
	"./mk.js": 344,
	"./ml": 345,
	"./ml.js": 345,
	"./mn": 346,
	"./mn.js": 346,
	"./mr": 347,
	"./mr.js": 347,
	"./ms": 348,
	"./ms-my": 349,
	"./ms-my.js": 349,
	"./ms.js": 348,
	"./mt": 350,
	"./mt.js": 350,
	"./my": 351,
	"./my.js": 351,
	"./nb": 352,
	"./nb.js": 352,
	"./ne": 353,
	"./ne.js": 353,
	"./nl": 354,
	"./nl-be": 355,
	"./nl-be.js": 355,
	"./nl.js": 354,
	"./nn": 356,
	"./nn.js": 356,
	"./pa-in": 357,
	"./pa-in.js": 357,
	"./pl": 358,
	"./pl.js": 358,
	"./pt": 359,
	"./pt-br": 360,
	"./pt-br.js": 360,
	"./pt.js": 359,
	"./ro": 361,
	"./ro.js": 361,
	"./ru": 362,
	"./ru.js": 362,
	"./sd": 363,
	"./sd.js": 363,
	"./se": 364,
	"./se.js": 364,
	"./si": 365,
	"./si.js": 365,
	"./sk": 366,
	"./sk.js": 366,
	"./sl": 367,
	"./sl.js": 367,
	"./sq": 368,
	"./sq.js": 368,
	"./sr": 369,
	"./sr-cyrl": 370,
	"./sr-cyrl.js": 370,
	"./sr.js": 369,
	"./ss": 371,
	"./ss.js": 371,
	"./sv": 372,
	"./sv.js": 372,
	"./sw": 373,
	"./sw.js": 373,
	"./ta": 374,
	"./ta.js": 374,
	"./te": 375,
	"./te.js": 375,
	"./tet": 376,
	"./tet.js": 376,
	"./tg": 377,
	"./tg.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./ug-cn": 385,
	"./ug-cn.js": 385,
	"./uk": 386,
	"./uk.js": 386,
	"./ur": 387,
	"./ur.js": 387,
	"./uz": 388,
	"./uz-latn": 389,
	"./uz-latn.js": 389,
	"./uz.js": 388,
	"./vi": 390,
	"./vi.js": 390,
	"./x-pseudo": 391,
	"./x-pseudo.js": 391,
	"./yo": 392,
	"./yo.js": 392,
	"./zh-cn": 393,
	"./zh-cn.js": 393,
	"./zh-hk": 394,
	"./zh-hk.js": 394,
	"./zh-tw": 395,
	"./zh-tw.js": 395
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 600;

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_verempleado_verempleado__ = __webpack_require__(163);
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
            { title: 'Administración', component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */] },
            { title: 'Empleados', component: __WEBPACK_IMPORTED_MODULE_10__pages_verempleado_verempleado__["a" /* VerempleadoPage */] },
            { title: 'Revisión de horas', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Dashboards', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    //this.rootPage = ListPage;
                    _this.hideLogout = false;
                    _this.userName = session.email;
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <h3 align="center">{{userName}}</h3>\n     \n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose [hidden]="hideLogout" ion-item (click)="CloseSession()">\n\n            Logout\n\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/app/app.html"*/
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
        return this.horasRef.push(value);
    };
    TodoService.prototype.updateTarea = function (value) {
        return this.horasRef.update(value.key, value);
    };
    TodoService.prototype.removeTarea = function (value) {
        return this.horasRef.remove(value.key);
    };
    TodoService.prototype.getTarea = function () {
        return this.tareasRef;
    };
    TodoService.prototype.getHoras = function (value) {
        return this.horasRef = this.db.list('Usuarios/' + value + '/Horas Extra');
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
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
        this.contactsRef = this.db.list('Usuarios/');
    };
    RegisterService.prototype.addContact = function (value) {
        return this.horasRef.push(value);
    };
    RegisterService.prototype.updateContact = function (value) {
        return this.horasRef.update(value.key, value);
    };
    RegisterService.prototype.removeContact = function (value) {
        return this.horasRef.remove(value.key);
    };
    RegisterService.prototype.getContacts = function () {
        return this.contactsRef;
    };
    RegisterService.prototype.getHoras = function (value) {
        return this.horasRef = this.db.list('Usuarios/' + value + '/HorasIngresadas');
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(47);
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





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, auth, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.UserService = UserService;
        this.user = { email: '', password: '' };
        this.users = this.UserService.getAllUsers()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n\n        <!--<button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>-->\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <h3 align="center">Acceso a Time Management</h3>\n\n\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.email"\n\n                       name="email"\n\n                       type="text"\n\n                       placeholder="User email"\n\n                       autocapitalize="off"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.password"\n\n                       name="password"\n\n                       placeholder="Password"\n\n                       type="password"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" color="primary" block (click)="OnLogin()">Acceder</button>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/prototipo_administracion_horas/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[441]);
//# sourceMappingURL=main.js.map