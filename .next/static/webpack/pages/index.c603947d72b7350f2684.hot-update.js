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
                        id: "day"
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
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_i18n_IntlMessages__WEBPACK_IMPORTED_MODULE_3__.default, {
                        id: "day"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 23
                      }, this)
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
                      lineNumber: 84,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "\u0445\u0432."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 19
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "time secs",
                      children: seconds
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 21
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "\u0441\u0435\u043A."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
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
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "img3 move-2",
            src: "images/pattern/pattern9.png",
            alt: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
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
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZWxlbWVudC9zbGlkZXItMi5qcyJdLCJuYW1lcyI6WyJTbGlkZXIyIiwidXNlU3RhdGUiLCJkYXlzIiwic2V0RGF5cyIsImhvdXJzIiwic2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwic2hvd1NlbWljb2xvbiIsInNldFNob3dTZW1pY29sb24iLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIm1vbWVudCIsInRoZW4iLCJjb3VudGRvd24iLCJmb3JtYXQiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsQ0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BRVZHLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUFBLG1CQUdhSiwrQ0FBUSxDQUFDLENBQUQsQ0FIckI7QUFBQSxNQUdWSyxPQUhVO0FBQUEsTUFHREMsVUFIQzs7QUFBQSxtQkFJYU4sK0NBQVEsQ0FBQyxDQUFELENBSnJCO0FBQUEsTUFJVk8sT0FKVTtBQUFBLE1BSURDLFVBSkM7O0FBQUEsbUJBS3lCUiwrQ0FBUSxDQUFDLEtBQUQsQ0FMakM7QUFBQSxNQUtWUyxhQUxVO0FBQUEsTUFLS0MsZ0JBTEw7O0FBT2pCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVyxDQUFDLFlBQU07QUFDaEIsVUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxFQUFsQjtBQUNBLFVBQU1DLElBQUksR0FBR0QsNkNBQU0sQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsQ0FBbkI7QUFDQSxVQUFNRSxTQUFTLEdBQUdG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LE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYwMzk0N2Q3MmI3MzUwZjI2ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uL3NyYy9pMThuL0ludGxNZXNzYWdlc1wiO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyMigpIHtcclxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93U2VtaWNvbG9uLCBzZXRTaG93U2VtaWNvbG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgIGNvbnN0IHRoZW4gPSBtb21lbnQoXCIyMDIyLTAzLTI3IDEyOjEyOjEyXCIsIFwiWVlZWS1NTS1ERCBoaDptbTpzc1wiKTtcclxuICAgICAgY29uc3QgY291bnRkb3duID0gbW9tZW50KHRoZW4gLSBub3cpO1xyXG4gICAgICBzZXREYXlzKGNvdW50ZG93bi5mb3JtYXQoXCJEXCIpKTtcclxuICAgICAgc2V0SG91cnMoY291bnRkb3duLmZvcm1hdChcIkhIXCIpKTtcclxuICAgICAgc2V0TWludXRlcyhjb3VudGRvd24uZm9ybWF0KFwibW1cIikpO1xyXG4gICAgICBzZXRTZWNvbmRzKGNvdW50ZG93bi5mb3JtYXQoXCJzc1wiKSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8IS0tIFNsaWRlciAtLT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXR3byBncmFkaWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZzEgbW92ZS0yXCJcclxuICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL21haW4tc2xpZGVyL3NsaWRlcjIvcGljMy5wbmdcIlxyXG4gICAgICAgICAgICBhbHRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcCBzdWItdGl0bGUgYmdsLWxpZ2h0IHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBcIjAuNXNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImZhZGVJblVwXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e1wiYWJvdXRcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwIG0tYjIwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IFwiMXNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImZhZGVJblVwXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e1wiYWJvdXQudGl0bGVcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgbS1iMzBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjEuNXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBcIjEuNXNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiBcImZhZGVJblVwXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e1wiYWJvdXQuZGVzY1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZSBkYXlzXCI+e2RheXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD17XCJkYXlcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lIGhvdXJzXCI+e2hvdXJzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e1wiZGF5XCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZSBtaW5zXCI+e21pbnV0ZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtGF0LIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZSBzZWNzXCI+e3NlY29uZHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtGB0LXQui48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZzIgbW92ZS0xXCIgc3JjPVwiaW1hZ2VzL3BhdHRlcm4vcGF0dGVybjgucG5nXCIgYWx0IC8+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZzMgbW92ZS0yXCIgc3JjPVwiaW1hZ2VzL3BhdHRlcm4vcGF0dGVybjkucG5nXCIgYWx0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR6LW1lZGlhXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbWFpbi1zbGlkZXIvc2xpZGVyMi9waWMxLmpwZ1wiIGFsdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=