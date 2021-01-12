(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/image_css_magic/image_css_magic/src/main.ts */"zUnb");


/***/ }),

/***/ "0r8y":
/*!****************************************************!*\
  !*** ./src/app/auto-scale/auto-scale.component.ts ***!
  \****************************************************/
/*! exports provided: AutoScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScaleComponent", function() { return AutoScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _value_or_default_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value-or-default.pipe */ "Z9H9");



const _c0 = ["*"];
class AutoScaleComponent {
    constructor() {
        this.width = 100;
        this.height = 100;
    }
    ngOnInit() {
    }
}
AutoScaleComponent.ɵfac = function AutoScaleComponent_Factory(t) { return new (t || AutoScaleComponent)(); };
AutoScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoScaleComponent, selectors: [["app-auto-scale"]], hostVars: 4, hostBindings: function AutoScaleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--zoom_out_width", ctx.width, "px")("--zoom_out_height", ctx.height, "px");
    } }, inputs: { width: "width", height: "height" }, ngContentSelectors: _c0, decls: 6, vars: 10, consts: [[1, "zoom_out_parent"], [1, "zoom_out"], ["zoomOutElement", ""]], template: function AutoScaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "valueOrDefault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "valueOrDefault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--scale-width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx.width / _r0.scrollWidth, 1))("--scale-height", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 7, ctx.height / _r0.scrollHeight, 1));
    } }, pipes: [_value_or_default_pipe__WEBPACK_IMPORTED_MODULE_1__["ValueOrDefaultPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: var(--zoom_out_height);\n  width: var(--zoom_out_width);\n}\n\n.zoom_out_parent[_ngcontent-%COMP%] {\n  resize: both;\n  position: relative;\n  height: var(--zoom_out_height);\n  width: var(--zoom_out_width);\n  overflow: hidden;\n}\n\n.zoom_out[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(min(var(--scale-width), var(--scale-height)));\n  transform-origin: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dG8tc2NhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvRkFBQTtFQUlBLCtCQUFBO0FBTEYiLCJmaWxlIjoiYXV0by1zY2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaGVpZ2h0OiB2YXIoLS16b29tX291dF9oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tem9vbV9vdXRfd2lkdGgpO1xufVxuXG5cbi56b29tX291dF9wYXJlbnQge1xuICByZXNpemU6IGJvdGg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS16b29tX291dF9oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tem9vbV9vdXRfd2lkdGgpO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi56b29tX291dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZShtaW4oXG4gICAgdmFyKC0tc2NhbGUtd2lkdGgpLFxuICAgIHZhcigtLXNjYWxlLWhlaWdodClcbiAgKSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auto-scale',
                templateUrl: './auto-scale.component.html',
                styleUrls: ['./auto-scale.component.scss']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--zoom_out_width.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.--zoom_out_height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J8xh":
/*!************************************!*\
  !*** ./src/app/array-sort-pipe.ts ***!
  \************************************/
/*! exports provided: ArraySortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySortPipe", function() { return ArraySortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArraySortPipe {
    transform(array, field) {
        if (!Array.isArray(array)) {
            return array;
        }
        const newArray = [...array];
        newArray.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return newArray;
    }
}
ArraySortPipe.ɵfac = function ArraySortPipe_Factory(t) { return new (t || ArraySortPipe)(); };
ArraySortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: ArraySortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArraySortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "sort"
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-to-image */ "53SV");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JSONCrush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSONCrush */ "sSQm");
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array-sort-pipe */ "J8xh");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _auto_scale_auto_scale_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auto-scale/auto-scale.component */ "0r8y");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");




















