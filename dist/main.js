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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/pagenotfound/pagenotfound.component */ "./src/app/shared/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_managers_managers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/managers/managers.component */ "./src/app/pages/managers/managers.component.ts");
/* harmony import */ var _pages_departments_departments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/departments/departments.component */ "./src/app/pages/departments/departments.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");
/* harmony import */ var _pages_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/staff/staff.component */ "./src/app/pages/staff/staff.component.ts");
/* harmony import */ var _pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/areas/areas.component */ "./src/app/pages/areas/areas.component.ts");
/* harmony import */ var _pages_approved_approved_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/approved/approved.component */ "./src/app/pages/approved/approved.component.ts");














var routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    {
        path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], children: [
            { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
            { path: 'departments', component: _pages_departments_departments_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentsComponent"] },
            { path: 'areas', component: _pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_12__["AreasComponent"] },
            { path: 'managers', component: _pages_managers_managers_component__WEBPACK_IMPORTED_MODULE_8__["ManagersComponent"] },
            { path: 'reports', component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"] },
            { path: 'staff', component: _pages_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__["StaffComponent"] },
            { path: 'approvals', component: _pages_approved_approved_component__WEBPACK_IMPORTED_MODULE_13__["ApprovedComponent"] },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
            { path: '**', component: _shared_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _shared_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet> -->\r\n\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dash';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");
/* harmony import */ var _pages_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/staff/staff.component */ "./src/app/pages/staff/staff.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_managers_managers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/managers/managers.component */ "./src/app/pages/managers/managers.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pagenotfound/pagenotfound.component */ "./src/app/shared/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _pages_departments_departments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/departments/departments.component */ "./src/app/pages/departments/departments.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/areas/areas.component */ "./src/app/pages/areas/areas.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-select-ex */ "./node_modules/ngx-select-ex/fesm5/ngx-select-ex.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/fesm5/angular-plotly.js.js");
/* harmony import */ var _pages_approved_approved_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/approved/approved.component */ "./src/app/pages/approved/approved.component.ts");





























var CustomSelectOptions = {
    optionValueField: 'code',
    optionTextField: 'title',
    keepSelectedItems: false,
    autoSelectSingleOption: true,
    allowClear: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
                _pages_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__["StaffComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _pages_managers_managers_component__WEBPACK_IMPORTED_MODULE_13__["ManagersComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _shared_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_17__["PagenotfoundComponent"],
                _pages_departments_departments_component__WEBPACK_IMPORTED_MODULE_18__["DepartmentsComponent"],
                _pages_areas_areas_component__WEBPACK_IMPORTED_MODULE_20__["AreasComponent"],
                _pages_approved_approved_component__WEBPACK_IMPORTED_MODULE_28__["ApprovedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                ngx_select_ex__WEBPACK_IMPORTED_MODULE_26__["NgxSelectModule"].forRoot(CustomSelectOptions),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot(),
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_27__["PlotlyModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_25__["OrderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModalModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/approved/approved.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/approved/approved.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHJvdmVkL2FwcHJvdmVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/approved/approved.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/approved/approved.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"logo-pro text-center\">\r\n          <a href=\"index.html\"\r\n            ><img\r\n              class=\"main-logo\"\r\n              src=\"./assets/img/logo/logo2.jpeg\"\r\n              style=\"height:8em;padding-top:10px;padding-bottom:30px;\"\r\n              alt=\"\"\r\n          /></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"product-status mg-b-15\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\" *ngIf=\"areas\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"product-status-wrap drp-lst\">\r\n            <h4>Areas List</h4>\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"small\"> Search</label>\r\n                    <input\r\n                      type=\"search\"\r\n                      (keyup)=\"onTextChange($event)\"\r\n                      class=\"form-control form-control-sm rounded\"\r\n                      placeholder=\"Search\"\r\n                      aria-describedby=\"helpId\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1 col-xs-12 col-sm-12 col-lg-1\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"small\" class=\"small\">Items/page </label>\r\n                    <input\r\n                      type=\"search\"\r\n                      [(ngModel)]=\"pageSize\"\r\n                      class=\"form-control form-control-sm rounded\"\r\n                      placeholder=\"\"\r\n                      aria-describedby=\"helpId\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"small\">Sort By</label>\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [(ngModel)]=\"order\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let key of departmentKeys\"\r\n                        [value]=\"key\"\r\n                        >{{ key }}</option\r\n                      >\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"add-product\" *ngIf=\"role == 'admin'\">\r\n              <a (click)=\"add(addcontent)\" style=\"color:white\"\r\n                >Add Area</a\r\n              >\r\n            </div>\r\n            <div class=\"asset-inner\">\r\n              <table>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th (click)=\"reverseSort('title')\">\r\n                    Name of Dept.\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'title' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'title' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th (click)=\"reverseSort('status')\">\r\n                    Status\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'status' && reverse == true\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'status' && reverse == false\"\r\n                    ></i>\r\n                  </th>\r\n                  <th>\r\n                    Head\r\n\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'head' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'head' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th (click)=\"reverseSort('email')\">\r\n                    Email\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'email' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'email' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th>Department</th>\r\n                  <th>Setting</th>\r\n                </tr>\r\n                <tr\r\n                  *ngFor=\"\r\n                    let x of areas | slice: (page - 1) * pageSize: (page - 1) * pageSize + pageSize\r\n                      | filterBy: searchTerm\r\n                      | orderBy: order:reverse;\r\n                    let i = index\r\n                  \"\r\n                >\r\n                  <td>{{ x.index }}</td>\r\n                  <td>{{ x?.title }}</td>\r\n                  <td>\r\n                    <button\r\n                      class=\"badge text-white\"\r\n                      [ngClass]=\"x.status === true ? 'active' : 'not-active'\"\r\n                    >\r\n                      {{ x.status == true ? \"Active\" : \"Not Active\" }}\r\n                    </button>\r\n                  </td>\r\n                  <td>{{ x.head?.firstName || \"N/A\" }}</td>\r\n                  <td>asdad{{ x.email }}</td>\r\n                  <td>\r\n                    <a class=\"link text-success initialism\">\r\n                        {{ x.department?.title}}\r\n                    </a>\r\n                    </td>\r\n                  <td>\r\n                    <button\r\n                      title=\"Edit\"\r\n                      class=\"pd-setting-ed\"\r\n                      (click)=\"edit(editcontent, x)\"\r\n                    >\r\n                      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                    <button\r\n                      title=\"Trash\"\r\n                      class=\"pd-setting-ed\"\r\n                      (click)=\"delete(deletecontent, x)\"\r\n                    >\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-xs-12 col-lg-12 col-sm-12 \">\r\n                <div class=\"text-center\" style=\"text-align: center\">\r\n                  <ngb-pagination\r\n                    class=\"custom-pagination text-center\"\r\n                    [(page)]=\"page\"\r\n                    [pageSize]=\"pageSize\"\r\n                    style=\"text-align:center\"\r\n                    [collectionSize]=\"areas.length\"\r\n                  ></ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer> </app-footer>\r\n</div>\r\n\r\n<ng-template #addcontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Area</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"bodyx\">\r\n          <form\r\n            class=\"form-signin\"\r\n            action=\"#\"\r\n            id=\"departmentForm\"\r\n            [formGroup]=\"departmentForm\"\r\n            (ngSubmit)=\"onSubmit()\"\r\n          >\r\n            <div class=\"text-center mb-4\">\r\n              <img\r\n                class=\"mb-4\"\r\n                src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-areas.png?t=1423194477519\"\r\n                alt=\"\"\r\n                width=\"72\"\r\n                height=\"72\"\r\n              />\r\n              <h1 class=\"h3 mb-3 font-weight-normal\">Create Area</h1>\r\n              <p>\r\n                Please make sure every information entered is\r\n                <code>correctly formatted</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Area Title*</label>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"title\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"departments\">\r\n                <label class=\"small\">Department*</label>\r\n\r\n                <ngx-select formControlName=\"department\"\r\n\r\n                [items]=\"departments\" ></ngx-select>\r\n\r\n              </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Area Email</label>\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n                aria-describedby=\"helpId\"\r\n              />\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Status</label>\r\n              <select class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"true\">active</option>\r\n                <option value=\"false\">In Active</option>\r\n              </select>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n              Create\r\n            </button>\r\n            <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"modal.close('Save click')\"\r\n    >\r\n      Save\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #editcontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Area</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"bodyx\">\r\n          <form\r\n            class=\"form-signin\"\r\n            action=\"#\"\r\n            id=\"departmentForm\"\r\n            [formGroup]=\"departmentForm\"\r\n            (ngSubmit)=\"onUpdate()\"\r\n          >\r\n            <div class=\"text-center mb-4\">\r\n              <img\r\n                class=\"mb-4\"\r\n                src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-areas.png?t=1423194477519\"\r\n                alt=\"\"\r\n                width=\"72\"\r\n                height=\"72\"\r\n              />\r\n              <h1 class=\"h3 mb-3 font-weight-normal\">Create Area</h1>\r\n              <p>\r\n                Please make sure every information entered is\r\n                <code>correctly formatted</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Area Title*</label>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"title\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Area Email</label>\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n                aria-describedby=\"helpId\"\r\n              />\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small\">Status</label>\r\n              <select class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"true\">active</option>\r\n                <option value=\"false\">In Active</option>\r\n              </select>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n              Update\r\n            </button>\r\n            <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"modal.close('Save click')\"\r\n    >\r\n      Save\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deletecontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Area</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        Are you sure you want to delete the following document?\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onDelete()\">\r\n      Delete\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/approved/approved.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/approved/approved.component.ts ***!
  \******************************************************/
/*! exports provided: ApprovedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedComponent", function() { return ApprovedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");






var ApprovedComponent = /** @class */ (function () {
    function ApprovedComponent(api, helper, formBuilder, filter) {
        this.api = api;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.filter = filter;
        this.submitted = false;
        this.page = 1;
        this.pageSize = 4;
        this.searchTerm = { title: '' };
        this.order = 'title';
        this.reverse = false;
        this.selectedArea = {
            code: '',
            title: '',
            department: '',
            email: '',
            status: true
        };
    }
    ApprovedComponent.prototype.sortBy = function (value) {
        this.order = value;
    };
    ApprovedComponent.prototype.reverseSort = function (value) {
        this.order = value;
        this.reverse = !this.reverse;
    };
    Object.defineProperty(ApprovedComponent.prototype, "departmentKeys", {
        get: function () {
            if (this.areas.length > 0) {
                var x = Object.keys(this.areas[0]);
                x.splice(x.indexOf('code'), 1);
                x.splice(x.indexOf('index'), 1);
                return x;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ApprovedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllDepartments().subscribe(function (response) {
            console.log('dp', response);
            _this.departments = response;
        });
        if (localStorage.getItem('role') == 'admin') {
            this.getAreas();
        }
        else {
            if (localStorage.getItem('role') !== 'admin') {
                this.getAreas();
            }
        }
        this.role = localStorage.getItem('role');
        this.departmentForm = this.formBuilder.group({
            //  _id:[this.selectedArea._id],
            code: [this.selectedArea.code],
            title: [this.selectedArea.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            department: [this.selectedArea.department],
            email: [this.selectedArea.email,],
            status: [this.selectedArea.status,],
        });
        this.getDepartments();
    };
    ApprovedComponent.prototype.onTextChange = function (e) {
        var val = e.target.value;
        //make the array full
        this.pageSize = this.areas.length;
        console.log('event', e.target.value);
        this.searchTerm.title = e.target.value;
        //   this.areas = this.filter.transform(this.areas, { title: this.searchTerm.title });
    };
    ApprovedComponent.prototype.getAreas = function () {
        var _this = this;
        this.areas = this.api.getAllAreas()
            .subscribe(function (res) {
            var data = res;
            var index = 0;
            data = data.map(function (key, val) {
                index++;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key, { index: index });
            });
            _this.areas = data;
            console.log('areas', _this.areas);
        }, function (err) { return _this.handleError(err); });
    };
    ApprovedComponent.prototype.handleError = function (err) {
        console.log('Error: ', err.message);
    };
    ApprovedComponent.prototype.add = function (c) {
        this.helper.open(c);
    };
    Object.defineProperty(ApprovedComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.departmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    ApprovedComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        console.log(this.departmentForm.value);
        var data = this.departmentForm.value;
        delete data._id;
        delete data.code;
        console.log(data);
        this.api.createArea(data)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Created', 'Your department is active');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    ApprovedComponent.prototype.onUpdate = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        var data = Object.assign({}, this.departmentForm.value);
        var code = data.code;
        delete data.code;
        this.api.updateDepartment(code, data.value)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Updated', 'Your department is active');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    ApprovedComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitted = true;
        this.api.deleteDepartment(this.selectedArea.code)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Deleted', 'Department successfully deleted.');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    ApprovedComponent.prototype.edit = function (c, data) {
        console.log('selected department', data);
        this.helper.open(c);
        this.departmentForm.setValue(data);
    };
    ApprovedComponent.prototype.delete = function (c, data) {
        console.log('selected department', data);
        this.selectedArea.code = data.code;
        this.helper.open(c);
        // this.api.deleteDepartment();
    };
    ApprovedComponent.prototype.getDepartments = function () {
        var _this = this;
        this.api.getAllDepartments(function (res) {
            _this.departments = res;
            console.log('departments', _this.departments);
        });
    };
    ApprovedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approved',
            template: __webpack_require__(/*! ./approved.component.html */ "./src/app/pages/approved/approved.component.html"),
            styles: [__webpack_require__(/*! ./approved.component.css */ "./src/app/pages/approved/approved.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]])
    ], ApprovedComponent);
    return ApprovedComponent;
}());



/***/ }),

/***/ "./src/app/pages/areas/areas.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/areas/areas.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background-color:green;\r\n}\r\n.not-active{\r\n  background-color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJlYXMvYXJlYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJlYXMvYXJlYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxufVxyXG4ubm90LWFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/areas/areas.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/areas/areas.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"logo-pro text-center\">\r\n            <a href=\"index.html\"\r\n              ><img\r\n                class=\"main-logo\"\r\n                src=\"./assets/img/logo/logo2.jpeg\"\r\n                style=\"height:8em;padding-top:10px;padding-bottom:30px;\"\r\n                alt=\"\"\r\n            /></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"product-status mg-b-15\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\" *ngIf=\"areas\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"product-status-wrap drp-lst\">\r\n              <h4>Areas List</h4>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"small\"> Search</label>\r\n                      <input\r\n                        type=\"search\"\r\n                        (keyup)=\"onTextChange($event)\"\r\n                        class=\"form-control form-control-sm rounded\"\r\n                        placeholder=\"Search\"\r\n                        aria-describedby=\"helpId\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-1 col-xs-12 col-sm-12 col-lg-1\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"small\" class=\"small\">Items/page </label>\r\n                      <input\r\n                        type=\"search\"\r\n                        [(ngModel)]=\"pageSize\"\r\n                        class=\"form-control form-control-sm rounded\"\r\n                        placeholder=\"\"\r\n                        aria-describedby=\"helpId\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"small\">Sort By</label>\r\n                      <select\r\n                        class=\"form-control form-control-sm\"\r\n                        [(ngModel)]=\"order\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"let key of departmentKeys\"\r\n                          [value]=\"key\"\r\n                          >{{ key }}</option\r\n                        >\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"add-product\" *ngIf=\"role == 'admin'\">\r\n                <a (click)=\"add(addcontent)\" style=\"color:white\"\r\n                  >Add Area</a\r\n                >\r\n              </div>\r\n              <div class=\"asset-inner\">\r\n                <table>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th (click)=\"reverseSort('title')\">\r\n                      Name of Dept.\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'title' && reverse == false\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'title' && reverse == true\"\r\n                      ></i>\r\n                    </th>\r\n                    <th (click)=\"reverseSort('status')\">\r\n                      Status\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'status' && reverse == true\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'status' && reverse == false\"\r\n                      ></i>\r\n                    </th>\r\n                    <th>\r\n                      Head\r\n\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'head' && reverse == false\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'head' && reverse == true\"\r\n                      ></i>\r\n                    </th>\r\n                    <th (click)=\"reverseSort('email')\">\r\n                      Email\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'email' && reverse == false\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'email' && reverse == true\"\r\n                      ></i>\r\n                    </th>\r\n                    <th>Department</th>\r\n                    <th>Setting</th>\r\n                  </tr>\r\n                  <tr\r\n                    *ngFor=\"\r\n                      let x of areas | slice: (page - 1) * pageSize: (page - 1) * pageSize + pageSize\r\n                        | filterBy: searchTerm\r\n                        | orderBy: order:reverse;\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                    <td>{{ x.index }}</td>\r\n                    <td>{{ x?.title }}</td>\r\n                    <td>\r\n                      <button\r\n                        class=\"badge text-white\"\r\n                        [ngClass]=\"x.status === true ? 'active' : 'not-active'\"\r\n                      >\r\n                        {{ x.status == true ? \"Active\" : \"Not Active\" }}\r\n                      </button>\r\n                    </td>\r\n                    <td>{{ x.head?.firstName || \"N/A\" }}</td>\r\n                    <td>asdad{{ x.email }}</td>\r\n                    <td>\r\n                      <a class=\"link text-success initialism\">\r\n                          {{ x.department?.title}}\r\n                      </a>\r\n                      </td>\r\n                    <td>\r\n                      <button\r\n                        title=\"Edit\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"edit(editcontent, x)\"\r\n                      >\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                      <button\r\n                        title=\"Trash\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"delete(deletecontent, x)\"\r\n                      >\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-xs-12 col-lg-12 col-sm-12 \">\r\n                  <div class=\"text-center\" style=\"text-align: center\">\r\n                    <ngb-pagination\r\n                      class=\"custom-pagination text-center\"\r\n                      [(page)]=\"page\"\r\n                      [pageSize]=\"pageSize\"\r\n                      style=\"text-align:center\"\r\n                      [collectionSize]=\"areas.length\"\r\n                    ></ngb-pagination>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer> </app-footer>\r\n  </div>\r\n\r\n  <ng-template #addcontent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Area</h4>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body container\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"bodyx\">\r\n            <form\r\n              class=\"form-signin\"\r\n              action=\"#\"\r\n              id=\"departmentForm\"\r\n              [formGroup]=\"departmentForm\"\r\n              (ngSubmit)=\"onSubmit()\"\r\n            >\r\n              <div class=\"text-center mb-4\">\r\n                <img\r\n                  class=\"mb-4\"\r\n                  src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-areas.png?t=1423194477519\"\r\n                  alt=\"\"\r\n                  width=\"72\"\r\n                  height=\"72\"\r\n                />\r\n                <h1 class=\"h3 mb-3 font-weight-normal\">Create Area</h1>\r\n                <p>\r\n                  Please make sure every information entered is\r\n                  <code>correctly formatted</code>\r\n                </p>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Area Title*</label>\r\n                <input\r\n                  type=\"text\"\r\n                  formControlName=\"title\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"departments\">\r\n                  <label class=\"small\">Department*</label>\r\n\r\n                  <ngx-select formControlName=\"department\"\r\n\r\n                  [items]=\"departments\" ></ngx-select>\r\n\r\n                </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Area Email</label>\r\n                <input\r\n                  type=\"email\"\r\n                  formControlName=\"email\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"\"\r\n                  aria-describedby=\"helpId\"\r\n                />\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Status</label>\r\n                <select class=\"form-control\" formControlName=\"status\">\r\n                  <option value=\"true\">active</option>\r\n                  <option value=\"false\">In Active</option>\r\n                </select>\r\n              </div>\r\n              <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                Create\r\n              </button>\r\n              <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"modal.close('Save click')\"\r\n      >\r\n        Save\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #editcontent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Area</h4>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body container\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"bodyx\">\r\n            <form\r\n              class=\"form-signin\"\r\n              action=\"#\"\r\n              id=\"departmentForm\"\r\n              [formGroup]=\"departmentForm\"\r\n              (ngSubmit)=\"onUpdate()\"\r\n            >\r\n              <div class=\"text-center mb-4\">\r\n                <img\r\n                  class=\"mb-4\"\r\n                  src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-areas.png?t=1423194477519\"\r\n                  alt=\"\"\r\n                  width=\"72\"\r\n                  height=\"72\"\r\n                />\r\n                <h1 class=\"h3 mb-3 font-weight-normal\">Create Area</h1>\r\n                <p>\r\n                  Please make sure every information entered is\r\n                  <code>correctly formatted</code>\r\n                </p>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Area Title*</label>\r\n                <input\r\n                  type=\"text\"\r\n                  formControlName=\"title\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Area Email</label>\r\n                <input\r\n                  type=\"email\"\r\n                  formControlName=\"email\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"\"\r\n                  aria-describedby=\"helpId\"\r\n                />\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"small\">Status</label>\r\n                <select class=\"form-control\" formControlName=\"status\">\r\n                  <option value=\"true\">active</option>\r\n                  <option value=\"false\">In Active</option>\r\n                </select>\r\n              </div>\r\n              <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                Update\r\n              </button>\r\n              <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"modal.close('Save click')\"\r\n      >\r\n        Save\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #deletecontent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Area</h4>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body container\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n          Are you sure you want to delete the following document?\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onDelete()\">\r\n        Delete\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/areas/areas.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/areas/areas.component.ts ***!
  \************************************************/
/*! exports provided: AreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasComponent", function() { return AreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");






var AreasComponent = /** @class */ (function () {
    function AreasComponent(api, helper, formBuilder, filter) {
        this.api = api;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.filter = filter;
        this.submitted = false;
        this.page = 1;
        this.pageSize = 4;
        this.searchTerm = { title: '' };
        this.order = 'title';
        this.reverse = false;
        this.selectedArea = {
            code: '',
            title: '',
            department: '',
            email: '',
            status: true
        };
    }
    AreasComponent.prototype.sortBy = function (value) {
        this.order = value;
    };
    AreasComponent.prototype.reverseSort = function (value) {
        this.order = value;
        this.reverse = !this.reverse;
    };
    Object.defineProperty(AreasComponent.prototype, "departmentKeys", {
        get: function () {
            if (this.areas.length > 0) {
                var x = Object.keys(this.areas[0]);
                x.splice(x.indexOf('code'), 1);
                x.splice(x.indexOf('index'), 1);
                return x;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    AreasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllDepartments().subscribe(function (response) {
            console.log('dp', response);
            _this.departments = response;
        });
        if (localStorage.getItem('role') == 'admin') {
            this.getAreas();
        }
        else {
            if (localStorage.getItem('role') !== 'admin') {
                this.getAreas();
            }
        }
        this.role = localStorage.getItem('role');
        this.departmentForm = this.formBuilder.group({
            //  _id:[this.selectedArea._id],
            code: [this.selectedArea.code],
            title: [this.selectedArea.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            department: [this.selectedArea.department],
            email: [this.selectedArea.email,],
            status: [this.selectedArea.status,],
        });
        this.getDepartments();
    };
    AreasComponent.prototype.onTextChange = function (e) {
        var val = e.target.value;
        //make the array full
        this.pageSize = this.areas.length;
        console.log('event', e.target.value);
        this.searchTerm.title = e.target.value;
        //   this.areas = this.filter.transform(this.areas, { title: this.searchTerm.title });
    };
    AreasComponent.prototype.getAreas = function () {
        var _this = this;
        this.areas = this.api.getAllAreas()
            .subscribe(function (res) {
            var data = res;
            var index = 0;
            data = data.map(function (key, val) {
                index++;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key, { index: index });
            });
            _this.areas = data;
            console.log('areas', _this.areas);
        }, function (err) { return _this.handleError(err); });
    };
    AreasComponent.prototype.handleError = function (err) {
        console.log('Error: ', err.message);
    };
    AreasComponent.prototype.add = function (c) {
        this.helper.open(c);
    };
    Object.defineProperty(AreasComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.departmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    AreasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        console.log(this.departmentForm.value);
        var data = this.departmentForm.value;
        delete data._id;
        delete data.code;
        console.log(data);
        this.api.createArea(data)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Created', 'Your department is active');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    AreasComponent.prototype.onUpdate = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        var data = Object.assign({}, this.departmentForm.value);
        var code = data.code;
        delete data.code;
        this.api.updateDepartment(code, data.value)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Updated', 'Your department is active');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    AreasComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitted = true;
        this.api.deleteDepartment(this.selectedArea.code)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Deleted', 'Department successfully deleted.');
            _this.helper.closeModal();
            _this.getAreas();
        });
    };
    AreasComponent.prototype.edit = function (c, data) {
        console.log('selected department', data);
        this.helper.open(c);
        this.departmentForm.setValue(data);
    };
    AreasComponent.prototype.delete = function (c, data) {
        console.log('selected department', data);
        this.selectedArea.code = data.code;
        this.helper.open(c);
        // this.api.deleteDepartment();
    };
    AreasComponent.prototype.getDepartments = function () {
        var _this = this;
        this.api.getAllDepartments(function (res) {
            _this.departments = res;
            console.log('departments', _this.departments);
        });
    };
    AreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areas',
            template: __webpack_require__(/*! ./areas.component.html */ "./src/app/pages/areas/areas.component.html"),
            styles: [__webpack_require__(/*! ./areas.component.css */ "./src/app/pages/areas/areas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]])
    ], AreasComponent);
    return AreasComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<app-sidebar></app-sidebar>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/departments/departments.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/departments/departments.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background-color:green;\r\n}\r\n.not-active{\r\n  background-color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxufVxyXG4ubm90LWFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/departments/departments.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/departments/departments.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"logo-pro text-center\">\r\n          <a href=\"index.html\"\r\n            ><img\r\n              class=\"main-logo\"\r\n              src=\"./assets/img/logo/logo2.jpeg\"\r\n              style=\"height:8em;padding-top:10px;padding-bottom:30px;\"\r\n              alt=\"\"\r\n          /></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"product-status mg-b-15\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\" *ngIf=\"departments\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"product-status-wrap drp-lst\">\r\n            <h4>Departments List</h4>\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"small\"> Search</label>\r\n                    <input\r\n                      type=\"search\"\r\n                      (keyup)=\"onTextChange($event)\"\r\n                      class=\"form-control form-control-sm rounded\"\r\n                      placeholder=\"Search\"\r\n                      aria-describedby=\"helpId\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1 col-xs-12 col-sm-12 col-lg-1\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"\" class=\"small\">Items/page </label>\r\n                    <input\r\n                      type=\"search\"\r\n                      [(ngModel)]=\"pageSize\"\r\n                      class=\"form-control form-control-sm rounded\"\r\n                      placeholder=\"\"\r\n                      aria-describedby=\"helpId\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"small\">Sort By</label>\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [(ngModel)]=\"order\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let key of departmentKeys\"\r\n                        [value]=\"key\"\r\n                        >{{ key }}</option\r\n                      >\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"add-product\" *ngIf=\"role == 'admin'\">\r\n              <a (click)=\"add(addcontent)\" style=\"color:white\"\r\n                >Add Departments</a\r\n              >\r\n            </div>\r\n            <div class=\"asset-inner\">\r\n              <table>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th (click)=\"reverseSort('title')\">\r\n                    Name of Dept.\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'title' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'title' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th (click)=\"reverseSort('status')\">\r\n                    Status\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'status' && reverse == true\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'status' && reverse == false\"\r\n                    ></i>\r\n                  </th>\r\n                  <th>\r\n                    Head\r\n\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'head' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'head' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th (click)=\"reverseSort('email')\">\r\n                    Email\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'email' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'email' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th (click)=\"reverseSort('phone')\">\r\n                    Phone\r\n                    <i\r\n                      class=\"fa fa-caret-down\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'phone' && reverse == false\"\r\n                    ></i>\r\n                    <i\r\n                      class=\"fa fa-caret-up\"\r\n                      aria-hidden=\"true\"\r\n                      *ngIf=\"order == 'phone' && reverse == true\"\r\n                    ></i>\r\n                  </th>\r\n                  <th>Areas</th>\r\n                  <th>Setting</th>\r\n                </tr>\r\n                <tr\r\n                  *ngFor=\"\r\n                    let x of (departments\r\n                      | slice\r\n                        : (page - 1) * pageSize\r\n                        : (page - 1) * pageSize + pageSize\r\n                      | filterBy: searchTerm\r\n                      | orderBy: order:reverse);\r\n                    let i = index\r\n                  \"\r\n                >\r\n                  <td>{{ x.index }}</td>\r\n                  <td>{{ x?.title }}</td>\r\n                  <td>\r\n                    <button\r\n                      class=\"pd-setting\"\r\n                      [ngClass]=\"x.status === true ? 'active' : 'not-active'\"\r\n                    >\r\n                      {{ x.status == true ? \"Active\" : \"Not Active\" }}\r\n                    </button>\r\n                  </td>\r\n                  <td>{{ x.head?.firstName || \"N/A\" }}</td>\r\n                  <td>asdad{{ x.email }}</td>\r\n                  <td>{{ x.phone }}</td>\r\n                  <td>{{ x?.areas }}</td>\r\n                  <td>\r\n                    <button\r\n                      title=\"Edit\"\r\n                      class=\"pd-setting-ed\"\r\n                      (click)=\"edit(editcontent, x)\"\r\n                    >\r\n                      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                    <button\r\n                      title=\"Trash\"\r\n                      class=\"pd-setting-ed\"\r\n                      (click)=\"delete(deletecontent, x)\"\r\n                    >\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-xs-12 col-lg-12 col-sm-12 \">\r\n                <div class=\"text-center\" style=\"text-align: center\">\r\n                  <ngb-pagination\r\n                    class=\"custom-pagination text-center\"\r\n                    [(page)]=\"page\"\r\n                    [pageSize]=\"pageSize\"\r\n                    style=\"text-align:center\"\r\n                    [collectionSize]=\"departments.length\"\r\n                  ></ngb-pagination>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer> </app-footer>\r\n</div>\r\n\r\n<ng-template #addcontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Department</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"bodyx\">\r\n          <form\r\n            class=\"form-signin\"\r\n            action=\"#\"\r\n            id=\"departmentForm\"\r\n            [formGroup]=\"departmentForm\"\r\n            (ngSubmit)=\"onSubmit()\"\r\n          >\r\n            <div class=\"text-center mb-4\">\r\n              <img\r\n                class=\"mb-4\"\r\n                src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-departments.png?t=1423194477519\"\r\n                alt=\"\"\r\n                width=\"72\"\r\n                height=\"72\"\r\n              />\r\n              <h1 class=\"h3 mb-3 font-weight-normal\">Create Department</h1>\r\n              <p>\r\n                Please make sure every information entered is\r\n                <code>correctly formatted</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Department Title*</label>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"title\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Department Email</label>\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n                aria-describedby=\"helpId\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Phone</label>\r\n              <input\r\n                type=\"phone\"\r\n                class=\"form-control\"\r\n                formControlName=\"phone\"\r\n                aria-describedby=\"emailHelpId\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Status</label>\r\n              <select class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"true\">active</option>\r\n                <option value=\"false\">In Active</option>\r\n              </select>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n              Create\r\n            </button>\r\n            <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"modal.close('Save click')\"\r\n    >\r\n      Save\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #editcontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Department</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"bodyx\">\r\n          <form\r\n            class=\"form-signin\"\r\n            action=\"#\"\r\n            id=\"departmentForm\"\r\n            [formGroup]=\"departmentForm\"\r\n            (ngSubmit)=\"onUpdate()\"\r\n          >\r\n            <div class=\"text-center mb-4\">\r\n              <img\r\n                class=\"mb-4\"\r\n                src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-departments.png?t=1423194477519\"\r\n                alt=\"\"\r\n                width=\"72\"\r\n                height=\"72\"\r\n              />\r\n              <h1 class=\"h3 mb-3 font-weight-normal\">Create Department</h1>\r\n              <p>\r\n                Please make sure every information entered is\r\n                <code>correctly formatted</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Department Title*</label>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"title\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Department Email</label>\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"email\"\r\n                class=\"form-control\"\r\n                placeholder=\"\"\r\n                aria-describedby=\"helpId\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Phone</label>\r\n              <input\r\n                type=\"phone\"\r\n                class=\"form-control\"\r\n                formControlName=\"phone\"\r\n                aria-describedby=\"emailHelpId\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"\">Status</label>\r\n              <select class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"true\">active</option>\r\n                <option value=\"false\">In Active</option>\r\n              </select>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n              Update\r\n            </button>\r\n            <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"modal.close('Save click')\"\r\n    >\r\n      Save\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deletecontent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Department</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body container\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        Are you sure you want to delete the following document?\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onDelete()\">\r\n      Delete\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/departments/departments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/departments/departments.component.ts ***!
  \************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");






var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent(api, helper, formBuilder, filter) {
        this.api = api;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.filter = filter;
        this.submitted = false;
        this.page = 1;
        this.pageSize = 4;
        this.searchTerm = { title: '' };
        this.order = 'title';
        this.reverse = false;
        this.selectedDepartment = {
            code: '',
            title: '',
            email: '',
            phone: '',
            status: true
        };
    }
    DepartmentsComponent.prototype.sortBy = function (value) {
        this.order = value;
    };
    DepartmentsComponent.prototype.reverseSort = function (value) {
        this.order = value;
        this.reverse = !this.reverse;
    };
    Object.defineProperty(DepartmentsComponent.prototype, "departmentKeys", {
        get: function () {
            if (this.departments.length > 0) {
                var x = Object.keys(this.departments[0]);
                x.splice(x.indexOf('code'), 1);
                x.splice(x.indexOf('index'), 1);
                return x;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        // this.departments=[
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'adad', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'three', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'four', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'five', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'six', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'seven', email:'atroma@gmail.com', phone:'+971555423232'},
        //   {title:'Atromoa', email:'atroma@gmail.com', phone:'+971555423232'},
        // ]
        this.role = localStorage.getItem('role');
        this.departmentForm = this.formBuilder.group({
            //  _id:[this.selectedDepartment._id],
            code: [this.selectedDepartment.code],
            title: [this.selectedDepartment.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [this.selectedDepartment.phone],
            email: [this.selectedDepartment.email,],
            status: [this.selectedDepartment.status,],
        });
    };
    DepartmentsComponent.prototype.onTextChange = function (e) {
        var val = e.target.value;
        //make the array full
        this.pageSize = this.departments.length;
        console.log('event', e.target.value);
        this.searchTerm.title = e.target.value;
        //   this.departments = this.filter.transform(this.departments, { title: this.searchTerm.title });
    };
    DepartmentsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departments = this.api.getAllDepartments()
            .subscribe(function (res) {
            var data = res;
            var index = 0;
            data = data.map(function (key, val) {
                index++;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key, { index: index });
            });
            _this.departments = data;
        }, function (err) { return _this.handleError(err); });
    };
    DepartmentsComponent.prototype.handleError = function (err) {
        console.log('Error: ', err.message);
    };
    DepartmentsComponent.prototype.add = function (c) {
        this.helper.open(c);
    };
    Object.defineProperty(DepartmentsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.departmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    DepartmentsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        console.log(this.departmentForm.value);
        var data = this.departmentForm.value;
        delete data._id;
        delete data.code;
        console.log(data);
        this.api.createDepartment(data)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Created', 'Your department is active');
            _this.helper.closeModal();
            _this.getDepartments();
        });
    };
    DepartmentsComponent.prototype.onUpdate = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.departmentForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        var data = Object.assign({}, this.departmentForm.value);
        var code = data.code;
        delete data.code;
        this.api.updateDepartment(code, data.value)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Updated', 'Your department is active');
            _this.helper.closeModal();
            _this.getDepartments();
        });
    };
    DepartmentsComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitted = true;
        this.api.deleteDepartment(this.selectedDepartment.code)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Deleted', 'Department successfully deleted.');
            _this.helper.closeModal();
            _this.getDepartments();
        });
    };
    DepartmentsComponent.prototype.edit = function (c, data) {
        console.log('selected department', data);
        this.helper.open(c);
        this.departmentForm.setValue(data);
    };
    DepartmentsComponent.prototype.delete = function (c, data) {
        console.log('selected department', data);
        this.selectedDepartment.code = data.code;
        this.helper.open(c);
        // this.api.deleteDepartment();
    };
    DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-departments',
            template: __webpack_require__(/*! ./departments.component.html */ "./src/app/pages/departments/departments.component.html"),
            styles: [__webpack_require__(/*! ./departments.component.css */ "./src/app/pages/departments/departments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"all-content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"logo-pro\" style=\"text-align: center;padding-bottom:30px\">\r\n                  <a href=\"index.html\">\r\n                    <img class=\"main-logo\" src=\"./assets/img/logo/logo2.jpeg\" style=\"height:8em;padding-top:10px;padding-bottom:30px;\" alt=\"\" />\r\n                  </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"analytics-sparkle-area\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"analytics-sparkle-line reso-mg-b-30\">\r\n                      <div class=\"analytics-content\">\r\n                          <h5>Reports</h5>\r\n                          <h2>$<span class=\"counter\">5000</span> <span class=\"tuition-fees\">Tuition Fees</span></h2>\r\n                          <span class=\"text-success\">20%</span>\r\n                          <div class=\"progress m-b-0\">\r\n                              <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:20%;\"> <span class=\"sr-only\">20% Complete</span> </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"analytics-sparkle-line reso-mg-b-30\">\r\n                      <div class=\"analytics-content\">\r\n                          <h5>Managers</h5>\r\n                          <h2>$<span class=\"counter\">3000</span> <span class=\"tuition-fees\">Tuition Fees</span></h2>\r\n                          <span class=\"text-danger\">30%</span>\r\n                          <div class=\"progress m-b-0\">\r\n                              <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:30%;\"> <span class=\"sr-only\">230% Complete</span> </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30\">\r\n                      <div class=\"analytics-content\">\r\n                          <h5>Staff</h5>\r\n                          <h2>$<span class=\"counter\">2000</span> <span class=\"tuition-fees\">Tuition Fees</span></h2>\r\n                          <span class=\"text-info\">60%</span>\r\n                          <div class=\"progress m-b-0\">\r\n                              <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%;\"> <span class=\"sr-only\">20% Complete</span> </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30\">\r\n                      <div class=\"analytics-content\">\r\n                          <h5>Roles</h5>\r\n                          <h2>$<span class=\"counter\">3500</span> <span class=\"tuition-fees\">Tuition Fees</span></h2>\r\n                          <span class=\"text-inverse\">80%</span>\r\n                          <div class=\"progress m-b-0\">\r\n                              <div class=\"progress-bar progress-bar-inverse\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%;\"> <span class=\"sr-only\">230% Complete</span> </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- <div class=\"product-sales-area mg-tb-30\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"product-sales-chart\">\r\n                      <div class=\"portlet-title\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                  <div class=\"caption pro-sl-hd\">\r\n                                      <span class=\"caption-subject\"><b>University Earnings</b></span>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                  <div class=\"actions graph-rp graph-rp-dl\">\r\n                                      <p>All Earnings are in million $</p>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <ul class=\"list-inline cus-product-sl-rp\">\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #006DF0;\"></i>CSE</h5>\r\n                          </li>\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #933EC5;\"></i>Accounting</h5>\r\n                          </li>\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #65b12d;\"></i>Electrical</h5>\r\n                          </li>\r\n                      </ul>\r\n                      <div id=\"morris-bar-chart\" style=\"height: 356px;\"></div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n                  <div class=\"white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <h3 class=\"box-title\">Total Visit</h3>\r\n                      <ul class=\"list-inline two-part-sp\">\r\n                          <li>\r\n                              <div id=\"sparklinedash\"></div>\r\n                          </li>\r\n                          <li class=\"text-right sp-cn-r\"><i class=\"fa fa-level-up\" aria-hidden=\"true\"></i> <span class=\"counter text-success\"><span class=\"counter\">1500</span></span>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n                  <div class=\"white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <h3 class=\"box-title\">Page Views</h3>\r\n                      <ul class=\"list-inline two-part-sp\">\r\n                          <li>\r\n                              <div id=\"sparklinedash2\"></div>\r\n                          </li>\r\n                          <li class=\"text-right graph-two-ctn\"><i class=\"fa fa-level-up\" aria-hidden=\"true\"></i> <span class=\"counter text-purple\"><span class=\"counter\">3000</span></span>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n                  <div class=\"white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <h3 class=\"box-title\">Unique Visitor</h3>\r\n                      <ul class=\"list-inline two-part-sp\">\r\n                          <li>\r\n                              <div id=\"sparklinedash3\"></div>\r\n                          </li>\r\n                          <li class=\"text-right graph-three-ctn\"><i class=\"fa fa-level-up\" aria-hidden=\"true\"></i> <span class=\"counter text-info\"><span class=\"counter\">5000</span></span>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n                  <div class=\"white-box analytics-info-cs tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <h3 class=\"box-title\">Bounce Rate</h3>\r\n                      <ul class=\"list-inline two-part-sp\">\r\n                          <li>\r\n                              <div id=\"sparklinedash4\"></div>\r\n                          </li>\r\n                          <li class=\"text-right graph-four-ctn\"><i class=\"fa fa-level-down\" aria-hidden=\"true\"></i> <span class=\"text-danger\"><span class=\"counter\">18</span>%</span>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"traffic-analysis-area\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"social-media-edu\">\r\n                      <i class=\"fa fa-facebook\"></i>\r\n                      <div class=\"social-edu-ctn\">\r\n                          <h3>50k Likes</h3>\r\n                          <p>You main list growing</p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"social-media-edu twitter-cl res-mg-t-30 table-mg-t-pro-n\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                      <div class=\"social-edu-ctn\">\r\n                          <h3>30k followers</h3>\r\n                          <p>You main list growing</p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"social-media-edu linkedin-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30\">\r\n                      <i class=\"fa fa-linkedin\"></i>\r\n                      <div class=\"social-edu-ctn\">\r\n                          <h3>7k Connections</h3>\r\n                          <p>You main list growing</p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"social-media-edu youtube-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30\">\r\n                      <i class=\"fa fa-youtube\"></i>\r\n                      <div class=\"social-edu-ctn\">\r\n                          <h3>50k Subscribers</h3>\r\n                          <p>You main list growing</p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"library-book-area mg-t-30\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"single-cards-item\">\r\n                      <div class=\"single-product-image\">\r\n                          <a href=\"#\"><img src=\"./assets/img/product/profile-bg.jpg\" alt=\"\"></a>\r\n                      </div>\r\n                      <div class=\"single-product-text\">\r\n                          <img src=\"./assets/img/product/pro4.jpg\" alt=\"\">\r\n                          <h4><a class=\"cards-hd-dn\" href=\"#\">Angela Dominic</a></h4>\r\n                          <h5>Web Designer & Developer</h5>\r\n                          <p class=\"ctn-cards\">Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit</p>\r\n                          <a class=\"follow-cards\" href=\"#\">Follow</a>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                                  <div class=\"cards-dtn\">\r\n                                      <h3><span class=\"counter\">199</span></h3>\r\n                                      <p>Articles</p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                                  <div class=\"cards-dtn\">\r\n                                      <h3><span class=\"counter\">599</span></h3>\r\n                                      <p>Like</p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                                  <div class=\"cards-dtn\">\r\n                                      <h3><span class=\"counter\">399</span></h3>\r\n                                      <p>Comment</p>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"single-review-st-item res-mg-t-30 table-mg-t-pro-n\">\r\n                      <div class=\"single-review-st-hd\">\r\n                          <h2>Reviews</h2>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/1.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Sarah Graves</h3>\r\n                              <p>Highly recommend</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/2.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Garbease sha</h3>\r\n                              <p>Awesome Pro</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/3.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Gobetro pro</h3>\r\n                              <p>Great Website</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/4.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Siam Graves</h3>\r\n                              <p>That's Good</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/5.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Sarah Graves</h3>\r\n                              <p>Highly recommend</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"single-review-st-text\">\r\n                          <img src=\"./assets/img/notification/6.jpg\" alt=\"\">\r\n                          <div class=\"review-ctn-hf\">\r\n                              <h3>Julsha Grav</h3>\r\n                              <p>Sei Hoise bro</p>\r\n                          </div>\r\n                          <div class=\"review-item-rating\">\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star\"></i>\r\n                              <i class=\"educate-icon educate-star-half\"></i>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"single-product-item res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"single-product-image\">\r\n                          <a href=\"#\"><img src=\"./assets/img/product/book-4.jpg\" alt=\"\"></a>\r\n                      </div>\r\n                      <div class=\"single-product-text edu-pro-tx\">\r\n                          <h4><a href=\"#\">Title Demo Here</a></h4>\r\n                          <h5>Lorem ipsum dolor sit amet, this is a consec tetur adipisicing elit</h5>\r\n                          <div class=\"product-price\">\r\n                              <h3>$ 45</h3>\r\n                              <div class=\"single-item-rating\">\r\n                                  <i class=\"educate-icon educate-star\"></i>\r\n                                  <i class=\"educate-icon educate-star\"></i>\r\n                                  <i class=\"educate-icon educate-star\"></i>\r\n                                  <i class=\"educate-icon educate-star\"></i>\r\n                                  <i class=\"educate-icon educate-star-half\"></i>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"product-buttons\">\r\n                              <button type=\"button\" class=\"button-default cart-btn\">Read More</button>\r\n                              <button type=\"button\" class=\"button-default\"><i class=\"fa fa-heart\"></i></button>\r\n                              <button type=\"button\" class=\"button-default\"><i class=\"fa fa-share\"></i></button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"product-sales-area mg-tb-30\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-9 col-md-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"product-sales-chart\">\r\n                      <div class=\"portlet-title\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                  <div class=\"caption pro-sl-hd\">\r\n                                      <span class=\"caption-subject\"><b>Adminsion Statistic</b></span>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                  <div class=\"actions graph-rp actions-graph-rp\">\r\n                                      <a href=\"#\" class=\"btn btn-dark btn-circle active tip-top\" data-toggle=\"tooltip\" title=\"Refresh\">\r\n                    <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                                      <a href=\"#\" class=\"btn btn-blue-grey btn-circle active tip-top\" data-toggle=\"tooltip\" title=\"Delete\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <ul class=\"list-inline cus-product-sl-rp\">\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #006DF0;\"></i>Python</h5>\r\n                          </li>\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #933EC5;\"></i>PHP</h5>\r\n                          </li>\r\n                          <li>\r\n                              <h5><i class=\"fa fa-circle\" style=\"color: #65b12d;\"></i>Java</h5>\r\n                          </li>\r\n                      </ul>\r\n                      <div id=\"morris-area-chart\"></div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n                  <div class=\"analysis-progrebar res-mg-t-30 mg-ub-10 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"analysis-progrebar-content\">\r\n                          <h5>Usage</h5>\r\n                          <h2 class=\"storage-right\"><span class=\"counter\">90</span>%</h2>\r\n                          <div class=\"progress progress-mini ug-1\">\r\n                              <div style=\"width: 68%;\" class=\"progress-bar\"></div>\r\n                          </div>\r\n                          <div class=\"m-t-sm small\">\r\n                              <p>Server down since 1:32 pm.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"analysis-progrebar reso-mg-b-30 mg-ub-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"analysis-progrebar-content\">\r\n                          <h5>Memory</h5>\r\n                          <h2 class=\"storage-right\"><span class=\"counter\">70</span>%</h2>\r\n                          <div class=\"progress progress-mini ug-2\">\r\n                              <div style=\"width: 78%;\" class=\"progress-bar\"></div>\r\n                          </div>\r\n                          <div class=\"m-t-sm small\">\r\n                              <p>Server down since 12:32 pm.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"analysis-progrebar reso-mg-b-30 res-mg-t-30 mg-ub-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"analysis-progrebar-content\">\r\n                          <h5>Data</h5>\r\n                          <h2 class=\"storage-right\"><span class=\"counter\">50</span>%</h2>\r\n                          <div class=\"progress progress-mini ug-3\">\r\n                              <div style=\"width: 38%;\" class=\"progress-bar progress-bar-danger\"></div>\r\n                          </div>\r\n                          <div class=\"m-t-sm small\">\r\n                              <p>Server down since 8:32 pm.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"analysis-progrebar res-mg-t-30 table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"analysis-progrebar-content\">\r\n                          <h5>Space</h5>\r\n                          <h2 class=\"storage-right\"><span class=\"counter\">40</span>%</h2>\r\n                          <div class=\"progress progress-mini ug-4\">\r\n                              <div style=\"width: 28%;\" class=\"progress-bar progress-bar-danger\"></div>\r\n                          </div>\r\n                          <div class=\"m-t-sm small\">\r\n                              <p>Server down since 5:32 pm.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"courses-area mg-b-15\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"white-box\">\r\n                      <h3 class=\"box-title\">Browser Status</h3>\r\n                      <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n\r\n                      <ul class=\"basic-list\">\r\n                          <li>Google Chrome <span class=\"pull-right label-danger label-1 label\">95.8%</span></li>\r\n                          <li>Mozila Firefox <span class=\"pull-right label-purple label-2 label\">85.8%</span></li>\r\n                          <li>Apple Safari <span class=\"pull-right label-success label-3 label\">23.8%</span></li>\r\n                          <li>Internet Explorer <span class=\"pull-right label-info label-4 label\">55.8%</span></li>\r\n                          <li>Opera mini <span class=\"pull-right label-warning label-5 label\">28.8%</span></li>\r\n                          <li>Mozila Firefox <span class=\"pull-right label-purple label-6 label\">26.8%</span></li>\r\n                          <li>Safari <span class=\"pull-right label-purple label-7 label\">31.8%</span></li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\r\n                  <div class=\"white-box res-mg-t-30 table-mg-t-pro-n\">\r\n                      <h3 class=\"box-title\">Visits from countries</h3>\r\n                      <ul class=\"country-state\">\r\n                          <li>\r\n                              <h2><span class=\"counter\">1250</span></h2> <small>From Australia</small>\r\n                              <div class=\"pull-right\">75% <i class=\"fa fa-level-up text-danger ctn-ic-1\"></i></div>\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar progress-bar-danger ctn-vs-1\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%;\"> <span class=\"sr-only\">75% Complete</span></div>\r\n                              </div>\r\n                          </li>\r\n                          <li>\r\n                              <h2><span class=\"counter\">1050</span></h2> <small>From USA</small>\r\n                              <div class=\"pull-right\">48% <i class=\"fa fa-level-up text-success ctn-ic-2\"></i></div>\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar progress-bar-info ctn-vs-2\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:48%;\"> <span class=\"sr-only\">48% Complete</span></div>\r\n                              </div>\r\n                          </li>\r\n                          <li>\r\n                              <h2><span class=\"counter\">6350</span></h2> <small>From Canada</small>\r\n                              <div class=\"pull-right\">55% <i class=\"fa fa-level-up text-success ctn-ic-3\"></i></div>\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar progress-bar-success ctn-vs-3\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:55%;\"> <span class=\"sr-only\">55% Complete</span></div>\r\n                              </div>\r\n                          </li>\r\n                          <li>\r\n                              <h2><span class=\"counter\">950</span></h2> <small>From India</small>\r\n                              <div class=\"pull-right\">33% <i class=\"fa fa-level-down text-success ctn-ic-4\"></i></div>\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar progress-bar-success ctn-vs-4\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:33%;\"> <span class=\"sr-only\">33% Complete</span></div>\r\n                              </div>\r\n                          </li>\r\n                          <li>\r\n                              <h2><span class=\"counter\">3250</span></h2> <small>From Bangladesh</small>\r\n                              <div class=\"pull-right\">60% <i class=\"fa fa-level-up text-success ctn-ic-5\"></i></div>\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar progress-bar-inverse ctn-vs-5\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%;\"> <span class=\"sr-only\">60% Complete</span></div>\r\n                              </div>\r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <div class=\"courses-inner res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n\">\r\n                      <div class=\"courses-title\">\r\n                          <a href=\"#\"><img src=\"./assets/img/courses/1.jpg\" alt=\"\" /></a>\r\n                          <h2>Apps Development</h2>\r\n                      </div>\r\n                      <div class=\"courses-alaltic\">\r\n                          <span class=\"cr-ic-r\"><span class=\"course-icon\"><i class=\"fa fa-clock\"></i></span> 1 Year</span>\r\n                          <span class=\"cr-ic-r\"><span class=\"course-icon\"><i class=\"fa fa-heart\"></i></span> 50</span>\r\n                          <span class=\"cr-ic-r\"><span class=\"course-icon\"><i class=\"fa fa-dollar\"></i></span> 500</span>\r\n                      </div>\r\n                      <div class=\"course-des\">\r\n                          <p><span><i class=\"fa fa-clock\"></i></span> <b>Duration:</b> 6 Months</p>\r\n                          <p><span><i class=\"fa fa-clock\"></i></span> <b>Professor:</b> Jane Doe</p>\r\n                          <p><span><i class=\"fa fa-clock\"></i></span> <b>Students:</b> 100+</p>\r\n                      </div>\r\n                      <div class=\"product-buttons\">\r\n                          <button type=\"button\" class=\"button-default cart-btn\">Read More</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div> -->\r\n<!-- <app-footer></app-footer> -->\r\n</div>\r\n\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HomeComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-pagewrap\">\r\n  <div class=\"error-page-int\">\r\n    <div class=\"text-center m-b-md custom-login\">\r\n      <h3>PLEASE LOGIN TO APP</h3>\r\n      <p>This is the best app ever!</p>\r\n    </div>\r\n    <div class=\"content-error\">\r\n\r\n      <div class=\"hpanel\">\r\n                  <div class=\"panel-body\">\r\n                    <form action=\"#\" id=\"loginForm\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"form-group\">\r\n                              <label class=\"control-label\" for=\"username\">Email</label>\r\n                              <input formControlName=\"email\" type=\"text\" placeholder=\"example@gmail.com\" title=\"Please enter you username\" required=\"\" value=\"\" name=\"username\" id=\"username\" class=\"form-control\">\r\n                              <span class=\"help-block small\">Your unique email to app</span>\r\n\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label class=\"control-label\" for=\"password\">Password</label>\r\n                              <input formControlName=\"password\" type=\"password\" title=\"Please enter your password\" placeholder=\"******\" required=\"\" value=\"\" name=\"password\" id=\"password\" class=\"form-control\">\r\n                              <span class=\"help-block small\">Yur strong password</span>\r\n                          </div>\r\n                          <div class=\"checkbox login-checkbox\">\r\n                              <label>\r\n                  <input type=\"checkbox\" class=\"i-checks\"> Remember me </label>\r\n                              <p class=\"help-block small text-danger\" style=\"color:red\" *ngIf=\"errMessage\">{{errMessage}}</p>\r\n                          </div>\r\n                          <button class=\"btn btn-success btn-block loginbtn\" type=\"submit\">Login</button>\r\n                          <a class=\"btn btn-default btn-block\" routerLink='/signup'>Register</a>\r\n                      </form>\r\n\r\n                  </div>\r\n              </div>\r\n    </div>\r\n    <div class=\"text-center login-footer\">\r\n      <p>Copyright © 2018. All rights reserved. Template by <a href=\"https://colorlib.com/wp/templates/\">Colorlib</a></p>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, api) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.submitted = false;
        this.errMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['atrixdigital@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['atrix123', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('daba hai');
        console.log(this.loginForm.value);
        console.log('valid form');
        this.api.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (res) {
            console.log('res', res);
            //  this.router.navigateByUrl('/dashboard')
            try {
                localStorage.setItem('token', res.token);
                localStorage.setItem('role', res.role);
                localStorage.setItem('uid', res._id);
                _this.router.navigate(['dashboard']).then(function () {
                    console.log('routed');
                });
            }
            catch (error) {
                console.log('exception', error);
            }
        }, function (err) {
            console.log('ERROR ', err.error.message);
            _this.errMessage = err.error.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/managers/managers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/managers/managers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXJzL21hbmFnZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/managers/managers.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/managers/managers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"logo-pro text-center\">\r\n                    <a href=\"index.html\"><img class=\"main-logo\" src=\"./assets/img/logo/logo2.jpeg\" style=\"height:8em;padding-top:10px;padding-bottom:30px;\" alt=\"\" /></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"contacts-area mg-b-15\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\" *ngIf=\"managers\">\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let x of managers\">\r\n                    <div class=\"hpanel hblue contact-panel contact-panel-cs responsive-mg-b-30\">\r\n                        <div class=\"panel-body custom-panel-jw\">\r\n                            <div class=\"social-media-in\">\r\n                                <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n                                <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n                                <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a>\r\n                            </div>\r\n                            <img alt=\"logo\" class=\"img-circle m-b\" src=\"./assets/img/contact/1.jpg\">\r\n                            <h3><a href=\"\">{{x?.username}}</a>\r\n                            <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color:green\" *ngIf=\"x.approved == true\"></i>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"x.approved == false\">pending</span>\r\n                            </h3>\r\n                            <p class=\"all-pro-ad\">{{x?.role}}</p>\r\n                            <p>\r\n                                <!-- Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan. -->\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"panel-footer contact-footer\">\r\n                            <!-- <div class=\"professor-stds-int\">\r\n                                <div class=\"professor-stds\">\r\n                                    <div class=\"contact-stat\"><span>Reports </span> <strong>956</strong></div>\r\n                                </div>\r\n                                <div class=\"professor-stds\">\r\n                                    <div class=\"contact-stat\"><span>Comments: </span> <strong>350</strong></div>\r\n                                </div>\r\n                                <div class=\"professor-stds\">\r\n                                    <div class=\"contact-stat\"><span>Views: </span> <strong>450</strong></div>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/managers/managers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/managers/managers.component.ts ***!
  \******************************************************/
/*! exports provided: ManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersComponent", function() { return ManagersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");



var ManagersComponent = /** @class */ (function () {
    function ManagersComponent(api) {
        this.api = api;
    }
    ManagersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getManagers().subscribe(function (resp) {
            console.log(resp);
            _this.managers = resp;
        });
    };
    ManagersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-managers',
            template: __webpack_require__(/*! ./managers.component.html */ "./src/app/pages/managers/managers.component.html"),
            styles: [__webpack_require__(/*! ./managers.component.css */ "./src/app/pages/managers/managers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ManagersComponent);
    return ManagersComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports/reports.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/reports/reports.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/reports/reports.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"all-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"logo-pro text-center\">\r\n            <a href=\"index.html\"\r\n              ><img\r\n                class=\"main-logo\"\r\n                src=\"./assets/img/logo/logo2.jpeg\"\r\n                style=\"height:8em;padding-top:10px;padding-bottom:30px;\"\r\n                alt=\"\"\r\n            /></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"product-status mg-b-15\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\" *ngIf=\"reports\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"product-status-wrap drp-lst\">\r\n              <h4>Reports List</h4>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                      <div class=\"form-group\" *ngIf=\"departments\">\r\n                          <label class=\"small\">Department*</label>\r\n\r\n                          <ngx-select\r\n                          [(ngModel)]=\"searchTerm.department\"\r\n                          placeholder=\"Search\"\r\n                          [items]=\"departments\" ></ngx-select>\r\n\r\n                        </div>\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                      <label class=\"small\"> Search</label>\r\n                      <input\r\n                        type=\"search\"\r\n                        (keyup)=\"onTextChange($event)\"\r\n                        class=\"form-control form-control-sm rounded\"\r\n                        placeholder=\"Search\"/>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"col-md-1 col-xs-12 col-sm-12 col-lg-1\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"\" class=\"small\">Items/page </label>\r\n                      <input\r\n                        type=\"search\"\r\n                        [(ngModel)]=\"pageSize\"\r\n                        class=\"form-control form-control-sm rounded\"\r\n                        placeholder=\"\"\r\n                        aria-describedby=\"helpId\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-12 col-sm-12 col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"small\">Sort By</label>\r\n                      <select\r\n                        class=\"form-control form-control-sm\"\r\n                        [(ngModel)]=\"order\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"let key of reportKeys\"\r\n                          [value]=\"key\"\r\n                          >{{ key }}</option\r\n                        >\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"add-product\" *ngIf=\"role == 'admin'\">\r\n                <a (click)=\"add(addcontent)\" style=\"color:white\"\r\n                  >Add Reports</a>\r\n              </div>\r\n              <div class=\"asset-inner\">\r\n\r\n              <div class=\"container\" *ngIf=\"viewType == 'details'\">\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 text-center\">\r\n                      <table class=\"table table-striped table-inverse table-responsive\">\r\n                          <thead class=\"thead-inverse text-center\">\r\n                            <tr>\r\n                              <th>Start Time</th>\r\n                              <th>End Time</th>\r\n                              <th>Created At</th>\r\n                              <th>Department</th>\r\n                              <th>Area</th>\r\n                              <th>Submitted On</th>\r\n                              <th>Submitted By</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr>\r\n                                  <td class=\"small\">{{date(selectedReport?.startTime)}}</td>\r\n                                  <td class=\"small\">{{date(selectedReport?.endTime)}}</td>\r\n                                  <td class=\"small\">{{date(selectedReport?.created_at)}}</td>\r\n                                  <td class=\"small\">{{selectedReport.department?.title}}</td>\r\n                                  <td class=\"small\">{{selectedReport.area?.title || 'N/A'}}</td>\r\n                                  <td class=\"small\">{{date(selectedReport?.created_at)}}</td>\r\n                                  <td></td>\r\n                                <td></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td scope=\"row\"></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                              </tr>\r\n                            </tbody>\r\n                        </table>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"row text-center\">\r\n                  <div class=\"col-md-2\">\r\n                    <div class=\"card border-primary\">\r\n                      <div class=\"card-body text-center\">\r\n                        <h4 class=\"small\">Total</h4>\r\n                        <p class=\"card-text display-4 text-success\">{{selectedReport?.totalPatients}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                      <div class=\"card border-primary\">\r\n                        <div class=\"card-body text-center\">\r\n                          <h4 class=\"small\">Waiting</h4>\r\n                          <p class=\"card-text display-4 text-success\">{{selectedReport?.waitingRoom}}</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"card border-primary\">\r\n                          <div class=\"card-body text-center\">\r\n                            <h4 class=\"small\">Triage</h4>\r\n                            <p class=\"card-text display-4 text-success\">{{selectedReport?.triage}}</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-2\">\r\n                          <div class=\"card border-primary\">\r\n                            <div class=\"card-body text-center\">\r\n                              <h4 class=\"small\">UTC</h4>\r\n                              <p class=\"card-text display-4 text-success\">{{selectedReport?.utc}}</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"card border-primary\">\r\n                              <div class=\"card-body text-center\">\r\n                                <h4 class=\"small\">Majors</h4>\r\n                                <p class=\"card-text display-4 text-success\">{{selectedReport?.majors}}</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-2\">\r\n                              <div class=\"card border-primary\">\r\n                                <div class=\"card-body text-center\">\r\n                                  <h4 class=\"small\">Paediatrics</h4>\r\n                                  <p class=\"card-text display-4 text-success\">{{selectedReport?.paediatrics}}</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                </div>\r\n                <div class=\"row text-center\">\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"card border-primary\">\r\n                                  <div class=\"card-body text-center\">\r\n                                    <h4 class=\"small\">Resus</h4>\r\n                                    <p class=\"card-text display-4 text-success\">{{selectedReport?.paediatrics}}</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"col-md-2\">\r\n                                  <div class=\"card border-primary\">\r\n                                    <div class=\"card-body text-center\">\r\n                                      <h4 class=\"small\">Breached</h4>\r\n                                      <p class=\"card-text display-4 text-success\">{{selectedReport?.paediatrics}}</p>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n              </div>\r\n                <div class=\"container\" *ngIf=\"viewType == 'graph'\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12 text-center\">\r\n                      <h4>Report Data <a class=\"small\" (click)=\"backFromGraph()\">(<u>back</u>)</a></h4>\r\n                    </div>\r\n                    <div class=\"col-md-12\" *ngIf=\"graph.data\">\r\n                        <plotly-plot [data]=\"graph.data\" [layout]=\"graph.layout\"\r\n                        [useResizeHandler]=\"false\" [style]=\"{position: 'relative', width: 'auto', height: 'auto'}\">\r\n                     </plotly-plot>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <table class=\"table-hover\" *ngIf=\"viewType == 'table'\">\r\n                  <thead>\r\n                  <tr>\r\n                      <th>No</th>\r\n                      <th>Status</th>\r\n                      <th>Submitted By</th>\r\n                      <th (click)=\"reverseSort('title')\">\r\n                      Total Patients.\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'title' && reverse == false\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'title' && reverse == true\"\r\n                      ></i>\r\n                    </th>\r\n                    <th (click)=\"reverseSort('title')\">\r\n                        Waiting Room.\r\n                        <i\r\n                          class=\"fa fa-caret-down\"\r\n                          aria-hidden=\"true\"\r\n                          *ngIf=\"order == 'title' && reverse == false\"\r\n                        ></i>\r\n                        <i\r\n                          class=\"fa fa-caret-up\"\r\n                          aria-hidden=\"true\"\r\n                          *ngIf=\"order == 'title' && reverse == true\"\r\n                        ></i>\r\n                      </th>\r\n                      <th (click)=\"reverseSort('title')\">\r\n                          Triage\r\n                          <i\r\n                            class=\"fa fa-caret-down\"\r\n                            aria-hidden=\"true\"\r\n                            *ngIf=\"order == 'title' && reverse == false\"\r\n                          ></i>\r\n                          <i\r\n                            class=\"fa fa-caret-up\"\r\n                            aria-hidden=\"true\"\r\n                            *ngIf=\"order == 'title' && reverse == true\"\r\n                          ></i>\r\n                        </th>\r\n                        <th (click)=\"reverseSort('title')\">\r\n                            UTC\r\n                            <i\r\n                              class=\"fa fa-caret-down\"\r\n                              aria-hidden=\"true\"\r\n                              *ngIf=\"order == 'title' && reverse == false\"\r\n                            ></i>\r\n                            <i\r\n                              class=\"fa fa-caret-up\"\r\n                              aria-hidden=\"true\"\r\n                              *ngIf=\"order == 'title' && reverse == true\"\r\n                            ></i>\r\n                          </th>\r\n                          <th (click)=\"reverseSort('title')\">\r\n                              Majors.\r\n                              <i\r\n                                class=\"fa fa-caret-down\"\r\n                                aria-hidden=\"true\"\r\n                                *ngIf=\"order == 'title' && reverse == false\"\r\n                              ></i>\r\n                              <i\r\n                                class=\"fa fa-caret-up\"\r\n                                aria-hidden=\"true\"\r\n                                *ngIf=\"order == 'title' && reverse == true\"\r\n                              ></i>\r\n                            </th>\r\n                            <th (click)=\"reverseSort('title')\">\r\n                                Paediatrics\r\n                                <i\r\n                                  class=\"fa fa-caret-down\"\r\n                                  aria-hidden=\"true\"\r\n                                  *ngIf=\"order == 'title' && reverse == false\"\r\n                                ></i>\r\n                                <i\r\n                                  class=\"fa fa-caret-up\"\r\n                                  aria-hidden=\"true\"\r\n                                  *ngIf=\"order == 'title' && reverse == true\"\r\n                                ></i>\r\n                              </th>\r\n                    <th (click)=\"reverseSort('status')\">\r\n                      resus\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'status' && reverse == true\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'status' && reverse == false\"\r\n                      ></i>\r\n                    </th>\r\n                    <th>\r\n                      Breached\r\n\r\n                      <i\r\n                        class=\"fa fa-caret-down\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'head' && reverse == false\"\r\n                      ></i>\r\n                      <i\r\n                        class=\"fa fa-caret-up\"\r\n                        aria-hidden=\"true\"\r\n                        *ngIf=\"order == 'head' && reverse == true\"\r\n                      ></i>\r\n                    </th>\r\n\r\n                    <th>Setting</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr\r\n                    *ngFor=\"\r\n                      let x of reports | filterBy: searchTerm;\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                  <td>{{ x.index }}</td>\r\n                  <td>\r\n                      <span class=\"badge badge-success\" *ngIf=\"x.submitted == true\">Submitted</span>\r\n                      <span class=\"badge badge-danger\"  *ngIf=\"x.submitted == false\">Not Submitted</span>\r\n\r\n                  </td>\r\n                  <td>{{ x.submittedBy }}</td>\r\n                  <td>{{ x?.totalPatients }}</td>\r\n                    <td>{{ x?.waitingRoom }}</td>\r\n                    <td>{{ x?.triage }}</td>\r\n                    <td>{{ x?.utc }}</td>\r\n                    <td>{{ x?.majors }}</td>\r\n                    <td>{{ x?.paediatrics }}</td>\r\n                    <td>{{ x?.resus }}</td>\r\n                    <td>{{ x?.breached }}</td>\r\n                    <td>\r\n\r\n                        <button\r\n                        title=\"Graph\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"viewDetails(x)\">\r\n                        <i class=\"fa fa-expand\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                        <button\r\n                        title=\"Graph\"\r\n                        class=\"pd-setting-ed\"\r\n                        *ngIf=\"x.submitted == true\"\r\n                        (click)=\"viewPieGraph(i, x)\">\r\n                        <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                        <button *ngIf=\"x.submitted == true\"\r\n                        title=\"Graph\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"viewBarGraph(i, x)\">\r\n                        <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                      <button\r\n                        title=\"Edit\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"edit(editcontent, x)\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                      <button\r\n                        title=\"Trash\"\r\n                        class=\"pd-setting-ed\"\r\n                        (click)=\"delete(deletecontent, x)\" >\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot class=\"text-center\" style=\"text-align:center\">\r\n                  <tr>\r\n                    <div class=\"col-md-12 col-xs-12 col-lg-12 col-sm-12 \">\r\n                        <div class=\"text-center\" style=\"text-align: center\">\r\n                          <ngb-pagination\r\n                            class=\"custom-pagination text-center\"\r\n                            [(page)]=\"page\"\r\n                            [pageSize]=\"pageSize\"\r\n                            style=\"text-align:center\"\r\n                            [collectionSize]=\"reports.length\"\r\n                          ></ngb-pagination>\r\n                        </div>\r\n                      </div>\r\n                    </tr>\r\n                </tfoot>\r\n                </table>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer> </app-footer>\r\n  </div>\r\n\r\n  <ng-template #addcontent let-modal>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Report</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body container\">\r\n        <div class=\"container\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"bodyx\">\r\n              <form\r\n                class=\"form-signin\"\r\n                action=\"#\"\r\n                id=\"reportForm\"\r\n                [formGroup]=\"reportForm\"\r\n                (ngSubmit)=\"onSubmit()\"\r\n              >\r\n                <div class=\"text-center mb-4\">\r\n                  <img\r\n                    class=\"mb-4\"\r\n                    src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-reports.png?t=1423194477519\"\r\n                    alt=\"\"\r\n                    width=\"72\"\r\n                    height=\"72\"\r\n                  />\r\n                  <h1 class=\"h3 mb-3 font-weight-normal\">Create Report</h1>\r\n                  <p>\r\n                    Please make sure every information entered is\r\n                    <code>correctly formatted</code>\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"departments\">\r\n                    <label class=\"small\">Department*</label>\r\n                    <ngx-select formControlName=\"department\"\r\n                    (select)=\"getx($event)\"\r\n                    [items]=\"departments\" ></ngx-select>\r\n                </div>\r\n\r\n                  <div class=\"form-group\" >\r\n                      <label class=\"small\">Areas*</label>\r\n                      <ngx-select formControlName=\"area\"\r\n                      [items]=\"areas\" ></ngx-select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" >\r\n                      <label class=\"small\">Manager*</label>\r\n                      <ngx-select formControlName=\"manager\"\r\n                      [items]=\"managers\" ></ngx-select>\r\n                    </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Total patients</label>\r\n                    <input\r\n                      type=\"number\" formControlName=\"totalPatients\" class=\"form-control\" placeholder=\"\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"\">Waiting Room</label>\r\n                      <input\r\n                        type=\"number\" formControlName=\"waitingRoom\" class=\"form-control\" placeholder=\"\"/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Triage</label>\r\n                        <input\r\n                          type=\"number\" formControlName=\"triage\" class=\"form-control\" placeholder=\"\"/>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"\">UTC</label>\r\n                          <input\r\n                            type=\"number\" formControlName=\"utc\" class=\"form-control\" placeholder=\"\"/>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Majors</label>\r\n                            <input\r\n                              type=\"number\" formControlName=\"majors\" class=\"form-control\" placeholder=\"\"/>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"\">paediatrics</label>\r\n                              <input\r\n                                type=\"number\" formControlName=\"paediatrics\" class=\"form-control\" placeholder=\"\"/>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">Resus</label>\r\n                                <input\r\n                                  type=\"number\" formControlName=\"resus\" class=\"form-control\" placeholder=\"\"/>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"\">Breached</label>\r\n                                  <input\r\n                                    type=\"number\" formControlName=\"breached\" class=\"form-control\" placeholder=\"\"/>\r\n                                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"\">Submitted</label>\r\n                  <select class=\"form-control\" formControlName=\"submitted\">\r\n                    <option value=\"true\">Yes</option>\r\n                    <option value=\"false\">No</option>\r\n                  </select>\r\n                </div>\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                  Update\r\n                </button>\r\n                <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-dark\"\r\n          (click)=\"modal.close('Save click')\"\r\n        >\r\n          Save\r\n        </button>\r\n      </div>\r\n    </ng-template>\r\n\r\n  <ng-template #editcontent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Report</h4>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body container\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"bodyx\">\r\n            <form\r\n              class=\"form-signin\"\r\n              action=\"#\"\r\n              id=\"reportForm\"\r\n              [formGroup]=\"reportForm\"\r\n              (ngSubmit)=\"onUpdate()\"\r\n            >\r\n              <div class=\"text-center mb-4\">\r\n                <img\r\n                  class=\"mb-4\"\r\n                  src=\"http://cdn2.hubspot.net/hub/270076/file-1598465330-png/website2014/solutions-reports.png?t=1423194477519\"\r\n                  alt=\"\"\r\n                  width=\"72\"\r\n                  height=\"72\"\r\n                />\r\n                <h1 class=\"h3 mb-3 font-weight-normal\">Create Report</h1>\r\n                <p>\r\n                  Please make sure every information entered is\r\n                  <code>correctly formatted</code>\r\n                </p>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"\">Breached</label>\r\n                <input\r\n                  type=\"number\" formControlName=\"breached\" class=\"form-control\" placeholder=\"\"/>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"\">Total patients</label>\r\n                  <input\r\n                    type=\"number\" formControlName=\"totalPatients\" class=\"form-control\" placeholder=\"\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Waiting Room</label>\r\n                    <input\r\n                      type=\"number\" formControlName=\"waitingRoom\" class=\"form-control\" placeholder=\"\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"\">Triage</label>\r\n                      <input\r\n                        type=\"number\" formControlName=\"triage\" class=\"form-control\" placeholder=\"\"/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">UTC</label>\r\n                        <input\r\n                          type=\"number\" formControlName=\"utc\" class=\"form-control\" placeholder=\"\"/>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"\">Majors</label>\r\n                          <input\r\n                            type=\"number\" formControlName=\"majros\" class=\"form-control\" placeholder=\"\"/>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">paediatrics</label>\r\n                            <input\r\n                              type=\"number\" formControlName=\"paediatrics\" class=\"form-control\" placeholder=\"\"/>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"\">Resus</label>\r\n                              <input\r\n                                type=\"number\" formControlName=\"resus\" class=\"form-control\" placeholder=\"\"/>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">Breached</label>\r\n                                <input\r\n                                  type=\"number\" formControlName=\"breached\" class=\"form-control\" placeholder=\"\"/>\r\n                              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"\">Submitted</label>\r\n                <select class=\"form-control\" formControlName=\"status\">\r\n                  <option value=\"true\">active</option>\r\n                  <option value=\"false\">In Active</option>\r\n                </select>\r\n              </div>\r\n              <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                Update\r\n              </button>\r\n              <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"modal.close('Save click')\"\r\n      >\r\n        Save\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #deletecontent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Report</h4>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        aria-label=\"Close\"\r\n        (click)=\"modal.dismiss('Cross click')\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body container\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n          Are you sure you want to delete the following document?\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onDelete()\">\r\n        Delete\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(api, helper, formBuilder, filter) {
        this.api = api;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.filter = filter;
        this.viewType = 'table'; //table || graph || details
        this.submitted = false;
        this.page = 1;
        this.pageSize = 4;
        this.searchTerm = { department: '' };
        this.order = '';
        this.reverse = false;
        this.selectedArea = {
            area: "",
            breached: null,
            created_at: "",
            department: null,
            endTime: "",
            index: null,
            majors: null,
            manager: {},
            paediatrics: null,
            resus: null,
            startTime: "",
            submitted: false,
            submittedBy: null,
            totalPatients: null,
            triage: null,
            updated_at: "",
            utc: null,
            waitingRoom: null,
            code: '',
            _id: ''
        };
        this.y = [];
    }
    ReportsComponent.prototype.getManagers = function () {
        this.api.getManagers().subscribe(function (resp) {
            console.log('all managers', resp);
        });
    };
    ReportsComponent.prototype.sortBy = function (value) {
        this.order = value;
    };
    ReportsComponent.prototype.reverseSort = function (value) {
        this.order = value;
        this.reverse = !this.reverse;
    };
    Object.defineProperty(ReportsComponent.prototype, "reportKeys", {
        get: function () {
            if (this.reports.length > 0) {
                var x = Object.keys(this.reports[0]);
                x.splice(x.indexOf('code'), 1);
                x.splice(x.indexOf('index'), 1);
                return x;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ReportsComponent.prototype.backFromGraph = function () {
        this.viewType = 'table';
        this.selectedReport = {};
    };
    ReportsComponent.prototype.viewDetails = function (val) {
        this.viewType = 'details';
        this.selectedReport = val;
    };
    ReportsComponent.prototype.viewBarGraph = function (index, val) {
        this.viewType = 'graph';
        this.selectedReport = val;
        this.graph = {
            data: [
                { x: ['totalPatients', 'waitingRoom', 'Triage', 'UTC', 'Majors', 'Paediatrics', 'resus', 'Breached'],
                    y: this.y[index],
                    type: 'bar',
                    marker: { color: ['#F44336', '#00BCD4', '#4CAF50', '#3F51B5', '#FF5722', '#CDDC39', '#5D4037', '#EC407A'] }
                }
            ]
        };
    };
    ReportsComponent.prototype.date = function (date) {
        return new Date(date).toLocaleString();
    };
    ReportsComponent.prototype.viewPieGraph = function (index, val) {
        this.viewType = 'graph';
        this.selectedReport = val;
        [{
                values: [19, 26, 55],
                labels: ['Residential', 'Non-Residential', 'Utility'],
                type: 'pie'
            }];
        this.graph = {
            data: [
                { labels: ['totalPatients', 'waitingRoom', 'Triage', 'UTC', 'Majors', 'Paediatrics', 'resus', 'Breached'],
                    values: this.y[index],
                    type: 'pie',
                }
            ]
        };
    };
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllReports()
            .subscribe(function (res) {
            var data = res;
            var index = 0;
            data = data.map(function (key, val) {
                index++;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key, { index: index });
            });
            //  let y= ['totalPatients','waitingRoom','Triage', 'UTC','Majors','Paediatrics','resus','Breached'];
            _this.y = data.map(function (key, val) {
                return [key.totalPatients, key.waitingRoom, key.triage, key.utc, key.majors, key.paediatrics, key.resus, key.breached];
            });
            _this.graph = {
                data: [
                    { x: ['totalPatients', 'waitingRoom', 'Triage', 'UTC', 'Majors', 'Paediatrics', 'resus', 'Breached'],
                        y: _this.y[0],
                        type: 'bar',
                        marker: { color: ['#F44336', '#00BCD4', '#4CAF50', '#3F51B5', '#FF5722', '#CDDC39', '#5D4037', '#EC407A'] }
                    }
                ]
            };
            _this.api.getManagers().subscribe(function (managers) {
                console.log('all managers', managers);
                _this.managers = managers;
            });
            _this.reports = data;
            // console.log('reports', this.reports);
        }, function (err) { return _this.handleError(err); });
        this.api.getAllDepartments().subscribe(function (response) {
            // console.log('dp', response);
            _this.departments = response;
        });
        // if(localStorage.getItem('role') == 'admin'){
        //   this.getReports();
        // }else{
        //  if(localStorage.getItem('role') !== 'admin'){
        //     this.getReports();
        //   }
        // }
        this.role = localStorage.getItem('role');
        this.reportForm = this.formBuilder.group({
            //  _id:[this.selectedArea._id],
            code: [this.selectedArea.code],
            department: [this.selectedArea.department],
            area: [this.selectedArea.area],
            breached: [this.selectedArea.breached],
            created_at: [this.selectedArea.created_at],
            endTime: [this.selectedArea.endTime],
            index: [this.selectedArea.index],
            majors: [this.selectedArea.majors],
            manager: [this.selectedArea.manager],
            paediatrics: [this.selectedArea.paediatrics],
            resus: [this.selectedArea.resus],
            startTime: [this.selectedArea.startTime],
            submitted: [this.selectedArea.submitted],
            submittedBy: [this.selectedArea.submittedBy],
            totalPatients: [this.selectedArea.totalPatients],
            triage: [this.selectedArea.triage],
            updated_at: [this.selectedArea.updated_at],
            utc: [this.selectedArea.utc],
            waitingRoom: [this.selectedArea.waitingRoom],
        });
    };
    ReportsComponent.prototype.onTextChange = function (e) {
        console.log(e);
        var val = e.target.value;
        //make the array full
        this.pageSize = this.reports.length;
        console.log('event', e.target.value);
        this.searchTerm.department = e.target.value;
        //   this.reports = this.filter.transform(this.reports, { title: this.searchTerm.title });
    };
    ReportsComponent.prototype.getReports = function () {
        this.api.getAllReports()
            .subscribe(function (res) {
            var data = res;
            var index = 0;
            data = data.map(function (key, val) {
                index++;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, key, { index: index });
            });
        });
    };
    ReportsComponent.prototype.handleError = function (err) {
        console.log('Error: ', err.message);
    };
    ReportsComponent.prototype.add = function (c) {
        this.helper.open(c);
    };
    Object.defineProperty(ReportsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.reportForm.controls; },
        enumerable: true,
        configurable: true
    });
    ReportsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.reportForm.invalid) {
            console.log('invalid report form!');
            return;
        }
        console.log(this.reportForm.value);
        var data = this.reportForm.value;
        delete data._id;
        delete data.code;
        console.log(data);
        this.api.createReport(data)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Report Created', 'Your Report created.');
            _this.helper.closeModal();
            _this.getReports();
        });
    };
    ReportsComponent.prototype.onUpdate = function () {
        var _this = this;
        this.submitted = true;
        console.log('mai chala');
        // stop here if form is invalid
        if (this.reportForm.invalid) {
            console.log('invalid department form!');
            return;
        }
        var data = Object.assign({}, this.reportForm.value);
        var code = data.code;
        delete data.code;
        this.api.updateDepartment(code, data.value)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Updated', 'Your department is active');
            _this.helper.closeModal();
            _this.getReports();
        });
    };
    ReportsComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitted = true;
        this.api.deleteDepartment(this.selectedArea.code)
            .subscribe(function (res) {
            console.log('res', res);
            _this.helper.toast('success', 'Department Deleted', 'Department successfully deleted.');
            _this.helper.closeModal();
            _this.getReports();
        });
    };
    ReportsComponent.prototype.edit = function (c, data) {
        console.log('selected department', data);
        this.helper.open(c);
        this.reportForm.setValue(data);
    };
    ReportsComponent.prototype.delete = function (c, data) {
        console.log('selected department', data);
        this.selectedArea.code = data.code;
        this.helper.open(c);
        // this.api.deleteDepartment();
    };
    ReportsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.api.getAllDepartments(function (res) {
            _this.departments = res;
            console.log('departments', _this.departments);
        });
    };
    ReportsComponent.prototype.getAreas = function () {
        var _this = this;
        this.api.getAllAreas(function (res) {
            _this.areas = res;
            console.log('areas', _this.areas);
        });
    };
    ReportsComponent.prototype.getx = function (e) {
        var _this = this;
        this.areas = [];
        console.log('e', e);
        this.api.getDepartmentAreas(e).subscribe(function (res) {
            if (res) {
                console.log('areas aagaye', res);
                _this.areas = res;
            }
        });
    };
    ReportsComponent.prototype.getx1 = function (e) {
        this.api.getDepartmentManagers(e).subscribe(function (da) {
            if (da) {
            }
        });
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/pages/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/pages/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-pagewrap\">\r\n  <div class=\"error-page-int\">\r\n    <div class=\"text-center custom-login\">\r\n      <h3>Registration</h3>\r\n      <p>This is the best app ever!</p>\r\n    </div>\r\n    <div class=\"content-error\">\r\n      <div class=\"hpanel\">\r\n                  <div class=\"panel-body\">\r\n                      <form action=\"#\" id=\"loginForm\"  [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                          <div class=\"row\">\r\n                                <div class=\"form-group col-lg-6 col-sm-12 col-xs-12\">\r\n                                        <label>First Name</label>\r\n                                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback text-danger\">\r\n                                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-lg-6 col-sm-12 col-xs-12\">\r\n                                        <label>Last Name</label>\r\n                                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback text-danger\">\r\n                                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                            <label>Email</label>\r\n                                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.email.errors.required\" class=\"text-danger\">Email is required</div>\r\n                                                <div *ngIf=\"f.email.errors.email\" class=\"text-danger\">Email must be a valid email address</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label>Password</label>\r\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback text-danger\">\r\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                                <label>Role</label>\r\n                                                <select class=\"browser-default custom-select form-control\">\r\n                                                        <option selected>Open this select menu</option>\r\n                                                        <option value=\"1\" *ngFor=\"let role of roles \" [value]=\"role.code\">{{role.title}}</option>\r\n                                                      </select>\r\n                                                      <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback text-danger\">\r\n                                                            <div *ngIf=\"f.role.errors.required\">Role is required</div>\r\n                                                        </div>\r\n                                              \r\n                                            </div>\r\n\r\n                              <!-- <div class=\"form-group col-lg-12\">\r\n                                  <label>Username</label>\r\n                                  <input class=\"form-control\">\r\n                              </div>\r\n                              <div class=\"form-group col-lg-6\">\r\n                                  <label>Password</label>\r\n                                  <input type=\"password\" class=\"form-control\">\r\n                              </div>\r\n                              <div class=\"form-group col-lg-6\">\r\n                                  <label>Repeat Password</label>\r\n                                  <input type=\"password\" class=\"form-control\">\r\n                              </div>\r\n                              <div class=\"form-group col-lg-6\">\r\n                                  <label>Email Address</label>\r\n                                  <input class=\"form-control\">\r\n                              </div>\r\n                              <div class=\"form-group col-lg-6\">\r\n                                  <label>Repeat Email Address</label>\r\n                                  <input class=\"form-control\">\r\n                              </div> -->\r\n                              <div class=\"checkbox col-lg-12\">\r\n                                  <input type=\"checkbox\" class=\"i-checks\" checked> Sigh up for our newsletter\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <button class=\"btn btn-success loginbtn\" [disabled]=\"loading\" >Register</button>\r\n                              <button class=\"btn btn-default\">Cancel</button>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n    </div>\r\n    <div class=\"text-center login-footer\">\r\n      <p>Copyright © 2019. All rights reserved. FLow by <a href=\"https://atrixdigital.com/wp/templates/\">Atrix Digital Solutions</a></p>\r\n    </div>\r\n  </div>   \r\n  </div>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, api) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //TIME TO CALL API
        alert('SUCCESS!! :-)');
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/staff/staff.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/staff/staff.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/staff/staff.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/staff/staff.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"logo-pro\">\r\n                    <a href=\"index.html\"><img class=\"main-logo\" src=\"./assets/img/logo/logo2.jpeg\" style=\"height:8em;padding-top:10px;padding-bottom:30px;\" alt=\"\" /></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"contacts-area mg-b-15\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std res-mg-b-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/1.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std res-mg-b-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/2.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std res-mg-b-30 res-tablet-mg-t-30 dk-res-t-pro-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/3.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std res-tablet-mg-t-30 dk-res-t-pro-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/4.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std mg-t-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/1.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std mg-t-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/2.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std mg-t-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/3.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                    <div class=\"student-inner-std mg-t-30\">\r\n                        <div class=\"student-img\">\r\n                            <img src=\"./assets/img/student/4.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"student-dtl\">\r\n                            <h2>Alexam Angles</h2>\r\n                            <p class=\"dp\">Computer Science</p>\r\n                            <p class=\"dp-ag\"><b>Age:</b> 20 Years</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer-copyright-area\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"footer-copy-right\">\r\n                        <p>Copyright © 2018. All rights reserved. Template by <a href=\"https://colorlib.com/wp/templates/\">Colorlib</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/staff/staff.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/staff/staff.component.ts ***!
  \************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaffComponent = /** @class */ (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/pages/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/pages/staff/staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_URL = "http://ec2-54-255-215-45.ap-southeast-1.compute.amazonaws.com:3000/api";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.token = localStorage.getItem("token");
    }
    /* API FLOW CONNECTED TO THE SERVER */
    /*
    --------------------------------
    ********** AUTH *********
    -------------------------------
    */
    ApiService.prototype.login = function (email, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        var req = { username: email, password: password };
        // tslint:disable-next-line: max-line-length
        return this.http.post(API_URL + "/auth/signin/", req, { headers: headers });
    };
    ApiService.prototype.signup = function (email, password, role) { };
    ApiService.prototype.verifyToken = function (token) { };
    /*
    --------------------------------
    ********** DEPARTMENTS *********
    -------------------------------
    */
    /**GET USER  */
    ApiService.prototype.getDepartments = function (query) { };
    /**GET ALL  */
    ApiService.prototype.getAllDepartments = function (query) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.get(API_URL + "/departments", { headers: headers });
    };
    /**CREATE  */
    ApiService.prototype.createDepartment = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json; charset=utf-8");
        headers = headers.append("authorization", this.token);
        console.log(headers);
        return this.http.post(API_URL + "/departments", data, { headers: headers });
    };
    /**UPDATE  */
    ApiService.prototype.updateDepartment = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Authorization", this.token);
        return this.http.put(API_URL + "/departments/" + id, data, {
            headers: headers
        });
    };
    /** DELETE  */
    ApiService.prototype.deleteDepartment = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Authorization", this.token);
        return this.http.delete(API_URL + "/departments/" + id, {
            headers: headers
        });
    };
    /*
    --------------------------------
    ********** AREAS *********
    -------------------------------
    */
    /**GET USER  */
    ApiService.prototype.getAreas = function (query) { };
    /**GET ALL  */
    ApiService.prototype.getAllAreas = function (query) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.get(API_URL + "/areas", { headers: headers });
    };
    /**GET DEPARTMENT ARES  */
    ApiService.prototype.getDepartmentAreas = function (departmentId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.post(API_URL + "/areas/departments", { id: departmentId }, { headers: headers });
    };
    /**GET DEPARTMENT ARES  */
    ApiService.prototype.getDepartmentManagers = function (departmentId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.post(API_URL + "/users/manager/" + departmentId, {
            headers: headers
        });
    };
    /**CREATE  */
    ApiService.prototype.createArea = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json; charset=utf-8");
        headers = headers.append("authorization", this.token);
        console.log(headers);
        return this.http.post(API_URL + "/areas", data, { headers: headers });
    };
    /**UPDATE  */
    ApiService.prototype.updateArea = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Authorization", this.token);
        return this.http.put(API_URL + "/areas/" + id, data, {
            headers: headers
        });
    };
    /** DELETE  */
    ApiService.prototype.deleteArea = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Authorization", this.token);
        return this.http.delete(API_URL + "/areas/" + id, {
            headers: headers
        });
    };
    /*
    --------------------------------
    ********** MANAGERS *********
    -------------------------------
    */
    /** GET */
    ApiService.prototype.getManagers = function (query) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.get(API_URL + "/users/managers/", {
            headers: headers
        });
    };
    /** CREATE */
    ApiService.prototype.createManager = function (data) { };
    /** UPDATE */
    ApiService.prototype.updateManager = function (id, data) { };
    /** DELETE  */
    ApiService.prototype.deleteManager = function (id) { };
    /*
    --------------------------------
    ********** REPORTS *********
    -------------------------------
    */
    /**CREATE  */
    ApiService.prototype.createReport = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json; charset=utf-8");
        headers = headers.append("authorization", this.token);
        console.log(headers);
        return this.http.post(API_URL + "/reports", data, { headers: headers });
    };
    /** GET  */
    ApiService.prototype.getReports = function () { };
    /**GET ALL  */
    ApiService.prototype.getAllReports = function (query) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-Type", "application/json; charset=utf-8");
        headers = headers.set("authorization", this.token);
        return this.http.get(API_URL + "/reports/all", { headers: headers });
    };
    /** GET MANAGER REPORTS - This will fetch all Reports for the Manager with the provided **managerId**  */
    ApiService.prototype.getManagerReports = function (id) { };
    /** GET DEPARTMENT REPORTS */
    ApiService.prototype.getDepartmentReports = function (departmentId) {
        //find department managers
    };
    /** GET SINGLE REPORT -
     * id: **Report ID**
     */
    ApiService.prototype.getReport = function (id) { };
    ApiService.prototype.updateReport = function (id, data) { };
    ApiService.prototype.deleteReport = function (id) { };
    /*
    --------------------------------
    ********** STAFF *********
    -------------------------------
    */
    ApiService.prototype.getDepartmentStaff = function (id) { };
    ApiService.prototype.getAllStaff = function () { };
    ApiService.prototype.deleteStaff = function (id) { };
    ApiService.prototype.updateStaff = function (id, data) { };
    /*
    --------------------------------
    ********** ROLE *********
    -------------------------------
    */
    ApiService.prototype.getRoles = function () {
        return this.http.get(API_URL + "/roles").subscribe(function (resp) {
            console.log("roles", resp);
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/helper/helper.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/helper/helper.service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var HelperService = /** @class */ (function () {
    function HelperService(modalService, toastr) {
        this.modalService = modalService;
        this.toastr = toastr;
    }
    HelperService.prototype.open = function (content) {
        this.modalService.open(content);
    };
    HelperService.prototype.closeModal = function () {
        this.modalService.dismissAll();
    };
    HelperService.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HelperService.prototype.toast = function (type, title, msg) {
        switch (type) {
            case 'success':
                this.toastr.success(title, msg);
                break;
            case 'danger':
                this.toastr.error(title, msg);
                break;
            case 'warning':
                this.toastr.warning(title, msg);
                break;
            case 'info':
                this.toastr.info(title, msg);
                break;
        }
    };
    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-copyright-area\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"footer-copy-right\">\r\n                    <p>Copyright © 2019. All rights reserved. Powered by <a href=\"https://atrixdigital.com/\">Atrix Digital Solutions</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagenotfound/pagenotfound.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/pagenotfound/pagenotfound.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/pagenotfound/pagenotfound.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/pagenotfound/pagenotfound.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-pagewrap\">\r\n\t\t<div class=\"error-page-int\">\r\n\t\t\t<div class=\"content-error\">\r\n\t\t\t\t<h1>ERROR <span class=\"counter\"> 404</span></h1>\r\n\t\t\t\t<p>Sorry, but the page you are looking for has note been found. Try checking the URL for the error, then hit the refresh button on your browser or try found something else in our app.</p>\r\n\t\t\t\t<a routerLink=\"/dashboard/home\">Dashboard</a>\r\n\t\t\t\t<a href=\"#\">Report Problem</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text-center login-footer\">\r\n\t\t\t\t<p>Copyright © 2018. All rights reserved. Template by <a href=\"https://colorlib.com/wp/templates/\">Colorlib</a></p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/shared/pagenotfound/pagenotfound.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pagenotfound/pagenotfound.component.ts ***!
  \***************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/shared/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/shared/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background-color:rgb(241, 241, 241);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDEsIDI0MSwgMjQxKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-sidebar-pro\">\r\n  <nav id=\"sidebar\" class=\"\">\r\n    <div class=\"sidebar-header\">\r\n      <a href=\"index.html\"\r\n        ><img class=\"main-logo\" src=\"./assets/img/logo/logo2.jpeg\" style=\"height:8em;padding-top:10px;padding-bottom:30px;\" alt=\"\"\r\n      /></a>\r\n      <strong\r\n        ><a\r\n          ><img src=\"./assets/img/logo/logosn.png\" alt=\"\"/></a\r\n      ></strong>\r\n    </div>\r\n    <div class=\"left-custom-menu-adp-wrap comment-scrollbar\">\r\n      <nav class=\"sidebar-nav left-sidebar-menu-pro\">\r\n        <ul class=\"metismenu\" id=\"menu1\">\r\n          <li  [routerLink]=\"['/dashboard/home']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-home icon-wrap\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Dashboard</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/managers']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-professor icon-wrap\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Managers</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/departments']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-course icon-wrap\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Departments</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/areas']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-course icon-wrap\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Areas</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/reports']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-form icon-wrap \"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Reports</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/approvals']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-form icon-wrap \"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Approvals</span></a\r\n            >\r\n          </li>\r\n          <li  [routerLink]=\"['/dashboard/staff']\" routerLinkActive='active'>\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-professor icon-wrap\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Staff</span></a\r\n            >\r\n          </li>\r\n\r\n          <li >\r\n            <a title=\"Landing Page\" aria-expanded=\"false\"\r\n              ><span\r\n                class=\"educate-icon educate-event icon-wrap sub-icon-mg\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              <span class=\"mini-click-non\">Events & News</span></a\r\n            >\r\n          </li>\r\n\r\n          <li>\r\n            <a href=\"mailbox.html\" aria-expanded=\"false\"\r\n              ><span class=\"educate-icon educate-message icon-wrap\"></span>\r\n              <span class=\"mini-click-non\">Mailbox</span></a\r\n            >\r\n          </li>\r\n\r\n          <li id=\"removable\">\r\n            <a href=\"#\" aria-expanded=\"false\"\r\n              ><span class=\"educate-icon educate-pages icon-wrap\"></span>\r\n              <span class=\"mini-click-non\">Logout</span></a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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

module.exports = __webpack_require__(/*! C:\Atrix\Projects\flow\project\development\flow-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map