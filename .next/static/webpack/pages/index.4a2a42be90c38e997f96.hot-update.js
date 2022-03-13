self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./element/slider-2.js":
/*!*****************************!*\
  !*** ./element/slider-2.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/i18n/IntlMessages */ "./src/i18n/IntlMessages.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Big-deal\\Company\\w4l-coming-soon\\element\\slider-2.js",
    _s = $RefreshSig$();





function Slider2() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      days = _useState[0],
      setDays = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      hours = _useState2[0],
      setHours = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      minutes = _useState3[0],
      setMinutes = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      seconds = _useState4[0],
      setSeconds = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showSemicolon = _useState5[0],
      setShowSemicolon = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setInterval(function () {
      var now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      var then = moment__WEBPACK_IMPORTED_MODULE_2___default()("2022-03-27 12:12:12", "YYYY-MM-DD hh:mm:ss");
      var countdown = moment__WEBPACK_IMPORTED_MODULE_2___default()(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);
  return (
    /*#__PURE__*/
    // <!-- Slider -->
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "banner-two gradient",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "banner-inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "img1 move-2",
            src: "images/main-slider/slider2/pic3.png",
            alt: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row align-items-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "banner-content text-white",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  className: "wow fadeInUp sub-title bgl-light text-white",
                  "data-wow-delay": "0.5s",
                  style: {
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__.default, {
                    id: "about"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  className: "wow fadeInUp m-b20",
                  "data-wow-delay": "1s",
                  style: {
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__.default, {
                    id: "about.title"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "wow fadeInUp m-b30",
                  "data-wow-delay": "1.5s",
                  style: {
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__.default, {
                    id: "about.desc"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "countdown",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "time days",
                      children: days
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__.default, {
                        id: "about.desc"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 19
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "time hours",
                      children: hours
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "\u0433\u043E\u0434."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 19
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "time mins",
                      children: minutes
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "\u0445\u0432."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 19
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "time secs",
                      children: seconds
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "\u0441\u0435\u043A."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "img2 move-1",
            src: "images/pattern/pattern8.png",
            alt: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "img3 move-2",
            src: "images/pattern/pattern9.png",
            alt: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "dz-media",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "images/main-slider/slider2/pic1.jpg",
          alt: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this)
  );
}

_s(Slider2, "cK3je+CYBNRD3ned5GUWkTkcz/g=");

_c = Slider2;
/* harmony default export */ __webpack_exports__["default"] = (Slider2);

var _c;

$RefreshReg$(_c, "Slider2");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9zbGlkZXItMi5qcyJdLCJuYW1lcyI6WyJTbGlkZXIyIiwidXNlU3RhdGUiLCJkYXlzIiwic2V0RGF5cyIsImhvdXJzIiwic2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwic2hvd1NlbWljb2xvbiIsInNldFNob3dTZW1pY29sb24iLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIm1vbWVudCIsInRoZW4iLCJjb3VudGRvd24iLCJmb3JtYXQiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsQ0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BRVZHLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUFBLG1CQUdhSiwrQ0FBUSxDQUFDLENBQUQsQ0FIckI7QUFBQSxNQUdWSyxPQUhVO0FBQUEsTUFHREMsVUFIQzs7QUFBQSxtQkFJYU4sK0NBQVEsQ0FBQyxDQUFELENBSnJCO0FBQUEsTUFJVk8sT0FKVTtBQUFBLE1BSURDLFVBSkM7O0FBQUEsbUJBS3lCUiwrQ0FBUSxDQUFDLEtBQUQsQ0FMakM7QUFBQSxNQUtWUyxhQUxVO0FBQUEsTUFLS0MsZ0JBTEw7O0FBT2pCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVyxDQUFDLFlBQU07QUFDaEIsVUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxFQUFsQjtBQUNBLFVBQU1DLElBQUksR0FBR0QsNkNBQU0sQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsQ0FBbkI7QUFDQSxVQUFNRSxTQUFTLEdBQUdG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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi9zcmMvaTE4bi9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlcjIoKSB7XHJcbiAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hvdXJzLCBzZXRIb3Vyc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1NlbWljb2xvbiwgc2V0U2hvd1NlbWljb2xvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICBjb25zdCB0aGVuID0gbW9tZW50KFwiMjAyMi0wMy0yNyAxMjoxMjoxMlwiLCBcIllZWVktTU0tREQgaGg6bW06c3NcIik7XHJcbiAgICAgIGNvbnN0IGNvdW50ZG93biA9IG1vbWVudCh0aGVuIC0gbm93KTtcclxuICAgICAgc2V0RGF5cyhjb3VudGRvd24uZm9ybWF0KFwiRFwiKSk7XHJcbiAgICAgIHNldEhvdXJzKGNvdW50ZG93bi5mb3JtYXQoXCJISFwiKSk7XHJcbiAgICAgIHNldE1pbnV0ZXMoY291bnRkb3duLmZvcm1hdChcIm1tXCIpKTtcclxuICAgICAgc2V0U2Vjb25kcyhjb3VudGRvd24uZm9ybWF0KFwic3NcIikpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPCEtLSBTbGlkZXIgLS0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10d28gZ3JhZGllbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1pbm5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcxIG1vdmUtMlwiXHJcbiAgICAgICAgICAgIHNyYz1cImltYWdlcy9tYWluLXNsaWRlci9zbGlkZXIyL3BpYzMucG5nXCJcclxuICAgICAgICAgICAgYWx0XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgc3ViLXRpdGxlIGJnbC1saWdodCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogXCIwLjVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogXCJmYWRlSW5VcFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPXtcImFib3V0XCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcCBtLWIyMFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBcIjFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogXCJmYWRlSW5VcFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPXtcImFib3V0LnRpdGxlXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwIG0tYjMwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIxLjVzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogXCIxLjVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogXCJmYWRlSW5VcFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPXtcImFib3V0LmRlc2NcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUgZGF5c1wiPntkYXlzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e1wiYWJvdXQuZGVzY1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUgaG91cnNcIj57aG91cnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCz0L7QtC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lIG1pbnNcIj57bWludXRlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0YXQsi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lIHNlY3NcIj57c2Vjb25kc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0YHQtdC6Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nMiBtb3ZlLTFcIiBzcmM9XCJpbWFnZXMvcGF0dGVybi9wYXR0ZXJuOC5wbmdcIiBhbHQgLz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nMyBtb3ZlLTJcIiBzcmM9XCJpbWFnZXMvcGF0dGVybi9wYXR0ZXJuOS5wbmdcIiBhbHQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHotbWVkaWFcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tYWluLXNsaWRlci9zbGlkZXIyL3BpYzEuanBnXCIgYWx0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyMjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==