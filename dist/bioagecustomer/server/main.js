/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 20650);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 35162);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 49174);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 97014);







// The Express app is exported so that it can be used by serverless Functions.
function app(lang) {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), `dist/bioagecustomer/browser/${lang}`);
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  const appFr = app('es');
  const appEn = app('en');
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  server.use('/es', appFr);
  server.use('/en', appEn);
  server.use('', appEn);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ 253).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 79253)).then(m => m.HomeModule)
}, {
  path: 'science',
  loadChildren: () => __webpack_require__.e(/*! import() */ 928).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/science/science.module */ 14928)).then(m => m.ScienceModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/lang-switcher-modal/lang-switcher-modal.component */ 47919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/user-locale-preference.service */ 58213);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 78533);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 6938);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 70774);









class AppComponent {
  constructor(platformId, modalService, route) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.route = route;
    this.title = 'bioagecustomer';
    this.isBrowser = false;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.handleLangSwitcher();
    }
  }
  handleLangSwitcher() {
    var savedData = _shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__.UserLocaleUtil.getUserLocalPreference();
    if (!savedData) {
      this.openModalWithComponent();
    } else {
      var langWithDomain = location.host + '/' + savedData.lang;
      if (!location.href.includes(langWithDomain)) {
        this.openModalWithComponent();
      }
    }
  }
  openModalWithComponent() {
    const config = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    };
    this.bsModalRef = this.modalService.show(_modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_0__.LangSwitcherModalComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 11838);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 97378);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 6938);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 70774);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 50295);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 34968);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 44415);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 78533);
/* harmony import */ var _modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/lang-switcher-modal/lang-switcher-modal.component */ 47919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 59936);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__.CollapseModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__.BsDropdownModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_5__.LangSwitcherModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__.CollapseModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__.BsDropdownModule]
  });
})();

/***/ }),

/***/ 21463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 97014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 50041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 70774:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class FooterComponent {
  constructor() {
    this.year = new Date().getFullYear();
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 4,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3927801711686894290$$SRC_APP_LAYOUT_FOOTER_FOOTER_COMPONENT_TS_1 = goog.getMsg(" Built by Toku \u00A9 {$interpolation} | {$startLink}www.tokueyes.com{$closeLink}", {
          "interpolation": "\uFFFD0\uFFFD",
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ year }}",
            "startLink": "<a href=\"www.tokueyes.com\">",
            "closeLink": "</a>"
          }
        });
        i18n_0 = MSG_EXTERNAL_3927801711686894290$$SRC_APP_LAYOUT_FOOTER_FOOTER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize` Built by Toku © ${"\uFFFD0\uFFFD"}:INTERPOLATION: | ${"\uFFFD#3\uFFFD"}:START_LINK:www.tokueyes.com${"\uFFFD/#3\uFFFD"}:CLOSE_LINK:`;
      }
      return [[1, "container"], [1, "text-center"], i18n_0, ["href", "www.tokueyes.com"]];
    },
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
      }
    },
    styles: ["footer.container[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\nfooter.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media screen and (max-width: 575px) {\n  footer.container[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  footer.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLFNBQUE7QUFFSjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0VBQUU7SUFDRSxTQUFBO0VBRUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImZvb3Rlci5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgZm9vdGVyLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6938:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 34968);



class HeaderComponent {
  constructor() {
    this.isCollapsed = true;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 19,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8797010732893355148$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_1 = goog.getMsg("BioAge Logo");
        i18n_0 = MSG_EXTERNAL_8797010732893355148$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`BioAge Logo`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4550958265168690830$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("Logo");
        i18n_2 = MSG_EXTERNAL_4550958265168690830$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`Logo`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2005251964617532187$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_5 = goog.getMsg("The Science");
        i18n_4 = MSG_EXTERNAL_2005251964617532187$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`The Science`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_840692109692540367$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_7 = goog.getMsg("Sign In");
        i18n_6 = MSG_EXTERNAL_840692109692540367$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`Sign In`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8187724038009787541$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_9 = goog.getMsg("user icon for login");
        i18n_8 = MSG_EXTERNAL_8187724038009787541$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`user icon for login`;
      }
      return [[1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/Logo.png", "title", i18n_0, "alt", i18n_2], ["type", "button", "data-bs-toggle", "collapse", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["src", "assets/img/icons/menu-toggler-icon.png", "alt", "toggler icon"], [1, "collapse", "navbar-collapse", 3, "collapse"], [1, "me-auto"], [1, "navbar-nav", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/science", "routerLinkActive", "router-link-active", 1, "nav-link"], i18n_4, ["aria-current", "page", "href", "#", 1, "nav-link"], i18n_6, ["src", "assets/img/icons/user-icon.png", "alt", i18n_8]];
    },
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9)(10, "li", 10)(11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10)(14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10)(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective],
    styles: [".navbar-brand[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.nav-item[_ngcontent-%COMP%]:not(:last-child) {\n  line-height: 40px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n\n@media screen and (max-width: 575px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    width: 152px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUlGOztBQURBO0VBQ0U7SUFDRSxZQUFBO0VBSUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gIHdpZHRoOiAxNjBweCA7XHJcbn1cclxuLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgd2lkdGg6IDE1MnB4IDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 71344:
/*!************************************************************!*\
  !*** ./src/app/modals/lang-switcher-modal/country-list.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryList: () => (/* binding */ CountryList)