const _c0 = ["targetImage"];
const _c1 = ["canvasElement"];
const _c2 = ["holdingElement"];
function AppComponent_ng_container_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_34_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.enabled = $event; })("change", function AppComponent_ng_container_34_div_1_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.updateList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_34_div_1_Template_input_ngModelChange_7_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.value = $event; })("change", function AppComponent_ng_container_34_div_1_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.updateList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_34_div_1_Template_input_ngModelChange_11_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.order = $event; })("change", function AppComponent_ng_container_34_div_1_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.updateList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cssFilterEntry_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cssFilterEntry_r7.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cssFilterEntry_r7.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cssFilterEntry_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", cssFilterEntry_r7.order);
} }
function AppComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_container_34_div_1_Template, 12, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filterArray_r5 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", filterArray_r5)("ngForTrackBy", ctx_r4.trackByFilter);
} }
const DEFAULT_OPTIONS_STATE = {
    useMask: true,
    opacity: 50,
    useCustomCssBelowImage: false,
    useCustomCssAboveImage: false,
    customCssBelowImage: '  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);',
    customCssAboveImage: '  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);',
};
function createDefaultCssFilters() {
    let order = 0;
    const enabled = false;
    return [
        {
            type: 'hue-rotate',
            value: '90deg',
            order: order++,
            enabled
        },
        {
            type: 'grayscale',
            value: '70%',
            order: order++,
            enabled
        },
        {
            type: 'blur',
            value: '5px',
            order: order++,
            enabled
        },
        {
            type: 'brightness',
            value: '2',
            order: order++,
            enabled
        },
        {
            type: 'contrast',
            value: '200%',
            order: order++,
            enabled
        },
        {
            type: 'drop-shadow',
            value: '16px 16px 10px black',
            order: order++,
            enabled
        },
        {
            type: 'invert',
            value: '100%',
            order: order++,
            enabled
        },
        {
            type: 'saturate',
            value: '100%',
            order: order++,
            enabled
        },
        {
            type: 'sepia',
            value: '100%',
            order: order++,
            enabled
        }
    ];
}
class AppComponent {
    constructor(arraySortingPipe, cd, clipboard) {
        this.arraySortingPipe = arraySortingPipe;
        this.cd = cd;
        this.clipboard = clipboard;
        this.cssFilterSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.updateOtherOptionsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        // tslint:disable-next-line:variable-name
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title = 'image-css-magic';
        this.cssFilterArray$ = this.cssFilterSubject$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(entries => this.arraySortingPipe.transform(entries, 'order')));
        this.cssFilterString$ = this.cssFilterArray$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
            const enabledFilters = value.filter(e => e.enabled);
            return enabledFilters.map(e => `${e.type}(${e.value})`).join(' ');
        }));
        this.image = null;
        this.canvas = null;
        this.holding = null;
        this.downloadButtonEnabled = false;
        this.imagePath = '';
        this.optionsState = DEFAULT_OPTIONS_STATE;
        this.fr = new FileReader();
        this.trackByFilter = (index, item) => item.type;
        this.cssFilterSubject$.next(createDefaultCssFilters());
        this.fr.onload = (e) => {
            if (!this.image) {
                return;
            }
            if (typeof this.fr.result === 'string') {
                this.imagePath = this.fr.result;
                this.downloadButtonEnabled = false;
                this.cd.detectChanges();
                setTimeout(() => {
                    this.cd.detectChanges();
                    this.updateOtherOptionsSubject$.next(null);
                }, 120);
                localforage__WEBPACK_IMPORTED_MODULE_5__["setItem"]('current_image', this.imagePath);
            }
            else {
                alert('WAT');
            }
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.cssFilterSubject$,
            this.updateOtherOptionsSubject$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.downloadButtonEnabled = false;
            this.cd.markForCheck();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2500)).subscribe(() => {
            var _a, _b;
            if (!((_a = this.holding) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
                return;
            }
            localforage__WEBPACK_IMPORTED_MODULE_5__["setItem"]('options_state', this.optionsState);
            localforage__WEBPACK_IMPORTED_MODULE_5__["setItem"]('css_filters', this.cssFilterSubject$.value);
            Object(html_to_image__WEBPACK_IMPORTED_MODULE_4__["toPng"])((_b = this.holding) === null || _b === void 0 ? void 0 : _b.nativeElement).then(dataPath => {
                var img = new Image();
                img.src = dataPath;
                img.onload = () => {
                    var _a, _b, _c;
                    const canvas = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.nativeElement;
                    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
                    if (ctx) {
                        ctx.clearRect(0, 0, (_b = canvas === null || canvas === void 0 ? void 0 : canvas.width) !== null && _b !== void 0 ? _b : 0, (_c = canvas === null || canvas === void 0 ? void 0 : canvas.height) !== null && _c !== void 0 ? _c : 0);
                        ctx.drawImage(img, 0, 0);
                        this.downloadButtonEnabled = true;
                        this.cd.detectChanges();
                    }
                };
            });
        });
    }
    displaySelectedImage(inputElement) {
        var _a;
        const gotAFile = (_a = inputElement.files) === null || _a === void 0 ? void 0 : _a[0];
        if (gotAFile) {
            this.fr.readAsDataURL(gotAFile);
        }
    }
    updateList() {
        this.cssFilterSubject$.next([...this.cssFilterSubject$.value]);
    }
    updateOtherOptions() {
        this.updateOtherOptionsSubject$.next(null);
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    downloadToImage(canvasElement) {
        const fileName = prompt('Filename?');
        if (!fileName) {
            return;
        }
        var link = document.createElement('a');
        link.download = `${fileName}.png`;
        link.href = canvasElement.toDataURL();
        link.click();
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastImage = (_a = yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('current_image')) !== null && _a !== void 0 ? _a : '';
            this.imagePath = lastImage;
            const urlParams = new URLSearchParams(window.location.search);
            const preset = urlParams.get('preset');
            let data = null;
            if (preset) {
                try {
                    const uncrushedPreset = Object(_JSONCrush__WEBPACK_IMPORTED_MODULE_6__["JSONUncrush"])(preset);
                    data = JSON.parse(uncrushedPreset);
                }
                catch (_f) {
                }
            }
            console.info(data);
            this.optionsState = (_c = (_b = data === null || data === void 0 ? void 0 : data.options) !== null && _b !== void 0 ? _b : yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('options_state')) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS_STATE;
            const savedCssFilters = (_e = (_d = data === null || data === void 0 ? void 0 : data.cssFilters) !== null && _d !== void 0 ? _d : yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('css_filters')) !== null && _e !== void 0 ? _e : createDefaultCssFilters();
            this.cssFilterSubject$.next(savedCssFilters);
        });
    }
    copyShareLink() {
        const shareableData = {
            cssFilters: this.cssFilterSubject$.value,
            options: this.optionsState
        };
        const json = JSON.stringify(shareableData);
        // JSONCrush
        const crushedJson = Object(_JSONCrush__WEBPACK_IMPORTED_MODULE_6__["JSONCrush"])(json);
        const linkToShare = `${location.origin}${location.pathname}?preset=${crushedJson}`;
        console.info({
            json,
            jsonLength: json.length,
            crushedJson,
            crushedLength: crushedJson.length,
            linkToShare
        });
        this.clipboard.copy(linkToShare);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_array_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["ArraySortPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["Clipboard"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.holding = _t.first);
    } }, decls: 62, vars: 34, consts: [[1, "columns"], [1, "column", "flex_cards", "sticky_top", 2, "align-self", "flex-start"], [1, "example-card"], [1, "flex_center"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["svgIcon", "search"], ["mat-card-image", "", 3, "width", "height"], [3, "src"], ["id", "src", "type", "file", 2, "display", "none", 3, "change"], ["inputElement", ""], [1, "zoom_out", 2, "display", "none", 3, "width", "height"], ["canvasElement", ""], ["mat-stroked-button", "", "color", "accent", 3, "disabled", "click"], [3, "width", "height"], [1, "holding_parent"], ["holdingElement", ""], [1, "absolute"], ["targetImage", ""], [1, "absolute", 2, "z-index", "-1"], ["mat-raised-button", "", 3, "click"], [1, "column"], [1, "tab_group_height"], ["label", "CSS Filters", 1, "flex_rows"], [4, "ngIf"], ["label", "Overlay & Background"], [1, "flex_rows"], [3, "ngModel", "ngModelChange", "change"], ["appearance", "outline"], ["type", "number", "matInput", "", 3, "max", "min", "ngModel", "change", "ngModelChange"], ["matInput", "", 2, "min-height", "6rem", 3, "ngModel", "change", "ngModelChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange", "change"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Open Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-auto-scale", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.displaySelectedImage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "canvas", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " with Effects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); return ctx.downloadToImage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-auto-scale", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 7, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.copyShareLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Copy Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-tab-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AppComponent_ng_container_34_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Custom CSS Above the Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_40_listener($event) { return ctx.optionsState.useMask = $event; })("change", function AppComponent_Template_mat_checkbox_change_40_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Use the source image as mask ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Opacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_45_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_input_ngModelChange_45_listener($event) { return ctx.optionsState.opacity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_46_listener($event) { return ctx.optionsState.useCustomCssAboveImage = $event; })("change", function AppComponent_Template_mat_checkbox_change_46_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Use custom CSS above the image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Custom CSS above the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_textarea_change_51_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_textarea_ngModelChange_51_listener($event) { return ctx.optionsState.customCssAboveImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Custom CSS Below the Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_55_listener($event) { return ctx.optionsState.useCustomCssBelowImage = $event; })("change", function AppComponent_Template_mat_checkbox_change_55_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Use custom CSS below the image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Custom CSS below the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_textarea_change_60_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_textarea_ngModelChange_60_listener($event) { return ctx.optionsState.customCssBelowImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200)("height", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", _r3.width)("height", _r3.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.downloadButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200)("height", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 30, ctx.cssFilterString$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.optionsState.useCustomCssAboveImage ? ctx.optionsState.customCssAboveImage : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.optionsState.opacity, "%")("mask-image", ctx.optionsState.useMask ? "url(" + ctx.imagePath + ")" : null)("-webkit-mask-image", ctx.optionsState.useMask ? "url(" + ctx.imagePath + ")" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.optionsState.useCustomCssBelowImage ? ctx.optionsState.customCssBelowImage : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 32, ctx.cssFilterArray$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsState.useMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 100)("min", 0)("ngModel", ctx.optionsState.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsState.useCustomCssAboveImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsState.customCssAboveImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsState.useCustomCssBelowImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsState.customCssBelowImage);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _auto_scale_auto_scale_component__WEBPACK_IMPORTED_MODULE_12__["AutoScaleComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 1rem;\n  height: calc(100vh - 2rem);\n}\n\n.rgb_wheel[_ngcontent-%COMP%] {\n  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);\n  opacity: 50%;\n}\n\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.holding_parent[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.sticky_top[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n.columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.flex_cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.flex_center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.flex_center_column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.flex_rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  height: 100%;\n}\n\napp-auto-scale[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.tab_group_height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLHVFQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG59XG5cbi5yZ2Jfd2hlZWwge1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChyZWQsIHllbGxvdywgbGltZSwgYXF1YSwgYmx1ZSwgbWFnZW50YSwgcmVkKTtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbGRpbmdfcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGlja3lfdG9wIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb2x1bW5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbiB7XG4gIGZsZXg6IDE7XG5cbn1cblxuLmZsZXhfY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mbGV4X2NlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5mbGV4X2NlbnRlcl9jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXhfcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYXBwLWF1dG8tc2NhbGUge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udGFiX2dyb3VwX2hlaWdodCB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _array_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["ArraySortPipe"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["Clipboard"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetImage']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvasElement']
        }], holding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['holdingElement']
        }] }); })();


