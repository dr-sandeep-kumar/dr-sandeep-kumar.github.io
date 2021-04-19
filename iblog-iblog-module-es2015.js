(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iblog-iblog-module"],{

/***/ "./src/app/iblog/iblog-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/iblog/iblog-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IblogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IblogRoutingModule", function() { return IblogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iblog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iblog.component */ "./src/app/iblog/iblog.component.ts");





const routes = [
    { path: '', component: _iblog_component__WEBPACK_IMPORTED_MODULE_2__["IblogComponent"] }
];
class IblogRoutingModule {
}
IblogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IblogRoutingModule });
IblogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IblogRoutingModule_Factory(t) { return new (t || IblogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IblogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IblogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/iblog/iblog.component.ts":
/*!******************************************!*\
  !*** ./src/app/iblog/iblog.component.ts ***!
  \******************************************/
/*! exports provided: IblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IblogComponent", function() { return IblogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_middle_mblog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/middle/mblog.service */ "./src/app/services/middle/mblog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class IblogComponent {
    constructor(midBlog, route, sanitizer) {
        this.midBlog = midBlog;
        this.route = route;
        this.sanitizer = sanitizer;
        this.index = JSON.parse(this.route.snapshot.paramMap.get('i'));
        this.unBlogs = this.midBlog.emitBlogs.subscribe(cmp => {
            this.blogs = cmp;
            this.row = this.blogs.filter(fl => fl.id === this.index)[0];
            // const val: any = this.sanitizer.bypassSecurityTrustResourceUrl(this.row.html);
            this.row.html = this.sanitizer.bypassSecurityTrustHtml(this.row.html);
        });
    }
    // this.getInnerHTML(this.row.html)
    // getInnerHTML(val){
    //   return this.sanitizer.bypassSecurityTrustHtml(val);
    // }
    ngOnInit() {
        this.midBlog.blog();
    }
    shareButton(blog) {
        const blogName = blog.h5.split(' ').join('-');
        const winNavigator = window.navigator;
        if (winNavigator.share) {
            // Web Share API is supported
            // document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href
            winNavigator.share({
                // title: blog.h5,
                url: `https://offline-pixel.github.io/blogs/${blogName}:i=${this.index}`
            }).then(() => {
                console.log('Thanks for sharing! however, it"s unconfirmed');
            })
                .catch(console.error);
        }
        else {
            alert('Your browser does not support sharing at this time.');
        }
    }
    ngOnDestroy() {
        this.unBlogs.unsubscribe();
    }
}
IblogComponent.ɵfac = function IblogComponent_Factory(t) { return new (t || IblogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_middle_mblog_service__WEBPACK_IMPORTED_MODULE_1__["MblogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
IblogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IblogComponent, selectors: [["app-iblog"]], decls: 15, vars: 4, consts: [["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], ["width", "40%", 3, "src", "alt"], [1, "card-container", "reader", 3, "innerHTML"], [1, "card-container", "reader", "share"], [1, "share-icon-para"], ["src", "../../assets/share.png", "alt", "share icon", "width", "24", 3, "click"]], template: function IblogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Share this blog now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IblogComponent_Template_img_click_13_listener() { return ctx.shareButton(ctx.row); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.row == null ? null : ctx.row.h5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.row == null ? null : ctx.row.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.row == null ? null : ctx.row.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.row == null ? null : ctx.row.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".share-icon-para[_ngcontent-%COMP%] {\n  margin: 0px 11px;\n  width: 38px;\n  border-radius: 31px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.35);\n  padding-top: 0px;\n  position: relative;\n  top: -5px;\n}\n.share-icon-para[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 7px 0 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvbGxlZ2VvdXQvRG93bmxvYWRzL2dpaHViL2RlZXBhay1yYW5vbGlhL3NyYy9hcHAvaWJsb2cvaWJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2libG9nL2libG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9pYmxvZy9pYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZS1pY29uLXBhcmEge1xuICAgIG1hcmdpbjogMHB4IDExcHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMzUpO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTVweDtcbiAgICAmIGltZyB7XG4gICAgICAgIG1hcmdpbjogN3B4IDAgMHB4IDVweDtcbiAgICB9XG59IiwiLnNoYXJlLWljb24tcGFyYSB7XG4gIG1hcmdpbjogMHB4IDExcHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cbi5zaGFyZS1pY29uLXBhcmEgaW1nIHtcbiAgbWFyZ2luOiA3cHggMCAwcHggNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IblogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iblog',
                templateUrl: './iblog.component.html',
                styleUrls: ['./iblog.component.scss']
            }]
    }], function () { return [{ type: _services_middle_mblog_service__WEBPACK_IMPORTED_MODULE_1__["MblogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/iblog/iblog.module.ts":
/*!***************************************!*\
  !*** ./src/app/iblog/iblog.module.ts ***!
  \***************************************/
/*! exports provided: IblogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IblogModule", function() { return IblogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iblog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iblog-routing.module */ "./src/app/iblog/iblog-routing.module.ts");
/* harmony import */ var _iblog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iblog.component */ "./src/app/iblog/iblog.component.ts");





class IblogModule {
}
IblogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IblogModule });
IblogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IblogModule_Factory(t) { return new (t || IblogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _iblog_routing_module__WEBPACK_IMPORTED_MODULE_2__["IblogRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IblogModule, { declarations: [_iblog_component__WEBPACK_IMPORTED_MODULE_3__["IblogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _iblog_routing_module__WEBPACK_IMPORTED_MODULE_2__["IblogRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IblogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iblog_component__WEBPACK_IMPORTED_MODULE_3__["IblogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _iblog_routing_module__WEBPACK_IMPORTED_MODULE_2__["IblogRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=iblog-iblog-module-es2015.js.map