/* harmony export */ });
const CountryList = [{
  name: 'Afghanistan',
  code: 'AF'
}, {
  name: 'Åland Islands',
  code: 'AX'
}, {
  name: 'Albania',
  code: 'AL'
}, {
  name: 'Algeria',
  code: 'DZ'
}, {
  name: 'American Samoa',
  code: 'AS'
}, {
  name: 'AndorrA',
  code: 'AD'
}, {
  name: 'Angola',
  code: 'AO'
}, {
  name: 'Anguilla',
  code: 'AI'
}, {
  name: 'Antarctica',
  code: 'AQ'
}, {
  name: 'Antigua and Barbuda',
  code: 'AG'
}, {
  name: 'Argentina',
  code: 'AR'
}, {
  name: 'Armenia',
  code: 'AM'
}, {
  name: 'Aruba',
  code: 'AW'
}, {
  name: 'Australia',
  code: 'AU'
}, {
  name: 'Austria',
  code: 'AT'
}, {
  name: 'Azerbaijan',
  code: 'AZ'
}, {
  name: 'Bahamas',
  code: 'BS'
}, {
  name: 'Bahrain',
  code: 'BH'
}, {
  name: 'Bangladesh',
  code: 'BD'
}, {
  name: 'Barbados',
  code: 'BB'
}, {
  name: 'Belarus',
  code: 'BY'
}, {
  name: 'Belgium',
  code: 'BE'
}, {
  name: 'Belize',
  code: 'BZ'
}, {
  name: 'Benin',
  code: 'BJ'
}, {
  name: 'Bermuda',
  code: 'BM'
}, {
  name: 'Bhutan',
  code: 'BT'
}, {
  name: 'Bolivia',
  code: 'BO'
}, {
  name: 'Bosnia and Herzegovina',
  code: 'BA'
}, {
  name: 'Botswana',
  code: 'BW'
}, {
  name: 'Bouvet Island',
  code: 'BV'
}, {
  name: 'Brazil',
  code: 'BR'
}, {
  name: 'British Indian Ocean Territory',
  code: 'IO'
}, {
  name: 'Brunei Darussalam',
  code: 'BN'
}, {
  name: 'Bulgaria',
  code: 'BG'
}, {
  name: 'Burkina Faso',
  code: 'BF'
}, {
  name: 'Burundi',
  code: 'BI'
}, {
  name: 'Cambodia',
  code: 'KH'
}, {
  name: 'Cameroon',
  code: 'CM'
}, {
  name: 'Canada',
  code: 'CA'
}, {
  name: 'Cape Verde',
  code: 'CV'
}, {
  name: 'Cayman Islands',
  code: 'KY'
}, {
  name: 'Central African Republic',
  code: 'CF'
}, {
  name: 'Chad',
  code: 'TD'
}, {
  name: 'Chile',
  code: 'CL'
}, {
  name: 'China',
  code: 'CN'
}, {
  name: 'Christmas Island',
  code: 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  code: 'CC'
}, {
  name: 'Colombia',
  code: 'CO'
}, {
  name: 'Comoros',
  code: 'KM'
}, {
  name: 'Congo',
  code: 'CG'
}, {
  name: 'Congo, The Democratic Republic of the',
  code: 'CD'
}, {
  name: 'Cook Islands',
  code: 'CK'
}, {
  name: 'Costa Rica',
  code: 'CR'
}, {
  name: "Cote D'Ivoire",
  code: 'CI'
}, {
  name: 'Croatia',
  code: 'HR'
}, {
  name: 'Cuba',
  code: 'CU'
}, {
  name: 'Cyprus',
  code: 'CY'
}, {
  name: 'Czech Republic',
  code: 'CZ'
}, {
  name: 'Denmark',
  code: 'DK'
}, {
  name: 'Djibouti',
  code: 'DJ'
}, {
  name: 'Dominica',
  code: 'DM'
}, {
  name: 'Dominican Republic',
  code: 'DO'
}, {
  name: 'Ecuador',
  code: 'EC'
}, {
  name: 'Egypt',
  code: 'EG'
}, {
  name: 'El Salvador',
  code: 'SV'
}, {
  name: 'Equatorial Guinea',
  code: 'GQ'
}, {
  name: 'Eritrea',
  code: 'ER'
}, {
  name: 'Estonia',
  code: 'EE'
}, {
  name: 'Ethiopia',
  code: 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  code: 'FK'
}, {
  name: 'Faroe Islands',
  code: 'FO'
}, {
  name: 'Fiji',
  code: 'FJ'
}, {
  name: 'Finland',
  code: 'FI'
}, {
  name: 'France',
  code: 'FR'
}, {
  name: 'French Guiana',
  code: 'GF'
}, {
  name: 'French Polynesia',
  code: 'PF'
}, {
  name: 'French Southern Territories',
  code: 'TF'
}, {
  name: 'Gabon',
  code: 'GA'
}, {
  name: 'Gambia',
  code: 'GM'
}, {
  name: 'Georgia',
  code: 'GE'
}, {
  name: 'Germany',
  code: 'DE'
}, {
  name: 'Ghana',
  code: 'GH'
}, {
  name: 'Gibraltar',
  code: 'GI'
}, {
  name: 'Greece',
  code: 'GR'
}, {
  name: 'Greenland',
  code: 'GL'
}, {
  name: 'Grenada',
  code: 'GD'
}, {
  name: 'Guadeloupe',
  code: 'GP'
}, {
  name: 'Guam',
  code: 'GU'
}, {
  name: 'Guatemala',
  code: 'GT'
}, {
  name: 'Guernsey',
  code: 'GG'
}, {
  name: 'Guinea',
  code: 'GN'
}, {
  name: 'Guinea-Bissau',
  code: 'GW'
}, {
  name: 'Guyana',
  code: 'GY'
}, {
  name: 'Haiti',
  code: 'HT'
}, {
  name: 'Heard Island and Mcdonald Islands',
  code: 'HM'
}, {
  name: 'Holy See (Vatican City State)',
  code: 'VA'
}, {
  name: 'Honduras',
  code: 'HN'
}, {
  name: 'Hong Kong',
  code: 'HK'
}, {
  name: 'Hungary',
  code: 'HU'
}, {
  name: 'Iceland',
  code: 'IS'
}, {
  name: 'India',
  code: 'IN'
}, {
  name: 'Indonesia',
  code: 'ID'
}, {
  name: 'Iran, Islamic Republic Of',
  code: 'IR'
}, {
  name: 'Iraq',
  code: 'IQ'
}, {
  name: 'Ireland',
  code: 'IE'
}, {
  name: 'Isle of Man',
  code: 'IM'
}, {
  name: 'Israel',
  code: 'IL'
}, {
  name: 'Italy',
  code: 'IT'
}, {
  name: 'Jamaica',
  code: 'JM'
}, {
  name: 'Japan',
  code: 'JP'
}, {
  name: 'Jersey',
  code: 'JE'
}, {
  name: 'Jordan',
  code: 'JO'
}, {
  name: 'Kazakhstan',
  code: 'KZ'
}, {
  name: 'Kenya',
  code: 'KE'
}, {
  name: 'Kiribati',
  code: 'KI'
}, {
  name: "Korea, Democratic People'S Republic of",
  code: 'KP'
}, {
  name: 'Korea, Republic of',
  code: 'KR'
}, {
  name: 'Kuwait',
  code: 'KW'
}, {
  name: 'Kyrgyzstan',
  code: 'KG'
}, {
  name: "Lao People'S Democratic Republic",
  code: 'LA'
}, {
  name: 'Latvia',
  code: 'LV'
}, {
  name: 'Lebanon',
  code: 'LB'
}, {
  name: 'Lesotho',
  code: 'LS'
}, {
  name: 'Liberia',
  code: 'LR'
}, {
  name: 'Libyan Arab Jamahiriya',
  code: 'LY'
}, {
  name: 'Liechtenstein',
  code: 'LI'
}, {
  name: 'Lithuania',
  code: 'LT'
}, {
  name: 'Luxembourg',
  code: 'LU'
}, {
  name: 'Macao',
  code: 'MO'
}, {
  name: 'Macedonia, The Former Yugoslav Republic of',
  code: 'MK'
}, {
  name: 'Madagascar',
  code: 'MG'
}, {
  name: 'Malawi',
  code: 'MW'
}, {
  name: 'Malaysia',
  code: 'MY'
}, {
  name: 'Maldives',
  code: 'MV'
}, {
  name: 'Mali',
  code: 'ML'
}, {
  name: 'Malta',
  code: 'MT'
}, {
  name: 'Marshall Islands',
  code: 'MH'
}, {
  name: 'Martinique',
  code: 'MQ'
}, {
  name: 'Mauritania',
  code: 'MR'
}, {
  name: 'Mauritius',
  code: 'MU'
}, {
  name: 'Mayotte',
  code: 'YT'
}, {
  name: 'Mexico',
  code: 'MX'
}, {
  name: 'Micronesia, Federated States of',
  code: 'FM'
}, {
  name: 'Moldova, Republic of',
  code: 'MD'
}, {
  name: 'Monaco',
  code: 'MC'
}, {
  name: 'Mongolia',
  code: 'MN'
}, {
  name: 'Montserrat',
  code: 'MS'
}, {
  name: 'Morocco',
  code: 'MA'
}, {
  name: 'Mozambique',
  code: 'MZ'
}, {
  name: 'Myanmar',
  code: 'MM'
}, {
  name: 'Namibia',
  code: 'NA'
}, {
  name: 'Nauru',
  code: 'NR'
}, {
  name: 'Nepal',
  code: 'NP'
}, {
  name: 'Netherlands',
  code: 'NL'
}, {
  name: 'Netherlands Antilles',
  code: 'AN'
}, {
  name: 'New Caledonia',
  code: 'NC'
}, {
  name: 'New Zealand',
  code: 'NZ'
}, {
  name: 'Nicaragua',
  code: 'NI'
}, {
  name: 'Niger',
  code: 'NE'
}, {
  name: 'Nigeria',
  code: 'NG'
}, {
  name: 'Niue',
  code: 'NU'
}, {
  name: 'Norfolk Island',
  code: 'NF'
}, {
  name: 'Northern Mariana Islands',
  code: 'MP'
}, {
  name: 'Norway',
  code: 'NO'
}, {
  name: 'Oman',
  code: 'OM'
}, {
  name: 'Pakistan',
  code: 'PK'
}, {
  name: 'Palau',
  code: 'PW'
}, {
  name: 'Palestinian Territory, Occupied',
  code: 'PS'
}, {
  name: 'Panama',
  code: 'PA'
}, {
  name: 'Papua New Guinea',
  code: 'PG'
}, {
  name: 'Paraguay',
  code: 'PY'
}, {
  name: 'Peru',
  code: 'PE'
}, {
  name: 'Philippines',
  code: 'PH'
}, {
  name: 'Pitcairn',
  code: 'PN'
}, {
  name: 'Poland',
  code: 'PL'
}, {
  name: 'Portugal',
  code: 'PT'
}, {
  name: 'Puerto Rico',
  code: 'PR'
}, {
  name: 'Qatar',
  code: 'QA'
}, {
  name: 'Reunion',
  code: 'RE'
}, {
  name: 'Romania',
  code: 'RO'
}, {
  name: 'Russian Federation',
  code: 'RU'
}, {
  name: 'RWANDA',
  code: 'RW'
}, {
  name: 'Saint Helena',
  code: 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  code: 'KN'
}, {
  name: 'Saint Lucia',
  code: 'LC'
}, {
  name: 'Saint Pierre and Miquelon',
  code: 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  code: 'VC'
}, {
  name: 'Samoa',
  code: 'WS'
}, {
  name: 'San Marino',
  code: 'SM'
}, {
  name: 'Sao Tome and Principe',
  code: 'ST'
}, {
  name: 'Saudi Arabia',
  code: 'SA'
}, {
  name: 'Senegal',
  code: 'SN'
}, {
  name: 'Serbia and Montenegro',
  code: 'CS'
}, {
  name: 'Seychelles',
  code: 'SC'
}, {
  name: 'Sierra Leone',
  code: 'SL'
}, {
  name: 'Singapore',
  code: 'SG'
}, {
  name: 'Slovakia',
  code: 'SK'
}, {
  name: 'Slovenia',
  code: 'SI'
}, {
  name: 'Solomon Islands',
  code: 'SB'
}, {
  name: 'Somalia',
  code: 'SO'
}, {
  name: 'South Africa',
  code: 'ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  code: 'GS'
}, {
  name: 'Spain',
  code: 'ES'
}, {
  name: 'Sri Lanka',
  code: 'LK'
}, {
  name: 'Sudan',
  code: 'SD'
}, {
  name: 'Suriname',
  code: 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  code: 'SJ'
}, {
  name: 'Swaziland',
  code: 'SZ'
}, {
  name: 'Sweden',
  code: 'SE'
}, {
  name: 'Switzerland',
  code: 'CH'
}, {
  name: 'Syrian Arab Republic',
  code: 'SY'
}, {
  name: 'Taiwan, Province of China',
  code: 'TW'
}, {
  name: 'Tajikistan',
  code: 'TJ'
}, {
  name: 'Tanzania, United Republic of',
  code: 'TZ'
}, {
  name: 'Thailand',
  code: 'TH'
}, {
  name: 'Timor-Leste',
  code: 'TL'
}, {
  name: 'Togo',
  code: 'TG'
}, {
  name: 'Tokelau',
  code: 'TK'
}, {
  name: 'Tonga',
  code: 'TO'
}, {
  name: 'Trinidad and Tobago',
  code: 'TT'
}, {
  name: 'Tunisia',
  code: 'TN'
}, {
  name: 'Turkey',
  code: 'TR'
}, {
  name: 'Turkmenistan',
  code: 'TM'
}, {
  name: 'Turks and Caicos Islands',
  code: 'TC'
}, {
  name: 'Tuvalu',
  code: 'TV'
}, {
  name: 'Uganda',
  code: 'UG'
}, {
  name: 'Ukraine',
  code: 'UA'
}, {
  name: 'United Arab Emirates',
  code: 'AE'
}, {
  name: 'United Kingdom',
  code: 'GB'
}, {
  name: 'United States',
  code: 'US'
}, {
  name: 'United States Minor Outlying Islands',
  code: 'UM'
}, {
  name: 'Uruguay',
  code: 'UY'
}, {
  name: 'Uzbekistan',
  code: 'UZ'
}, {
  name: 'Vanuatu',
  code: 'VU'
}, {
  name: 'Venezuela',
  code: 'VE'
}, {
  name: 'Viet Nam',
  code: 'VN'
}, {
  name: 'Virgin Islands, British',
  code: 'VG'
}, {
  name: 'Virgin Islands, U.S.',
  code: 'VI'
}, {
  name: 'Wallis and Futuna',
  code: 'WF'
}, {
  name: 'Western Sahara',
  code: 'EH'
}, {
  name: 'Yemen',
  code: 'YE'
}, {
  name: 'Zambia',
  code: 'ZM'
}, {
  name: 'Zimbabwe',
  code: 'ZW'
}];

