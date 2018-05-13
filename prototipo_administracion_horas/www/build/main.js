webpackJsonp([10],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(31);
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
            selector: 'page-add-project',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/add-project/add-project.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddProject(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="units" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n            <ion-item>\n\n                <ion-label color="primary">Proyecto:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="projects" placeholder="Proyecto"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaDesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaHasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/add-project/add-project.html"*/,
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

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(31);
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
            selector: 'page-add-unit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/add-unit/add-unit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Unidad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddUnit(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="units" placeholder="Unidad"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Añadir</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/add-unit/add-unit.html"*/,
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verunidades_verunidades__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verproyectos_verproyectos__ = __webpack_require__(151);
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
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/admin/admin.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Admnistración</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-col width-50 class="center2">\n\n        <button ion-button large (click)="onViewUnits()">Unidades</button>\n\n    </ion-col>\n\n    <ion-col width-50 class="center">\n\n        <button ion-button large (click)="onViewProjects()">Proyectos</button>\n\n    </ion-col>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerunidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_unit_add_unit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(49);
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
    VerunidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verunidades',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/verunidades/verunidades.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Unidades</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddUnit()"> + </ion-icon>\n\n    <ion-list>\n        <ion-item ion-item *ngFor="let item of units$ | async">\n\n            <p><strong>Unidad:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/verunidades/verunidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], VerunidadesPage);
    return VerunidadesPage;
}());

//# sourceMappingURL=verunidades.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerproyectosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project_add_project__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(88);
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
    VerproyectosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verproyectos',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/verproyectos/verproyectos.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Proyectos</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddProject()"> + </ion-icon>\n\n\n\n    <ion-list>\n\n        <ion-item ion-item *ngFor="let item of projects$ | async">\n\n            <p><strong>Unidad:</strong> {{ item.units }}</p>\n\n            <p><strong>Proyecto:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/verproyectos/verproyectos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], VerproyectosPage);
    return VerproyectosPage;
}());

//# sourceMappingURL=verproyectos.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(559);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Dashboards</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Horas trabajadas por unidades\n\n        </ion-card-header>\n\n        <ion-card-content style="position: relative; height:70vh; width:80vw">\n\n            <canvas style="position: relative; height:80vh; width:80vw" #doughnutCanvas></canvas>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerHorasExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(82);
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
            selector: 'page-ver-horas-extra',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/ver-horas-extra/ver-horas-extra.html"*/'<!--\n  Generated template for the VerTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Horas Extra</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Unidad</ion-label>\n    <ion-select type="ion-select" [(ngModel)]="tareap.unidad"  name="unidad" ngModel required>\n      <ion-option>Unidad 1</ion-option>\n      <ion-option>Unidad 2</ion-option>\n      <ion-option>Unidad 3</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Proyecto</ion-label>\n    <ion-select *ngIf="tareap.unidad== \'Unidad 1\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n      <ion-option>Proyecto 1 unidad 1</ion-option>\n      <ion-option>Proyecto 2 unidad 1</ion-option>\n      <ion-option>Proyecto 3 unidad 1</ion-option>\n    </ion-select>\n\n    <ion-select *ngIf="tareap.unidad== \'Unidad 2\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n        <ion-option>Proyecto 1 unidad 2</ion-option>\n        <ion-option>Proyecto 2 unidad 2</ion-option>\n        <ion-option>Proyecto 3 unidad 2</ion-option>\n      </ion-select>\n    \n    <ion-select *ngIf="tareap.unidad== \'Unidad 3\'" [(ngModel)]="tareap.proyecto" multiple="false" name="proyecto">\n        <ion-option>Proyecto 1 unidad 3</ion-option>\n        <ion-option>Proyecto 2 unidad 3</ion-option>\n        <ion-option>Proyecto 3 unidad 3</ion-option>\n      </ion-select>\n    \n  </ion-item>\n\n  <ion-item>\n      <ion-label>Horas</ion-label>\n      <ion-input type="number" [(ngModel)]="tareap.horas" min="0" max="8"name="horas" ngModel></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Minutos</ion-label>\n    <ion-input type="number" [(ngModel)]="tareap.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="tareap.fecha" name="fecha" ngModel></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Válido: </ion-label>\n\n        <ion-checkbox item-right type="boolean" [(ngModel)]="tareap.valid" ngModel name="valid"></ion-checkbox>\n\n    </ion-item>\n\n<button ion-button block (click)="onUpdateTarea(tareap)">Modificar Registro</button>\n\n<button ion-button block (click)="onRemoveTarea(tareap)">Eliminar Registro</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/ver-horas-extra/ver-horas-extra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]])
    ], VerHorasExtraPage);
    return VerHorasExtraPage;
}());

