function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_pre_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Presently I am working as Dean R&D and Professor at Sreyas Institute of Engineering and Technology, Hyderabad from 1st July 2017 to till date (NBA and NAAC Accredited).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Four Months Teaching Experience in KPRIT Engineering College, Hyderabad as a Professor from 17th March 2017 to 29th June 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " One Year and Eight Months Research/Teaching Experience in Somany Institute of Technology & Management, Rewari 26th July 2015 to 14th March 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Three Year Teaching Experience in BRCM-CET, Bahal as an Assistant professor, ECE Dept. from 16th July 2012 to 22nd July 2015 (NBA and NAAC Accredited).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " One Year Teaching Experience in OITM Hisar as an Assistant professor, ECE Dept from 16th June 2011 to 14th July 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " One Year Teaching Experience in OITM Hisar as a Lecturer, ECE Dept from 1st August 2008 to 30 May 2009.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Six Month experience at Eureka Electrosoft Pvt. Ltd as H/W & S/F Engg. From June 2007 to November 2007.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SCI/Scopus Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SCI / SCOPUS Journal Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " KMVV Parsad, Shilpa Rani and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\"Brain Tumor Classification based on Advanced Res-Net Neural Network Architecture\"");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (Submission code: IJAHUC-318749) for the International Journal of Ad Hoc and Ubiquitous Computing (IJAHUC), in Inderscience Publication (SCI-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Rasveen, Khyati Chopra, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u201CNarrowband Internet of Things (NB-IoT): Analysis of Frame Structure, NPSS Sequence Generation and Detection\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " in International Journal of Systems, Control and Communications, Inderscience Journal (Scopus Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Swathi G., Aarti, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u201CCNN Based Segmentation to Detect Pupil with Low Illumination and for Small Dataset\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " in Innovations in Systems and Software Engineering, A NASA Springer Journal. DOI: 10.1007/s11334-020-00382-3.  (ESCI-Published).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u201CFace Spoofing Detection Using Improved SegNet Architecture with Blur Estimation Technique\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " in International Journal of Biometrics, Inderscience Publication (ESCI-Published). DOI: 10.1504/IJBM.2021.10032302.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u201CLive Detection Of Face Using Machine Learning with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " in Wireless Personal Communication, Vol. 103, No. 3, pp. 2352-2375, 2018.  (DOI: 10.1007/s11277-018-5913-0. (SCI-Published-Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u201CAutomatic Live Facial Expression Detection Using Genetic Algorithm with Haar Wavelet Features and SVM\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " in Wireless Personal Communication, Vol. 103, No. 3, pp. 2435-2453, 2018) DOI: 10.1007/s11277-018-5923-y. (SCI-Published- Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Rohit Raja, Sandeep Kumar, and Rashid Mahomood, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u201CColor Object Detection Based Image Retrieval using ROI Segmentation with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " in Wireless Personal Communication, pp. 1-24, 2020. DOI 10.1007/s11277-019-07021-6. (SCI-Published- Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " V Kiranmai, Deepika Ghai, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u201CA Review on Classification of Land Use/Land Cover change Assessment based on Normalized Difference Vegetation Index");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ", Journal of Critical Reviwes, Vol. 7, No. 14, pp. 2416-2431, 2020. (SCOPUS- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " P.R. Mahidar, Deepika Ghai, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u201CSign Language Recognition Techniques- A Survey\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " International Journal of Psychosocial Rehabilitation, Vol. 24, No. 05, pp. 2747-2760, 2020. ISSN: 1475-7192. (SCOPUS Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Andy.C and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u201CAn Appraisal on Speech and Emotional Recognition Technologies based on Machine Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " in International Journal of Recent Technology and Engineering (IJRTE), Vol. 8, No. 5, July 2019 with ISSN: 2277-3878. (Scopus Journal-Elsevier).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "SCI / SCOPUS Conference Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Nisha Rani Misra, Sandeep Kumar and Arpit Jain, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u201CA Review on E-waste: Fostering the Need for Green Electronics\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " in International Conference on Computing, Communication, and Intelligent Systems (ICCCIS-2021) 19th-20th February, 2021 Sharda University, Greater Noida, India. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Sandeep Kumar, E.G. Rajan and Shilpa Rani, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u201CA Study on Vehicle Detection through Aerial Images: Various Challenges, Issues and Applications\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " in International Conference on Computing, Communication, and Intelligent Systems (ICCCIS-2021) 19th-20th February, 2021 Sharda University, Greater Noida, India. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " K.Sonali Swaroop, Sandeep Kumar, A.Sowjanya, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u201CReal-Image Transformation into a Caricature Image using Neural Network\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ", in 4th International Conference on Advanced Informatics for Computing Research (ICAICR-2020) will be held at Gurugram, Haryana, India on December 26-27, 2020. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " A.Sowjanya, Sandeep Kumar, K. Sonali Swaroop, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u201CConvolution Neural Network-based Rain Noise Removal for Real-Time Application\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ", in 2nd International Conference on Machine Learning, Security and Cloud Computing (ICMLSC 2020) is organized by Department of Computer Science and Engineering and Department of AI & ML, Vardhaman College of Engineering, Hyderabad. (Scopus Indexed Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " K.Sonali Swaroop, Sandeep Kumar, A.Sowjanya, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u201CArtery-Vein Detection using Neural Network in Retina Images\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, ", in 2nd International Conference on Machine Learning, Security and Cloud Computing (ICMLSC 2020) is organized by Department of Computer Science and Engineering and Department of AI & ML, Vardhaman College of Engineering, Hyderabad. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Sandeep Kumar, KMVV Prasad, John Moses, Munish Gupta, Pavni and Deepak Reddy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u201CJoyo: The House Assistant Technology for Smart Home\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Sandeep Kumar, KMVV Prasad, Srilekha, Pranav, Naga Vamshi and T. Suman ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u201CLeaf Disease Detection and Classification based on Machine Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " K. Narasimha, P. Bramarambika, V. Sai Santosh, M. Vamshidhar Reddy, and Sandeep Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u201CNetwork Design and Implementation of Dynamic Routing Protocols Using Packet Tracer\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Soumya and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u201CHealth Care Monitoring Based on Internet of Things\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " the (Springer) International Conference on Artificial Intelligence & Cognitive Computing (AICC), 2nd -3rd Feb 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Kone Srikrishnaswetha, Sandeep Kumar and MD Rashid Mahmood, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u201CA Study on Smart Electronics Voting Machine Using Face Recognition and Aadhar Verification with IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " in 7th (Springer) International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2018) (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Sandeep Kumar, V.Taj Kiran, Sekuri Swetha, and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u201CIoT based Smart Home Surveillance and Automation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " in IEEE International Conference on Computing, Power and Communication Technology (GUCON), pp. 795-799, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Shalini Shinde, Sandeep Kumar, and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\u201CA Review: Eye Tracking Interface with Embedded System & IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " in IEEE International Conference on Computing, Power and Communication Technology (GUCON), pp. 800-804, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Sandeep Kumar, P.Raja and G. Bhargavi, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u201CA Comparative Study on Modern Smart Irrigation System and Monitoring the Field by using IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " in IEEE International Conference on Computing, Power and Communication Technology, (GUCON), pp. 637-641, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Kone Srikrishnaswetha, Sandeep Kumar and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\u201CComparision Study on Various Face Detection Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " in 4th International  IEEE Conference on Computing Communication and Automation (ICCCA-2018),  December 14-15, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Hemlata Dalmia, Nikhil, Shilpa Choudhary, and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\u201CPre Disaster Management Using ICT Technology\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " in 4th International IEEE Conference on Computing Communication and Automation (ICCCA-2018),  December 14-15, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\u201CA Study on Face Recognition Techniques with Age and Gender Classification\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " In IEEE International Conference on Computing, Communication and Automation (ICCCA), pp. 1001-1006, May 2017 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u201CA Comparative Study on Face Spoofing Attacks\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " In IEEE International Conference on Computing, Communication and Automation (ICCCA), pp. 1104-1108, May 2017 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Sandeep Kumar, Sanjana Mathew, Navya Anumula, K. Shravya Chandra, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\u201CPortable Camera Based Assistive Device for Real-Time Text Recognition on Various Products and Speech Using Android for Blind People\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Kone Srikrishnaswetha, Sandeep Kumar, Deepika Ghai, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\u201CSecured Electronic Voting Machine Using Biometric Technique with Unique Identity Number and IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "20.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Mohammed Hassnuddin, Sandeep Kumar, Hemlata Dalmia,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "\u201CElectricity Management in Smart Grid Using IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "21.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Fariha Khatoon, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u201CA Solar Tracking and Remote Monitoring System Using IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "22.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Hemlata Dalmia, Ch V S S Nikil and Sandeep Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\u201CChurning of Bank Customers Using Supervised Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "23.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Mohammed Hassnuddin and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "\u201CAdvance Green Energy Scheduling in Smart Grid using IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, ", in International IEEE Conference on Recent Advances in Energy-Efficient Computing and Communication (ICRAECC-2019), March 7th -8th, 2019. (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Professional Qualifications.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2022 Post-Doc Fellowship*: Machine Learning & AI.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Pentagram Research Centre, Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Vehicle Detection/Surveillance System through Aerial Images based on Deep Learning (Based on Machine Learing and Deep Learning).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " -------\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2022 Ph.D: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " PEC University of Technology, Chandigarh. (NBA & NAAC Accredited and NIRF ranking is 68th. PEC University was established in 1921 by Government of India).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Design of A Novel Algorithm for Human Face Recognition (Based on Machine Learing and Deep Learning).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 2021\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u2022 Ph.D: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " OPJS University, Churu Rajasthan, India affiliated by UGC.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Design & Development of A Multimode Low-Cost Power Assisted Smart Wheelchair (Embedded System).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 2016\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u2022 GATE-2015 Qualified with 91.6 percentile.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u2022 M.Tech: VLSI Design and CAD.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Thapar University Patiala Punjab, India with CGPA 6.32. (NBA & NAAC Accredited and NIRF ranking is 23rd. Thapar University was established in 1956 by Thapar Group).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Image Compression based on ISPIHT & ROI.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 2011\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u2022 B.Tech: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " TITS Bhiwani, Haryana, India (NBA & NAAC Accredited and TITS was established in 1943 by Birla Group).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 2008\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_144_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Foreign Conference paper Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u201C2D Wireframe Recognition Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " in 12th International Conference on Soft Computing and Pattern Recognition, MIR LAB, USA, December 15th-18th, 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Swathi G., Aarti, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u201CRobust Deep Learning Technique-UNet Architecture for Pupil Segmentation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " in 11th IEEE Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON), Vancouver Canada, 4th \u2013 7th November, 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Kartik, Sandeep Kumar, MVV Prasad, John Moses and, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u201CSmart Physiotherapy using Wireless Sensor Networks\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " in the 2020 International Conference on Decision Aid Sciences and Applications (DASA'20), University of Bahrain, 8th \u2013 9th November 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sandeep Kumar, Sukhwinder Singh, and Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u201CGender Classification Using Machine Learning with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " in IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, USA, January 7th-9th, 2019 (Scopus Indexed-Published).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Sandeep Kumar and  Sai Anirudh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u201CSmart and Safe Infant Wearable Device Based on Arduino Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ", In International Conference on Advancements in Engineering, Technology and Management, (AETM) Bangkok Thailand held on 6th-7th June 2018.  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sandeep Kumar, Munish Kumar, Dr. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u201C A Performance Analysis on Iris Image Enhancement Using Histogram Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " in International Conference on Interdisciplinary Research and Technological Developments (IRTD), pp. 28-32, 28th October 2017 Nepal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Munish Kumar, Sandeep Kumar, Dr. Yashpal Singh, Subodh Gupta, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u201CA Novel Method For Video Watermarking Using 2LWT in YCbCr Color Space\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " in International Conference on Interdisciplinary Research and Technological Developments (IRTD), pp. 19-24, 28th October 2017 Nepal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_145_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number of Patents");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Granted:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " An Apparatus and Method for Remotely Monitoring an Aquatic Animal & Classification thereof\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 2019141034109\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " National Granted (Indian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 02/11/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " SBDA- Secured Corset for women Safety based on Deep Learning Algorithm\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 2020102636\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " International Granted (Australian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 11/11/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "3. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Power Theft Detection and Notification Using Wireless Network\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 2020113585\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " International Granted (Australian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 02/12/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_146_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Other Conferences Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            website under construction. Coming soon!\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_147_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Patent Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "National Filled/Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Face Emotions Recognition Based on Deep Learning for Smart and Secured Child Care Taker\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 202111002128\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Deep Learning Based Robotic Judge for Rash Driving Crime\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 202141002082\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " An Unmanned Aerial Vehicle for Surveillance\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 202021045472\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "4. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Method and Systems for Two Wheeler Security\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 201921008522\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "5. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Identify pollutants from vehicle exhaust at Toll Plazas with the provision of penalty\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 201911005535\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "6. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Method and System for determining the position of an object in a suspicious condition\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 201941004200\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "7. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Method and System for Aiding driver of a vehicle to ensure a safe driving environment\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 201941000050\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "8. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Mechanisms to Prevent Road Accidents in Low Light Intensity Environments Using a Drone System\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " 201821047908\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "9. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Methods and Systems for Rendering Road Information form a First Vehicle to a second Vehicle\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " 201841044218\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "10. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Method and System for Wirelessly Charging of an Appliance\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " 201811040942\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Conference/ FDP/ Workshop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1. B. Venkatesh and Sandeep Kumar, \u201CHuman Activity Recognisation Using Convolution Neural Network\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2. N. Prasanna Srinivas, Sandeep Kumar and N. Murali Krishna, \u201CAutomatic Detection of Glaucoma by Using SVM Technique for Nicroaneurysm\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3. K. Deepti, Sandeep Kumar and Shilpa Rani, \u201CIOT Automation Project on Telecom Network Environment Monitoring Using Arduino\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4. D. Divya, Sandeep Kumar and Deepika, \u201CA Review on Speech Enhancement Technique\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5. M. Rakesh, Sandeep Kumar and Shilpa Rani, \u201CAnalysis of Iris Spoofing: A Review\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "6. S. Karthik, G. Rani, J. Rachana  and  Sandeep Kumar, \u201CA Review: Detection of Dental Caries Using Traditional Techniques of Medical Images\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "7. Suresh D, Rishi Shankar Awasthi and  Sandeep Kumar, \u201CBrain Tumour Detection Using Machine Learning:  A Review\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "8. Kone Srikrishnaswetha, Sandeep Kumar and Hemlata Dalmia, \u201CA Review: Pills based on Edible Electronics\u201D in National Conference on Engineering, Management, Humanity & Law (NCEMHSL) on Somany Institute of Technology & Management, Rewari on 23rd February 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "9. Sandeep Kumar and Prof. Dr. Yashpal Singh, \u201CIssues and  Impacts  of The  PM Wheel Chairs\u201D in International Conference on \u201CLatest Research trends in Engineering, Management, Art, Sciences, Education, Pharmacy, Law and Medical Sciences, (LRTETMASEPLMS-JUNE 2016) on 25th June-2016  organized by International Institute of Advanced Research, Hyderabad proceedings will be published ISBN-13:78-1533617309.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10. Sandeep Sahratia and Shatkshi Sharma, \u201CPerformance Analysis of Uncontrolled AC/DC Converter using Different Type of passive filter\u201D the 4th International Conference on Emerging Trends in Engineering & Technology in the College of Engineering, Teerthanker Mahaveer University, 24-25th April 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "11. Sandeep Kumar, Munish Kumar, and Kapil Gulati, \u201CAn Overview of Mammography\u201D in AICTE sponsored National Conference on (ETEC-2013) held on October 25-26 in collaboration with International Journal of Computer Application at BRCMCET, Bahal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "12. Sandeep Kumar and Munish Kumar, \u201CElectronic Card Locking Using Microcontroller\u201D in International Conference PPIMT Hisar and ID: SBT-119.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "13. Sandeep Kumar and Munish Kumar, \u201CA Review on Image Compression Technique\u201D in International Conference PPIMT Hisar and Paper ID: SBT-125.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "14. Sandeep Kumar, Sanjay Sharma, and Sandeep Singh, \u201CImage Compression based on ISPIHT and Region of Interest and Hardware Implementations\u201D in International Conference OITM Hisar and Paper ID:\xA0\xA0RTCMC-209.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "15. Sandeep Kumar, Deepak Sharma, Poonam, \u201CImage Compression based on ISPIHT and Region of Interest\u201D  in International Conference Ghaziabad and Paper ID:\xA0\xA0ICCCT-11_129.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "16. Sandeep Kumar, Sanjay Sharma, and Hempushp, \u201CImage Compression based on SPIHT and Region of Interest\u201D in International Conference Bhubaneswar and Paper ID:\xA0\xA0ICCT-79.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "17. Poonam and Sandeep Kumar, \u201CEvolution of wireless networks from 1G to 7G\u201D in National Conference OITM Hisar held on 26-27 Feb. 2011.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Funded Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1. TSCOST Project Grant Applied:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Environment and Road Safety Using Hybrid Sensor-Based Traffic Monitoring and Management System\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Grant Value:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " R.s 15, 92,800/-\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2. TSCOST Project Grant Applied:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Automatic Computerized Intelligent Water Distribution System for Saving Water\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Grant Value:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " R.s 3, 15,000/-\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_150_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reviewer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The Technical Program Committee member of \"International Conference on Machine Intelligence and Network Data Security, MINDS 2021\" on April 09 - 10, 2021 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The reviewer of SCI Journal: KSII Transactions on Internet and Information Systems.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The reviewer of SCI Journal: IET Image Processing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " The Reviewer of SCOPUS Journal: Journal of Computer Science.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " The Reviewer of (SCI) Journal: Intelligent & Fuzzy Systems.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " The reviewer of SCI Journal: IET Biometrics.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " The reviewer of SCI Springer Journal: EURASIP Journal on Image and Video Processing.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " The reviewer of SCI Springer Journal: Wireless Personal Communication.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " The reviewer of (Scopus Indexed) Springer Book-ESL-2019, Elements of Statistical Learning.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " The reviewer of the IEEE International Conference on Computing, Power, and Communication Technologies GUCON-2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " A reviewer of (Scopus Indexed) Springer Conference 8th International Springer Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " The reviewer of the \u201CAmerican Journal of Electrical and Computer Engineering (AJECE)\u201D ISSN: 2640-0480 (Print); ISSN: 2640-0502 (Online); http://www.sciencepublishinggroup.com/j/ajece.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " The reviewer of SCI/Scopus Elsevier Journal Material Today.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " The reviewer of the IEEE 4th IEEE International Conference on Computing Communication and Automation (ICCCA-2018). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " The reviewer of Springer International Conference on Data Communication and Networks Co-located with GUCON-2018 (Book).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " The reviewer of Springer Conference 7th International Springer Conference on Innovation in Electronics and Communication Engineering (ICIECE-2018).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " The reviewer of the IEEE International Conference on Computing, Power, and Communication Technologies GUCON-2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " The reviewer of \u201CInternational Journal of Engineering Development and Research (IJEDR)\u201D ISSN: 2321-9939.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " A reviewer of \u201CInternational Journal of Science & Engineering Development Research (IJSDR)\u201D ISSN: 2455-2631.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_151_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Guest Invited");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Received invitation as a Session Chair Head in the (Scopus Indexed) 1st International Conference on Computational Research and Data Analytics (ICCRDA-2020), jointly organized by Suleyman Demirel University and Isparta Applied Sciences University, Turkey on 24th October, 2020.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Received invitation as an Expert Talk on Multiple Face Detection Using Hybrid Features with SVM Classifier at AnalytiX-2019 (Berlin-Germany) 13-15th November, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Expert Talk delivered on Recent Trend in Machine Learning and AI at Shri Shankaracharya Technical Campus, Chhattisgarh on 11th November, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Session Chair Head in International Conference ICRPRT-2019 on 13th October, 2019 at Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Expert Talk delivered on Machine Learning & AI at Guru Jambeshwer University (Govt. University), Hisar on 11th October, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Expert Talk delivered on Machine Learning & AI at CGC Technical Campus (Affiliated by NAAC & NBA), Jhanjeri, Mohali on 10th October, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Expert Talk delivered on Fundamental of Image Processing at Shri Shankaracharya Technical Campus, Chhattisgarh on 29th August, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Received invitation as a Session Chair Head in (Scopus Indexed) Springer Conference ICIECE-2019 on 2nd-3rd August at Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Received invitation as a Session Chair Head in (Scopus Indexed) IEEE Conference GUCON-2018 on 28th-29th September, 2018 at Greater Noida, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Received invitation as a Session Chair Head in (Scopus Indexed) IEEE Conference ICCCA-2018 on 14th-15th December, 2018 at Greater Noida, India.\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_152_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editorial Board Member");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Editorial Board of \u201CThe Open Biomedical Engineering Journal-Scopus Journal\u201D ISSN: 1874-1207.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Editorial Board Member of \u201CAmerican Journal of Embedded Systems and Applications (AJESA)\u201D ISSN: 2376-6069 (Print) \uFF1B ISSN: 2376-6085 (Online) \uFF1B http://www.sciencepublishinggroup.com/j/ajesa.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Editorial Board of \u201CInternational Journal of Advance & Innovative Research\u201D ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Research & Technology (IJERT)\u201D ISSN: 2278-0181.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Creative Research Thoughts (IJCRT)\u201D ISSN: 2320-2882.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Recent Research Aspects (IJRRA)\u201D ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Recent Research and Applied Studies (IJRRAS)\u201D ISSN: 2349-4891.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Scientific Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-5630.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Current Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-5428.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-4200.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " A reviewer of \u201CSREYAS International Journal of Scientists and Technocrats\u201D ISSN: 2456-8783.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Editorial Board Member/ Reviewer of \u201CDJ Journal of Advances in Electronics and Communication Engineering\u201D ISSN: 2455-3980.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Trends & Applications (IJETA)\u201D ISSN: 2393-9516.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Awards");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Excellence in Academics Award received for my outstanding excellence and remarkable achievements in the field of Teaching, Research and Publications at Hotel Turyaa, Chennai on September 05th, 2020 (Teacher's Day) by ESN Publications.  \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Appreciation award received for my contribution in Research & Development in the year of 2019-20 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Appreciation award received for my contribution in Research & Development in the year of 2018-19 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Appreciation award received for my contribution in Research & Development in the year of 2017-18 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Best Paper Certificate in 2nd International Conference on Artificial Intelligent, Blockchain & Data Sciences (ICAIBDS), 29th-30th November, 2019, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Award of Excellence in the National Conference, New Delhi held on 9th March 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Best Performance Appreciation for my teaching results in the university exams. M.Tech-2018, Sreyas Institute of Engineering & Technology, Hyderabad.  \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Young Researcher Award in the International Conference on Advancements in Engineering, Technology, and Management, (AETM) Bangkok Thailand held on 6th-7th June 2018\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Best Performer Award in the International Conference on Importance of Interdisciplinary Research in Engineering, Management, Humanity & Medical Sciences (I.I.D.R.E.M.H.M.S-2018) held on 25th February 2018, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Best Paper Award in the National Conference on Engineering, Management, Humanity & Law (NCEMHSL-2018) held on 23rd February 2018, Rewari, Haryana.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Best Paper Award in 2nd International Conference on Interdisciplinary Research and Technological Developments IRTD Nepal, 28th October 2017.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " 4 times awarded for my best teaching results in the university exams during 2012-2015 BRCM, Bahal. \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Awarded as the best trainee during six-month industrial training.\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_154_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Professional Society");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Member, Machine Intelligence Research Labs (MIR Labs), USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Member, Universal Scientific Education and Research Network (USERN), IRAN.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Senior Member of the Asia Society of Researchers (ASR) ID No: R219093084, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Senior Member of International Economics Development and Research Center (IEDRC) with ID No: 30080518, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lifetime Member of Scientific and Technical Research Association (STRA) with ID No:  STRA-M19778.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lifetime Member of Teaching and Education Research Association (TERA) with ID No:  TERA-M19101637.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Member of IEEE Technical Society with ID No: 94932969.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Lifetime Member of \u201CThe Indian Society for Technical Education (ISTE)\u201D with ID No: LM-97423, New Delhi India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Lifetime Senior Member of \u201CScience and Engineering Institute (SCIEI)\u201D with ID No: 20180703006.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lifetime Senior Member of \u201CInternational Society for Research and Development (ISRD)\u201D with ID No: SR4150900422. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Lifetime Member of Internet Society (ISOC) with ID No: 147477, Virginia, United States.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Lifetime Member of \u201CThe Society of Digital Information and Wireless Communication (SDIWC)\u201D with ID No: 16617, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " A lifetime member of the society \u201CInternational Association of Engineers (IAENG)\u201D with ID No: 180638, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " A Lifetime Member/Part of \u201CNational Digital Library of India (NDL)\u201D coordinated by IIT Kharagpur and sponsored by MHRD India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Senior Member of \u201CInstitute of Research Engineers and Doctors (IRED)\u201D with Membership No: SNM10100059237 valid up to 5th February 2021, New York USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Member of Internet Society Bangalore Chapter Membership with registration Number 739591.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " A lifetime member of the society \u201CComputer Science Teacher Association (CSTA)\u201D with ID No: 53375485, New York USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lifetime Senior Member of \u201CInternational Association of Computer Science and Information Technology (IACSIT)\u201D with Membership No: 80351227, Singapore. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Member of \u201CInternational Association of Academicians (IAASSE) Connecting Scholars, Scientists and Engineers\u201D with membership No: IAASSE0010283, City of Industry, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "20.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Member of the International Technology and Engineering Educators Association (ITEEA) United State (US).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "21.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Member of International Rough Set Society, Poland.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "22.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Member of International Computer Science and Engineering Society with ID No: 8977, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_155_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Book Published/ Accepted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " and  Dr. Rohit Raja, \u201CProceedings of International Conference on Artificial Intelligence Blockchain & Data Science\u201D in SREYAS Beside Indu Aranya GSI Bandlaguda Nagole Hyderabad Telangana 500068 with ISBN No: \"978-81-945742-4-8\". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Dr. Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ", Prof Ramya and Prof. Shilpa Choudhary \u201CArtificial Intelligence and Machine Learning in 2D/3D Medical Image Processing\u201D in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", Dr. Rohit Raja and K. Rohit Kumar \u201CBlockchain and Machine Learning based Emerging Technology\u201D in Scholar\u2019s Press Germany. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Dr. Rohit Raja, Dr. Kapil Kumar Nagwanshi, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", \u201CData Mining Technologies using Machine Learning Algorithms\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", Dr. Rohit Raja, Dr. Shrikant Tiwari and Prof. Shilpa Choudhary, \u201CCognitive Behavior & Human Computer Interaction\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Dr. Rashid, Dr. Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ", \u201CEmerging Trends in Ambient Intelligence (AmI), IOT and Convergent Technologies\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Sanjay Sharma Nikita Gupta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Subho Upadhyay, \u201CRenewable Energy Systems: Modeling, Optimization, and Applications\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FDP Attended");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1. Attended One Week Faculty Development Program on \u201CResearch Trends in AI and ML\u201D organized by Department of CSE, Sreyas Institute of Engineering & Technology, Hyderabad, held from 25th -30th January 2021.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2. Attended One Week Faculty Development Program on \u201CRF Technology for Energy Harvesting, Medical and Commercial Applications (RFTEMC 2020)\u201D organised by Department of ECE, Sreyas Institute of Engineering & Technology, Hyderabad, held from 14th -18th December 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3. Attended One Week Faculty Development Program on \u201CArtificial Intelligence using Python\u201D organised by Brainovision Solutions India Pvt. Ltd. & National Youth Council of India at Sreyas Institute of Engineering & Technology, Hyderabad, held from 14th -19th September 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4. Attended Two Days Faculty Development Program on \u201CEffective Technical Report Writing Using Latex\u201D organized by department of Electronics & Communication Engineering, Mahatma Gandhi Institute of Technology, Hyderabad during 8th-9th June 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5. Attended One Week Faculty Development Program on \u201CICT Tools for teaching, Learning Process & Institutes\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur) at the Sreyas Institute of Engineering & Technology, from 13th-17th January 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6. Attended One Week Faculty Development Program on \u201CNatural Language Processing\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur) at the Sreyas Institute of Engineering & Technology, from 06th-10th January 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "7. Attended One Week Faculty Development Program on \u201CAI and Machine Learning\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur ) at the Sreyas Institute of Engineering & Technology, from 23rd-27th December 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "8. Attended One Week Faculty Development Program on \u201CCourageous-Sreyans\u201D organized by the Sreyas Institute of Engineering & Technology, from 17th-22nd December 2018. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "9. Attended One Week Faculty Development Program on \u201CMachine Learning on Speech Processing Hands-on Workshop\u201D organized by the E & ICT Academy, NIT-Warangal, from 12-17 November 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10. Attended Two Week Faculty Development Program on \u201CEmerging Research Trends in Computer Science and IT\u201D organized by the Bharati Vidyapeeth\u2019s Institute of Computer Applications and Management (BVICAM), New Delhi from 18th-30th  June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11. Attended One Week Faculty Development Program on \u201COutcomes Based Education System\u201D organized by the Sreyas Institute of Engineering & Technology, from 11-15 June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "12. Attended One Week Faculty Development Program on \u201CEmbedded Systems and Wireless (IOT) Hands-on Workshop\u201D organized by the E & ICT Academy, NIT-Warangal, from 24-29 November 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "13. Attended One Week Faculty Development Program on \u201CReconfigurable Antennas and Microwave Devices\u201D conducted by Sreyas Institute of Engineering and Technology, Hyderabad on 12-18 September 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "14. Attended One Week ISTE-PTU-FDP on \u201CAdvanced Embedded System and VLSI Design & its Applications\u201D conducted by BRCM, Bahal on 16-20 June 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "15. Attended Two Week Staff Development programmed on Effective teaching & Active learning Methodology conducted by OITM, Hisar in June 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_157_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Book Chapter Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", Rohit Raja, and Shilpa \u201CSatellite and Underwater Image Enhancement Using Color Correction Method for Luminance Model\u201D in Cognitive Behavior & Human Computer Interaction in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Swathi G., Aarti, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ", \u201CReview on Pupil Segmentation using CNN-Region of Interest\u201D Intelligent Communication and Automation Systems, CRC Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sai Teja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", C. Andy, \u201CTracking the Covid-19 Suspected Cases through Web Application\u201D Health Informatics and Technological Solutions for Coronavirus (COVID-19),  in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", K. Rohit Kumar, \u201CAn Overview of Blockchain Technology, Architecture and Future Scope\u201D BLOCKCHAIN: Concepts, Method and Applications, in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Munish Kumar and ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", \u201CCompression of Clinical Images Using Different Wavelet Function\u201D Artificial Intelligence and Machine Learning in 2D/3D Medical Image Processing, in Taylor & Francis Publishing House USA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ", Shilpa Rani and K Ramya Laxmi \u201CLung Segmentation and Nodule Detection in 3D Medical Images using Convolution Neural Network\u201D Artificial Intelligence and Machine Learning in 2D/3D Medical Image Processing, in Taylor & Francis Publishing House USA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, ", Rohit Raja, and Archana Gandham, \u201CTracking an Object using Traditional MS (Mean Shift) and CBWH MS (Mean Shift) Algorithm with Kalman filter\u201D in the Springer Nature Book Series \u201CAlgorithm For Intelligent Systems-Application of Machine Learning\u201D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ", Sukhwinder Singh, and Jagdish Kumar, \u201CA Multiple Face Detection Using Hybrid features with SVM Classifier\u201D in the Springer Nature on Data Communication and Networks with ISBN: 978-981-13-2254-9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ", Vikrant Verma & Deepika (2017). Statistical Approaches in Multidisciplinary Research: A microcontroller based multimodal wheelchair prototype for the disabled. Tamil Nadu, India: Shanlax Publications Madurai, pp. 222-230 with ISBN: 978-93-86537-29-4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "(Published National)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ".\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_158_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Workshop/ STP Attended");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1. Attended One Day workshop on MATLAB EXPO 2019 conducted by MathWorks at International Convention Center, Hyderabad, on 30th May, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2. Participated One Week Workshop on \u201CMachine Learning and Deep Learning for Computer Vision Applications\u201D conducted by Department of Computer Science & Engineering in Association with IEEE Student Chapter and sponsored by Chhattisgarh Council of Science & Technology, Raipur, during 6th-10th March 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3. Participated Two Week Workshop on \u201CDigital Image Processing\u201D conducted by Indian Institute of Remote Sensing (IIRS) Dehradun on 1st -15th June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4. Participated One Day Workshop \u201CAdvances VLSI Design & Embedded System\u201D, held at Chandigarh Group of Colleges Jhanjeri, Mohali Sponsered by PTU, Jalandhar on 14th October 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5. Participated One Week Workshop on \u201CInternet of Things\u201D conducted by Smart Bridge Education Services Pvt. Ltd and Sreyas Institute of Engineering and Technology, Hyderabad on 19-23 September 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6. Participated in Two days Workshop on \u201CNational Science Day\u201D organized by College of Basic Science & Humanities, CCS Haryana Agricultural University, Hisar on 27\u201328 February 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "7. Participated One Day National Seminar \u201CUses of Engineering in Daily Life\u201D, held at OPJS University Churu on 13th March 2016.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "8. Participated in the IEEE Xplore Digital Library Awareness Workshop held at PEC University of Technology, Chandigarh on 24th August 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "9. Attended Two days National Workshop on \u201CDevelopment of Energy Resources and Conservation\u201D organized by ME dept. at BRCM CET Bahal on 2\u20133 March 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10. Participated Two Week ISTE-Workshop on \u201CControl System\u201D conducted by IIT Kharagpur on 2nd to 12th December 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11. Participated Two Week ISTE Workshop on \u201CSignals & Systems\u201D conducted by IIT Kharagpur on 2nd to 12th January 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "12. Attended One Day Workshop on \u201CDigital Design Pathway to the Design of a Processor\u201D organized by BRCM-CET, Bahal on 27th September 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "13. Participated Two Day National Workshop on \u201CAdvanced DSP with Matlab & its applications\u201D organized by ECE dept. at BRCM CET Bahal on 23-24 August 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "14. Participated Two Week ISTE Workshop on \u201CAnalog Electronics\u201D conducted by IIT Kharagpur on 4th to 14th June 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "15. Attended One Day Workshop on \u201CEmbedded System Design & Applications\u201D organized by BRCM-CET, Bahal on 6th April 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "16. Participated Two Day Workshop ISTE Workshop on Aakash for Education conducted by IIT Bombay on 10 & 11 November 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "17. Participated One Day National Workshop on \u201CModeling and Simulation using Simulink with Engineering Application\u201D organized by ECE dept. at BRCM CET Bahal on 13th Oct. 2012 sponsored by ISTE New Delhi.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "18. Participated Two-day Workshop on challenges & opportunities in Analog & Mixed Signal Design in Kurukshetra University, Kurukshetra (AMS-2010) held on 22 & 23 Feb 2010.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "19. Attended One Week QIP short course entitled \u201CMedical Signal & Image Processing\u201D Conducted by IIT Roorkee on 15-19 July 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_159_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SCI/ Scopus Communicated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1. Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar \u201CHybrid Model for Age and Gender Classification Using Supervised Learning with Gabor Features\u201D in Journal of Real Time Image Processing, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2. C. Andy Jason, Sandeep Kumar,  KMVV Prasad, \u201CEmotion Recognition from Speech using Multilayer Perceptron based on Artificial Neural Network\u201D in Springer Journal Wireless Personal Communication. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3. Sandeep Kumar, Md Rashid Mahmood, Rohit Raja and Shilpa Choudhary, \u201CA Hybrid Method for the Removal of RVIN Using Self Organizing Migration with Adaptive Dual Threshold Median Filter\u201D in Springer Journal. (ESCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4. Sandeep Kumar, Sukhwinder Singh, Jagdish Kumar and Shilpa Choudhary, \u201CFace Spoofing, Age, Gender and Facial Expression Recognition using Advance Neural Network Architecture based Biometric System\u201D in Applied Intelligence, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5. Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, \u201C3D Objects Recognition & Pattern Recognition Techniques: Related Challenges and Issues\u201D in Artificial Intelligence Review, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6. C. Andy Jason, Sandeep Kumar,  KMVV Prasad , \u201CMultilayer Neural Network based Speech Emotion Recognition for Smart Assistance\u201D Journal of Ambient Intelligence and Humanized Computing, Springer Journal. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "7. Sandeep Kumar, Sukhwinder Singh, Jagdish Kumar and Shilpa Choudhary, \u201CFacial Expression, Age and Gender Recognition using Seg-Net and Alex-Net Architecture\u201D in Neural Processing Letter, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "8.  Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, \u201C2D Objects Recognition & Pattern Recognition Techniques\u201D in Sensing and Imaging, Springer Journal. (ESCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "9. Sandeep Kumar and A, KMVV Prasad, \u201CObject based Image Retrieval using U-Net based Neural Network\u201D in Springer Journal. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_160_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ph.D./ M.Tech Supervisor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            website under construction. Coming soon!\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_pre_161_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UGC Journal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sandeep Kumar, Suryam Gurram and Mani Krishna Bollam, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u201CSmart Home With Sun Tracking Solar Panel\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", in Journal of Emerging Technologies and Innovative Research, Vol. 6, No. 6, pp. 540-546, 2019 with ISSN-2349-5162.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sandeep Kumar, A.Sony, Rahul Hooda and Prof. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u201CMultimodal Biometric Authentication System for Automatic Certificate Generation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", in Journal of Advances and Scholarly Researches in Allied Education, Vol. 16, No. 3, pp. 35-41, 2019 with ISSN 2230-7540.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sandeep Kumar, Sony. Alam and Mounika.Nelanti, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u201CA Study on Smart Home Automation Based on IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 37-43,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sandeep Kumar, Sruthi, Suma and Vamshi Dhar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u201CA Study on Solar/Wind Hybrid Energy Harvesting For Super Capacitor-Based Embedded System\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 44-47,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Sandeep Kumar, Aliasgar Hussain, G. Sravani and Annem Srivarshini, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u201CA Study on Various Health Parameters Monitoring Using PPG Sensor\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 48-52,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sandeep Kumar and Sai Anirudh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u201CSmart Baby Cradle Using Arduino and IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 53-59,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Sandeep Kumar, Ravali, Joshna Rani, Sai Kiran, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u201CA Study on Child Safety Wearable Devices\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ", in International Journal of Creative Research Thoughts, Vol. 6, No. 1, pp. 603-606, 2018 with ISSN: 2320-2882.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Hemlata Dalmia & Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u201CFPGA Implementation of 16-Point FFT Algorithm Using Digital Signal Processing\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ", In International Journal of Scientific Research and Modern Education, Vol. 3, No. 1, pp. 10-15, 2018 with ISSN: 2538-4155.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Sandeep Kumar & Hemlata Dalmia, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u201CA Study on Internet of Things Applications and Related Issues\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ", In International Journal of Applied and Advanced Scientific Research, Vol. 2, No. 2, pp. 273-277, 2018 with ISSN: 2456-3080.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Kumari K. Meena, Sandeep Kumar, and B. Sreenivasu. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\"Health Care System by Monitoring the Patient Health Using IOT and GSM.\"");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " In International Journal of Advanced Research in Electronics and Communication, Vol. 6, No. 11, pp.1218.-.1223, Nov-2017 with ISSN: 2278-909X.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Munish Kumar and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u201CAdvance Card Locking System using Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " in International Journal of  Recent Research Aspects, Vol. 4, No. 2, pp. 28-30, 2017 with ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Sandeep Kumar, Munish Kumar, Rashid & Neha Agrawal, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u201CA Comparative Analysis On Image Denoising Using Different Median Filter Methods\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " International Journal for Research in Applied Science & Engineering Technology (IJRASET), Vol. 5, No 8, pp. 231-239, 2017 with ISSN: 2321-9653.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u201CAutomatic Face Detection Using Genetic Algorithm for Various Challenges\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ", International Journal of Scientific Research and Modern Education, Vol. 2, No 1, Page Number 197-203, 2017 with ISSN: 2538-4155.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Sandeep Kumar, Deepika & Munish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u201Cf\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, ", International Journal of Engineering Research and Modern Education, Vol. 2, No 1, Page Number 176-181, 2017 with ISSN: 2455 - 4200.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Sandeep Kumar and Prof. Dr. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u201CApplication of Power Wheelchairs for Pediatric Users for Rehabilitation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " in International Journal of IT, Engineering and Applied Science Research, Vol 5, No 8, pp. 16-21, August 2016 with ISSN: 2319-4413.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Sandeep Kumar and Sukhwinder Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u201CStudy of Electromagnetic Pulse Attack on Electronic Circuits and Hardening Strategies\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " in International Journal of Recent Research Aspects, Vol. 2, No. 4, pp. 10-14, December 2015, with ISSN: 2349 7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Sandeep Kumar and P. Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u201CUltrasonic Sensor with Accelerometer Based Smart Wheel Chair Using Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " In International Research Journal of Engineering and Technology (IRJET) Vol. 2, No. 9, pp. 537-541, December-2015 with e-ISSN: 2395 -0056.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Sandeep Kumar and P. Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u201CStudy on Smart Wheelchair-based on Microcontroller for Physically Disabled Persons\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " in International Journal of Recent Research Aspects Vol. 2, No., pp. 97-103, December 2015 with ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'Dr. Sandeep Kumar';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 195,
      vars: 21,
      consts: [["role", "main", 1, "content"], [2, "float", "left"], ["src", "../assets/jiju.png"], [2, "float", "left", "padding", "15px 0px 0px 20px", "line-height", "28px", "color", "#444"], [2, "margin-bottom", "0px", "line-height", "0px"], ["type", "hidden"], ["selection", ""], [1, "custom-flex-container"], [1, "flex-item-left"], ["tabindex", "0", 1, "card", "card-custom", 3, "click"], [1, "text"], [1, "count"], ["tabindex", "01", 1, "card", "card-custom", 3, "click"], ["tabindex", "02", 1, "card", "card-custom", 3, "click"], [1, "text", 2, "width", "50%", "font-size", "14px", "font-weight", "normal"], [1, "count", 2, "width", "50%", "font-size", "15px"], ["tabindex", "03", 1, "card", "card-custom", 3, "click"], ["tabindex", "04", 1, "card", "card-custom", 3, "click"], ["tabindex", "05", 1, "card", "card-custom", 3, "click"], ["tabindex", "06", 1, "card", "card-custom", 3, "click"], ["tabindex", "07", 1, "card", "card-custom", 3, "click"], ["tabindex", "08", 1, "card", "card-custom", 3, "click"], ["tabindex", "09", 1, "card", "card-custom", 3, "click"], ["tabindex", "10", 1, "card", "card-custom", 3, "click"], ["tabindex", "11", 1, "card", "card-custom", 3, "click"], ["tabindex", "12", 1, "card", "card-custom", 3, "click"], ["tabindex", "13", 1, "card", "card-custom", 3, "click"], ["tabindex", "14", 1, "card", "card-custom", 3, "click"], ["tabindex", "15", 1, "card", "card-custom", 3, "click"], ["tabindex", "16", 1, "card", "card-custom", 3, "click"], ["tabindex", "17", 1, "card", "card-custom", 3, "click"], ["tabindex", "18", 1, "card", "card-custom", 3, "click"], ["tabindex", "19", 1, "card", "card-custom", 3, "click"], ["tabindex", "20", 1, "card", "card-custom", 3, "click"], [1, "flex-item-right"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "card-container"], ["title", "We less than 3 people who code", "href", "https://stackoverflow.com/users/5316868/deepak-ranolia", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/stack-overflow.svg", "alt", "stackoverflow svg icon", "width", "21.813", "height", "23.453"], ["title", "Get more done with Gmail", "href", "mailto:er.sandeepsahratia@gmail.com", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/gmail.svg", "alt", "gmail svg icon", "width", "21.813", "height", "23.453"], ["title", "Built for developers", "href", "https://github.com/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/github.svg", "alt", "github svg icon", "width", "21.813", "height", "23.453"], ["title", "node package manager", "href", "https://www.npmjs.com/package/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/npm.svg", "alt", "node package manager icon", "width", "21.813", "height", "23.453"], ["title", "Helps you connect and share with the people in your life", "href", "https://www.facebook.com//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/facebook.svg", "alt", "facebook svg icon", "width", "21.813", "height", "23.453"], ["title", "Bringing you closer to the people and things you love", "href", "https://www.instagram.com//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/instagram.svg", "alt", "instagram svg icon", "width", "21.813", "height", "23.453"], ["title", "Best of Behance", "href", "https://www.behance.net/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/behance.svg", "alt", "behance svg icon", "width", "21.813", "height", "23.453"], ["title", "Dive deeper on topics that matter to you", "href", "https://medium.com/@", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/medium.svg", "alt", "medium svg icon", "width", "21.813", "height", "23.453"], ["title", "Make the most of your professional life", "href", "https://www.linkedin.com/in//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/linkedin.svg", "alt", "linkedin svg icon", "width", "21.813", "height", "23.453"], ["title", "See what\u2019s happening in the world right now", "href", "https://twitter.com/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/twitter.svg", "alt", "twitter svg icon", "width", "21.813", "height", "23.453"], [1, "github-star-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], [1, "base-heading"], [1, "grey"], [1, "base-heading", "red"], [1, "blue"], [1, "red"], [1, "green"], [1, "orange"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dr. Sandeep Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "er.sandeepsahratia@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ 91 - 9813427591, +91 - 8247322147 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Google Scholar Link: https://scholar.google.co.in/citations?user=DFWhZ7UAAAAJ&hl=en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57220592142 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "OBJECTIVE/ PROFILE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aiming to achieve a challenging and professional position from where I can make a significant contribution to your organization in the form of my dedication by using all my skills and knowledge but also enhances my technical and creative skills and drives me towards a challenging career.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "00";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total Experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "01";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SCI/Scopus Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "02";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Professional Qualifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "B.Tech, M.Tech, Ph.D, Post Doc*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "03";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Foreign Conference Paper Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "04";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Number of Patents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Granted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "05";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Other Conferences Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "06";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Patent Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "07";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Conference/ FDP/ Workshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Conducted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "08";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Funded Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Applied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "09";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Reviewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "10";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Guest Invited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "11";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Editorial Board Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "12";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Awards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_99_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "13";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Professional Society");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "14";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Book Published/ Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "03 / 04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "15";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "FDP Attended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_114_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "16";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Book Chapter Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_119_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "17";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Workshop/ STP Attended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_124_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "18";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "SCI/Scopus Communicated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_129_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "19";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Ph.D/ M.Tech Supervisor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "05* / 22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_134_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r0.value = "20";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "UGC Journal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, HomeComponent_pre_141_Template, 47, 0, "pre", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, HomeComponent_pre_142_Template, 309, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, HomeComponent_pre_143_Template, 100, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, HomeComponent_pre_144_Template, 68, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, HomeComponent_pre_145_Template, 62, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, HomeComponent_pre_146_Template, 6, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, HomeComponent_pre_147_Template, 139, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, HomeComponent_pre_148_Template, 73, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, HomeComponent_pre_149_Template, 32, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, HomeComponent_pre_150_Template, 119, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, HomeComponent_pre_151_Template, 63, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, HomeComponent_pre_152_Template, 83, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, HomeComponent_pre_153_Template, 81, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, HomeComponent_pre_154_Template, 138, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, HomeComponent_pre_155_Template, 87, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, HomeComponent_pre_156_Template, 66, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, HomeComponent_pre_157_Template, 111, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, HomeComponent_pre_158_Template, 82, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, HomeComponent_pre_159_Template, 42, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, HomeComponent_pre_160_Template, 6, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, HomeComponent_pre_161_Template, 167, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Get In Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Grab a coffee mixed with experimental taste anytime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "svg", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Dr. Sandeep Kumar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r0.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "05");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "06");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "08");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "20");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".card-custom[_ngcontent-%COMP%] {\n  line-height: 20px;\n  padding: 5px 12px;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: 500;\n}\n.card-custom[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n  opacity: 1;\n  box-shadow: 5px 2px 10px #aaa;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #222;\n  width: 25%;\n  float: left;\n  padding-left: 5px;\n}\n.text[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  width: 75%;\n  font-size: 14px;\n  color: #009bbf;\n}\n.text[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  color: #f44;\n  display: block;\n}\n.grey[_ngcontent-%COMP%] {\n  color: #888;\n}\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n.orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n.base-heading[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 0px;\n}\n.blue[_ngcontent-%COMP%] {\n  color: #007ad1;\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  color: #f44;\n}\n.custom-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.flex-item-left[_ngcontent-%COMP%] {\n  flex: 25%;\n}\n.flex-item-right[_ngcontent-%COMP%] {\n  flex: 75%;\n}\n\n@media (max-width: 800px) {\n  .custom-flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbGxlZ2VvdXQvRG93bmxvYWRzL2dpaHViL2RlZXBhay1yYW5vbGlhL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0VSO0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjtBREZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNJUjtBRERBO0VBQ0ksV0FBQTtBQ0lKO0FERkE7RUFDSSxZQUFBO0FDS0o7QURIQTtFQUNJLGFBQUE7QUNNSjtBREpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDT0o7QURMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDUUo7QUROQTtFQUNJLFdBQUE7QUNTSjtBRE5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1NKO0FETkE7RUFFSSxTQUFBO0FDUUo7QURMQTtFQUVJLFNBQUE7QUNPSjtBREpBLCtFQUFBO0FBQ0E7RUFDSTtJQUNJLHNCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWN1c3RvbSB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3gtc2hhZG93OjVweCAycHggMTBweCAjYWFhO1xuICAgIH1cbn1cbi5jb3VudCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi50ZXh0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDA5YmJmO1xuICAgICYgc3VwIHtcbiAgICAgICAgY29sb3I6ICNmNDQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi5ncmV5IHtcbiAgICBjb2xvcjogIzg4ODtcbn1cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cbi5iYXNlLWhlYWRpbmcge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5ibHVlIHtcbiAgICBjb2xvcjogIzAwN2FkMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVkIHtcbiAgICBjb2xvcjogI2Y0NDtcbn1cblxuLmN1c3RvbS1mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtLWxlZnQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgZmxleDogMjUlO1xufVxuXG4uZmxleC1pdGVtLXJpZ2h0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICAgIGZsZXg6IDc1JTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIG9uZSBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgdHdvLWNvbHVtbiBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jdXN0b20tZmxleC1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn0iLCIuY2FyZC1jdXN0b20ge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcmQtY3VzdG9tOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogNXB4IDJweCAxMHB4ICNhYWE7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnRleHQge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwOWJiZjtcbn1cbi50ZXh0IHN1cCB7XG4gIGNvbG9yOiAjZjQ0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyZXkge1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhc2UtaGVhZGluZyB7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMwMDdhZDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZjQ0O1xufVxuXG4uY3VzdG9tLWZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0tbGVmdCB7XG4gIGZsZXg6IDI1JTtcbn1cblxuLmZsZXgtaXRlbS1yaWdodCB7XG4gIGZsZXg6IDc1JTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIG9uZSBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgdHdvLWNvbHVtbiBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY3VzdG9tLWZsZXgtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map