/***/ }),

/***/ "Z9H9":
/*!*****************************************************!*\
  !*** ./src/app/auto-scale/value-or-default.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ValueOrDefaultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueOrDefaultPipe", function() { return ValueOrDefaultPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValueOrDefaultPipe {
    transform(value, defaultValue) {
        if (!isFinite(value)) {
            return defaultValue;
        }
        return value;
    }
}
ValueOrDefaultPipe.ɵfac = function ValueOrDefaultPipe_Factory(t) { return new (t || ValueOrDefaultPipe)(); };
ValueOrDefaultPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "valueOrDefault", type: ValueOrDefaultPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueOrDefaultPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'valueOrDefault'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-sort-pipe */ "J8xh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _auto_scale_auto_scale_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auto-scale/auto-scale.component */ "0r8y");
/* harmony import */ var _auto_scale_value_or_default_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auto-scale/value-or-default.pipe */ "Z9H9");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");




















class AppModule {
    constructor(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        for (const icon of ['search']) {
            iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`./assets/material_icons/${icon}.svg`));
        }
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"])); }, providers: [_array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"],
        _auto_scale_auto_scale_component__WEBPACK_IMPORTED_MODULE_10__["AutoScaleComponent"],
        _auto_scale_value_or_default_pipe__WEBPACK_IMPORTED_MODULE_11__["ValueOrDefaultPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"],
                    _auto_scale_auto_scale_component__WEBPACK_IMPORTED_MODULE_10__["AutoScaleComponent"],
                    _auto_scale_value_or_default_pipe__WEBPACK_IMPORTED_MODULE_11__["ValueOrDefaultPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"]
                ],
                providers: [_array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "sSQm":
/*!******************************!*\
  !*** ./src/app/JSONCrush.ts ***!
  \******************************/
/*! exports provided: JSONCrush, JSONUncrush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONCrush", function() { return JSONCrush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONUncrush", function() { return JSONUncrush; });
///////////////////////////////////////////////////////////////////////
// JSONCrush by Frank Force [MIT] https://github.com/KilledByAPixel/JSONCrush
///////////////////////////////////////////////////////////////////////
/* tslint:disable */
// @ts-nocheck
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @language_out ECMASCRIPT_2019
// @js_externs JSONCrush, JSONUncrush, JSONCrushSwap
// @output_file_name JSONCrush.min.js
// ==/ClosureCompiler==
const JSONCrush = (string, maxSubstringLength = 50) => {
    const delimiter = '\u0001'; // used to split parts of crushed string
    const JSCrush = (string, replaceCharacters) => {
        // JSCrush Algorithm (repleace repeated substrings with single characters)
        let replaceCharacterPos = replaceCharacters.length;
        let splitString = '';
        const ByteLength = (string) => encodeURI(encodeURIComponent(string)).replace(/%../g, 'i').length;
        const HasUnmatchedSurrogate = (string) => {
            // check ends of string for unmatched surrogate pairs
            let c1 = string.charCodeAt(0);
            let c2 = string.charCodeAt(string.length - 1);
            return (c1 >= 0xDC00 && c1 <= 0xDFFF) || (c2 >= 0xD800 && c2 <= 0xDBFF);
        };
        // count instances of substrings
        let substringCount = {};
        for (let substringLength = 2; substringLength < maxSubstringLength; substringLength++)
            for (let i = 0; i < string.length - substringLength; ++i) {
                let substring = string.substr(i, substringLength);
                // don't recount if already in list
                if (substringCount[substring])
                    continue;
                // prevent breaking up unmatched surrogates
                if (HasUnmatchedSurrogate(substring))
                    continue;
                // count how many times the substring appears
                let count = 1;
                for (let substringPos = string.indexOf(substring, i + substringLength); substringPos >= 0; ++count)
                    substringPos = string.indexOf(substring, substringPos + substringLength);
                // add to list if it appears multiple times
                if (count > 1)
                    substringCount[substring] = count;
            }
        while (true) // loop while string can be crushed more
         {
            // get the next character that is not in the string
            for (; replaceCharacterPos-- && string.includes(replaceCharacters[replaceCharacterPos]);) { }
            if (replaceCharacterPos < 0)
                break; // ran out of replacement characters
            let replaceCharacter = replaceCharacters[replaceCharacterPos];
            // find the longest substring to replace
            let bestSubstring;
            let bestLengthDelta = 0;
            let replaceByteLength = ByteLength(replaceCharacter);
            for (let substring in substringCount) {
                // calculate change in length of string if it substring was replaced
                let count = substringCount[substring];
                let lengthDelta = (count - 1) * ByteLength(substring) - (count + 1) * replaceByteLength;
                if (!splitString.length)
                    lengthDelta -= ByteLength(delimiter); // include the delimiter length
                if (lengthDelta <= 0)
                    delete substringCount[substring];
                else if (lengthDelta > bestLengthDelta) {
                    bestSubstring = substring;
                    bestLengthDelta = lengthDelta;
                }
            }
            if (!bestSubstring)
                break; // string can't be compressed further
            // create new string with the split character
            string = string.split(bestSubstring).join(replaceCharacter) + replaceCharacter + bestSubstring;
            splitString = replaceCharacter + splitString;
            // update substring count list after the replacement
            let newSubstringCount = {};
            for (let substring in substringCount) {
                // make a new substring with the replacement
                let newSubstring = substring.split(bestSubstring).join(replaceCharacter);
                // count how many times the new substring appears
                let count = 0;
                for (let i = string.indexOf(newSubstring); i >= 0; ++count)
                    i = string.indexOf(newSubstring, i + newSubstring.length);
                // add to list if it appears multiple times
                if (count > 1)
                    newSubstringCount[newSubstring] = count;
            }
            substringCount = newSubstringCount;
        }
        return { a: string, b: splitString };
    };
    // create a string of replacement characters
    let characters = [];
    // prefer replacing with characters that will not be escaped by encodeURIComponent
    const unescapedCharacters = `-_.!~*'()`;
    for (let i = 127; --i;) {
        if ((i >= 48 && i <= 57) || // 0-9
            (i >= 65 && i <= 90) || // A-Z
            (i >= 97 && i <= 122) || // a-z
            unescapedCharacters.includes(String.fromCharCode(i)))
            characters.push(String.fromCharCode(i));
    }
    // pick from extended set last
    for (let i = 32; i < 255; ++i) {
        let c = String.fromCharCode(i);
        if (c != '\\' && !characters.includes(c))
            characters.unshift(c);
    }
    // remove delimiter if it is found in the string
    string = string.replace(new RegExp(delimiter, 'g'), '');
    // swap out common json characters
    string = JSONCrushSwap(string);
    // crush with JS crush
    const crushed = JSCrush(string, characters);
    // insert delimiter between JSCrush parts
    let crushedString = crushed.a;
    if (crushed.b.length)
        crushedString += delimiter + crushed.b;
    // fix issues with some links not being recognized properly
    crushedString += '_';
    // encode URI
    return encodeURIComponent(crushedString);
};
const JSONUncrush = (string) => {
    // string must be a decoded URI component, searchParams.get() does this automatically
    // remove last character
    string = string.substring(0, string.length - 1);
    // unsplit the string using the delimiter
    const stringParts = string.split('\u0001');
    // JSUncrush algorithm
    let uncrushedString = stringParts[0];
    if (stringParts.length > 1) {
        let splitString = stringParts[1];
        for (let character of splitString) {
            // split the string using the current splitCharacter
            let splitArray = uncrushedString.split(character);
            // rejoin the string with the last element from the split
            uncrushedString = splitArray.join(splitArray.pop());
        }
    }
    // unswap the json characters in reverse direction
    return JSONCrushSwap(uncrushedString, 0);
};
const JSONCrushSwap = (string, forward = 1) => {
    // swap out characters for lesser used ones that wont get escaped
    const swapGroups = [
        ['"', "'"],
        ["':", "!"],
        [",'", "~"],
        ['}', ")", '\\', '\\'],
        ['{', "(", '\\', '\\'],
    ];
    const Swap = (string, g) => {
        let regex = new RegExp(`${(g[2] ? g[2] : '') + g[0]}|${(g[3] ? g[3] : '') + g[1]}`, 'g');
        return string.replace(regex, $1 => ($1 === g[0] ? g[1] : g[0]));
    };
    // need to be able to swap characters in reverse direction for uncrush
    if (forward)
        for (let i = 0; i < swapGroups.length; ++i)
            string = Swap(string, swapGroups[i]);
    else
        for (let i = swapGroups.length; i--;)
            string = Swap(string, swapGroups[i]);
    return string;
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map