//# sourceMappingURL=ver-horas-extra.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(83);
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
    VerRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-registro',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/ver-registro/ver-registro.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Registro Actual</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n            <ion-item>\n              <ion-label>Proyecto</ion-label>\n              <ion-select disabled="true" type="ion-select" [(ngModel)]="contact.proyecto" name="proyecto" ngModel required>\n                \n                  <ion-option>Proyecto 1 unidad 1</ion-option>\n                  <ion-option>Proyecto 2 unidad 1</ion-option>\n                  <ion-option>Proyecto 3 unidad 1</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 2</ion-option>\n                  <ion-option>Proyecto 2 unidad 2</ion-option>\n                  <ion-option>Proyecto 3 unidad 2</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 3</ion-option>\n                  <ion-option>Proyecto 2 unidad 3</ion-option>\n                  <ion-option>Proyecto 3 unidad 3</ion-option>\n                \n              </ion-select>\n              \n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Horas</ion-label>\n                <ion-input type="number" disabled="true" [(ngModel)]="contact.horas" min="0" max="8"name="horas" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Minutos</ion-label>\n              <ion-input type="number" disabled="true" [(ngModel)]="contact.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Fecha</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" disabled="true" [(ngModel)]="contact.fecha" name="fecha" ngModel></ion-datetime>\n              </ion-item>\n\n\n    <!-- (ionChange)="onUpdateContact(contact)" -->\n\n    <ion-item>\n            <ion-label>Válido: </ion-label>\n            <ion-checkbox item-right type="boolean" [(ngModel)]="contact.valid" ngModel name="valid"></ion-checkbox>\n\n    </ion-item>\n\n         <button ion-button block (click)="onUpdateContact(contact)">Modificar Registro</button>\n\n         <button ion-button block (click)="onRemoveContact(contact)">Eliminar Registro</button>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/ver-registro/ver-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]])
    ], VerRegistroPage);
    return VerRegistroPage;
}());

