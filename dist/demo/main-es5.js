(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\WORK\ARC\angular-uopyyk\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1VHI":
    /*!************************************!*\
      !*** ./src/app/hello.component.ts ***!
      \************************************/

    /*! exports provided: HelloComponent */

    /***/
    function VHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: "<h1>Hello {{name}}!</h1>",
        styles: ["h1 { font-family: Lato; }"]
      })], HelloComponent);
      /***/
    },

    /***/
    "4WHN":
    /*!**************************************************!*\
      !*** ./src/app/signature/signature.component.ts ***!
      \**************************************************/

    /*! exports provided: SignatureComponent */

    /***/
    function WHN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureComponent", function () {
        return SignatureComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signature_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signature.component.html */
      "x00y");
      /* harmony import */


      var _signature_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signature.component.css */
      "Err0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");

      var SignatureComponent = /*#__PURE__*/function () {
        function SignatureComponent() {
          _classCallCheck(this, SignatureComponent);

          this.showSignPad = true;
          this.showSignImage = false;
          this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 5,
            canvasWidth: 500,
            canvasHeight: 300
          };
        }

        _createClass(SignatureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // this.signaturePad is now available
            this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime

            this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad.toDataURL());
            this.imagePath = this.signaturePad.toDataURL();
            this.showSignPad = false;
            this.showSignImage = true;
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log("begin drawing");
          }
        }, {
          key: "onSaveHandler",
          value: function onSaveHandler(data) {
            console.log(data);
          }
        }, {
          key: "onClearHandler",
          value: function onClearHandler() {
            console.log("On Clear click");
          }
        }, {
          key: "retrySignature",
          value: function retrySignature() {
            this.showSignPad = true;
            this.showSignImage = false;
          }
        }]);

        return SignatureComponent;
      }();

      SignatureComponent.ctorParameters = function () {
        return [];
      };

      SignatureComponent.propDecorators = {
        signaturePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePad"]]
        }]
      };
      SignatureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "signature",
        template: _raw_loader_signature_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signature_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignatureComponent);
      /***/
    },

    /***/
    "9gg6":
    /*!*****************************************************!*\
      !*** ./src/app/pdf-viewer/pdf-viewer.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function gg6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZGYtdmlld2VyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    "Err0":
    /*!***************************************************!*\
      !*** ./src/app/signature/signature.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Err0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduYXR1cmUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "OOAe":
    /*!****************************************!*\
      !*** ./src/app/draggable.directive.ts ***!
      \****************************************/

    /*! exports provided: DraggableDirective */

    /***/
    function OOAe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
        return DraggableDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! interactjs */
      "UBTA");
      /* harmony import */


      var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);

      var DraggableDirective = /*#__PURE__*/function () {
        function DraggableDirective(element) {
          _classCallCheck(this, DraggableDirective);

          this.element = element;
          this.draggableClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.currentlyDragged = false;
        }

        _createClass(DraggableDirective, [{
          key: "onClick",
          value: function onClick(event) {
            if (!this.currentlyDragged) {
              this.draggableClick.emit();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            interactjs__WEBPACK_IMPORTED_MODULE_2___default()(this.element.nativeElement).draggable({
              // enable inertial throwing
              inertia: true,
              // keep the element within the area of it's parent
              modifiers: [interactjs__WEBPACK_IMPORTED_MODULE_2___default.a.modifiers.restrictRect({
                //restriction: 'parent',
                endOnly: true
              })],
              // enable autoScroll
              autoScroll: true,
              listeners: {
                // call this function on every dragmove event
                move: this.dragMoveListener,
                // call this function on every dragend event
                end: function end(event) {}
              }
            });
          }
        }, {
          key: "dragMoveListener",
          value: function dragMoveListener(event) {
            var target = event.target; // keep the dragged position in the data-x/data-y attributes

            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy; // translate the element

            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; // update the posiion attributes

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        }]);

        return DraggableDirective;
      }();

      DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      DraggableDirective.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggableClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }]
      };
      DraggableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDraggable]'
      })], DraggableDirective);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.name = "Lmis";
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<hello name=\"{{ name }}\"></hello>\n<div appDroppable [options]=\"{ accept: '.drag-me' }\" >\n<p>\n  Testing signature :-)\n</p>\n<h2>Signature:</h2>\n</div>\n<signature></signature>\n\n<div>\n  <app-pdf-viewer></app-pdf-viewer>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");
      /* harmony import */


      var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-pdfjs-viewer */
      "p7x7");
      /* harmony import */


      var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-extended-pdf-viewer */
      "ARaq");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hello.component */
      "1VHI");
      /* harmony import */


      var _signature_signature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./signature/signature.component */
      "4WHN");
      /* harmony import */


      var _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pdf-viewer/pdf-viewer.component */
      "ul+H");
      /* harmony import */


      var _draggable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./draggable.directive */
      "OOAe");
      /* harmony import */


      var _droppable_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./droppable.directive */
      "eosy");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"], ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfJsViewerModule"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxExtendedPdfViewerModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"], _signature_signature_component__WEBPACK_IMPORTED_MODULE_9__["SignatureComponent"], _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_10__["PdfViewerComponent"], _draggable_directive__WEBPACK_IMPORTED_MODULE_11__["DraggableDirective"], _droppable_directive__WEBPACK_IMPORTED_MODULE_12__["DroppableDirective"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eosy":
    /*!****************************************!*\
      !*** ./src/app/droppable.directive.ts ***!
      \****************************************/

    /*! exports provided: DroppableDirective */

    /***/
    function eosy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DroppableDirective", function () {
        return DroppableDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var interactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! interactjs */
      "UBTA");
      /* harmony import */


      var interactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_2__);

      var DroppableDirective = /*#__PURE__*/function () {
        function DroppableDirective(elementRef) {
          _classCallCheck(this, DroppableDirective);

          this.elementRef = elementRef;
          this.dropping = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DroppableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // enable draggables to be dropped into this
            interactjs__WEBPACK_IMPORTED_MODULE_2___default()(this.elementRef.nativeElement).dropzone({
              // only accept elements matching this CSS selector
              accept: '.drag-me',
              // Require a 75% element overlap for a drop to be possible
              // overlap: 0.75,
              // listen for drop related events:
              ondropactivate: function ondropactivate(event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active');
              },
              ondragenter: function ondragenter(event) {
                var draggableElement = event.relatedTarget;
                var dropzoneElement = event.target; // feedback the possibility of a drop

                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop'); //draggableElement.textContent = 'Dragged in'
              },
              ondragleave: function ondragleave(event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop'); //event.relatedTarget.textContent = 'Dragged out'
              },
              ondrop: function ondrop(event) {//event.relatedTarget.textContent = 'Dropped'
              },
              ondropdeactivate: function ondropdeactivate(event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
              }
            });
          }
        }]);

        return DroppableDirective;
      }();

      DroppableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      DroppableDirective.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dropping: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      DroppableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDroppable]'
      })], DroppableDirective);
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "k2La":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdf-viewer/pdf-viewer.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function k2La(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  pdf-viewer works!\n</p>\n<div appDroppable [options]=\"{ accept: '.drag-me' }\"\n  style=\"width: 300; height: 300;border:1px solid black;padding: 30px;\">\n  <p>drag signature here:</p>\n  <br />\n  <hr />\n  <ng2-pdfjs-viewer pdfSrc=\"http://res.cloudinary.com/dze7ap73i/image/upload/v1619984699/purchase-order-form-for-free-download_znmojw.pdf\"></ng2-pdfjs-viewer>\n    <br />\n  <hr />\n  <ngx-extended-pdf-viewer\n  [src]=\"'http://res.cloudinary.com/dze7ap73i/image/upload/v1619984699/purchase-order-form-for-free-download_znmojw.pdf'\"\n  useBrowserLocale=\"true\"\n  height=\"80vh\">\n</ngx-extended-pdf-viewer>\n</div>";
      /***/
    },

    /***/
    "ul+H":
    /*!****************************************************!*\
      !*** ./src/app/pdf-viewer/pdf-viewer.component.ts ***!
      \****************************************************/

    /*! exports provided: PdfViewerComponent */

    /***/
    function ulH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfViewerComponent", function () {
        return PdfViewerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_viewer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-viewer.component.html */
      "k2La");
      /* harmony import */


      var _pdf_viewer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pdf-viewer.component.css */
      "9gg6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PdfViewerComponent = /*#__PURE__*/function () {
        function PdfViewerComponent() {
          _classCallCheck(this, PdfViewerComponent);

          this.pdfSrc = "https://res.cloudinary.com/dze7ap73i/image/upload/v1619984699/purchase-order-form-for-free-download_znmojw.pdf";
        }

        _createClass(PdfViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PdfViewerComponent;
      }();

      PdfViewerComponent.ctorParameters = function () {
        return [];
      };

      PdfViewerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-viewer',
        template: _raw_loader_pdf_viewer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pdf_viewer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PdfViewerComponent);
      /***/
    },

    /***/
    "x00y":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signature/signature.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function x00y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"showSignPad\" style=\"border:1px solid black;\">\n  <signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"\n    (onSave)=\"onSaveHandler($event)\" (onClear)=\"onClearHandler()\">\n  </signature-pad>\n</div>\n\n<div *ngIf=\"showSignImage\" style=\"border:1px solid black;\">\n  <div class=\"drag-me\" appDraggable>\n    <img [src]=\"imagePath\" width=\"200\" height=\"200\" />\n  </div>\n  <button (click)=\"retrySignature()\">RETRY</button>\n</div>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map