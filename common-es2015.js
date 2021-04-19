(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/http/blog.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/blog.service.ts ***!
  \***********************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BlogService {
    constructor(http) {
        this.http = http;
        // url = 'http://localhost:4200/';
        this.url = 'https://offline-pixel.github.io/';
    }
    HttpEventResponse(event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].DownloadProgress:
                const loaded = Math.round(event.loaded / 1024);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return event.body;
        }
    }
    sBlog() {
        const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.url + 'assets/json/blog.json', { reportProgress: true });
        return this.http.request(request);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/middle/mblog.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/middle/mblog.service.ts ***!
  \**************************************************/
/*! exports provided: MblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MblogService", function() { return MblogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/blog.service */ "./src/app/services/http/blog.service.ts");



class MblogService {
    constructor(httpBlog) {
        this.httpBlog = httpBlog;
        this.emitBlogs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    blog() {
        // if (this.cacheBlogs){
        //   console.log('2');
        //   this.emitBlogs.emit(this.cacheBlogs);
        //   return;
        // }
        this.httpBlog.sBlog().subscribe((event) => {
            let _api = this.httpBlog.HttpEventResponse(event);
            if (event.type === 4) {
                // console.log('1');
                this.cacheBlogs = _api;
                this.emitBlogs.emit(_api);
            }
        });
    }
}
MblogService.ɵfac = function MblogService_Factory(t) { return new (t || MblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
MblogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MblogService, factory: MblogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MblogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map