//# sourceMappingURL=ver-registro.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-project/add-project.module": [
		636,
		9
	],
	"../pages/add-unit/add-unit.module": [
		637,
		8
	],
	"../pages/admin/admin.module": [
		638,
		7
	],
	"../pages/assign-hours/assign-hours.module": [
		639,
		0
	],
	"../pages/dashboard/dashboard.module": [
		640,
		6
	],
	"../pages/login/login.module": [
		641,
		5
	],
	"../pages/ver-horas-extra/ver-horas-extra.module": [
		642,
		4
	],
	"../pages/ver-registro/ver-registro.module": [
		643,
		3
	],
	"../pages/verproyectos/verproyectos.module": [
		644,
		2
	],
	"../pages/verunidades/verunidades.module": [
		645,
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
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_todo_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_register_service__ = __webpack_require__(83);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center">Time Management</h3>\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <h4>Sobre la App</h4>\n\n    <p>Aplicación para gestión del tiempo por parte del departamento de RRHH.</p>\n\n    <h4>Grupo de desarrollo</h4>\n\n    <p><strong>Grupo 6</strong></p>\n\n    <p>https://github.com/delafuente28/IonicTimeManagementApp</p>\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/home/home.html"*/
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_unit_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_register_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ver_registro_ver_registro__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(153);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Revisión de horas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div align="center">\n\n        <p><strong> {{userName}} </strong></p>\n\n    </div>\n    <div>\n\n        <ion-select placeholder="Seleccione unidad" type="ion-select" [(ngModel)]="unidad" name="unidad" ngModel required>\n\n            <ion-option *ngFor="let item of units$ | async">\n                {{item.name}}\n            </ion-option>\n\n        </ion-select>\n\n    </div>\n\n\n\n    <!--<ion-select [(ngModel)]="task">\n\n        <ng-container *ngFor="let task of tasks">\n\n            <ion-option [value]="task" *ngIf="task.ProjectId == project.Id">{{task.Title}}</ion-option>\n\n        </ng-container>\n\n    </ion-select>-->\n\n\n\n    <ion-list>\n\n       <!-- <button ion-item *ngFor="let item of dbs$ | async" (click)="itemTapped($event, item)">\n            <p> {{item}}</p>\n        </button>-->\n\n        <button ion-item *ngFor="let item of registros$ | async" (click)="itemTapped($event, item)">\n\n            <!--<ng-container [value]="item" *ngIf="item.unit == unidad">-->\n\n                <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n                <p><strong>Horas: </strong>{{item.horas}}</p>\n\n                <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n                <p><strong>Fecha: </strong>{{item.fecha}}</p>\n\n                <p><strong>Tipo: </strong> Horas normales</p>\n\n            <!--</ng-container>-->\n\n        </button>\n\n        <button ion-item *ngFor="let item of tareas$ | async" (click)="itemExtraTapped($event, item)">\n\n            <p><strong>Unidad: </strong>{{item.unidad}}</p>\n\n            <p><strong>Nombre del proyecto: </strong>{{item.proyecto}}</p>\n\n            <p><strong>Horas: </strong>{{item.horas}}</p>\n\n            <p><strong>Minutos: </strong>{{item.minutos}}</p>\n\n            <p><strong>Fecha: </strong>{{item.fecha}}</p>\n            <p><strong>Tipo:</strong> Horas extra</p>\n\n        </button>\n\n        \n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_6__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_5__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_unit_add_unit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_project_add_project__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_verunidades_verunidades__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_verproyectos_verproyectos__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_unit_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_project_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_todo_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_register_service__ = __webpack_require__(83);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-unit/add-unit.module#AddUnitPageModule', name: 'AddUnitPage', segment: 'add-unit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-hours/assign-hours.module#AssignHoursPageModule', name: 'AssignHoursPage', segment: 'assign-hours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-horas-extra/ver-horas-extra.module#VerTodoPageModule', name: 'VerHorasExtraPage', segment: 'ver-horas-extra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-registro/ver-registro.module#VerRegistroPageModule', name: 'VerRegistroPage', segment: 'ver-registro', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__services_unit_service__["a" /* UnitService */],
                __WEBPACK_IMPORTED_MODULE_22__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_23__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_24__services_register_service__["a" /* RegisterService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(31);
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

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 262,
	"./af.js": 262,
	"./ar": 263,
	"./ar-dz": 264,
	"./ar-dz.js": 264,
	"./ar-kw": 265,
	"./ar-kw.js": 265,
	"./ar-ly": 266,
	"./ar-ly.js": 266,
	"./ar-ma": 267,
	"./ar-ma.js": 267,
	"./ar-sa": 268,
	"./ar-sa.js": 268,
	"./ar-tn": 269,
	"./ar-tn.js": 269,
	"./ar.js": 263,
	"./az": 270,
	"./az.js": 270,
	"./be": 271,
	"./be.js": 271,
	"./bg": 272,
	"./bg.js": 272,
	"./bm": 273,
	"./bm.js": 273,
	"./bn": 274,
	"./bn.js": 274,
	"./bo": 275,
	"./bo.js": 275,
	"./br": 276,
	"./br.js": 276,
	"./bs": 277,
	"./bs.js": 277,
	"./ca": 278,
	"./ca.js": 278,
	"./cs": 279,
	"./cs.js": 279,
	"./cv": 280,
	"./cv.js": 280,
	"./cy": 281,
	"./cy.js": 281,
	"./da": 282,
	"./da.js": 282,
	"./de": 283,
	"./de-at": 284,
	"./de-at.js": 284,
	"./de-ch": 285,
	"./de-ch.js": 285,
	"./de.js": 283,
	"./dv": 286,
	"./dv.js": 286,
	"./el": 287,
	"./el.js": 287,
	"./en-au": 288,
	"./en-au.js": 288,
	"./en-ca": 289,
	"./en-ca.js": 289,
	"./en-gb": 290,
	"./en-gb.js": 290,
	"./en-ie": 291,
	"./en-ie.js": 291,
	"./en-il": 292,
	"./en-il.js": 292,
	"./en-nz": 293,
	"./en-nz.js": 293,
	"./eo": 294,
	"./eo.js": 294,
	"./es": 295,
	"./es-do": 296,
	"./es-do.js": 296,
	"./es-us": 297,
	"./es-us.js": 297,
	"./es.js": 295,
	"./et": 298,
	"./et.js": 298,
	"./eu": 299,
	"./eu.js": 299,
	"./fa": 300,
	"./fa.js": 300,
	"./fi": 301,
	"./fi.js": 301,
	"./fo": 302,
	"./fo.js": 302,
	"./fr": 303,
	"./fr-ca": 304,
	"./fr-ca.js": 304,
	"./fr-ch": 305,
	"./fr-ch.js": 305,
	"./fr.js": 303,
	"./fy": 306,
	"./fy.js": 306,
	"./gd": 307,
	"./gd.js": 307,
	"./gl": 308,
	"./gl.js": 308,
	"./gom-latn": 309,
	"./gom-latn.js": 309,
	"./gu": 310,
	"./gu.js": 310,
	"./he": 311,
	"./he.js": 311,
	"./hi": 312,
	"./hi.js": 312,
	"./hr": 313,
	"./hr.js": 313,
	"./hu": 314,
	"./hu.js": 314,
	"./hy-am": 315,
	"./hy-am.js": 315,
	"./id": 316,
	"./id.js": 316,
	"./is": 317,
	"./is.js": 317,
	"./it": 318,
	"./it.js": 318,
	"./ja": 319,
	"./ja.js": 319,
	"./jv": 320,
	"./jv.js": 320,
	"./ka": 321,
	"./ka.js": 321,
	"./kk": 322,
	"./kk.js": 322,
	"./km": 323,
	"./km.js": 323,
	"./kn": 324,
	"./kn.js": 324,
	"./ko": 325,
	"./ko.js": 325,
	"./ky": 326,
	"./ky.js": 326,
	"./lb": 327,
	"./lb.js": 327,
	"./lo": 328,
	"./lo.js": 328,
	"./lt": 329,
	"./lt.js": 329,
	"./lv": 330,
	"./lv.js": 330,
	"./me": 331,
	"./me.js": 331,
	"./mi": 332,
	"./mi.js": 332,
	"./mk": 333,
	"./mk.js": 333,
	"./ml": 334,
	"./ml.js": 334,
	"./mn": 335,
	"./mn.js": 335,
	"./mr": 336,
	"./mr.js": 336,
	"./ms": 337,
	"./ms-my": 338,
	"./ms-my.js": 338,
	"./ms.js": 337,
	"./mt": 339,
	"./mt.js": 339,
	"./my": 340,
	"./my.js": 340,
	"./nb": 341,
	"./nb.js": 341,
	"./ne": 342,
	"./ne.js": 342,
	"./nl": 343,
	"./nl-be": 344,
	"./nl-be.js": 344,
	"./nl.js": 343,
	"./nn": 345,
	"./nn.js": 345,
	"./pa-in": 346,
	"./pa-in.js": 346,
	"./pl": 347,
	"./pl.js": 347,
	"./pt": 348,
	"./pt-br": 349,
	"./pt-br.js": 349,
	"./pt.js": 348,
	"./ro": 350,
	"./ro.js": 350,
	"./ru": 351,
	"./ru.js": 351,
	"./sd": 352,
	"./sd.js": 352,
	"./se": 353,
	"./se.js": 353,
	"./si": 354,
	"./si.js": 354,
	"./sk": 355,
	"./sk.js": 355,
	"./sl": 356,
	"./sl.js": 356,
	"./sq": 357,
	"./sq.js": 357,
	"./sr": 358,
	"./sr-cyrl": 359,
	"./sr-cyrl.js": 359,
	"./sr.js": 358,
	"./ss": 360,
	"./ss.js": 360,
	"./sv": 361,
	"./sv.js": 361,
	"./sw": 362,
	"./sw.js": 362,
	"./ta": 363,
	"./ta.js": 363,
	"./te": 364,
	"./te.js": 364,
	"./tet": 365,
	"./tet.js": 365,
	"./tg": 366,
	"./tg.js": 366,
	"./th": 367,
	"./th.js": 367,
	"./tl-ph": 368,
	"./tl-ph.js": 368,
	"./tlh": 369,
	"./tlh.js": 369,
	"./tr": 370,
	"./tr.js": 370,
	"./tzl": 371,
	"./tzl.js": 371,
	"./tzm": 372,
	"./tzm-latn": 373,
	"./tzm-latn.js": 373,
	"./tzm.js": 372,
	"./ug-cn": 374,
	"./ug-cn.js": 374,
	"./uk": 375,
	"./uk.js": 375,
	"./ur": 376,
	"./ur.js": 376,
	"./uz": 377,
	"./uz-latn": 378,
	"./uz-latn.js": 378,
	"./uz.js": 377,
	"./vi": 379,
	"./vi.js": 379,
	"./x-pseudo": 380,
	"./x-pseudo.js": 380,
	"./yo": 381,
	"./yo.js": 381,
	"./zh-cn": 382,
	"./zh-cn.js": 382,
	"./zh-hk": 383,
	"./zh-hk.js": 383,
	"./zh-tw": 384,
	"./zh-tw.js": 384
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
webpackContext.id = 587;

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(152);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <h3 align="center">{{userName}}</h3>\n     \n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose [hidden]="hideLogout" ion-item (click)="CloseSession()">\n\n            Logout\n\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/app/app.html"*/
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(31);
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(31);
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(31);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(66);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3 align="center">Acceso a Time Management</h3>\n\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.email"\n\n                       name="email"\n\n                       type="text"\n                       placeholder="User email"\n\n                       autocapitalize="off"\n\n                       required>\n            </ion-input>\n        </ion-item>\n        <ion-item>\n\n            <ion-input [(ngModel)]="user.password"\n\n                       name="password"\n                       placeholder="Password"\n\n                       type="password"\n\n                       required>\n\n            </ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" color="primary" block (click)="OnLogin()">Acceder</button>\n    <button ion-button (click)="signin()" type="submit" color="secondary" block>Registrarse</button>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/IonicTimeManagementApp/src/pages/login/login.html"*/,
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

},[432]);
//# sourceMappingURL=main.js.map