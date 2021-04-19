function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/http/blog.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/http/blog.service.ts ***!
    \***********************************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppServicesHttpBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http; // url = 'http://localhost:4200/';

        this.url = 'https://offline-pixel.github.io/';
      }

      _createClass(BlogService, [{
        key: "HttpEventResponse",
        value: function HttpEventResponse(event) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].DownloadProgress:
              var loaded = Math.round(event.loaded / 1024);
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
              return event.body;
          }
        }
      }, {
        key: "sBlog",
        value: function sBlog() {
          var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.url + 'assets/json/blog.json', {
            reportProgress: true
          });
          return this.http.request(request);
        }
      }]);

      return BlogService;
    }();

    BlogService.ɵfac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/middle/mblog.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/middle/mblog.service.ts ***!
    \**************************************************/

  /*! exports provided: MblogService */

  /***/
  function srcAppServicesMiddleMblogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MblogService", function () {
      return MblogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _http_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../http/blog.service */
    "./src/app/services/http/blog.service.ts");

    var MblogService = /*#__PURE__*/function () {
      function MblogService(httpBlog) {
        _classCallCheck(this, MblogService);

        this.httpBlog = httpBlog;
        this.emitBlogs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MblogService, [{
        key: "blog",
        value: function blog() {
          var _this = this;

          // if (this.cacheBlogs){
          //   console.log('2');
          //   this.emitBlogs.emit(this.cacheBlogs);
          //   return;
          // }
          this.httpBlog.sBlog().subscribe(function (event) {
            var _api = _this.httpBlog.HttpEventResponse(event);

            if (event.type === 4) {
              // console.log('1');
              _this.cacheBlogs = _api;

              _this.emitBlogs.emit(_api);
            }
          });
        }
      }]);

      return MblogService;
    }();

    MblogService.ɵfac = function MblogService_Factory(t) {
      return new (t || MblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]));
    };

    MblogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MblogService,
      factory: MblogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MblogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _http_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map