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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <router-outlet>\n  </router-outlet>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'create/:userid/:username', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"] },
    { path: 'edit/:username/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"] },
    { path: 'list/:username', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_11__["TodoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-form {\n    min-width: 150px;\n    width: 100%;\n}\n\n.field-full-width {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"  position: relative;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  text-align: left;\">\n  <br>\n  <mat-card style=\"background-color: rgb(255, 255, 255, 0.8);\">\n    <section class=\"mat-typography\">\n      <h1>Create A New Todo</h1>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"createForm\" class=\"create-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Todo Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Order\" formControlName=\"order\" #order>\n      </mat-form-field>\n      <mat-form-field>\n          <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"High\">High</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div style=\"text-align: right;\">\n      <button mat-raised-button color=\"accent\" routerLink='{{backRoute}}'>Back</button>&nbsp;\n      <button type=\"submit\" (click)=\"addTodo(title.value, description.value, order.value, severity.value, userid)\" [disabled]=\"createForm.pristine || createForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n      </div>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(todoService, fb, router, route) {
        this.todoService = todoService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: '',
            order: '',
            severity: ''
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userid = params.userid;
            _this.username = params.username;
        });
        this.backRoute = '/list/' + this.username;
    };
    CreateComponent.prototype.addTodo = function (title, description, order, severity, userid) {
        var _this = this;
        this.todoService.addTodo(title, description, order, severity, userid).subscribe(function () {
            _this.router.navigate(['/list/' + _this.username]);
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-form {\n    min-width: 150px;\n    width: 100%;\n}\n\n.field-full-width {\n    width: 100%;\n}\n\n.select-fields {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"  position: relative;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  text-align: left;\">\n  <br>\n  <mat-card style=\"background-color: rgb(255, 255, 255, 0.8);\">\n    <section class=\"mat-typography\">\n      <h3>Update Todo</h3>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"updateForm\" class=\"edit-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Todo Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Order\" formControlName=\"order\" #order></textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"select-fields\">\n          <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"High\">High</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"select-fields\">\n        <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n          <mat-option value=\"Open\">Open</mat-option>\n          <mat-option value=\"In Progress\">In Progress</mat-option>\n          <mat-option value=\"Done\">Done</mat-option>\n        </mat-select>\n    </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div style=\"text-align: right;\">\n      <button mat-raised-button color=\"accent\" routerLink=\"{{backRoute}}\">Back</button>&nbsp;\n      <button type=\"submit\" (click)=\"updateTodo(title.value, description.value,order.value, severity.value, status.value)\" [disabled]=\"updateForm.pristine || updateForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n      </div>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(todoService, router, route, snackBar, fb) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.fb = fb;
        this.todo = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: '',
            order: '',
            severity: '',
            status: ''
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.username = params.username;
            _this.backRoute = '/list/' + _this.username;
            _this.todoService.getTodoById(_this.id).subscribe(function (res) {
                _this.todo = res;
                _this.updateForm.get('title').setValue(_this.todo.title);
                _this.updateForm.get('description').setValue(_this.todo.description);
                _this.updateForm.get('order').setValue(_this.todo.order);
                _this.updateForm.get('severity').setValue(_this.todo.severity);
                _this.updateForm.get('status').setValue(_this.todo.status);
            });
        });
    };
    EditComponent.prototype.updateTodo = function (title, description, order, severity, status) {
        var _this = this;
        this.todoService.updateTodo(this.id, title, description, order, severity, status).subscribe(function () {
            _this.snackBar.open('Todo updated successfully', 'OK', {
                duration: 3000
            });
            _this.router.navigate(["/list/" + _this.username]);
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-form {\n    max-width: 90%;\n    margin: 0 auto;\n}\n\ninput {\n    border-bottom: 2px dashed rgb(75, 75, 75, 0.5);\n    outline: none;\n    border-radius: 0;\n    text-align: center;\n    background: none;\n    font-weight: 700;\n    font-family: 'Lato', georgia;\n    font-size: 25px;\n    color: rgb(75, 75, 75);\n    max-width: 90%;\n    padding: 1rem;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    box-sizing: border-box;\n    cursor: text;\n    margin: 10px;\n  }\n\ninput:required {\n    border-bottom: 2px dashed rgb(75, 75, 75, 0.5);\n  }\n\ninput:focus {\n    border-bottom: 2px dashed rgb(75, 75, 75);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n\ninput:required:valid {\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  }\n\ninput:required:invalid {\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n::-webkit-input-placeholder {\n    text-align: center;\n    color: rgb(75, 75, 75, 0.4);\n    font-style: italic;\n    font-weight: 400;\n  }\n\n:-ms-input-placeholder {\n    text-align: center;\n    color: rgba(255, 255, 255, 0.4);\n    font-style: italic;\n    font-weight: 400;\n  }\n\nlabel {\n    font-weight: 400;\n    color: rgb(75, 75, 75);\n  }\n\nbutton {\n      margin: 15px;\n      background: transparent;\n      border: 1px solid rgb(75, 75, 75);\n      color:rgb(75, 75, 75);\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      border-radius: 10px;\n  }\n\nbutton:disabled {\n    border: 1px solid rgb(75, 75, 75, 0.5);\n    color: rgba(75, 75, 75, 0.5);\n  }\n\nbutton:disabled:hover {\n      cursor: not-allowed;\n  }\n\nh4 {\n      color: white;\n      margin-top: 5px;\n       display: block;\n       opacity: 0.6;\n  }"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<h1> Welcome to your Todo App</h1>\n<div style=\"  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 1000px;\n  height: 500px;\"><br><br><br><br>\n<div style=\"border:2px solid rgba(75, 75, 75, 0.2); border-radius: 10px; padding: 10px; \nbackground-color: rgba(255, 255, 255, 0.5);\">\n    <form [formGroup]=\"homeForm\" class=\"home-form\">\n      <label for=\"username\">Enter your username:</label>\n      <input name=\"username\" placeholder=\"Username\" formControlName=\"username\" #username><br><br>\n      <button type=\"submit\" (click)=\"checkUser(username.value)\" [disabled]=\"homeForm.pristine || homeForm.invalid\" color=\"primary\">Go</button>\n      <button type=\"submit\" (click)=\"createNewUser(username.value)\" [disabled]=\"homeForm.pristine || homeForm.invalid\" color=\"primary\">Create new user</button>\n    </form>\n</div><br>\n<h4>(Click on Go if you're an existing user)</h4>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(todoService, fb, router, snackBar) {
        this.todoService = todoService;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.homeForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    HomeComponent.prototype.checkUser = function (username) {
        var _this = this;
        this.todoService
            .getUserByUsername(username) // we have user object
            .subscribe(function (data) {
            if (data[0]) {
                _this.router.navigate(['/list/' + username]);
            }
            else {
                _this.snackBar.open('User does not exist', 'OK', {
                    duration: 3000
                });
            }
        });
    };
    HomeComponent.prototype.createNewUser = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.todoService
                    .getUserByUsername(username) // we have user object
                    .subscribe(function (data) {
                    if (!data[0]) {
                        _this.createUser(username);
                    }
                    else {
                        _this.snackBar.open('User already exists', 'OK', {
                            duration: 3000
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.createUser = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoService.addUser(username).toPromise()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/list/' + username]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\nbutton {\n    margin: 10px;\n}\n\n.mat-table {\n    border: 1px solid white;\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n\n.mat-table td {\n    vertical-align: middle;\n    font-size: 15px;\n    line-height: 1.4;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    text-align: center;\n    padding-left: 24px;\n  }\n\n.mat-table th {\n    vertical-align: middle;\n    font-size: 17px;\n    line-height: 1.4;\n    border-bottom: 1px solid rgb(61, 60, 60, 0.4);\n    text-align: center;\n  }\n  \n"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n    <h2>Hi {{username}}</h2><br>\n    <button mat-raised-button color=\"primary\" routerLink=''>Home</button>\n    <button mat-raised-button color=\"primary\" routerLink='{{createRoute}}'>Create New Task</button>\n <br><br>\n    <div style=\"position: relative;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 1000px;\n    height: 500px;\">\n    <table mat-table *ngIf=\"todos.length == numOfTasks\" [dataSource]=\"todos\" >\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.title}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>Description</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"order\">\n        <th mat-header-cell *matHeaderCellDef>Order</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.order}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"severity\">\n        <th mat-header-cell *matHeaderCellDef>Severity</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.severity}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef>Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-button color=\"primary\" (click)=\"editTodo(element._id)\">Edit</button>\n          <button mat-button color=\"warn\" (click)=\"deleteTodo(element._id)\">Delete</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ListComponent = /** @class */ (function () {
    function ListComponent(todoService, router, route) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['title', 'description', 'order', 'severity', 'status', 'actions'];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params.username;
        });
        this.fetchUserByUsername();
    };
    ListComponent.prototype.fetchUserByUsername = function () {
        var _this = this;
        this.todos = [];
        this.todoService
            .getUserByUsername(this.username) // we have user object
            .subscribe(function (data) {
            _this.user = data;
            _this.fetchTodosOfUser();
        });
    };
    ListComponent.prototype.fetchTodosOfUser = function () {
        var _this = this;
        this.todoids = this.user[0].tasks;
        this.numOfTasks = this.todoids.length;
        this.userId = this.user[0]._id;
        this.createRoute = '/create/' + this.userId + '/' + this.username;
        this.todoids.forEach(function (task) {
            _this.todoService
                .getTodoById(task).subscribe(function (data) { _this.todos.push(data); });
        });
    };
    ListComponent.prototype.editTodo = function (id) {
        this.router.navigate(["/edit/" + this.username + "/" + id]);
    };
    ListComponent.prototype.deleteTodo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoService.deleteTodo(id, this.userId)
                            .toPromise()];
                    case 1:
                        _a.sent();
                        this.fetchUserByUsername();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    // Get user by username
    TodoService.prototype.getUserByUsername = function (username) {
        return this.http.get(this.uri + "/users/" + username);
    };
    TodoService.prototype.getTodoById = function (id) {
        return this.http.get(this.uri + "/todos/" + id);
    };
    TodoService.prototype.addTodo = function (title, description, order, severity, userid) {
        var todo = {
            title: title,
            description: description,
            order: order,
            severity: severity,
            userid: userid
        };
        return this.http.post(this.uri + "/addtodo", todo);
    };
    TodoService.prototype.updateTodo = function (id, title, description, order, severity, status) {
        var todo = {
            title: title,
            description: description,
            order: order,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/todos/update/" + id, todo);
    };
    TodoService.prototype.deleteTodo = function (id, userid) {
        return this.http.get(this.uri + "/todos/delete/" + id + "/" + userid);
    };
    TodoService.prototype.addUser = function (username) {
        var user = {
            username: username
        };
        return this.http.post(this.uri + "/users/add/", user);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
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

module.exports = __webpack_require__(/*! /Users/ankitjain/Desktop/Affable/Affable-Assignment/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map