/***/ }),

/***/ 47919:
/*!*****************************************************************************!*\
  !*** ./src/app/modals/lang-switcher-modal/lang-switcher-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangSwitcherModalComponent: () => (/* binding */ LangSwitcherModalComponent)
/* harmony export */ });
/* harmony import */ var _country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list */ 71344);
/* harmony import */ var src_app_shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-locale-preference.service */ 58213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 78533);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8810);






function LangSwitcherModalComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r5.name, " ");
  }
}
function LangSwitcherModalComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 19);
  }
}
function LangSwitcherModalComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
  }
}
function LangSwitcherModalComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 19);
  }
}
function LangSwitcherModalComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
  }
}
const _c6 = function (a0) {
  return {
    "gray-text": a0
  };
};
class LangSwitcherModalComponent {
  constructor(bsModalRef) {
    this.bsModalRef = bsModalRef;
    this.countryList = _country_list__WEBPACK_IMPORTED_MODULE_0__.CountryList;
    this.selectedCountry = 'NZ';
    this.selectedLang = 'en';
  }
  ngOnInit() {
    let preference = src_app_shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__.UserLocaleUtil.getUserLocalPreference();
    this.selectedLang = preference ? preference.lang : 'en';
    this.selectedCountry = preference ? preference.countryCode : 'NZ';
  }
  onLangSelect(lang) {
    this.selectedLang = lang;
  }
  onConfirm() {
    let data = {
      countryCode: this.selectedCountry,
      lang: this.selectedLang
    };
    src_app_shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__.UserLocaleUtil.updatePreference(data);
    window.location.href = '/' + this.selectedLang;
  }
  static #_ = this.ɵfac = function LangSwitcherModalComponent_Factory(t) {
    return new (t || LangSwitcherModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LangSwitcherModalComponent,
    selectors: [["app-lang-switcher-modal"]],
    decls: 27,
    vars: 12,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5899257696777629698$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_1 = goog.getMsg("Welcome to BioAge");
        i18n_0 = MSG_EXTERNAL_5899257696777629698$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`Welcome to BioAge`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7002469500845398805$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_3 = goog.getMsg("Select Country");
        i18n_2 = MSG_EXTERNAL_7002469500845398805$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`Select Country`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9178182467454450952$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_5 = goog.getMsg("Confirm");
        i18n_4 = MSG_EXTERNAL_9178182467454450952$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`Confirm`;
      }
      return [[1, "modal-wrapper"], [1, "content"], [1, "img-container"], ["src", "assets/img/earth.png", "alt", ""], i18n_0, [1, "form-group", "select"], ["for", "countrySelect", 1, "form-label"], i18n_2, ["name", "country", "id", "countrySelect", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "radio"], [1, "wrapper", 3, "click"], [1, "icon-container"], ["src", "assets/img/icons/checked.png", "alt", "", 4, "ngIf"], ["src", "assets/img/icons/unchecked.png", "alt", "", 4, "ngIf"], [3, "ngClass"], [1, "btn", "btn-primary", "extended", 3, "click"], i18n_4, [3, "value"], ["src", "assets/img/icons/checked.png", "alt", ""], ["src", "assets/img/icons/unchecked.png", "alt", ""]];
    },
    template: function LangSwitcherModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form")(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LangSwitcherModalComponent_Template_select_ngModelChange_10_listener($event) {
          return ctx.selectedCountry = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LangSwitcherModalComponent_option_11_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LangSwitcherModalComponent_Template_div_click_13_listener() {
          return ctx.onLangSelect("en");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LangSwitcherModalComponent_img_15_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LangSwitcherModalComponent_img_16_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LangSwitcherModalComponent_Template_div_click_19_listener() {
          return ctx.onLangSelect("es");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LangSwitcherModalComponent_img_21_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LangSwitcherModalComponent_img_22_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LangSwitcherModalComponent_Template_button_click_25_listener() {
          return ctx.onConfirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](26, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedLang == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedLang != "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c6, ctx.selectedLang != "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedLang == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedLang != "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c6, ctx.selectedLang != "es"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: [".modal-content {\n  background-color: transparent;\n  border: none;\n}\n\n.modal-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 2rem auto;\n  width: 664px;\n  height: 631px;\n  padding: 20px;\n  border-radius: 20px;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  height: 100%;\n  width: 100%;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 163px;\n  margin: 0 auto;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 17px;\n  color: #052460;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 368px;\n  height: 46px;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #575757;\n  font-size: 16px;\n  font-weight: 400;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  margin: 1rem 0.5rem;\n  width: 128px;\n  height: 44px;\n  padding: 8px 10px;\n  border: 1px solid var(--color-border);\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 21px;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.extended[_ngcontent-%COMP%] {\n  padding: 10px 100px;\n}\n\n.gray-text[_ngcontent-%COMP%] {\n  color: #979797;\n}\n\n@media screen and (max-width: 991px) {\n  .modal-wrapper[_ngcontent-%COMP%] {\n    width: 531px;\n    height: 511px;\n    padding: 15px;\n    border-radius: 15px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    border-radius: 15px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 128px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n    font-size: 38px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.select[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #052460;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 348px;\n    height: 40px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    margin: 1rem 0.5rem;\n    width: 112px;\n    height: 36px;\n    padding: 8px 10px;\n    font-size: 14px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 18px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .modal-wrapper[_ngcontent-%COMP%] {\n    width: 331px;\n    height: 351px;\n    padding: 10px;\n    border-radius: 10px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    border-radius: 10px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 81px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin: 1rem 0;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.select[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 11px;\n    color: #052460;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 238px;\n    height: 30px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    margin: 0.75rem 0.5rem;\n    width: 83px;\n    height: 28px;\n    padding: 8px 10px;\n    font-size: 10px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 13px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.radio[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n  .modal-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.extended[_ngcontent-%COMP%] {\n    padding: 10px 60px;\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kYWxzL2xhbmctc3dpdGNoZXItbW9kYWwvbGFuZy1zd2l0Y2hlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBSUk7RUFDRSxjQUFBO0FBRk47QUFPUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTFY7QUFPUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMVjtBQU9RO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxWO0FBT1E7O0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxWO0FBUVE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFOVjtBQU9VO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLHFDQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUFo7QUFTWTtFQUNFLG9CQUFBO0FBUGQ7QUFRYztFQUNFLFdBQUE7RUFDQSxlQUFBO0FBTmhCO0FBVVk7RUFDRSxlQUFBO0FBUmQ7QUFlSTtFQUNFLG1CQUFBO0FBYk47O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQWtCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUFmRjtFQWdCRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFkSjtFQWlCTTtJQUNFLGdCQUFBO0VBZlI7RUFtQkk7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQWpCTjtFQXNCUTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBcEJWO0VBc0JRO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFwQlY7RUFzQlE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBcEJWO0VBdUJROztJQUVFLGVBQUE7RUFyQlY7RUF5QlU7SUFDRSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFFQSxlQUFBO0VBeEJaO0VBMEJZO0lBQ0Usb0JBQUE7RUF4QmQ7RUF5QmM7SUFDRSxlQUFBO0VBdkJoQjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQS9CRjtFQWdDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUE5Qko7RUFpQ007SUFDRSxlQUFBO0VBL0JSO0VBbUNJO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFqQ047RUFzQ1E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQXBDVjtFQXNDUTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBcENWO0VBc0NRO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQXBDVjtFQXVDUTs7SUFFRSxlQUFBO0VBckNWO0VBeUNVO0lBQ0Usc0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBRUEsZUFBQTtFQXhDWjtFQTBDWTtJQUNFLG9CQUFBO0VBeENkO0VBeUNjO0lBQ0UsZUFBQTtFQXZDaEI7RUEyQ1k7SUFDRSxlQUFBO0VBekNkO0VBZ0RJO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBOUNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgd2lkdGg6IDY2NHB4O1xyXG4gIGhlaWdodDogNjMxcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2M3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICYuc2VsZWN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzA1MjQ2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNjhweDtcclxuICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzU3NTc1NztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJhZGlvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uZXh0ZW5kZWQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdyYXktdGV4dCB7XHJcbiAgY29sb3I6ICM5Nzk3OTc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDUzMXB4O1xyXG4gICAgaGVpZ2h0OiA1MTFweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgJi5zZWxlY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzA1MjQ2MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM0OHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucmFkaW8ge1xyXG4gICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEycHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMzMXB4O1xyXG4gICAgaGVpZ2h0OiAzNTFweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAmLnNlbGVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDUyNDYwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjM4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5yYWRpbyB7XHJcbiAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAuNzVyZW0gMC41cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4M3B4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbi5leHRlbmRlZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 58213:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/user-locale-preference.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserLocaleUtil: () => (/* binding */ UserLocaleUtil)
/* harmony export */ });
class UserLocaleUtil {
  static #_ = this.key = 'user-locale-preference';
  static #_2 = this.userLocalPreference = null;
  static updatePreference(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
    this.userLocalPreference = data;
  }
  static getUserLocalPreference() {
    var data = localStorage.getItem(this.key);
    if (data) {
      this.userLocalPreference = JSON.parse(data);
      return this.userLocalPreference;
    }
    return null;
  }
}

/***/ }),

/***/ 50295:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);


class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 21463);


/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(43507)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map