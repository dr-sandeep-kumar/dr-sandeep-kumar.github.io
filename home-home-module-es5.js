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

    HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeRoutingModule, [{
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Total Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Presently I am working as Dean R&D and Professor at Sreyas Institute of Engineering and Technology, Hyderabad from 1st July 2017 to till date (NBA and NAAC Accredited).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Four Months Teaching Experience in KPRIT Engineering College, Hyderabad as a Professor from 17th March 2017 to 29th June 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " One Year and Eight Months Research/Teaching Experience in Somany Institute of Technology & Management, Rewari 26th July 2015 to 14th March 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Three Year Teaching Experience in BRCM-CET, Bahal as an Assistant professor, ECE Dept. from 16th July 2012 to 22nd July 2015 (NBA and NAAC Accredited).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " One Year Teaching Experience in OITM Hisar as an Assistant professor, ECE Dept from 16th June 2011 to 14th July 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " One Year Teaching Experience in OITM Hisar as a Lecturer, ECE Dept from 1st August 2008 to 30 May 2009.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Six Month experience at Eureka Electrosoft Pvt. Ltd as H/W & S/F Engg. From June 2007 to November 2007.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "SCI/Scopus Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "SCI / SCOPUS Journal Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " KMVV Parsad, Shilpa Rani and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\"Brain Tumor Classification based on Advanced Res-Net Neural Network Architecture\"");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " (Submission code: IJAHUC-318749) for the International Journal of Ad Hoc and Ubiquitous Computing (IJAHUC), in Inderscience Publication (SCI-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Rasveen, Khyati Chopra, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\u201CNarrowband Internet of Things (NB-IoT): Analysis of Frame Structure, NPSS Sequence Generation and Detection\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " in International Journal of Systems, Control and Communications, Inderscience Journal (Scopus Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Swathi G., Aarti, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\u201CCNN Based Segmentation to Detect Pupil with Low Illumination and for Small Dataset\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " in Innovations in Systems and Software Engineering, A NASA Springer Journal. DOI: 10.1007/s11334-020-00382-3.  (ESCI-Published).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\u201CFace Spoofing Detection Using Improved SegNet Architecture with Blur Estimation Technique\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " in International Journal of Biometrics, Inderscience Publication (ESCI-Published). DOI: 10.1504/IJBM.2021.10032302.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\u201CLive Detection Of Face Using Machine Learning with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " in Wireless Personal Communication, Vol. 103, No. 3, pp. 2352-2375, 2018.  (DOI: 10.1007/s11277-018-5913-0. (SCI-Published-Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\u201CAutomatic Live Facial Expression Detection Using Genetic Algorithm with Haar Wavelet Features and SVM\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " in Wireless Personal Communication, Vol. 103, No. 3, pp. 2435-2453, 2018) DOI: 10.1007/s11277-018-5923-y. (SCI-Published- Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Rohit Raja, Sandeep Kumar, and Rashid Mahomood, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\u201CColor Object Detection Based Image Retrieval using ROI Segmentation with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " in Wireless Personal Communication, pp. 1-24, 2020. DOI 10.1007/s11277-019-07021-6. (SCI-Published- Springer).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " V Kiranmai, Deepika Ghai, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\u201CA Review on Classification of Land Use/Land Cover change Assessment based on Normalized Difference Vegetation Index");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, ", Journal of Critical Reviwes, Vol. 7, No. 14, pp. 2416-2431, 2020. (SCOPUS- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " P.R. Mahidar, Deepika Ghai, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "\u201CSign Language Recognition Techniques- A Survey\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " International Journal of Psychosocial Rehabilitation, Vol. 24, No. 05, pp. 2747-2760, 2020. ISSN: 1475-7192. (SCOPUS Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " Andy.C and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "sup", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\u201CAn Appraisal on Speech and Emotional Recognition Technologies based on Machine Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " in International Journal of Recent Technology and Engineering (IJRTE), Vol. 8, No. 5, July 2019 with ISSN: 2277-3878. (Scopus Journal-Elsevier).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h5", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "SCI / SCOPUS Conference Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " Nisha Rani Misra, Sandeep Kumar and Arpit Jain, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "\u201CA Review on E-waste: Fostering the Need for Green Electronics\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " in International Conference on Computing, Communication, and Intelligent Systems (ICCCIS-2021) 19th-20th February, 2021 Sharda University, Greater Noida, India. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Sandeep Kumar, E.G. Rajan and Shilpa Rani, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "\u201CA Study on Vehicle Detection through Aerial Images: Various Challenges, Issues and Applications\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " in International Conference on Computing, Communication, and Intelligent Systems (ICCCIS-2021) 19th-20th February, 2021 Sharda University, Greater Noida, India. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " K.Sonali Swaroop, Sandeep Kumar, A.Sowjanya, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "\u201CReal-Image Transformation into a Caricature Image using Neural Network\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, ", in 4th International Conference on Advanced Informatics for Computing Research (ICAICR-2020) will be held at Gurugram, Haryana, India on December 26-27, 2020. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " A.Sowjanya, Sandeep Kumar, K. Sonali Swaroop, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "\u201CConvolution Neural Network-based Rain Noise Removal for Real-Time Application\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ", in 2nd International Conference on Machine Learning, Security and Cloud Computing (ICMLSC 2020) is organized by Department of Computer Science and Engineering and Department of AI & ML, Vardhaman College of Engineering, Hyderabad. (Scopus Indexed Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " K.Sonali Swaroop, Sandeep Kumar, A.Sowjanya, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "\u201CArtery-Vein Detection using Neural Network in Retina Images\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, ", in 2nd International Conference on Machine Learning, Security and Cloud Computing (ICMLSC 2020) is organized by Department of Computer Science and Engineering and Department of AI & ML, Vardhaman College of Engineering, Hyderabad. (Scopus Indexed Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " Sandeep Kumar, KMVV Prasad, John Moses, Munish Gupta, Pavni and Deepak Reddy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "\u201CJoyo: The House Assistant Technology for Smart Home\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " Sandeep Kumar, KMVV Prasad, Srilekha, Pranav, Naga Vamshi and T. Suman ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "\u201CLeaf Disease Detection and Classification based on Machine Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " K. Narasimha, P. Bramarambika, V. Sai Santosh, M. Vamshidhar Reddy, and Sandeep Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "\u201CNetwork Design and Implementation of Dynamic Routing Protocols Using Packet Tracer\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " in IEEE International Conference \u201CSmart Technologies in Computing, Electrical and Electronics\u201D by REVA University Bangalore India on 10th-11th July 2020. (Scopus- Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " Soumya and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "\u201CHealth Care Monitoring Based on Internet of Things\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " the (Springer) International Conference on Artificial Intelligence & Cognitive Computing (AICC), 2nd -3rd Feb 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, " Kone Srikrishnaswetha, Sandeep Kumar and MD Rashid Mahmood, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "\u201CA Study on Smart Electronics Voting Machine Using Face Recognition and Aadhar Verification with IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, " in 7th (Springer) International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2018) (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " Sandeep Kumar, V.Taj Kiran, Sekuri Swetha, and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "\u201CIoT based Smart Home Surveillance and Automation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " in IEEE International Conference on Computing, Power and Communication Technology (GUCON), pp. 795-799, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " Shalini Shinde, Sandeep Kumar, and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "\u201CA Review: Eye Tracking Interface with Embedded System & IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " in IEEE International Conference on Computing, Power and Communication Technology (GUCON), pp. 800-804, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " Sandeep Kumar, P.Raja and G. Bhargavi, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "\u201CA Comparative Study on Modern Smart Irrigation System and Monitoring the Field by using IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, " in IEEE International Conference on Computing, Power and Communication Technology, (GUCON), pp. 637-641, September 28th-29th, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, " Kone Srikrishnaswetha, Sandeep Kumar and Prashant Johri, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "\u201CComparision Study on Various Face Detection Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " in 4th International  IEEE Conference on Computing Communication and Automation (ICCCA-2018),  December 14-15, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, " Hemlata Dalmia, Nikhil, Shilpa Choudhary, and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "\u201CPre Disaster Management Using ICT Technology\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " in 4th International IEEE Conference on Computing Communication and Automation (ICCCA-2018),  December 14-15, 2018 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](238, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "\u201CA Study on Face Recognition Techniques with Age and Gender Classification\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, " In IEEE International Conference on Computing, Communication and Automation (ICCCA), pp. 1001-1006, May 2017 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "\u201CA Comparative Study on Face Spoofing Attacks\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, " In IEEE International Conference on Computing, Communication and Automation (ICCCA), pp. 1104-1108, May 2017 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " Sandeep Kumar, Sanjana Mathew, Navya Anumula, K. Shravya Chandra, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "\u201CPortable Camera Based Assistive Device for Real-Time Text Recognition on Various Products and Speech Using Android for Blind People\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, " Kone Srikrishnaswetha, Sandeep Kumar, Deepika Ghai, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "\u201CSecured Electronic Voting Machine Using Biometric Technique with Unique Identity Number and IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "20.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " Mohammed Hassnuddin, Sandeep Kumar, Hemlata Dalmia,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "\u201CElectricity Management in Smart Grid Using IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](283, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "21.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, " Fariha Khatoon, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "\u201CA Solar Tracking and Remote Monitoring System Using IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "22.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " Hemlata Dalmia, Ch V S S Nikil and Sandeep Kumar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "\u201CChurning of Bank Customers Using Supervised Learning\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, " in 8th International Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019) 2nd -3rd August 2018 Hyderabad (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "23.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, " Mohammed Hassnuddin and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "\u201CAdvance Green Energy Scheduling in Smart Grid using IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, ", in International IEEE Conference on Recent Advances in Energy-Efficient Computing and Communication (ICRAECC-2019), March 7th -8th, 2019. (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Professional Qualifications.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u2022 Post-Doc Fellowship*: Machine Learning & AI.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Pentagram Research Centre, Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Vehicle Detection/Surveillance System through Aerial Images based on Deep Learning (Based on Machine Learing and Deep Learning).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " -------\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\u2022 Ph.D: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " PEC University of Technology, Chandigarh. (NBA & NAAC Accredited and NIRF ranking is 68th. PEC University was established in 1921 by Government of India).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Design of A Novel Algorithm for Human Face Recognition (Based on Machine Learing and Deep Learning).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " 2021\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\u2022 Ph.D: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " OPJS University, Churu Rajasthan, India affiliated by UGC.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Design & Development of A Multimode Low-Cost Power Assisted Smart Wheelchair (Embedded System).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " 2016\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\u2022 GATE-2015 Qualified with 91.6 percentile.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\u2022 M.Tech: VLSI Design and CAD.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Thapar University Patiala Punjab, India with CGPA 6.32. (NBA & NAAC Accredited and NIRF ranking is 23rd. Thapar University was established in 1956 by Thapar Group).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Topic:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Image Compression based on ISPIHT & ROI.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " 2011\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\u2022 B.Tech: Electronics and Communication Engineering.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Organization:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " TITS Bhiwani, Haryana, India (NBA & NAAC Accredited and TITS was established in 1943 by Birla Group).\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Year of Award:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " 2008\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_144_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Foreign Conference paper Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u201C2D Wireframe Recognition Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " in 12th International Conference on Soft Computing and Pattern Recognition, MIR LAB, USA, December 15th-18th, 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Swathi G., Aarti, Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u201CRobust Deep Learning Technique-UNet Architecture for Pupil Segmentation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " in 11th IEEE Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON), Vancouver Canada, 4th \u2013 7th November, 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Kartik, Sandeep Kumar, MVV Prasad, John Moses and, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\u201CSmart Physiotherapy using Wireless Sensor Networks\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " in the 2020 International Conference on Decision Aid Sciences and Applications (DASA'20), University of Bahrain, 8th \u2013 9th November 2020. (Scopus-Accepted).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Sandeep Kumar, Sukhwinder Singh, and Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\u201CGender Classification Using Machine Learning with Multi-Feature Method\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " in IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, USA, January 7th-9th, 2019 (Scopus Indexed-Published).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Sandeep Kumar and  Sai Anirudh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\u201CSmart and Safe Infant Wearable Device Based on Arduino Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, ", In International Conference on Advancements in Engineering, Technology and Management, (AETM) Bangkok Thailand held on 6th-7th June 2018.  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Sandeep Kumar, Munish Kumar, Dr. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "\u201C A Performance Analysis on Iris Image Enhancement Using Histogram Techniques\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " in International Conference on Interdisciplinary Research and Technological Developments (IRTD), pp. 28-32, 28th October 2017 Nepal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Munish Kumar, Sandeep Kumar, Dr. Yashpal Singh, Subodh Gupta, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\u201CA Novel Method For Video Watermarking Using 2LWT in YCbCr Color Space\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " in International Conference on Interdisciplinary Research and Technological Developments (IRTD), pp. 19-24, 28th October 2017 Nepal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_145_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Number of Patents");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Granted:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "1. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " An Apparatus and Method for Remotely Monitoring an Aquatic Animal & Classification thereof\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " 2019141034109\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " National Granted (Indian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " 02/11/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " SBDA- Secured Corset for women Safety based on Deep Learning Algorithm\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " 2020102636\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " International Granted (Australian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " 11/11/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "3. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Power Theft Detection and Notification Using Wireless Network\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " 2020113585\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " International Granted (Australian Patent)\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Date of Grant:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " 02/12/2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_146_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Other Conferences Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            website under construction. Coming soon!\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_147_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Patent Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "National Filled/Published:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "1. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Face Emotions Recognition Based on Deep Learning for Smart and Secured Child Care Taker\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " 202111002128\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "2. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Deep Learning Based Robotic Judge for Rash Driving Crime\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " 202141002082\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "3. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " An Unmanned Aerial Vehicle for Surveillance\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " 202021045472\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "4. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Method and Systems for Two Wheeler Security\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " 201921008522\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "5. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Identify pollutants from vehicle exhaust at Toll Plazas with the provision of penalty\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " 201911005535\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "6. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Method and System for determining the position of an object in a suspicious condition\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " 201941004200\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "7. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Method and System for Aiding driver of a vehicle to ensure a safe driving environment\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " 201941000050\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "8. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Mechanisms to Prevent Road Accidents in Low Light Intensity Environments Using a Drone System\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " 201821047908\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "9. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Methods and Systems for Rendering Road Information form a First Vehicle to a second Vehicle\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " 201841044218\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "10. Title of Invention:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " Method and System for Wirelessly Charging of an Appliance\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Application Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " 201811040942\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Application Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Conference/ FDP/ Workshop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1. B. Venkatesh and Sandeep Kumar, \u201CHuman Activity Recognisation Using Convolution Neural Network\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "2. N. Prasanna Srinivas, Sandeep Kumar and N. Murali Krishna, \u201CAutomatic Detection of Glaucoma by Using SVM Technique for Nicroaneurysm\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "3. K. Deepti, Sandeep Kumar and Shilpa Rani, \u201CIOT Automation Project on Telecom Network Environment Monitoring Using Arduino\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "4. D. Divya, Sandeep Kumar and Deepika, \u201CA Review on Speech Enhancement Technique\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "5. M. Rakesh, Sandeep Kumar and Shilpa Rani, \u201CAnalysis of Iris Spoofing: A Review\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "6. S. Karthik, G. Rani, J. Rachana  and  Sandeep Kumar, \u201CA Review: Detection of Dental Caries Using Traditional Techniques of Medical Images\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "7. Suresh D, Rishi Shankar Awasthi and  Sandeep Kumar, \u201CBrain Tumour Detection Using Machine Learning:  A Review\u201D, in 2nd International Conference on Artificial Intelligence, Block Chain and Data Sciences (ICAIBDS-2019) at Sreyas Institute of Engineering & Technology, Hyderabad, 29th-30th November, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "8. Kone Srikrishnaswetha, Sandeep Kumar and Hemlata Dalmia, \u201CA Review: Pills based on Edible Electronics\u201D in National Conference on Engineering, Management, Humanity & Law (NCEMHSL) on Somany Institute of Technology & Management, Rewari on 23rd February 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "9. Sandeep Kumar and Prof. Dr. Yashpal Singh, \u201CIssues and  Impacts  of The  PM Wheel Chairs\u201D in International Conference on \u201CLatest Research trends in Engineering, Management, Art, Sciences, Education, Pharmacy, Law and Medical Sciences, (LRTETMASEPLMS-JUNE 2016) on 25th June-2016  organized by International Institute of Advanced Research, Hyderabad proceedings will be published ISBN-13:78-1533617309.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "10. Sandeep Sahratia and Shatkshi Sharma, \u201CPerformance Analysis of Uncontrolled AC/DC Converter using Different Type of passive filter\u201D the 4th International Conference on Emerging Trends in Engineering & Technology in the College of Engineering, Teerthanker Mahaveer University, 24-25th April 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "11. Sandeep Kumar, Munish Kumar, and Kapil Gulati, \u201CAn Overview of Mammography\u201D in AICTE sponsored National Conference on (ETEC-2013) held on October 25-26 in collaboration with International Journal of Computer Application at BRCMCET, Bahal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "12. Sandeep Kumar and Munish Kumar, \u201CElectronic Card Locking Using Microcontroller\u201D in International Conference PPIMT Hisar and ID: SBT-119.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "13. Sandeep Kumar and Munish Kumar, \u201CA Review on Image Compression Technique\u201D in International Conference PPIMT Hisar and Paper ID: SBT-125.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "14. Sandeep Kumar, Sanjay Sharma, and Sandeep Singh, \u201CImage Compression based on ISPIHT and Region of Interest and Hardware Implementations\u201D in International Conference OITM Hisar and Paper ID:\xA0\xA0RTCMC-209.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "15. Sandeep Kumar, Deepak Sharma, Poonam, \u201CImage Compression based on ISPIHT and Region of Interest\u201D  in International Conference Ghaziabad and Paper ID:\xA0\xA0ICCCT-11_129.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "16. Sandeep Kumar, Sanjay Sharma, and Hempushp, \u201CImage Compression based on SPIHT and Region of Interest\u201D in International Conference Bhubaneswar and Paper ID:\xA0\xA0ICCT-79.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "17. Poonam and Sandeep Kumar, \u201CEvolution of wireless networks from 1G to 7G\u201D in National Conference OITM Hisar held on 26-27 Feb. 2011.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Funded Projects");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1. TSCOST Project Grant Applied:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Environment and Road Safety Using Hybrid Sensor-Based Traffic Monitoring and Management System\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Grant Value:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " R.s 15, 92,800/-\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "2. TSCOST Project Grant Applied:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Automatic Computerized Intelligent Water Distribution System for Saving Water\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Grant Value:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " R.s 3, 15,000/-\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_150_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Reviewer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The Technical Program Committee member of \"International Conference on Machine Intelligence and Network Data Security, MINDS 2021\" on April 09 - 10, 2021 (Scopus Indexed).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " The reviewer of SCI Journal: KSII Transactions on Internet and Information Systems.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " The reviewer of SCI Journal: IET Image Processing. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " The Reviewer of SCOPUS Journal: Journal of Computer Science.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " The Reviewer of (SCI) Journal: Intelligent & Fuzzy Systems.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " The reviewer of SCI Journal: IET Biometrics.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " The reviewer of SCI Springer Journal: EURASIP Journal on Image and Video Processing.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " The reviewer of SCI Springer Journal: Wireless Personal Communication.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " The reviewer of (Scopus Indexed) Springer Book-ESL-2019, Elements of Statistical Learning.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " The reviewer of the IEEE International Conference on Computing, Power, and Communication Technologies GUCON-2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " A reviewer of (Scopus Indexed) Springer Conference 8th International Springer Conference on Innovation in Electronics and Communication Engineering (ICIECE-2019).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " The reviewer of the \u201CAmerican Journal of Electrical and Computer Engineering (AJECE)\u201D ISSN: 2640-0480 (Print); ISSN: 2640-0502 (Online); http://www.sciencepublishinggroup.com/j/ajece.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " The reviewer of SCI/Scopus Elsevier Journal Material Today.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " The reviewer of the IEEE 4th IEEE International Conference on Computing Communication and Automation (ICCCA-2018). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " The reviewer of Springer International Conference on Data Communication and Networks Co-located with GUCON-2018 (Book).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " The reviewer of Springer Conference 7th International Springer Conference on Innovation in Electronics and Communication Engineering (ICIECE-2018).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " The reviewer of the IEEE International Conference on Computing, Power, and Communication Technologies GUCON-2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " The reviewer of \u201CInternational Journal of Engineering Development and Research (IJEDR)\u201D ISSN: 2321-9939.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " A reviewer of \u201CInternational Journal of Science & Engineering Development Research (IJSDR)\u201D ISSN: 2455-2631.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_151_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Guest Invited");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Received invitation as a Session Chair Head in the (Scopus Indexed) 1st International Conference on Computational Research and Data Analytics (ICCRDA-2020), jointly organized by Suleyman Demirel University and Isparta Applied Sciences University, Turkey on 24th October, 2020.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Received invitation as an Expert Talk on Multiple Face Detection Using Hybrid Features with SVM Classifier at AnalytiX-2019 (Berlin-Germany) 13-15th November, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Expert Talk delivered on Recent Trend in Machine Learning and AI at Shri Shankaracharya Technical Campus, Chhattisgarh on 11th November, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Session Chair Head in International Conference ICRPRT-2019 on 13th October, 2019 at Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Expert Talk delivered on Machine Learning & AI at Guru Jambeshwer University (Govt. University), Hisar on 11th October, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Expert Talk delivered on Machine Learning & AI at CGC Technical Campus (Affiliated by NAAC & NBA), Jhanjeri, Mohali on 10th October, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Expert Talk delivered on Fundamental of Image Processing at Shri Shankaracharya Technical Campus, Chhattisgarh on 29th August, 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Received invitation as a Session Chair Head in (Scopus Indexed) Springer Conference ICIECE-2019 on 2nd-3rd August at Hyderabad, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Received invitation as a Session Chair Head in (Scopus Indexed) IEEE Conference GUCON-2018 on 28th-29th September, 2018 at Greater Noida, India.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Received invitation as a Session Chair Head in (Scopus Indexed) IEEE Conference ICCCA-2018 on 14th-15th December, 2018 at Greater Noida, India.\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_152_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Editorial Board Member");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Editorial Board of \u201CThe Open Biomedical Engineering Journal-Scopus Journal\u201D ISSN: 1874-1207.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Editorial Board Member of \u201CAmerican Journal of Embedded Systems and Applications (AJESA)\u201D ISSN: 2376-6069 (Print) \uFF1B ISSN: 2376-6085 (Online) \uFF1B http://www.sciencepublishinggroup.com/j/ajesa.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Editorial Board of \u201CInternational Journal of Advance & Innovative Research\u201D ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Research & Technology (IJERT)\u201D ISSN: 2278-0181.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Creative Research Thoughts (IJCRT)\u201D ISSN: 2320-2882.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Recent Research Aspects (IJRRA)\u201D ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Recent Research and Applied Studies (IJRRAS)\u201D ISSN: 2349-4891.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Scientific Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-5630.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Current Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-5428.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Research and Modern Education (R&D Modern Research Publication)\u201D ISSN: 2455-4200.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " A reviewer of \u201CSREYAS International Journal of Scientists and Technocrats\u201D ISSN: 2456-8783.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Editorial Board Member/ Reviewer of \u201CDJ Journal of Advances in Electronics and Communication Engineering\u201D ISSN: 2455-3980.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Editorial Board Member/ Reviewer of \u201CInternational Journal of Engineering Trends & Applications (IJETA)\u201D ISSN: 2393-9516.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Awards");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Excellence in Academics Award received for my outstanding excellence and remarkable achievements in the field of Teaching, Research and Publications at Hotel Turyaa, Chennai on September 05th, 2020 (Teacher's Day) by ESN Publications.  \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Appreciation award received for my contribution in Research & Development in the year of 2019-20 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Appreciation award received for my contribution in Research & Development in the year of 2018-19 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Appreciation award received for my contribution in Research & Development in the year of 2017-18 in Sreyas Institute of Engineering & Technology, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Best Paper Certificate in 2nd International Conference on Artificial Intelligent, Blockchain & Data Sciences (ICAIBDS), 29th-30th November, 2019, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Award of Excellence in the National Conference, New Delhi held on 9th March 2019.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Best Performance Appreciation for my teaching results in the university exams. M.Tech-2018, Sreyas Institute of Engineering & Technology, Hyderabad.  \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Young Researcher Award in the International Conference on Advancements in Engineering, Technology, and Management, (AETM) Bangkok Thailand held on 6th-7th June 2018\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Best Performer Award in the International Conference on Importance of Interdisciplinary Research in Engineering, Management, Humanity & Medical Sciences (I.I.D.R.E.M.H.M.S-2018) held on 25th February 2018, Hyderabad.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Best Paper Award in the National Conference on Engineering, Management, Humanity & Law (NCEMHSL-2018) held on 23rd February 2018, Rewari, Haryana.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Best Paper Award in 2nd International Conference on Interdisciplinary Research and Technological Developments IRTD Nepal, 28th October 2017.\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " 4 times awarded for my best teaching results in the university exams during 2012-2015 BRCM, Bahal. \n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Awarded as the best trainee during six-month industrial training.\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_154_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Professional Society");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Member, Machine Intelligence Research Labs (MIR Labs), USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Member, Universal Scientific Education and Research Network (USERN), IRAN.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Senior Member of the Asia Society of Researchers (ASR) ID No: R219093084, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Senior Member of International Economics Development and Research Center (IEDRC) with ID No: 30080518, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Lifetime Member of Scientific and Technical Research Association (STRA) with ID No:  STRA-M19778.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Lifetime Member of Teaching and Education Research Association (TERA) with ID No:  TERA-M19101637.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Member of IEEE Technical Society with ID No: 94932969.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Lifetime Member of \u201CThe Indian Society for Technical Education (ISTE)\u201D with ID No: LM-97423, New Delhi India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Lifetime Senior Member of \u201CScience and Engineering Institute (SCIEI)\u201D with ID No: 20180703006.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Lifetime Senior Member of \u201CInternational Society for Research and Development (ISRD)\u201D with ID No: SR4150900422. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Lifetime Member of Internet Society (ISOC) with ID No: 147477, Virginia, United States.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Lifetime Member of \u201CThe Society of Digital Information and Wireless Communication (SDIWC)\u201D with ID No: 16617, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " A lifetime member of the society \u201CInternational Association of Engineers (IAENG)\u201D with ID No: 180638, Hong Kong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " A Lifetime Member/Part of \u201CNational Digital Library of India (NDL)\u201D coordinated by IIT Kharagpur and sponsored by MHRD India.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Senior Member of \u201CInstitute of Research Engineers and Doctors (IRED)\u201D with Membership No: SNM10100059237 valid up to 5th February 2021, New York USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Member of Internet Society Bangalore Chapter Membership with registration Number 739591.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " A lifetime member of the society \u201CComputer Science Teacher Association (CSTA)\u201D with ID No: 53375485, New York USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " Lifetime Senior Member of \u201CInternational Association of Computer Science and Information Technology (IACSIT)\u201D with Membership No: 80351227, Singapore. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "19.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Member of \u201CInternational Association of Academicians (IAASSE) Connecting Scholars, Scientists and Engineers\u201D with membership No: IAASSE0010283, City of Industry, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "20.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Member of the International Technology and Engineering Educators Association (ITEEA) United State (US).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "21.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Member of International Rough Set Society, Poland.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "22.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " Member of International Computer Science and Engineering Society with ID No: 8977, USA.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_155_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Book Published/ Accepted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and  Dr. Rohit Raja, \u201CProceedings of International Conference on Artificial Intelligence Blockchain & Data Science\u201D in SREYAS Beside Indu Aranya GSI Bandlaguda Nagole Hyderabad Telangana 500068 with ISBN No: \"978-81-945742-4-8\". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Dr. Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, ", Prof Ramya and Prof. Shilpa Choudhary \u201CArtificial Intelligence and Machine Learning in 2D/3D Medical Image Processing\u201D in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, ", Dr. Rohit Raja and K. Rohit Kumar \u201CBlockchain and Machine Learning based Emerging Technology\u201D in Scholar\u2019s Press Germany. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "(Published)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Dr. Rohit Raja, Dr. Kapil Kumar Nagwanshi, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ", \u201CData Mining Technologies using Machine Learning Algorithms\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, ", Dr. Rohit Raja, Dr. Shrikant Tiwari and Prof. Shilpa Choudhary, \u201CCognitive Behavior & Human Computer Interaction\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Dr. Rashid, Dr. Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ", \u201CEmerging Trends in Ambient Intelligence (AmI), IOT and Convergent Technologies\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Sanjay Sharma Nikita Gupta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Dr. Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Subho Upadhyay, \u201CRenewable Energy Systems: Modeling, Optimization, and Applications\u201D in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "sup", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "(Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ".\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "FDP Attended");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1. Attended One Week Faculty Development Program on \u201CResearch Trends in AI and ML\u201D organized by Department of CSE, Sreyas Institute of Engineering & Technology, Hyderabad, held from 25th -30th January 2021.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "2. Attended One Week Faculty Development Program on \u201CRF Technology for Energy Harvesting, Medical and Commercial Applications (RFTEMC 2020)\u201D organised by Department of ECE, Sreyas Institute of Engineering & Technology, Hyderabad, held from 14th -18th December 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "3. Attended One Week Faculty Development Program on \u201CArtificial Intelligence using Python\u201D organised by Brainovision Solutions India Pvt. Ltd. & National Youth Council of India at Sreyas Institute of Engineering & Technology, Hyderabad, held from 14th -19th September 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "4. Attended Two Days Faculty Development Program on \u201CEffective Technical Report Writing Using Latex\u201D organized by department of Electronics & Communication Engineering, Mahatma Gandhi Institute of Technology, Hyderabad during 8th-9th June 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "5. Attended One Week Faculty Development Program on \u201CICT Tools for teaching, Learning Process & Institutes\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur) at the Sreyas Institute of Engineering & Technology, from 13th-17th January 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "6. Attended One Week Faculty Development Program on \u201CNatural Language Processing\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur) at the Sreyas Institute of Engineering & Technology, from 06th-10th January 2020.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "7. Attended One Week Faculty Development Program on \u201CAI and Machine Learning\u201D Jointly organized by E & ICT Academies (IIT Roorkee, MNIT Jaipur, NIT Patna and IIIT Jabalpur ) at the Sreyas Institute of Engineering & Technology, from 23rd-27th December 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "8. Attended One Week Faculty Development Program on \u201CCourageous-Sreyans\u201D organized by the Sreyas Institute of Engineering & Technology, from 17th-22nd December 2018. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "9. Attended One Week Faculty Development Program on \u201CMachine Learning on Speech Processing Hands-on Workshop\u201D organized by the E & ICT Academy, NIT-Warangal, from 12-17 November 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "10. Attended Two Week Faculty Development Program on \u201CEmerging Research Trends in Computer Science and IT\u201D organized by the Bharati Vidyapeeth\u2019s Institute of Computer Applications and Management (BVICAM), New Delhi from 18th-30th  June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "11. Attended One Week Faculty Development Program on \u201COutcomes Based Education System\u201D organized by the Sreyas Institute of Engineering & Technology, from 11-15 June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "12. Attended One Week Faculty Development Program on \u201CEmbedded Systems and Wireless (IOT) Hands-on Workshop\u201D organized by the E & ICT Academy, NIT-Warangal, from 24-29 November 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "13. Attended One Week Faculty Development Program on \u201CReconfigurable Antennas and Microwave Devices\u201D conducted by Sreyas Institute of Engineering and Technology, Hyderabad on 12-18 September 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "14. Attended One Week ISTE-PTU-FDP on \u201CAdvanced Embedded System and VLSI Design & its Applications\u201D conducted by BRCM, Bahal on 16-20 June 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "15. Attended Two Week Staff Development programmed on Effective teaching & Active learning Methodology conducted by OITM, Hisar in June 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_157_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Book Chapter Published");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ", Rohit Raja, and Shilpa \u201CSatellite and Underwater Image Enhancement Using Color Correction Method for Luminance Model\u201D in Cognitive Behavior & Human Computer Interaction in Scrivener & Willey Publishing House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Swathi G., Aarti, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, ", \u201CReview on Pupil Segmentation using CNN-Region of Interest\u201D Intelligent Communication and Automation Systems, CRC Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Sai Teja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, ", C. Andy, \u201CTracking the Covid-19 Suspected Cases through Web Application\u201D Health Informatics and Technological Solutions for Coronavirus (COVID-19),  in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ", K. Rohit Kumar, \u201CAn Overview of Blockchain Technology, Architecture and Future Scope\u201D BLOCKCHAIN: Concepts, Method and Applications, in Taylor & Francis Publishing House USA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "(Scopus Accepted)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Munish Kumar and ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, ", \u201CCompression of Clinical Images Using Different Wavelet Function\u201D Artificial Intelligence and Machine Learning in 2D/3D Medical Image Processing, in Taylor & Francis Publishing House USA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Rohit Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ", Shilpa Rani and K Ramya Laxmi \u201CLung Segmentation and Nodule Detection in 3D Medical Images using Convolution Neural Network\u201D Artificial Intelligence and Machine Learning in 2D/3D Medical Image Processing, in Taylor & Francis Publishing House USA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, ", Rohit Raja, and Archana Gandham, \u201CTracking an Object using Traditional MS (Mean Shift) and CBWH MS (Mean Shift) Algorithm with Kalman filter\u201D in the Springer Nature Book Series \u201CAlgorithm For Intelligent Systems-Application of Machine Learning\u201D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, ", Sukhwinder Singh, and Jagdish Kumar, \u201CA Multiple Face Detection Using Hybrid features with SVM Classifier\u201D in the Springer Nature on Data Communication and Networks with ISBN: 978-981-13-2254-9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "(Published Scopus Indexed)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, ".\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Sandeep Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ", Vikrant Verma & Deepika (2017). Statistical Approaches in Multidisciplinary Research: A microcontroller based multimodal wheelchair prototype for the disabled. Tamil Nadu, India: Shanlax Publications Madurai, pp. 222-230 with ISBN: 978-93-86537-29-4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "sup", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "(Published National)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ".\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_158_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Workshop/ STP Attended");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1. Attended One Day workshop on MATLAB EXPO 2019 conducted by MathWorks at International Convention Center, Hyderabad, on 30th May, 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "2. Participated One Week Workshop on \u201CMachine Learning and Deep Learning for Computer Vision Applications\u201D conducted by Department of Computer Science & Engineering in Association with IEEE Student Chapter and sponsored by Chhattisgarh Council of Science & Technology, Raipur, during 6th-10th March 2019.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "3. Participated Two Week Workshop on \u201CDigital Image Processing\u201D conducted by Indian Institute of Remote Sensing (IIRS) Dehradun on 1st -15th June 2018.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "4. Participated One Day Workshop \u201CAdvances VLSI Design & Embedded System\u201D, held at Chandigarh Group of Colleges Jhanjeri, Mohali Sponsered by PTU, Jalandhar on 14th October 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "5. Participated One Week Workshop on \u201CInternet of Things\u201D conducted by Smart Bridge Education Services Pvt. Ltd and Sreyas Institute of Engineering and Technology, Hyderabad on 19-23 September 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "6. Participated in Two days Workshop on \u201CNational Science Day\u201D organized by College of Basic Science & Humanities, CCS Haryana Agricultural University, Hisar on 27\u201328 February 2017.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "7. Participated One Day National Seminar \u201CUses of Engineering in Daily Life\u201D, held at OPJS University Churu on 13th March 2016.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "8. Participated in the IEEE Xplore Digital Library Awareness Workshop held at PEC University of Technology, Chandigarh on 24th August 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "9. Attended Two days National Workshop on \u201CDevelopment of Energy Resources and Conservation\u201D organized by ME dept. at BRCM CET Bahal on 2\u20133 March 2015.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "10. Participated Two Week ISTE-Workshop on \u201CControl System\u201D conducted by IIT Kharagpur on 2nd to 12th December 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "11. Participated Two Week ISTE Workshop on \u201CSignals & Systems\u201D conducted by IIT Kharagpur on 2nd to 12th January 2014.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "12. Attended One Day Workshop on \u201CDigital Design Pathway to the Design of a Processor\u201D organized by BRCM-CET, Bahal on 27th September 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "13. Participated Two Day National Workshop on \u201CAdvanced DSP with Matlab & its applications\u201D organized by ECE dept. at BRCM CET Bahal on 23-24 August 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "14. Participated Two Week ISTE Workshop on \u201CAnalog Electronics\u201D conducted by IIT Kharagpur on 4th to 14th June 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "15. Attended One Day Workshop on \u201CEmbedded System Design & Applications\u201D organized by BRCM-CET, Bahal on 6th April 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "16. Participated Two Day Workshop ISTE Workshop on Aakash for Education conducted by IIT Bombay on 10 & 11 November 2012.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "17. Participated One Day National Workshop on \u201CModeling and Simulation using Simulink with Engineering Application\u201D organized by ECE dept. at BRCM CET Bahal on 13th Oct. 2012 sponsored by ISTE New Delhi.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "18. Participated Two-day Workshop on challenges & opportunities in Analog & Mixed Signal Design in Kurukshetra University, Kurukshetra (AMS-2010) held on 22 & 23 Feb 2010.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "19. Attended One Week QIP short course entitled \u201CMedical Signal & Image Processing\u201D Conducted by IIT Roorkee on 15-19 July 2013.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_159_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "SCI/ Scopus Communicated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1. Sandeep Kumar, Sukhwinder Singh and Jagdish Kumar \u201CHybrid Model for Age and Gender Classification Using Supervised Learning with Gabor Features\u201D in Journal of Real Time Image Processing, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "2. C. Andy Jason, Sandeep Kumar,  KMVV Prasad, \u201CEmotion Recognition from Speech using Multilayer Perceptron based on Artificial Neural Network\u201D in Springer Journal Wireless Personal Communication. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "3. Sandeep Kumar, Md Rashid Mahmood, Rohit Raja and Shilpa Choudhary, \u201CA Hybrid Method for the Removal of RVIN Using Self Organizing Migration with Adaptive Dual Threshold Median Filter\u201D in Springer Journal. (ESCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "4. Sandeep Kumar, Sukhwinder Singh, Jagdish Kumar and Shilpa Choudhary, \u201CFace Spoofing, Age, Gender and Facial Expression Recognition using Advance Neural Network Architecture based Biometric System\u201D in Applied Intelligence, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "5. Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, \u201C3D Objects Recognition & Pattern Recognition Techniques: Related Challenges and Issues\u201D in Artificial Intelligence Review, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "6. C. Andy Jason, Sandeep Kumar,  KMVV Prasad , \u201CMultilayer Neural Network based Speech Emotion Recognition for Smart Assistance\u201D Journal of Ambient Intelligence and Humanized Computing, Springer Journal. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "7. Sandeep Kumar, Sukhwinder Singh, Jagdish Kumar and Shilpa Choudhary, \u201CFacial Expression, Age and Gender Recognition using Seg-Net and Alex-Net Architecture\u201D in Neural Processing Letter, Springer Journal (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "8.  Shilpa Choudhary, Kamlesh Lakhwani and Sandeep Kumar, \u201C2D Objects Recognition & Pattern Recognition Techniques\u201D in Sensing and Imaging, Springer Journal. (ESCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "9. Sandeep Kumar and A, KMVV Prasad, \u201CObject based Image Retrieval using U-Net based Neural Network\u201D in Springer Journal. (SCI-Communicated).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_160_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Ph.D./ M.Tech Supervisor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n            website under construction. Coming soon!\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_pre_161_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "UGC Journal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "1.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Sandeep Kumar, Suryam Gurram and Mani Krishna Bollam, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u201CSmart Home With Sun Tracking Solar Panel\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, ", in Journal of Emerging Technologies and Innovative Research, Vol. 6, No. 6, pp. 540-546, 2019 with ISSN-2349-5162.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "2.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Sandeep Kumar, A.Sony, Rahul Hooda and Prof. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u201CMultimodal Biometric Authentication System for Automatic Certificate Generation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, ", in Journal of Advances and Scholarly Researches in Allied Education, Vol. 16, No. 3, pp. 35-41, 2019 with ISSN 2230-7540.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "3.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Sandeep Kumar, Sony. Alam and Mounika.Nelanti, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\u201CA Study on Smart Home Automation Based on IOT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 37-43,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "4.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Sandeep Kumar, Sruthi, Suma and Vamshi Dhar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\u201CA Study on Solar/Wind Hybrid Energy Harvesting For Super Capacitor-Based Embedded System\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 44-47,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "5.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Sandeep Kumar, Aliasgar Hussain, G. Sravani and Annem Srivarshini, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\u201CA Study on Various Health Parameters Monitoring Using PPG Sensor\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 48-52,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "6.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Sandeep Kumar and Sai Anirudh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "\u201CSmart Baby Cradle Using Arduino and IoT\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " in the International Journal of Advance and Innovative Research, Vol. 5, No. 1, pp. 53-59,  January - March 2018 with ISSN: 2394-7780.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "7.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Sandeep Kumar, Ravali, Joshna Rani, Sai Kiran, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\u201CA Study on Child Safety Wearable Devices\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, ", in International Journal of Creative Research Thoughts, Vol. 6, No. 1, pp. 603-606, 2018 with ISSN: 2320-2882.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "8.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Hemlata Dalmia & Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "\u201CFPGA Implementation of 16-Point FFT Algorithm Using Digital Signal Processing\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, ", In International Journal of Scientific Research and Modern Education, Vol. 3, No. 1, pp. 10-15, 2018 with ISSN: 2538-4155.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "9.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Sandeep Kumar & Hemlata Dalmia, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\u201CA Study on Internet of Things Applications and Related Issues\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, ", In International Journal of Applied and Advanced Scientific Research, Vol. 2, No. 2, pp. 273-277, 2018 with ISSN: 2456-3080.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "10.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Kumari K. Meena, Sandeep Kumar, and B. Sreenivasu. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\"Health Care System by Monitoring the Patient Health Using IOT and GSM.\"");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " In International Journal of Advanced Research in Electronics and Communication, Vol. 6, No. 11, pp.1218.-.1223, Nov-2017 with ISSN: 2278-909X.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "11.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Munish Kumar and Sandeep Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "\u201CAdvance Card Locking System using Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " in International Journal of  Recent Research Aspects, Vol. 4, No. 2, pp. 28-30, 2017 with ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "12.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Sandeep Kumar, Munish Kumar, Rashid & Neha Agrawal, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "\u201CA Comparative Analysis On Image Denoising Using Different Median Filter Methods\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " International Journal for Research in Applied Science & Engineering Technology (IJRASET), Vol. 5, No 8, pp. 231-239, 2017 with ISSN: 2321-9653.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "13.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " Sandeep Kumar, Sukhwinder Singh & Jagdish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\u201CAutomatic Face Detection Using Genetic Algorithm for Various Challenges\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ", International Journal of Scientific Research and Modern Education, Vol. 2, No 1, Page Number 197-203, 2017 with ISSN: 2538-4155.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "14.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " Sandeep Kumar, Deepika & Munish Kumar, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\u201Cf\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, ", International Journal of Engineering Research and Modern Education, Vol. 2, No 1, Page Number 176-181, 2017 with ISSN: 2455 - 4200.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "15.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Sandeep Kumar and Prof. Dr. Yashpal Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\u201CApplication of Power Wheelchairs for Pediatric Users for Rehabilitation\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " in International Journal of IT, Engineering and Applied Science Research, Vol 5, No 8, pp. 16-21, August 2016 with ISSN: 2319-4413.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "16.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " Sandeep Kumar and Sukhwinder Singh, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "\u201CStudy of Electromagnetic Pulse Attack on Electronic Circuits and Hardening Strategies\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " in International Journal of Recent Research Aspects, Vol. 2, No. 4, pp. 10-14, December 2015, with ISSN: 2349 7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "17.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " Sandeep Kumar and P. Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "\u201CUltrasonic Sensor with Accelerometer Based Smart Wheel Chair Using Microcontroller\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " In International Research Journal of Engineering and Technology (IRJET) Vol. 2, No. 9, pp. 537-541, December-2015 with e-ISSN: 2395 -0056.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "b", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "18.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " Sandeep Kumar and P. Raja, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "b", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\u201CStudy on Smart Wheelchair-based on Microcontroller for Physically Disabled Persons\u201D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " in International Journal of Recent Research Aspects Vol. 2, No., pp. 97-103, December 2015 with ISSN: 2349-7688.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 195,
      vars: 21,
      consts: [["role", "main", 1, "content"], [2, "float", "left"], ["src", "../assets/jiju.png"], [2, "float", "left", "padding", "15px 0px 0px 20px", "line-height", "28px", "color", "#444"], [2, "margin-bottom", "0px", "line-height", "0px"], ["type", "hidden"], ["selection", ""], [1, "custom-flex-container"], [1, "flex-item-left"], ["tabindex", "0", 1, "card", "card-custom", 3, "click"], [1, "text"], [1, "count"], ["tabindex", "01", 1, "card", "card-custom", 3, "click"], ["tabindex", "02", 1, "card", "card-custom", 3, "click"], [1, "text", 2, "width", "50%", "font-size", "14px", "font-weight", "normal"], [1, "count", 2, "width", "50%", "font-size", "15px"], ["tabindex", "03", 1, "card", "card-custom", 3, "click"], ["tabindex", "04", 1, "card", "card-custom", 3, "click"], ["tabindex", "05", 1, "card", "card-custom", 3, "click"], ["tabindex", "06", 1, "card", "card-custom", 3, "click"], ["tabindex", "07", 1, "card", "card-custom", 3, "click"], ["tabindex", "08", 1, "card", "card-custom", 3, "click"], ["tabindex", "09", 1, "card", "card-custom", 3, "click"], ["tabindex", "10", 1, "card", "card-custom", 3, "click"], ["tabindex", "11", 1, "card", "card-custom", 3, "click"], ["tabindex", "12", 1, "card", "card-custom", 3, "click"], ["tabindex", "13", 1, "card", "card-custom", 3, "click"], ["tabindex", "14", 1, "card", "card-custom", 3, "click"], ["tabindex", "15", 1, "card", "card-custom", 3, "click"], ["tabindex", "16", 1, "card", "card-custom", 3, "click"], ["tabindex", "17", 1, "card", "card-custom", 3, "click"], ["tabindex", "18", 1, "card", "card-custom", 3, "click"], ["tabindex", "19", 1, "card", "card-custom", 3, "click"], ["tabindex", "20", 1, "card", "card-custom", 3, "click"], [1, "flex-item-right"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "card-container"], ["title", "We less than 3 people who code", "href", "https://stackoverflow.com/users/5316868/deepak-ranolia", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/stack-overflow.svg", "alt", "stackoverflow svg icon", "width", "21.813", "height", "23.453"], ["title", "Get more done with Gmail", "href", "mailto:er.sandeepsahratia@gmail.com", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/gmail.svg", "alt", "gmail svg icon", "width", "21.813", "height", "23.453"], ["title", "Built for developers", "href", "https://github.com/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/github.svg", "alt", "github svg icon", "width", "21.813", "height", "23.453"], ["title", "node package manager", "href", "https://www.npmjs.com/package/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/npm.svg", "alt", "node package manager icon", "width", "21.813", "height", "23.453"], ["title", "Helps you connect and share with the people in your life", "href", "https://www.facebook.com//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/facebook.svg", "alt", "facebook svg icon", "width", "21.813", "height", "23.453"], ["title", "Bringing you closer to the people and things you love", "href", "https://www.instagram.com//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/instagram.svg", "alt", "instagram svg icon", "width", "21.813", "height", "23.453"], ["title", "Best of Behance", "href", "https://www.behance.net/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/behance.svg", "alt", "behance svg icon", "width", "21.813", "height", "23.453"], ["title", "Dive deeper on topics that matter to you", "href", "https://medium.com/@", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/medium.svg", "alt", "medium svg icon", "width", "21.813", "height", "23.453"], ["title", "Make the most of your professional life", "href", "https://www.linkedin.com/in//", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/linkedin.svg", "alt", "linkedin svg icon", "width", "21.813", "height", "23.453"], ["title", "See what\u2019s happening in the world right now", "href", "https://twitter.com/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["loading", "lazy", "src", "../assets/social-media/twitter.svg", "alt", "twitter svg icon", "width", "21.813", "height", "23.453"], [1, "github-star-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], [1, "base-heading"], [1, "grey"], [1, "base-heading", "red"], [1, "blue"], [1, "red"], [1, "green"], [1, "orange"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Dr. Sandeep Kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "er.sandeepsahratia@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "+ 91 - 9813427591, +91 - 8247322147 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Google Scholar Link: https://scholar.google.co.in/citations?user=DFWhZ7UAAAAJ&hl=en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Scopus Link: https://www.scopus.com/authid/detail.uri?authorId=57220592142 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "OBJECTIVE/ PROFILE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Aiming to achieve a challenging and professional position from where I can make a significant contribution to your organization in the form of my dedication by using all my skills and knowledge but also enhances my technical and creative skills and drives me towards a challenging career.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "00";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Total Experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "01";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "SCI/Scopus Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "02";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Professional Qualifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "B.Tech, M.Tech, Ph.D, Post Doc*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "03";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Foreign Conference Paper Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "04";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Number of Patents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Granted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "05";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Other Conferences Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "06";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Patent Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "07";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Conference/ FDP/ Workshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Conducted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "08";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Funded Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Applied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "09";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Reviewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "10";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Guest Invited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "11";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Editorial Board Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "12";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Awards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_99_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "13";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Professional Society");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "14";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Book Published/ Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "03 / 04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "15";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "FDP Attended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_114_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "16";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Book Chapter Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_119_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "17";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Workshop/ STP Attended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_124_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "18";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "SCI/Scopus Communicated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_129_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "19";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Ph.D/ M.Tech Supervisor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "05* / 22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_134_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            return _r0.value = "20";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "UGC Journal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](141, HomeComponent_pre_141_Template, 47, 0, "pre", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](142, HomeComponent_pre_142_Template, 309, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](143, HomeComponent_pre_143_Template, 100, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](144, HomeComponent_pre_144_Template, 68, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](145, HomeComponent_pre_145_Template, 62, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](146, HomeComponent_pre_146_Template, 6, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](147, HomeComponent_pre_147_Template, 139, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](148, HomeComponent_pre_148_Template, 73, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](149, HomeComponent_pre_149_Template, 32, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](150, HomeComponent_pre_150_Template, 119, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](151, HomeComponent_pre_151_Template, 63, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](152, HomeComponent_pre_152_Template, 83, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](153, HomeComponent_pre_153_Template, 81, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](154, HomeComponent_pre_154_Template, 138, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](155, HomeComponent_pre_155_Template, 87, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](156, HomeComponent_pre_156_Template, 66, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](157, HomeComponent_pre_157_Template, 111, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, HomeComponent_pre_158_Template, 82, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](159, HomeComponent_pre_159_Template, 42, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](160, HomeComponent_pre_160_Template, 6, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](161, HomeComponent_pre_161_Template, 167, 0, "pre", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Get In Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Grab a coffee mixed with experimental taste anytime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "svg", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " Dr. Sandeep Kumar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", _r0.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "05");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "06");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "08");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "20");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".card-custom[_ngcontent-%COMP%] {\n  line-height: 20px;\n  padding: 5px 12px;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: 500;\n}\n.card-custom[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n  opacity: 1;\n  box-shadow: 5px 2px 10px #aaa;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #222;\n  width: 25%;\n  float: left;\n  padding-left: 5px;\n}\n.text[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  width: 75%;\n  font-size: 14px;\n  color: #009bbf;\n}\n.text[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  color: #f44;\n  display: block;\n}\n.grey[_ngcontent-%COMP%] {\n  color: #888;\n}\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n.orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n.base-heading[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 0px;\n}\n.blue[_ngcontent-%COMP%] {\n  color: #007ad1;\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  color: #f44;\n}\n.custom-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.flex-item-left[_ngcontent-%COMP%] {\n  flex: 25%;\n}\n.flex-item-right[_ngcontent-%COMP%] {\n  flex: 75%;\n}\n\n@media (max-width: 800px) {\n  .custom-flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbGxlZ2VvdXQvRG93bmxvYWRzL2dpaHViL2RlZXBhay1yYW5vbGlhL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0VSO0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjtBREZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNJUjtBRERBO0VBQ0ksV0FBQTtBQ0lKO0FERkE7RUFDSSxZQUFBO0FDS0o7QURIQTtFQUNJLGFBQUE7QUNNSjtBREpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDT0o7QURMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDUUo7QUROQTtFQUNJLFdBQUE7QUNTSjtBRE5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1NKO0FETkE7RUFFSSxTQUFBO0FDUUo7QURMQTtFQUVJLFNBQUE7QUNPSjtBREpBLCtFQUFBO0FBQ0E7RUFDSTtJQUNJLHNCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWN1c3RvbSB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3gtc2hhZG93OjVweCAycHggMTBweCAjYWFhO1xuICAgIH1cbn1cbi5jb3VudCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi50ZXh0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDA5YmJmO1xuICAgICYgc3VwIHtcbiAgICAgICAgY29sb3I6ICNmNDQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi5ncmV5IHtcbiAgICBjb2xvcjogIzg4ODtcbn1cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cbi5iYXNlLWhlYWRpbmcge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5ibHVlIHtcbiAgICBjb2xvcjogIzAwN2FkMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVkIHtcbiAgICBjb2xvcjogI2Y0NDtcbn1cblxuLmN1c3RvbS1mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtLWxlZnQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgZmxleDogMjUlO1xufVxuXG4uZmxleC1pdGVtLXJpZ2h0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICAgIGZsZXg6IDc1JTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIG9uZSBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgdHdvLWNvbHVtbiBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jdXN0b20tZmxleC1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn0iLCIuY2FyZC1jdXN0b20ge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcmQtY3VzdG9tOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogNXB4IDJweCAxMHB4ICNhYWE7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnRleHQge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwOWJiZjtcbn1cbi50ZXh0IHN1cCB7XG4gIGNvbG9yOiAjZjQ0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyZXkge1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhc2UtaGVhZGluZyB7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMwMDdhZDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZjQ0O1xufVxuXG4uY3VzdG9tLWZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0tbGVmdCB7XG4gIGZsZXg6IDI1JTtcbn1cblxuLmZsZXgtaXRlbS1yaWdodCB7XG4gIGZsZXg6IDc1JTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIG9uZSBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgdHdvLWNvbHVtbiBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY3VzdG9tLWZsZXgtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
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

    HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HomeModule
    });
    HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
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