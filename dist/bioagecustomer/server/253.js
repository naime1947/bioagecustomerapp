"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 62860:
/*!**************************************************!*\
  !*** ./src/app/pages/home/home-routng.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 13783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 13783:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 108,
    vars: 0,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4527815078978179411$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_1 = goog.getMsg(" Your {$startTagSpan}eyes{$closeTagSpan} can reveal how fast or slow your body is aging. ", {
          "startTagSpan": "\uFFFD#4\uFFFD",
          "closeTagSpan": "\uFFFD/#4\uFFFD"
        }, {
          original_code: {
            "startTagSpan": "<span>",
            "closeTagSpan": "</span>"
          }
        });
        i18n_0 = MSG_EXTERNAL_4527815078978179411$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize` Your ${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:eyes${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN: can reveal how fast or slow your body is aging. `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8548680332759231964$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_3 = goog.getMsg("bioage banner phone image");
        i18n_2 = MSG_EXTERNAL_8548680332759231964$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`bioage banner phone image`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6946475044067864092$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_5 = goog.getMsg("An eye image with");
        i18n_4 = MSG_EXTERNAL_6946475044067864092$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`An eye image with`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6647443805025693206$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_7 = goog.getMsg(" The eye is the only transparent part of the body, where you can see the blood vessels and nerves directly. ");
        i18n_6 = MSG_EXTERNAL_6647443805025693206$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize` The eye is the only transparent part of the body, where you can see the blood vessels and nerves directly. `;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1494718441046343771$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_9 = goog.getMsg("Accessible health screening through the eyes");
        i18n_8 = MSG_EXTERNAL_1494718441046343771$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`Accessible health screening through the eyes`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8958888248628890480$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_11 = goog.getMsg("An eye image with mark");
        i18n_10 = MSG_EXTERNAL_8958888248628890480$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`An eye image with mark`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6565933567820782492$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_13 = goog.getMsg("Your body\u2019s biomarkers are visible in your eye");
        i18n_12 = MSG_EXTERNAL_6565933567820782492$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_13;
      } else {
        i18n_12 = $localize`Your body’s biomarkers are visible in your eye`;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_785939898965844665$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_15 = goog.getMsg("1. Blood vessels");
        i18n_14 = MSG_EXTERNAL_785939898965844665$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_15;
      } else {
        i18n_14 = $localize`1. Blood vessels`;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6149453766676176994$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_17 = goog.getMsg("Provides an estimate of your cardiovascular health");
        i18n_16 = MSG_EXTERNAL_6149453766676176994$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_17;
      } else {
        i18n_16 = $localize`Provides an estimate of your cardiovascular health`;
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7972258312558832604$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_19 = goog.getMsg("2. Nerve");
        i18n_18 = MSG_EXTERNAL_7972258312558832604$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_19;
      } else {
        i18n_18 = $localize`2. Nerve`;
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7977251238168125830$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_21 = goog.getMsg("Provides insight to your neurological health");
        i18n_20 = MSG_EXTERNAL_7977251238168125830$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_21;
      } else {
        i18n_20 = $localize`Provides insight to your neurological health`;
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_512093974094212755$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_23 = goog.getMsg("3. Macula");
        i18n_22 = MSG_EXTERNAL_512093974094212755$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_23;
      } else {
        i18n_22 = $localize`3. Macula`;
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9173993525827898574$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_25 = goog.getMsg("Helps estimate rate of ageing and inflammatory health");
        i18n_24 = MSG_EXTERNAL_9173993525827898574$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_25;
      } else {
        i18n_24 = $localize`Helps estimate rate of ageing and inflammatory health`;
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1054065584341983086$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_27 = goog.getMsg("4. Image clarity");
        i18n_26 = MSG_EXTERNAL_1054065584341983086$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_27;
      } else {
        i18n_26 = $localize`4. Image clarity`;
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8085550278286896448$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_29 = goog.getMsg("Provides insight to the rate at which your lens is ageing");
        i18n_28 = MSG_EXTERNAL_8085550278286896448$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_29;
      } else {
        i18n_28 = $localize`Provides insight to the rate at which your lens is ageing`;
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4873724379154609286$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_31 = goog.getMsg("Where to do BioAge");
        i18n_30 = MSG_EXTERNAL_4873724379154609286$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_31;
      } else {
        i18n_30 = $localize`Where to do BioAge`;
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4814580825788528257$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_33 = goog.getMsg("Bioage location map");
        i18n_32 = MSG_EXTERNAL_4814580825788528257$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_33;
      } else {
        i18n_32 = $localize`Bioage location map`;
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1493753749605738793$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_35 = goog.getMsg("Become a retailer");
        i18n_34 = MSG_EXTERNAL_1493753749605738793$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_35;
      } else {
        i18n_34 = $localize`Become a retailer`;
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2542657749517325090$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_37 = goog.getMsg("Why get BioAge done?");
        i18n_36 = MSG_EXTERNAL_2542657749517325090$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_37;
      } else {
        i18n_36 = $localize`Why get BioAge done?`;
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7551091309729498647$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_39 = goog.getMsg(" BioAge gives you an overall view of your health and an early indication of health deterioration ");
        i18n_38 = MSG_EXTERNAL_7551091309729498647$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_39;
      } else {
        i18n_38 = $localize` BioAge gives you an overall view of your health and an early indication of health deterioration `;
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4609668265765987377$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_41 = goog.getMsg(" Detect potential health problems that might be causing your body to age faster ");
        i18n_40 = MSG_EXTERNAL_4609668265765987377$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_41;
      } else {
        i18n_40 = $localize` Detect potential health problems that might be causing your body to age faster `;
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8722209517833359198$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_43 = goog.getMsg(" Empowers you with knowledge about your health, helping you make informed decisions about your lifestyle, habits, and healthcare choices ");
        i18n_42 = MSG_EXTERNAL_8722209517833359198$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_43;
      } else {
        i18n_42 = $localize` Empowers you with knowledge about your health, helping you make informed decisions about your lifestyle, habits, and healthcare choices `;
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3765713044758893734$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_45 = goog.getMsg(" Enables you to take proactive steps to prevent the onset of diseases or complications ");
        i18n_44 = MSG_EXTERNAL_3765713044758893734$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_45;
      } else {
        i18n_44 = $localize` Enables you to take proactive steps to prevent the onset of diseases or complications `;
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1524911685015271970$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_47 = goog.getMsg(" BioAge can serve as a wake-up call to make positive changes in your lifestyle, diet, exercise, and other habits ");
        i18n_46 = MSG_EXTERNAL_1524911685015271970$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_47;
      } else {
        i18n_46 = $localize` BioAge can serve as a wake-up call to make positive changes in your lifestyle, diet, exercise, and other habits `;
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6789908476830575372$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_49 = goog.getMsg("A eye scanning with machine");
        i18n_48 = MSG_EXTERNAL_6789908476830575372$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_49;
      } else {
        i18n_48 = $localize`A eye scanning with machine`;
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3545078796150678349$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_51 = goog.getMsg("Our retailers");
        i18n_50 = MSG_EXTERNAL_3545078796150678349$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_51;
      } else {
        i18n_50 = $localize`Our retailers`;
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_67878117605823216$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_53 = goog.getMsg("hedland logo");
        i18n_52 = MSG_EXTERNAL_67878117605823216$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_53;
      } else {
        i18n_52 = $localize`hedland logo`;
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_631907033241117797$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_55 = goog.getMsg("optometrist logo");
        i18n_54 = MSG_EXTERNAL_631907033241117797$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_55;
      } else {
        i18n_54 = $localize`optometrist logo`;
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7048171478034274505$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_57 = goog.getMsg("rose optometry logo");
        i18n_56 = MSG_EXTERNAL_7048171478034274505$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_57;
      } else {
        i18n_56 = $localize`rose optometry logo`;
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1948431745566533336$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_59 = goog.getMsg("pharmacy logo");
        i18n_58 = MSG_EXTERNAL_1948431745566533336$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_59;
      } else {
        i18n_58 = $localize`pharmacy logo`;
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_892996933857751485$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_61 = goog.getMsg("Our partners and investors");
        i18n_60 = MSG_EXTERNAL_892996933857751485$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_61;
      } else {
        i18n_60 = $localize`Our partners and investors`;
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_63 = goog.getMsg("partners logo");
        i18n_62 = MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_63;
      } else {
        i18n_62 = $localize`partners logo`;
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_65 = goog.getMsg("partners logo");
        i18n_64 = MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_65;
      } else {
        i18n_64 = $localize`partners logo`;
      }
      let i18n_66;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_67 = goog.getMsg("partners logo");
        i18n_66 = MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_67;
      } else {
        i18n_66 = $localize`partners logo`;
      }
      let i18n_68;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_69 = goog.getMsg("partners logo");
        i18n_68 = MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_69;
      } else {
        i18n_68 = $localize`partners logo`;
      }
      let i18n_70;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_71 = goog.getMsg("partners logo");
        i18n_70 = MSG_EXTERNAL_4366225223602222109$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_71;
      } else {
        i18n_70 = $localize`partners logo`;
      }
      let i18n_72;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7838469443947655783$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_73 = goog.getMsg("Regulatory certificates");
        i18n_72 = MSG_EXTERNAL_7838469443947655783$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_73;
      } else {
        i18n_72 = $localize`Regulatory certificates`;
      }
      let i18n_74;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7158096850402671879$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_75 = goog.getMsg("ISO regulatory certificate logo");
        i18n_74 = MSG_EXTERNAL_7158096850402671879$$SRC_APP_PAGES_HOME_HOME_COMPONENT_TS_75;
      } else {
        i18n_74 = $localize`ISO regulatory certificate logo`;
      }
      return [[1, "banner"], [1, "container"], [1, "title"], i18n_0, [1, "img-container"], ["src", "assets/img/Phone results mockup green 1.png", "alt", i18n_2], [1, "transparent-eye"], ["src", "assets/img/transparent eye.png", "alt", i18n_4], i18n_6, [1, "video"], i18n_8, [1, "video-container"], ["preload", "metadata", "poster", "assets/img/video-thumbnail.png", "controls", ""], ["src", "assets/videos/05 - BioAge - 30sec - 02.mp4", "type", "video/mp4"], [1, "biomarkers"], ["src", "assets/img/eye-marker.png", "alt", i18n_10], [1, "content"], i18n_12, [1, "content-grid"], [1, "grid-item"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, [1, "bioage-loc"], i18n_30, ["src", "assets/img/bioage-location.png", "alt", i18n_32], [1, "btn", "btn-primary", "extended"], i18n_34, [1, "why-bioage"], i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46, ["src", "assets/img/eye scanning.png", "alt", i18n_48], [1, "retailer"], i18n_50, [1, "retailer-logos"], [1, "img-wrapper"], ["src", "assets/img/retailers/hedland.png", "alt", i18n_52], ["src", "assets/img/retailers/optometrist.png", "alt", i18n_54], ["src", "assets/img/retailers/Rose-Optometry-logo.png", "alt", i18n_56], ["src", "assets/img/retailers/pharmacy.png", "alt", i18n_58], [1, "partners"], i18n_60, [1, "partner-logos", "desktop"], ["src", "assets/img/partners/partnerslogos1.png", "alt", i18n_62], ["src", "assets/img/partners/partnerslogos2.png", "alt", i18n_64], [1, "partner-logos", "mobile"], ["src", "assets/img/partners/partnerslogos3.png", "alt", i18n_66], ["src", "assets/img/partners/partnerslogos4.png", "alt", i18n_68], [1, "img-container", "universe"], ["src", "assets/img/partners/partnerslogos5.png", "alt", i18n_70], [1, "regulatory"], i18n_72, ["src", "assets/img/ISO-13485 1.png", "alt", i18n_74]];
    },
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "article", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6)(8, "article", 1)(9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 9)(14, "article", 1)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11)(18, "video", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14)(21, "article", 1)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16)(25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](26, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](32, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](35, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](37, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19)(39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](40, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](42, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19)(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](45, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](47, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 28)(49, "article", 1)(50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](51, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](55, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 33)(57, "div", 1)(58, "article")(59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](60, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](62, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul")(64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](65, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](67, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](69, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](71, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 41)(75, "article", 1)(76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](77, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43)(79, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 49)(88, "article", 1)(89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](90, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 51)(92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 54)(97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section", 59)(104, "article", 1)(105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](106, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["section.banner[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  padding-top: 6rem;\n}\nsection.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n}\nsection.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n  width: 65%;\n}\nsection.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\nsection.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 35%;\n}\nsection.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n@media screen and (max-width: 1199px) {\n  section.banner[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-right: 1.5rem;\n    font-size: 68px;\n  }\n}\n@media screen and (max-width: 991px) {\n  section.banner[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-right: 1rem;\n    font-size: 48px;\n  }\n}\n@media screen and (max-width: 767px) {\n  section.banner[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-right: 1rem;\n    font-size: 36px;\n  }\n}\n@media screen and (max-width: 575px) {\n  section.banner[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    display: block;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 0rem;\n    padding: 1.5rem 1rem;\n    font-size: 32px;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.banner[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 50%;\n    min-width: 204px;\n    display: flex;\n    margin: 0 auto;\n  }\n}\nsection.transparent-eye[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-primary);\n  padding: 5rem 0;\n}\nsection.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n}\nsection.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\nsection.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 1rem;\n  padding-left: 3rem;\n  color: #fff;\n  font-size: 46px;\n  line-height: 56px;\n}\n\n@media screen and (max-width: 991px) {\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    display: block;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: auto;\n    width: 70%;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 1.5rem;\n    padding-left: 0rem;\n    font-size: 36px;\n    line-height: 46px;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 767px) {\n  section.transparent-eye[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.transparent-eye[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 26px;\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n}\nsection.video[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-primary-light);\n  padding: 3rem 0 5rem 0;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  padding: 0 20%;\n  text-align: center;\n  margin: 3rem 0;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 14px;\n}\n\n@media screen and (max-width: 767px) {\n  section.video[_ngcontent-%COMP%] {\n    padding: 2rem 0 2rem 0;\n  }\n  section.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n  }\n  section.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n}\nsection.biomarkers[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  padding: 5rem 0;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 50%;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0 2rem 0;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 1.5rem;\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\nsection.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n\n@media screen and (max-width: 991px) {\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 550px;\n    margin: 0 auto;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 1.5rem 1rem;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  section.biomarkers[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 550px;\n    margin: 0 auto;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 1.5rem 1rem;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  section.biomarkers[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 21px;\n  }\n}\nsection.bioage-loc[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 3rem 0 2rem 0;\n}\nsection.bioage-loc[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nsection.bioage-loc[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\nsection.bioage-loc[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 2rem auto;\n}\nsection.bioage-loc[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 767px) {\n  section.bioage-loc[_ngcontent-%COMP%] {\n    background: #fff;\n    padding: 2rem 0 2rem 0;\n  }\n}\n@media screen and (max-width: 575px) {\n  section.bioage-loc[_ngcontent-%COMP%] {\n    background: #fff;\n    padding: 2rem 0 2rem 0;\n  }\n  section.bioage-loc[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    font-size: 14px;\n  }\n}\nsection.why-bioage[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  padding: 6rem 0;\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  display: flex;\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  width: 60%;\n  padding-right: 8rem;\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-bg-primary);\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 40%;\n}\nsection.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--color-border);\n  border-radius: 20px;\n}\n\n@media screen and (max-width: 1199px) {\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    width: 65%;\n    padding-right: 2rem;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: var(--color-bg-primary);\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    width: 35%;\n    padding-top: 8rem;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 991px) {\n  section.why-bioage[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n    padding-right: 2rem;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    order: 1;\n    width: 100%;\n    max-width: 314px;\n    padding-top: 0;\n    padding-bottom: 2rem;\n    margin: 0 auto;\n  }\n  section.why-bioage[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nsection.retailer[_ngcontent-%COMP%] {\n  padding: 5rem 0 5rem 0;\n}\nsection.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\nsection.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 1rem 2.5rem;\n  justify-content: center;\n  align-items: center;\n}\nsection.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 575px) {\n  section.retailer[_ngcontent-%COMP%] {\n    padding: 4rem 0 4rem 0;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%] {\n    grid-template-columns: auto auto;\n    gap: 1rem 2rem;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]:nth-child(1) {\n    order: 1;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]:nth-child(2) {\n    order: 2;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]:nth-child(3) {\n    order: 4;\n  }\n  section.retailer[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .retailer-logos[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]:nth-child(4) {\n    order: 3;\n  }\n}\nsection.partners[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-primary-light);\n  padding: 5rem;\n}\nsection.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 3rem;\n}\nsection.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos.desktop[_ngcontent-%COMP%] {\n  display: block;\n}\nsection.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\nsection.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 767px) {\n  section.partners[_ngcontent-%COMP%] {\n    background-color: var(--color-bg-primary-light);\n    padding: 3rem 0 1rem;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos.mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section.partners[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .partner-logos[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .universe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n}\nsection.regulatory[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-primary);\n  padding: 3rem 0;\n}\nsection.regulatory[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection.regulatory[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\nsection.regulatory[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 209px;\n  height: 209px;\n}\n\n@media screen and (max-width: 991px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n@media screen and (max-width: 767px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFBSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUVOO0FBRE07RUFDRSw2QkFBQTtBQUdSO0FBQUk7RUFDRSxVQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR1I7O0FBR0E7RUFDRTtJQUNFLGlCQUFBO0VBQUY7RUFHSTtJQUNFLHFCQUFBO0lBQ0EsZUFBQTtFQUROO0FBQ0Y7QUFNQTtFQUNFO0lBQ0UsaUJBQUE7RUFKRjtFQU9JO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBTE47QUFDRjtBQVVBO0VBQ0U7SUFDRSxpQkFBQTtFQVJGO0VBV0k7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUFUTjtBQUNGO0FBY0E7RUFDRTtJQUNFLGlCQUFBO0VBWkY7RUFjRTtJQUNFLGNBQUE7RUFaSjtFQWFJO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0VBWE47RUFhSTtJQUNFLFdBQUE7RUFYTjtFQVlNO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUFWUjtBQUNGO0FBZ0JBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0FBZEY7QUFlRTtFQUNFLGFBQUE7QUFiSjtBQWNJO0VBQ0UsVUFBQTtBQVpOO0FBYU07RUFDRSxXQUFBO0FBWFI7QUFjSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVpOOztBQWlCQTtFQUVJO0lBQ0UsY0FBQTtFQWZKO0VBZ0JJO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFkTjtFQWVNO0lBQ0UsV0FBQTtFQWJSO0VBZ0JJO0lBQ0UsV0FBQTtJQUNB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QTtFQTNGTjtFQWtGTTtJQUNFLGFBQUE7RUFoRlI7RUFrRk07SUFDRSxhQUFBO0VBaEZSO0VBdUZRO0lBQ0UsV0FBQTtFQXJGVjtFQXVGUTtJQUNFLGdCQUFBO0VBckZWO0FBQ0Y7QUE0RkE7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7QUExRkY7QUE0RkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMUZKO0FBNEZJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBMUZOO0FBNkZJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUEzRk47O0FBZ0dBO0VBQ0U7SUFDRSxlQUFBO0VBN0ZGO0FBQ0Y7QUFnR0E7RUFDRTtJQUNFLGVBQUE7RUE5RkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gIHBhZGRpbmctdG9wOiA2cmVtO1xyXG5cclxuICBhcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoMSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBzZWN0aW9uLmJhbm5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuXHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgc2VjdGlvbi5iYW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcblxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBzZWN0aW9uLmJhbm5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHNlY3Rpb24uYmFubmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAgIGFydGljbGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaDEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDIwNHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi50cmFuc3BhcmVudC1leWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDVyZW0gMDtcclxuICBhcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIHNlY3Rpb24udHJhbnNwYXJlbnQtZXllIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBzZWN0aW9uLnRyYW5zcGFyZW50LWV5ZSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24udmlkZW8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXByaW1hcnktbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDNyZW0gMCA1cmVtIDA7XHJcblxyXG4gIGFydGljbGUge1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdmlkZW8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgc2VjdGlvbi52aWRlbyB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAwO1xyXG5cclxuICAgIGFydGljbGUge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5iaW9tYXJrZXJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gIHBhZGRpbmc6IDVyZW0gMDtcclxuICBhcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBzZWN0aW9uLmJpb21hcmtlcnMge1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDEuNXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQtZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAuZ3JpZC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLmJpb21hcmtlcnMge1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgLmdyaWQtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5iaW9hZ2UtbG9jIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDNyZW0gMCAycmVtIDA7XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIHNlY3Rpb24uYmlvYWdlLWxvYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMDtcclxuICAgIGFydGljbGUge1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLmJpb2FnZS1sb2Mge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMCAycmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgYS5idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi53aHktYmlvYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gIHBhZGRpbmc6IDZyZW0gMDtcclxuICBkaXYuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZy1yaWdodDogOHJlbTtcclxuICAgICAgaDIsXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBzZWN0aW9uLndoeS1iaW9hZ2Uge1xyXG4gICAgZGl2LmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFydGljbGUge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgICAgICBoMixcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIHNlY3Rpb24ud2h5LWJpb2FnZSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBkaXYuY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFydGljbGUge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uLnJldGFpbGVyIHtcclxuICBwYWRkaW5nOiA1cmVtIDAgNXJlbSAwO1xyXG4gIGFydGljbGUge1xyXG4gICAgaDIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJldGFpbGVyLWxvZ29zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICBnYXA6IDFyZW0gMi41cmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLnJldGFpbGVyIHtcclxuICAgIHBhZGRpbmc6IDRyZW0gMCA0cmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXRhaWxlci1sb2dvcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgZ2FwOiAxcmVtIDJyZW07XHJcblxyXG4gICAgICAgIC5pbWctd3JhcHBlcjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctd3JhcHBlcjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctd3JhcHBlcjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgb3JkZXI6IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctd3JhcHBlcjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uLnBhcnRuZXJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5LWxpZ2h0KTtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG4gIGFydGljbGUge1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0bmVyLWxvZ29zIHtcclxuICAgICAgJi5kZXNrdG9wIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgc2VjdGlvbi5wYXJ0bmVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDNyZW0gMCAxcmVtO1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBhcnRuZXItbG9nb3Mge1xyXG4gICAgICAgICYuZGVza3RvcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51bml2ZXJzZSBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5yZWd1bGF0b3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuICBwYWRkaW5nOiAzcmVtIDA7XHJcblxyXG4gIGFydGljbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMDlweDtcclxuICAgICAgaGVpZ2h0OiAyMDlweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 79253:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 13783);
/* harmony import */ var _home_routng_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routng.module */ 62860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routng_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routng_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=253.js.map