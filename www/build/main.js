webpackJsonp([10],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(27);
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
            selector: 'page-add-unit',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-unit/add-unit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Unidad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddUnit(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="units" placeholder="Unidad"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechadesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechahasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Añadir</button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-unit/add-unit.html"*/,
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(27);
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
            selector: 'page-add-project',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-project/add-project.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n    <ion-title>Añadir Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="OnAddProject(f.value)" #f="ngForm">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label color="primary">Unidad:</ion-label>\n\n                <ion-select placeholder="Unidad" name="units" [(ngModel)]="units" multiple="false">\n\n                    <ion-option *ngFor="let item of units$ | async">{{item.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n            <ion-item>\n\n                <ion-label color="primary">Proyecto:</ion-label>\n\n                <ion-input name="name" [(ngModel)]="projects" placeholder="Proyecto"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha desde:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaDesde" [(ngModel)]="fechadesde" placeholder="Fecha desde"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Fecha hasta:</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" name="fechaHasta" max="2030-12-31" [(ngModel)]="fechahasta" placeholder="Fecha hasta"></ion-datetime>\n\n            </ion-item>\n\n        </ion-list>\n\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/add-project/add-project.html"*/,
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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(600);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Dashboards</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Horas trabajadas por unidades\n\n        </ion-card-header>\n\n        <ion-card-content style="position: relative; height:70vh; width:80vw">\n\n            <canvas style="position: relative; height:80vh; width:80vw" #doughnutCanvas></canvas>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verunidades_verunidades__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verproyectos_verproyectos__ = __webpack_require__(144);
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
            selector: 'page-admin',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/admin/admin.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Admnistración</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-col width-50 class="center2">\n\n        <button ion-button large (click)="onViewUnits()">Unidades</button>\n\n    </ion-col>\n\n    <ion-col width-50 class="center">\n\n        <button ion-button large (click)="onViewProjects()">Proyectos</button>\n\n    </ion-col>\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerunidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_unit_add_unit__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unit_service__ = __webpack_require__(44);
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
            selector: 'page-verunidades',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/verunidades/verunidades.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Unidades</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddUnit()"> + </ion-icon>\n\n    <ion-list>\n        <ion-item ion-item *ngFor="let item of units$ | async">\n\n            <p><strong>Unidad:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/verunidades/verunidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_unit_service__["a" /* UnitService */]])
    ], VerunidadesPage);
    return VerunidadesPage;
}());

//# sourceMappingURL=verunidades.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerproyectosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project_add_project__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(80);
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
            selector: 'page-verproyectos',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/verproyectos/verproyectos.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Proyectos</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-icon ion-button (click)="onAddProject()"> + </ion-icon>\n\n\n\n    <ion-list>\n\n        <ion-item ion-item *ngFor="let item of projects$ | async">\n\n            <p><strong>Unidad:</strong> {{ item.units }}</p>\n\n            <p><strong>Proyecto:</strong> {{ item.name }}</p>\n\n            <p><strong>Fecha desde:</strong> {{ item.fechadesde }} </p>\n\n            <p><strong>Fecha hasta:</strong> {{ item.fechahasta }} </p>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/verproyectos/verproyectos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], VerproyectosPage);
    return VerproyectosPage;
}());

//# sourceMappingURL=verproyectos.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerHorasExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(74);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]])
    ], VerHorasExtraPage);
    return VerHorasExtraPage;
}());

