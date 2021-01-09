(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/image_css_magic/image_css_magic/src/main.ts */"zUnb");


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
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array-sort-pipe */ "J8xh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");














const _c0 = ["targetImage"];
const _c1 = ["canvasElement"];
const _c2 = ["holdingElement"];
function AppComponent_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_21_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.enabled = $event; })("change", function AppComponent_ng_container_21_div_1_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.updateList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_21_div_1_Template_input_ngModelChange_7_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.value = $event; })("change", function AppComponent_ng_container_21_div_1_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.updateList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_21_div_1_Template_input_ngModelChange_11_listener($event) { const cssFilterEntry_r7 = ctx.$implicit; return cssFilterEntry_r7.order = $event; })("change", function AppComponent_ng_container_21_div_1_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.updateList(); });
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
function AppComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_container_21_div_1_Template, 12, 4, "div", 20);
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
    constructor(arraySortingPipe) {
        this.arraySortingPipe = arraySortingPipe;
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
                localforage__WEBPACK_IMPORTED_MODULE_5__["setItem"]('current_image', this.imagePath);
            }
            else {
                alert('WAT');
            }
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.cssFilterSubject$,
            this.updateOtherOptionsSubject$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2500)).subscribe(() => {
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
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvasElement.toDataURL();
        link.click();
    }
    ngOnInit() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastImage = (_a = yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('current_image')) !== null && _a !== void 0 ? _a : '';
            this.imagePath = lastImage;
            this.optionsState = (_b = yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('options_state')) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS_STATE;
            const savedCssFilters = (_c = yield localforage__WEBPACK_IMPORTED_MODULE_5__["getItem"]('css_filters')) !== null && _c !== void 0 ? _c : createDefaultCssFilters();
            this.cssFilterSubject$.next(savedCssFilters);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_array_sort_pipe__WEBPACK_IMPORTED_MODULE_6__["ArraySortPipe"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.holding = _t.first);
    } }, decls: 48, vars: 26, consts: [[1, "sticky_top", "columns"], [1, "column", "flex_center"], ["id", "src", "type", "file", 3, "change"], ["inputElement", ""], [1, "holding_parent"], ["holdingElement", ""], [1, "absolute"], [3, "src"], ["targetImage", ""], [1, "absolute", 2, "z-index", "-1"], ["canvasElement", ""], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "columns"], [1, "column"], [4, "ngIf"], [1, "column", "flex_rows"], [3, "ngModel", "ngModelChange", "change"], ["appearance", "outline"], ["type", "number", "matInput", "", 3, "max", "min", "ngModel", "change", "ngModelChange"], ["matInput", "", 2, "min-height", "6rem", 3, "ngModel", "change", "ngModelChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange", "change"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.displaySelectedImage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Created Image Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "canvas", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return ctx.downloadToImage(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_ng_container_21_Template, 2, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Custom CSS Above the Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_26_listener($event) { return ctx.optionsState.useMask = $event; })("change", function AppComponent_Template_mat_checkbox_change_26_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Use the source image as mask ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Opacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_31_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_input_ngModelChange_31_listener($event) { return ctx.optionsState.opacity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.optionsState.useCustomCssAboveImage = $event; })("change", function AppComponent_Template_mat_checkbox_change_32_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Use custom CSS above the image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Custom CSS above the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_textarea_change_37_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_textarea_ngModelChange_37_listener($event) { return ctx.optionsState.customCssAboveImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Custom CSS Below the Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_41_listener($event) { return ctx.optionsState.useCustomCssBelowImage = $event; })("change", function AppComponent_Template_mat_checkbox_change_41_listener() { return ctx.updateOtherOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Use custom CSS below the image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Custom CSS below the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_textarea_change_46_listener() { return ctx.updateOtherOptions(); })("ngModelChange", function AppComponent_Template_textarea_ngModelChange_46_listener($event) { return ctx.optionsState.customCssBelowImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("filter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 22, ctx.cssFilterString$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.optionsState.useCustomCssAboveImage ? ctx.optionsState.customCssAboveImage : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.optionsState.opacity, "%")("mask-image", ctx.optionsState.useMask ? "url(" + ctx.imagePath + ")" : null)("-webkit-mask-image", ctx.optionsState.useMask ? "url(" + ctx.imagePath + ")" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.optionsState.useCustomCssBelowImage ? ctx.optionsState.customCssBelowImage : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 24, ctx.cssFilterArray$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 1rem;\n}\n\n.rgb_wheel[_ngcontent-%COMP%] {\n  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);\n  opacity: 50%;\n}\n\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.holding_parent[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.sticky_top[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background: darkgray;\n  z-index: 10;\n}\n\n.columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.flex_center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex_rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1RUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFHQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5yZ2Jfd2hlZWwge1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChyZWQsIHllbGxvdywgbGltZSwgYXF1YSwgYmx1ZSwgbWFnZW50YSwgcmVkKTtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbGRpbmdfcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGlja3lfdG9wIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4OiAxO1xuXG59XG5cbi5mbGV4X2NlbnRlciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4X3Jvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _array_sort_pipe__WEBPACK_IMPORTED_MODULE_6__["ArraySortPipe"] }]; }, { image: [{
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











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
                ],
                providers: [_array_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["ArraySortPipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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