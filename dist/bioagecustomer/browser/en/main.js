globalThis.$localize=Object.assign(globalThis.$localize || {},{locale:"en"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(self["webpackChunkbioagecustomer"] = self["webpackChunkbioagecustomer"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 9142)).then(m => m.HomeModule)
}, {
  path: 'science',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_science_science_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/science/science.module */ 1378)).then(m => m.ScienceModule)
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

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/lang-switcher-modal/lang-switcher-modal.component */ 1382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/user-locale-preference.service */ 4333);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 9061);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 1248);









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

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 9061);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 1248);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 6605);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7019);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _modals_lang_switcher_modal_lang_switcher_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/lang-switcher-modal/lang-switcher-modal.component */ 1382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
















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

/***/ 1248:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

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
        i18n_0 = " Built by Toku \xA9 " + "\uFFFD0\uFFFD" + " | " + "\uFFFD#3\uFFFD" + "www.tokueyes.com" + "\uFFFD/#3\uFFFD" + "";
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

/***/ 9061:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 6605);



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
        i18n_0 = "BioAge Logo";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4550958265168690830$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("Logo");
        i18n_2 = MSG_EXTERNAL_4550958265168690830$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_3;
      } else {
        i18n_2 = "Logo";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2005251964617532187$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_5 = goog.getMsg("The Science");
        i18n_4 = MSG_EXTERNAL_2005251964617532187$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_5;
      } else {
        i18n_4 = "The Science";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_840692109692540367$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_7 = goog.getMsg("Sign In");
        i18n_6 = MSG_EXTERNAL_840692109692540367$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_7;
      } else {
        i18n_6 = "Sign In";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8187724038009787541$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_9 = goog.getMsg("user icon for login");
        i18n_8 = MSG_EXTERNAL_8187724038009787541$$SRC_APP_LAYOUT_HEADER_HEADER_COMPONENT_TS_9;
      } else {
        i18n_8 = "user icon for login";
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

/***/ 6166:
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

/***/ 1382:
/*!*****************************************************************************!*\
  !*** ./src/app/modals/lang-switcher-modal/lang-switcher-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangSwitcherModalComponent: () => (/* binding */ LangSwitcherModalComponent)
/* harmony export */ });
/* harmony import */ var _country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list */ 6166);
/* harmony import */ var src_app_shared_services_user_locale_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-locale-preference.service */ 4333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






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
        i18n_0 = "Welcome to BioAge";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7002469500845398805$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_3 = goog.getMsg("Select Country");
        i18n_2 = MSG_EXTERNAL_7002469500845398805$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_3;
      } else {
        i18n_2 = "Select Country";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9178182467454450952$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_5 = goog.getMsg("Confirm");
        i18n_4 = MSG_EXTERNAL_9178182467454450952$$SRC_APP_MODALS_LANG_SWITCHER_MODAL_LANG_SWITCHER_MODAL_COMPONENT_TS_5;
      } else {
        i18n_4 = "Confirm";
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

/***/ 4333:
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

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


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

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9334:
/*!****************************************!*\
  !*** @angular/localize/init (ignored) ***!
  \****************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9334), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map