//# sourceMappingURL=ver-horas-extra.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__(75);
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
            selector: 'page-ver-registro',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-registro/ver-registro.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Registro Actual</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n            <ion-item>\n              <ion-label>Proyecto</ion-label>\n              <ion-select disabled="true" type="ion-select" [(ngModel)]="contact.proyecto" name="proyecto" ngModel required>\n                \n                  <ion-option>Proyecto 1 unidad 1</ion-option>\n                  <ion-option>Proyecto 2 unidad 1</ion-option>\n                  <ion-option>Proyecto 3 unidad 1</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 2</ion-option>\n                  <ion-option>Proyecto 2 unidad 2</ion-option>\n                  <ion-option>Proyecto 3 unidad 2</ion-option>\n                \n                  <ion-option>Proyecto 1 unidad 3</ion-option>\n                  <ion-option>Proyecto 2 unidad 3</ion-option>\n                  <ion-option>Proyecto 3 unidad 3</ion-option>\n                \n              </ion-select>\n              \n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Horas</ion-label>\n                <ion-input type="number" disabled="true" [(ngModel)]="contact.horas" min="0" max="8"name="horas" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Minutos</ion-label>\n              <ion-input type="number" disabled="true" [(ngModel)]="contact.minutos" min="0" max="59" name="minutos" ngModel></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Fecha</ion-label>\n                <ion-datetime displayFormat="YYYY-MM-DD" disabled="true" [(ngModel)]="contact.fecha" name="fecha" ngModel></ion-datetime>\n              </ion-item>\n\n\n    <!-- (ionChange)="onUpdateContact(contact)" -->\n\n    <ion-item>\n            <ion-label>Válido: </ion-label>\n            <ion-checkbox item-right type="boolean" [(ngModel)]="contact.valid" ngModel name="valid"></ion-checkbox>\n\n    </ion-item>\n\n         <button ion-button block (click)="onUpdateContact(contact)">Modificar Registro</button>\n\n         <button ion-button block (click)="onRemoveContact(contact)">Eliminar Registro</button>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/ver-registro/ver-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]])
    ], VerRegistroPage);
    return VerRegistroPage;
}());

