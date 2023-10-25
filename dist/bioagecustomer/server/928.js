"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 85225:
/*!*********************************************************!*\
  !*** ./src/app/pages/science/science-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScienceRoutingModule: () => (/* binding */ ScienceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _science_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./science.component */ 48820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _science_component__WEBPACK_IMPORTED_MODULE_0__.ScienceComponent
}];
class ScienceRoutingModule {
  static #_ = this.ɵfac = function ScienceRoutingModule_Factory(t) {
    return new (t || ScienceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ScienceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScienceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 48820:
/*!****************************************************!*\
  !*** ./src/app/pages/science/science.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScienceComponent: () => (/* binding */ ScienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class ScienceComponent {
  static #_ = this.ɵfac = function ScienceComponent_Factory(t) {
    return new (t || ScienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScienceComponent,
    selectors: [["app-science"]],
    decls: 89,
    vars: 0,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_655078327432039306$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_1 = goog.getMsg("The science made simple");
        i18n_0 = MSG_EXTERNAL_655078327432039306$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`The science made simple`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2664415015643334302$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_3 = goog.getMsg("How BioAge works");
        i18n_2 = MSG_EXTERNAL_2664415015643334302$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`How BioAge works`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7510606389355502534$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_5 = goog.getMsg(" BioAge determines a person\u2019s biological age, which can give an indication of their overall health, by looking at vascular, metabolic, inflammatory and lifestyle indicators present in the retinal image. ");
        i18n_4 = MSG_EXTERNAL_7510606389355502534$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize` BioAge determines a person’s biological age, which can give an indication of their overall health, by looking at vascular, metabolic, inflammatory and lifestyle indicators present in the retinal image. `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_415327272964500838$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_7 = goog.getMsg(" BioAge uses non-invasive retinal images, taken during a routine eye exam. The AI engine powering BioAge has learned from over 1.3 million retinal images. ");
        i18n_6 = MSG_EXTERNAL_415327272964500838$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize` BioAge uses non-invasive retinal images, taken during a routine eye exam. The AI engine powering BioAge has learned from over 1.3 million retinal images. `;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3419517066941418415$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_9 = goog.getMsg("An eye with zoom");
        i18n_8 = MSG_EXTERNAL_3419517066941418415$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`An eye with zoom`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_548876050178739398$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_11 = goog.getMsg("Why is knowing a person\u2019s \u201Cbiological age\u201D important?");
        i18n_10 = MSG_EXTERNAL_548876050178739398$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`Why is knowing a person’s “biological age” important?`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3298704725814534273$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_13 = goog.getMsg(" Not all people age at the same rate(1) and as a result there is increasing interest in delineating between an individual\u2019s chronological age and their biological age. ");
        i18n_12 = MSG_EXTERNAL_3298704725814534273$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_13;
      } else {
        i18n_12 = $localize` Not all people age at the same rate(1) and as a result there is increasing interest in delineating between an individual’s chronological age and their biological age. `;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1806195390683974286$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_15 = goog.getMsg(" While chronological age is defined as the number of years a person has lived, biological age refers to how well the cells in a person\u2019s body are ageing and functioning{$startSuperscript}(2){$closeSuperscript}. ", {
          "startSuperscript": "\uFFFD#26\uFFFD",
          "closeSuperscript": "\uFFFD/#26\uFFFD"
        }, {
          original_code: {
            "startSuperscript": "<sup>",
            "closeSuperscript": "</sup>"
          }
        });
        i18n_14 = MSG_EXTERNAL_1806195390683974286$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_15;
      } else {
        i18n_14 = $localize` While chronological age is defined as the number of years a person has lived, biological age refers to how well the cells in a person’s body are ageing and functioning${"\uFFFD#26\uFFFD"}:START_SUPERSCRIPT:(2)${"\uFFFD/#26\uFFFD"}:CLOSE_SUPERSCRIPT:. `;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2473241015344409659$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_17 = goog.getMsg(" Biological age, therefore, provides a better indicator of life span and future functional capacity{$startSuperscript}(3-6){$closeSuperscript}. ", {
          "startSuperscript": "\uFFFD#29\uFFFD",
          "closeSuperscript": "\uFFFD/#29\uFFFD"
        }, {
          original_code: {
            "startSuperscript": "<sup>",
            "closeSuperscript": "</sup>"
          }
        });
        i18n_16 = MSG_EXTERNAL_2473241015344409659$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_17;
      } else {
        i18n_16 = $localize` Biological age, therefore, provides a better indicator of life span and future functional capacity${"\uFFFD#29\uFFFD"}:START_SUPERSCRIPT:(3-6)${"\uFFFD/#29\uFFFD"}:CLOSE_SUPERSCRIPT:. `;
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3796011405125114820$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_19 = goog.getMsg(" Although differing theories exist to explain this process, it is recognised that the speed at which the cells deteriorate depends broadly upon factors such as the genes we inherit, our lifestyle choices, how much stress we are under and how our bodies respond to infections we get. ");
        i18n_18 = MSG_EXTERNAL_3796011405125114820$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_19;
      } else {
        i18n_18 = $localize` Although differing theories exist to explain this process, it is recognised that the speed at which the cells deteriorate depends broadly upon factors such as the genes we inherit, our lifestyle choices, how much stress we are under and how our bodies respond to infections we get. `;
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6533000905478008013$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_21 = goog.getMsg(" Work in this area has already revealed that estimates of biological age can more accurately predict mortality or the onset of a broad spectrum of physical and psychological diseases ranging from cardiovascular disease (CVD){$startSuperscript}(7){$closeSuperscript} to clinically significant depression{$startSuperscript}(8){$closeSuperscript} than chronological age. ", {
          "startSuperscript": "[\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]",
          "closeSuperscript": "[\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"
        }, {
          original_code: {
            "startSuperscript": "<sup>",
            "closeSuperscript": "</sup>"
          }
        });
        i18n_20 = MSG_EXTERNAL_6533000905478008013$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_21;
      } else {
        i18n_20 = $localize` Work in this area has already revealed that estimates of biological age can more accurately predict mortality or the onset of a broad spectrum of physical and psychological diseases ranging from cardiovascular disease (CVD)${"[\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]"}:START_SUPERSCRIPT:(7)${"[\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"}:CLOSE_SUPERSCRIPT: to clinically significant depression${"[\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]"}:START_SUPERSCRIPT:(8)${"[\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"}:CLOSE_SUPERSCRIPT: than chronological age. `;
      }
      i18n_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_20);
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_631403821310297288$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_23 = goog.getMsg(" Until now, most of the tools used to assess biological age require the collection of data which link an individual\u2019s demographic/social status with blood tests and/or radiological tests{$startSuperscript}(9){$closeSuperscript}. ", {
          "startSuperscript": "\uFFFD#38\uFFFD",
          "closeSuperscript": "\uFFFD/#38\uFFFD"
        }, {
          original_code: {
            "startSuperscript": "<sup>",
            "closeSuperscript": "</sup>"
          }
        });
        i18n_22 = MSG_EXTERNAL_631403821310297288$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_23;
      } else {
        i18n_22 = $localize` Until now, most of the tools used to assess biological age require the collection of data which link an individual’s demographic/social status with blood tests and/or radiological tests${"\uFFFD#38\uFFFD"}:START_SUPERSCRIPT:(9)${"\uFFFD/#38\uFFFD"}:CLOSE_SUPERSCRIPT:. `;
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_613174089750853755$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_25 = goog.getMsg("Biological age vs chronological age figure");
        i18n_24 = MSG_EXTERNAL_613174089750853755$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_25;
      } else {
        i18n_24 = $localize`Biological age vs chronological age figure`;
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5457556763870812603$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_27 = goog.getMsg(" Figure 1: Biological versus chronological vascular ageing. Image retrieved and amended from{$startSuperscript}(2){$closeSuperscript}. ", {
          "startSuperscript": "\uFFFD#43\uFFFD",
          "closeSuperscript": "\uFFFD/#43\uFFFD"
        }, {
          original_code: {
            "startSuperscript": "<sup>",
            "closeSuperscript": "</sup>"
          }
        });
        i18n_26 = MSG_EXTERNAL_5457556763870812603$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_27;
      } else {
        i18n_26 = $localize` Figure 1: Biological versus chronological vascular ageing. Image retrieved and amended from${"\uFFFD#43\uFFFD"}:START_SUPERSCRIPT:(2)${"\uFFFD/#43\uFFFD"}:CLOSE_SUPERSCRIPT:. `;
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7991901737795023000$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_29 = goog.getMsg("Why is the retina used?");
        i18n_28 = MSG_EXTERNAL_7991901737795023000$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_29;
      } else {
        i18n_28 = $localize`Why is the retina used?`;
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3525153004717367999$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_31 = goog.getMsg(" Toku\u2019s AI platform utilises a revolutionary, patented method to evaluate more than 23 million technical parameters and 12 biological parameters in each retinal image, to produce a BioAge outcome. ");
        i18n_30 = MSG_EXTERNAL_3525153004717367999$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_31;
      } else {
        i18n_30 = $localize` Toku’s AI platform utilises a revolutionary, patented method to evaluate more than 23 million technical parameters and 12 biological parameters in each retinal image, to produce a BioAge outcome. `;
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_987994690558539500$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_33 = goog.getMsg(" The retina has long been recognised as a unique window into an individual\u2019s health, as the biomarkers present in retinal images may provide valuable insights into aging, inflammatory health, neurological health, and cardiovascular health. The retinal vasculature allows direct non-invasive visualisation of the body\u2019s microvasculature, as it is the only part of the body where scientists and clinicians can directly assess the health of an individual\u2019s neuro-vascular tissues(10). ");
        i18n_32 = MSG_EXTERNAL_987994690558539500$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_33;
      } else {
        i18n_32 = $localize` The retina has long been recognised as a unique window into an individual’s health, as the biomarkers present in retinal images may provide valuable insights into aging, inflammatory health, neurological health, and cardiovascular health. The retinal vasculature allows direct non-invasive visualisation of the body’s microvasculature, as it is the only part of the body where scientists and clinicians can directly assess the health of an individual’s neuro-vascular tissues(10). `;
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5908443385303855773$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_35 = goog.getMsg(" Figure 2: Segmentation of vascularisation in the retina \u2013 providing information on biological parameters contributing to a person\u2019s biological age ");
        i18n_34 = MSG_EXTERNAL_5908443385303855773$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_35;
      } else {
        i18n_34 = $localize` Figure 2: Segmentation of vascularisation in the retina – providing information on biological parameters contributing to a person’s biological age `;
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1737909461247398510$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_37 = goog.getMsg("Want to know more about the science behind BioAge?");
        i18n_36 = MSG_EXTERNAL_1737909461247398510$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_37;
      } else {
        i18n_36 = $localize`Want to know more about the science behind BioAge?`;
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4315820411934546281$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_39 = goog.getMsg("Read our Scientific paper");
        i18n_38 = MSG_EXTERNAL_4315820411934546281$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_39;
      } else {
        i18n_38 = $localize`Read our Scientific paper`;
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1595861872251590277$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_41 = goog.getMsg("References:");
        i18n_40 = MSG_EXTERNAL_1595861872251590277$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_41;
      } else {
        i18n_40 = $localize`References:`;
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5587281410045017919$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_43 = goog.getMsg(" 1. Hamczyk, M. R., Nevado, R. M., Barettino, A., Fuster, V., & Andres, V. (2020). Biological versus chronological ageing: JACC focus seminar. Journal of the American College of Cardiology, 75(8), 919-930. ");
        i18n_42 = MSG_EXTERNAL_5587281410045017919$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_43;
      } else {
        i18n_42 = $localize` 1. Hamczyk, M. R., Nevado, R. M., Barettino, A., Fuster, V., & Andres, V. (2020). Biological versus chronological ageing: JACC focus seminar. Journal of the American College of Cardiology, 75(8), 919-930. `;
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1434023346727446127$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_45 = goog.getMsg(" 2. Comfort, A. (1969). Test-battery to measure ageing-rate in man. The Lancet, 294(7635), 1411-1415. ");
        i18n_44 = MSG_EXTERNAL_1434023346727446127$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_45;
      } else {
        i18n_44 = $localize` 2. Comfort, A. (1969). Test-battery to measure ageing-rate in man. The Lancet, 294(7635), 1411-1415. `;
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8317760048077921387$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_47 = goog.getMsg(" 3. Borkan, G. A., & Norris, A. H. (1980). Assessment of biological age using a profile of physical parameters. Journal of Gerontology, 35 (2), 177-184. ");
        i18n_46 = MSG_EXTERNAL_8317760048077921387$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_47;
      } else {
        i18n_46 = $localize` 3. Borkan, G. A., & Norris, A. H. (1980). Assessment of biological age using a profile of physical parameters. Journal of Gerontology, 35 (2), 177-184. `;
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8763689969313811983$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_49 = goog.getMsg(" 4. Mitnitski, A. B., Graham, J. E., Mogilner, A. J., & Rockwood, K. (2002). Frailty, fitness and late-life mortality in relation to chronological and biological age. BMC geriatrics, 2(1), 1-8. ");
        i18n_48 = MSG_EXTERNAL_8763689969313811983$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_49;
      } else {
        i18n_48 = $localize` 4. Mitnitski, A. B., Graham, J. E., Mogilner, A. J., & Rockwood, K. (2002). Frailty, fitness and late-life mortality in relation to chronological and biological age. BMC geriatrics, 2(1), 1-8. `;
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3889008423735979659$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_51 = goog.getMsg(" 5. Jylh\u00E4v\u00E4, J., Pedersen, N. L., & H\u00E4gg, S. (2017). Biological age predictors. EBioMedicine, 21, 29-36. ");
        i18n_50 = MSG_EXTERNAL_3889008423735979659$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_51;
      } else {
        i18n_50 = $localize` 5. Jylhävä, J., Pedersen, N. L., & Hägg, S. (2017). Biological age predictors. EBioMedicine, 21, 29-36. `;
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8866079413344994777$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_53 = goog.getMsg(" 6. Levine, M. E. (2013). Modeling the rate of senescence: can estimated biological age predict mortality more accurately than chronological age?. Journals of Gerontology Series A: Biomedical Sciences and Medical Sciences, 68(6), 667-674. ");
        i18n_52 = MSG_EXTERNAL_8866079413344994777$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_53;
      } else {
        i18n_52 = $localize` 6. Levine, M. E. (2013). Modeling the rate of senescence: can estimated biological age predict mortality more accurately than chronological age?. Journals of Gerontology Series A: Biomedical Sciences and Medical Sciences, 68(6), 667-674. `;
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3071983779696372027$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_55 = goog.getMsg(" 7. Samani, N.J., & van der Harst, P. (2008). Biological ageing and cardiovascular disease. Heart, 94(5), 537-539. ");
        i18n_54 = MSG_EXTERNAL_3071983779696372027$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_55;
      } else {
        i18n_54 = $localize` 7. Samani, N.J., & van der Harst, P. (2008). Biological ageing and cardiovascular disease. Heart, 94(5), 537-539. `;
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_48076307944808818$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_57 = goog.getMsg(" 8. Brown, P. J., Wall, M. M., Chen, C., Levine, M. E., Yaffe, K., Roose, S. P., & Rutherford, B. R. (2018). Biological age, not chronological age, is associated with late-life depression. The Journals of Gerontology: Series A, 73(10), 1370-1376. ");
        i18n_56 = MSG_EXTERNAL_48076307944808818$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_57;
      } else {
        i18n_56 = $localize` 8. Brown, P. J., Wall, M. M., Chen, C., Levine, M. E., Yaffe, K., Roose, S. P., & Rutherford, B. R. (2018). Biological age, not chronological age, is associated with late-life depression. The Journals of Gerontology: Series A, 73(10), 1370-1376. `;
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8199594640095885065$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_59 = goog.getMsg(" 9. Zhavoronkov, A., Bischof, E., & Lee, K. F. (2021). Artificial intelligence in longevity medicine. Nature Ageing, 1(1), 5-7. ");
        i18n_58 = MSG_EXTERNAL_8199594640095885065$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_59;
      } else {
        i18n_58 = $localize` 9. Zhavoronkov, A., Bischof, E., & Lee, K. F. (2021). Artificial intelligence in longevity medicine. Nature Ageing, 1(1), 5-7. `;
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7100802061657786148$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_61 = goog.getMsg(" 10. Cheung, C. Y. L., Ikram, M. K., Sabanayagam, C., & Wong, T. Y. (2012). Retinal microvasculature as a model to study the manifestations of hypertension. Hypertension, 60(5), 1094-1103. ");
        i18n_60 = MSG_EXTERNAL_7100802061657786148$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_61;
      } else {
        i18n_60 = $localize` 10. Cheung, C. Y. L., Ikram, M. K., Sabanayagam, C., & Wong, T. Y. (2012). Retinal microvasculature as a model to study the manifestations of hypertension. Hypertension, 60(5), 1094-1103. `;
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3090698517279923221$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_63 = goog.getMsg(" The information is provided for broader scientific comprehension and discussion. For the actual use of BioAge or any other related products or technologies, it is imperative to strictly adhere to the intended use as approved and outlined by the local regulatory body in your respective area or country. ");
        i18n_62 = MSG_EXTERNAL_3090698517279923221$$SRC_APP_PAGES_SCIENCE_SCIENCE_COMPONENT_TS_63;
      } else {
        i18n_62 = $localize` The information is provided for broader scientific comprehension and discussion. For the actual use of BioAge or any other related products or technologies, it is imperative to strictly adhere to the intended use as approved and outlined by the local regulatory body in your respective area or country. `;
      }
      return [[1, "video"], [1, "container"], i18n_0, [1, "video-container"], ["preload", "metadata", "poster", "assets/img/video-thumbnail.png", "controls", ""], ["src", "assets/videos/02 - BioAge - 30sec.mp4", "type", "video/mp4"], [1, "how-works"], [1, "content"], i18n_2, i18n_4, i18n_6, [1, "img-container"], ["src", "assets/img/eye-zoom.png", "alt", i18n_8], [1, "why-important"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, ["src", "assets/img/figure-1.png", "alt", i18n_24], [2, "font-style", "italic"], i18n_26, [1, "retina"], i18n_28, i18n_30, i18n_32, ["src", "assets/img/retina-desktop.png", "alt", "Biological age vs chronological age figure", 1, "desktop"], ["src", "assets/img/retina-mobile.png", "alt", "Biological age vs chronological age figure", 1, "mobile"], i18n_34, [1, "know-more"], i18n_36, ["href", "", 1, "btn", "btn-primary", "extended"], i18n_38, [1, "references"], i18n_40, [1, "each-reference"], i18n_42, i18n_44, i18n_46, i18n_48, i18n_50, i18n_52, i18n_54, i18n_56, i18n_58, i18n_60, [1, "summary"], i18n_62];
    },
    template: function ScienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "article", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6)(8, "article", 1)(9, "div", 7)(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 13)(19, "article", 1)(20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](25, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](28, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](31, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](33, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "sup")(35, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](37, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "figcaption", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 24)(45, "article", 1)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](47, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](49, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](51, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 28)(54, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figcaption", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](56, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 31)(58, "article", 1)(59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](60, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](62, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 35)(64, "article", 1)(65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](66, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](68, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](70, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](72, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](74, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](76, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](78, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](80, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](82, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](84, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](86, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](88, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["section.video[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  padding: 3rem 0 5rem 0;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 20%;\n  text-align: center;\n  margin: 3rem 0;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 14px;\n}\n\n@media screen and (max-width: 767px) {\n  section.video[_ngcontent-%COMP%] {\n    padding: 2rem 0 2rem 0;\n  }\n  section.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n  }\n  section.video[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n}\nsection.how-works[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  padding: 5rem 0;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 65%;\n  color: #fff;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 2rem;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 35%;\n}\nsection.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 410px;\n}\n\n@media screen and (max-width: 991px) {\n  section.how-works[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 3rem 0;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    order: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1rem auto;\n  }\n}\n@media screen and (max-width: 575px) {\n  section.how-works[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  section.how-works[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 276px;\n  }\n}\nsection.why-important[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\nsection.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-bg-primary);\n  margin-bottom: 3rem;\n}\nsection.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  width: 100%;\n  max-width: 740px;\n}\n\n@media screen and (max-width: 575px) {\n  section.why-important[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  section.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  section.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  section.why-important[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n    max-width: 321px;\n  }\n}\nsection.retina[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 5rem 0;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-bg-primary);\n  margin-bottom: 3rem;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1194px;\n  margin-bottom: 1rem;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img.desktop[_ngcontent-%COMP%] {\n  display: block;\n}\nsection.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 767px) {\n  section.retina[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  section.retina[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin: 0.75rem 0;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section.retina[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img.mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\nsection.know-more[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  padding: 5rem 0;\n}\nsection.know-more[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection.know-more[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n@media screen and (max-width: 575px) {\n  section.know-more[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  section.know-more[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 321px;\n    margin-bottom: 1rem;\n  }\n}\nsection.references[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 5rem 0 0 0;\n}\nsection.references[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nsection.references[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p.each-reference[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 400;\n}\nsection.references[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p.summary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n  margin: 2rem 0;\n}\n\n@media screen and (max-width: 575px) {\n  section.references[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 2rem 0 0 0;\n  }\n  section.references[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p.summary[_ngcontent-%COMP%] {\n    font-size: 8px;\n    line-height: 9px;\n    margin: 1rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2NpZW5jZS9zY2llbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUFSOztBQU1BO0VBQ0U7SUFDRSxzQkFBQTtFQUhGO0VBTUk7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0VBSk47RUFRTTtJQUNFLGtCQUFBO0VBTlI7QUFDRjtBQVlBO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0FBVkY7QUFXRTtFQUNFLGFBQUE7QUFUSjtBQVVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFSTjtBQVNNO0VBQ0UsbUJBQUE7QUFQUjtBQVNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBVUk7RUFDRSxVQUFBO0FBUk47QUFTTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVBSOztBQWFBO0VBQ0U7SUFDRSxlQUFBO0VBVkY7RUFXRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBVEo7RUFVSTtJQUNFLFFBQUE7SUFDQSxXQUFBO0VBUk47RUFTTTtJQUNFLGNBQUE7RUFQUjtFQVlJO0lBQ0UsUUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQVZOO0VBV007SUFDRSxXQUFBO0lBQ0EsaUJBQUE7RUFUUjtBQUNGO0FBY0E7RUFDRTtJQUNFLGVBQUE7RUFaRjtFQWNJO0lBQ0UsUUFBQTtJQUNBLFdBQUE7RUFaTjtFQWFNO0lBQ0UsY0FBQTtFQVhSO0VBYU07SUFDRSxtQkFBQTtFQVhSO0VBZU07SUFDRSxnQkFBQTtFQWJSO0FBQ0Y7QUFtQkE7RUFDRSxlQUFBO0FBakJGO0FBbUJJO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQWpCTjtBQW9CSTtFQUNFLG1CQUFBO0FBbEJOO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW5CTjtBQW9CTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbEJSOztBQXdCQTtFQUNFO0lBQ0UsZUFBQTtFQXJCRjtFQXVCSTtJQUNFLHFCQUFBO0VBckJOO0VBd0JJO0lBQ0UsbUJBQUE7RUF0Qk47RUEwQk07SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBeEJSO0FBQ0Y7QUE4QkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUE1QkY7QUE4Qkk7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBNUJOO0FBK0JJO0VBQ0UsbUJBQUE7QUE3Qk47QUFnQ0k7RUFDRSxjQUFBO0FBOUJOO0FBK0JNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE3QlI7QUE4QlE7RUFDRSxjQUFBO0FBNUJWO0FBOEJRO0VBQ0UsYUFBQTtBQTVCVjs7QUFtQ0E7RUFDRTtJQUNFLGVBQUE7RUFoQ0Y7RUFrQ0k7SUFDRSxtQkFBQTtFQWhDTjtFQW1DSTtJQUNFLHFCQUFBO0VBakNOO0VBb0NJO0lBQ0UsY0FBQTtFQWxDTjtFQW1DTTtJQUNFLHNCQUFBO0VBakNSO0FBQ0Y7QUEyQ0E7RUFDRTtJQUNFLGVBQUE7RUF6Q0Y7RUEyQ0k7SUFDRSxxQkFBQTtFQXpDTjtFQTRDSTtJQUNFLG1CQUFBO0VBMUNOO0VBNkNJO0lBQ0UsaUJBQUE7RUEzQ047RUE0Q007SUFDRSxxQkFBQTtFQTFDUjtFQTJDUTtJQUNFLGFBQUE7RUF6Q1Y7RUEyQ1E7SUFDRSxjQUFBO0VBekNWO0FBQ0Y7QUFnREE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7QUE5Q0Y7QUErQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBN0NKO0FBOENJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBNUNOOztBQWlEQTtFQUNFO0lBQ0UsZUFBQTtFQTlDRjtFQWdESTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUE5Q047QUFDRjtBQW9EQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFsREY7QUFvREk7RUFDRSxnQkFBQTtBQWxETjtBQW9ESTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsRE47QUFxREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFuRE47O0FBd0RBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBckRGO0VBNkRJO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQTNETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi52aWRlbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuICBwYWRkaW5nOiAzcmVtIDAgNXJlbSAwO1xyXG5cclxuICBhcnRpY2xlIHtcclxuICAgIGgyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdmlkZW8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgc2VjdGlvbi52aWRlbyB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAwO1xyXG5cclxuICAgIGFydGljbGUge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5ob3ctd29ya3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDVyZW0gMDtcclxuICBhcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBzZWN0aW9uLmhvdy13b3JrcyB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHNlY3Rpb24uaG93LXdvcmtzIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIGFydGljbGUge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyNzZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ud2h5LWltcG9ydGFudCB7XHJcbiAgcGFkZGluZzogNXJlbSAwO1xyXG4gIGFydGljbGUge1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc2VjdGlvbi53aHktaW1wb3J0YW50IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIGFydGljbGUge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmlndXJlIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5yZXRpbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgcGFkZGluZzogNXJlbSAwO1xyXG4gIGFydGljbGUge1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZ3VyZSB7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE5NHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgJi5kZXNrdG9wIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBzZWN0aW9uLnJldGluYSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgICAmLmRlc2t0b3Age1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5tb2JpbGUge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLnJldGluYSB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpZ3VyZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICYuZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLm1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbi5rbm93LW1vcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgcGFkZGluZzogNXJlbSAwO1xyXG4gIGFydGljbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1heC13aWR0aDogOTgwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc2VjdGlvbi5rbm93LW1vcmUge1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5zZWN0aW9uLnJlZmVyZW5jZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cmVtIDAgMCAwO1xyXG4gIGFydGljbGV7XHJcbiAgICBoM3tcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIHAuZWFjaC1yZWZlcmVuY2V7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbiAgICBwLnN1bW1hcnl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzZWN0aW9uLnJlZmVyZW5jZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnJlbSAwIDAgMDtcclxuICAgIGFydGljbGV7XHJcbiAgICAgIGgze1xyXG4gICAgICB9XHJcbiAgICAgIHAuZWFjaC1yZWZlcmVuY2V7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBwLnN1bW1hcnl7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 14928:
/*!*************************************************!*\
  !*** ./src/app/pages/science/science.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScienceModule: () => (/* binding */ ScienceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _science_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./science.component */ 48820);
/* harmony import */ var _science_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./science-routing.module */ 85225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class ScienceModule {
  static #_ = this.ɵfac = function ScienceModule_Factory(t) {
    return new (t || ScienceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ScienceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _science_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScienceRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScienceModule, {
    declarations: [_science_component__WEBPACK_IMPORTED_MODULE_0__.ScienceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _science_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScienceRoutingModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=928.js.map