//# sourceMappingURL=ver-registro.js.map

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-project/add-project.module": [
		453,
		9
	],
	"../pages/add-unit/add-unit.module": [
		452,
		8
	],
	"../pages/admin/admin.module": [
		455,
		7
	],
	"../pages/assign-hours/assign-hours.module": [
		456,
		0
	],
	"../pages/dashboard/dashboard.module": [
		454,
		6
	],
	"../pages/login/login.module": [
		457,
		5
	],
	"../pages/ver-horas-extra/ver-horas-extra.module": [
		458,
		4
	],
	"../pages/ver-registro/ver-registro.module": [
		459,
		3
	],
	"../pages/verproyectos/verproyectos.module": [
		461,
		2
	],
	"../pages/verunidades/verunidades.module": [
		460,
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
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_todo_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_register_service__ = __webpack_require__(75);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center">Time Management</h3>\n\n    <div align="center">\n\n        <ion-img width="80" height="80" src="assets/imgs/timemanagement.png"></ion-img>\n\n    </div>\n\n    <h4>Sobre la App</h4>\n\n    <p>Aplicación para gestión del tiempo por parte del departamento de RRHH.</p>\n\n    <h4>Grupo de desarrollo</h4>\n\n    <p><strong>Grupo 6</strong></p>\n\n    <p>https://github.com/delafuente28/IonicTimeManagementApp</p>\n\n\n</ion-content>'/*ion-inline-end:"/Users/JoseAntonioDeLaFuenteBrando/Documents/GitHub/depi_grupo6/src/pages/home/home.html"*/
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_register_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ver_registro_ver_registro__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(145);
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_unit_add_unit__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_project_add_project__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ver_registro_ver_registro__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_horas_extra_ver_horas_extra__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_verunidades_verunidades__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_verproyectos_verproyectos__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_unit_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_project_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_todo_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_register_service__ = __webpack_require__(75);
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
                        { loadChildren: '../pages/add-unit/add-unit.module#AddUnitPageModule', name: 'AddUnitPage', segment: 'add-unit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assign-hours/assign-hours.module#AssignHoursPageModule', name: 'AssignHoursPage', segment: 'assign-hours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-horas-extra/ver-horas-extra.module#VerTodoPageModule', name: 'VerHorasExtraPage', segment: 'ver-horas-extra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-registro/ver-registro.module#VerRegistroPageModule', name: 'VerRegistroPage', segment: 'ver-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verunidades/verunidades.module#VerunidadesPageModule', name: 'VerunidadesPage', segment: 'verunidades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verproyectos/verproyectos.module#VerproyectosPageModule', name: 'VerproyectosPage', segment: 'verproyectos', priority: 'low', defaultHistory: [] }
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(141);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(248);
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

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 477,
	"./af.js": 477,
	"./ar": 478,
	"./ar-dz": 479,
	"./ar-dz.js": 479,
	"./ar-kw": 480,
	"./ar-kw.js": 480,
	"./ar-ly": 481,
	"./ar-ly.js": 481,
	"./ar-ma": 482,
	"./ar-ma.js": 482,
	"./ar-sa": 483,
	"./ar-sa.js": 483,
	"./ar-tn": 484,
	"./ar-tn.js": 484,
	"./ar.js": 478,
	"./az": 485,
	"./az.js": 485,
	"./be": 486,
	"./be.js": 486,
	"./bg": 487,
	"./bg.js": 487,
	"./bm": 488,
	"./bm.js": 488,
	"./bn": 489,
	"./bn.js": 489,
	"./bo": 490,
	"./bo.js": 490,
	"./br": 491,
	"./br.js": 491,
	"./bs": 492,
	"./bs.js": 492,
	"./ca": 493,
	"./ca.js": 493,
	"./cs": 494,
	"./cs.js": 494,
	"./cv": 495,
	"./cv.js": 495,
	"./cy": 496,
	"./cy.js": 496,
	"./da": 497,
	"./da.js": 497,
	"./de": 498,
	"./de-at": 499,
	"./de-at.js": 499,
	"./de-ch": 500,
	"./de-ch.js": 500,
	"./de.js": 498,
	"./dv": 501,
	"./dv.js": 501,
	"./el": 502,
	"./el.js": 502,
	"./en-au": 503,
	"./en-au.js": 503,
	"./en-ca": 504,
	"./en-ca.js": 504,
	"./en-gb": 505,
	"./en-gb.js": 505,
	"./en-ie": 506,
	"./en-ie.js": 506,
	"./en-il": 507,
	"./en-il.js": 507,
	"./en-nz": 508,
	"./en-nz.js": 508,
	"./eo": 509,
	"./eo.js": 509,
	"./es": 510,
	"./es-do": 511,
	"./es-do.js": 511,
	"./es-us": 512,
	"./es-us.js": 512,
	"./es.js": 510,
	"./et": 513,
	"./et.js": 513,
	"./eu": 514,
	"./eu.js": 514,
	"./fa": 515,
	"./fa.js": 515,
	"./fi": 516,
	"./fi.js": 516,
	"./fo": 517,
	"./fo.js": 517,
	"./fr": 518,
	"./fr-ca": 519,
	"./fr-ca.js": 519,
	"./fr-ch": 520,
	"./fr-ch.js": 520,
	"./fr.js": 518,
	"./fy": 521,
	"./fy.js": 521,
	"./gd": 522,
	"./gd.js": 522,
	"./gl": 523,
	"./gl.js": 523,
	"./gom-latn": 524,
	"./gom-latn.js": 524,
	"./gu": 525,
	"./gu.js": 525,
	"./he": 526,
	"./he.js": 526,
	"./hi": 527,
	"./hi.js": 527,
	"./hr": 528,
	"./hr.js": 528,
	"./hu": 529,
	"./hu.js": 529,
	"./hy-am": 530,
	"./hy-am.js": 530,
	"./id": 531,
	"./id.js": 531,
	"./is": 532,
	"./is.js": 532,
	"./it": 533,
	"./it.js": 533,
	"./ja": 534,
	"./ja.js": 534,
	"./jv": 535,
	"./jv.js": 535,
	"./ka": 536,
	"./ka.js": 536,
	"./kk": 537,
	"./kk.js": 537,
	"./km": 538,
	"./km.js": 538,
	"./kn": 539,
	"./kn.js": 539,
	"./ko": 540,
	"./ko.js": 540,
	"./ky": 541,
	"./ky.js": 541,
	"./lb": 542,
	"./lb.js": 542,
	"./lo": 543,
	"./lo.js": 543,
	"./lt": 544,
	"./lt.js": 544,
	"./lv": 545,
	"./lv.js": 545,
	"./me": 546,
	"./me.js": 546,
	"./mi": 547,
	"./mi.js": 547,
	"./mk": 548,
	"./mk.js": 548,
	"./ml": 549,
	"./ml.js": 549,
	"./mn": 550,
	"./mn.js": 550,
	"./mr": 551,
	"./mr.js": 551,
	"./ms": 552,
	"./ms-my": 553,
	"./ms-my.js": 553,
	"./ms.js": 552,
	"./mt": 554,
	"./mt.js": 554,
	"./my": 555,
	"./my.js": 555,
	"./nb": 556,
	"./nb.js": 556,
	"./ne": 557,
	"./ne.js": 557,
	"./nl": 558,
	"./nl-be": 559,
	"./nl-be.js": 559,
	"./nl.js": 558,
	"./nn": 560,
	"./nn.js": 560,
	"./pa-in": 561,
	"./pa-in.js": 561,
	"./pl": 562,
	"./pl.js": 562,
	"./pt": 563,
	"./pt-br": 564,
	"./pt-br.js": 564,
	"./pt.js": 563,
	"./ro": 565,
	"./ro.js": 565,
	"./ru": 566,
	"./ru.js": 566,
	"./sd": 567,
	"./sd.js": 567,
	"./se": 568,
	"./se.js": 568,
	"./si": 569,
	"./si.js": 569,
	"./sk": 570,
	"./sk.js": 570,
	"./sl": 571,
	"./sl.js": 571,
	"./sq": 572,
	"./sq.js": 572,
	"./sr": 573,
	"./sr-cyrl": 574,
	"./sr-cyrl.js": 574,
	"./sr.js": 573,
	"./ss": 575,
	"./ss.js": 575,
	"./sv": 576,
	"./sv.js": 576,
	"./sw": 577,
	"./sw.js": 577,
	"./ta": 578,
	"./ta.js": 578,
	"./te": 579,
	"./te.js": 579,
	"./tet": 580,
	"./tet.js": 580,
	"./tg": 581,
	"./tg.js": 581,
	"./th": 582,
	"./th.js": 582,
	"./tl-ph": 583,
	"./tl-ph.js": 583,
	"./tlh": 584,
	"./tlh.js": 584,
	"./tr": 585,
	"./tr.js": 585,
	"./tzl": 586,
	"./tzl.js": 586,
	"./tzm": 587,
	"./tzm-latn": 588,
	"./tzm-latn.js": 588,
	"./tzm.js": 587,
	"./ug-cn": 589,
	"./ug-cn.js": 589,
	"./uk": 590,
	"./uk.js": 590,
	"./ur": 591,
	"./ur.js": 591,
	"./uz": 592,
	"./uz-latn": 593,
	"./uz-latn.js": 593,
	"./uz.js": 592,
	"./vi": 594,
	"./vi.js": 594,
	"./x-pseudo": 595,
	"./x-pseudo.js": 595,
	"./yo": 596,
	"./yo.js": 596,
	"./zh-cn": 597,
	"./zh-cn.js": 597,
	"./zh-hk": 598,
	"./zh-hk.js": 598,
	"./zh-tw": 599,
	"./zh-tw.js": 599
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
webpackContext.id = 628;

/***/ }),

/***/ 74:
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

/***/ 75:
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(59);
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

},[295]);
//# sourceMappingURL=main.js.map