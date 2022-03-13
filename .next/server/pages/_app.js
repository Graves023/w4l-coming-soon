module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/skin/skin-2.css":
/*!*****************************!*\
  !*** ./css/skin/skin-2.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9za2luL3NraW4tMi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/skin/skin-2.css\n");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/style.css\n");

/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-rangeslider/lib/index.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick-theme.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ \"./node_modules/react-rangeslider/lib/index.css\");\n/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ \"use-scroll-position\");\n/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-2.css */ \"./css/skin/skin-2.css\");\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _src_context_LocaleContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/context/LocaleContext */ \"./src/context/LocaleContext.js\");\n/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/i18n */ \"./src/i18n/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n\nvar _jsxFileName = \"/Users/davidnejmatov/projects/w4l-coming-soon/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    locale\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_src_context_LocaleContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"])();\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: layout,\n    1: setLayout\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"wide\");\n  const {\n    0: header,\n    1: setHeader\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"fixed\");\n  const {\n    0: header_,\n    1: setHeader_\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: sliderValu,\n    1: setSliderValu\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(20);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setbody_(document.querySelector(\"body\"));\n    setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n  }, []);\n  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const backGroundImage = value => {\n    body_.style.backgroundImage = `url(${value})`;\n    body_.style.backgroundSize = \"auto\";\n  };\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === \"fixed\") {\n      header_[0].classList.add(\"sticky-header\");\n      header_[0].classList.remove(\"sticky-no\");\n    } else {\n      header_[0].classList.add(\"sticky-no\");\n      header_[0].classList.remove(\"sticky-header\");\n      header_[0].classList.remove(\"is-fixed\");\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + \"px\";\n  };\n\n  header === \"fixed\" && scrollPosition > 10 ? header_ && header_[0].classList.add(\"is-fixed\") : header_ && header_[0].classList.remove(\"is-fixed\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"IntlProvider\"], {\n    locale: _src_i18n__WEBPACK_IMPORTED_MODULE_12__[\"default\"][router.locale].locale,\n    messages: _src_i18n__WEBPACK_IMPORTED_MODULE_12__[\"default\"][router.locale].messages,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"https://1.envato.market/VLMVO\",\n      target: \"_blank\",\n      className: \"bt-buy-now theme-btn\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n        className: \"ti-shopping-cart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Buy Now\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"https://w3itexperts.ticksy.com\",\n      target: \"_blank\",\n      className: \"bt-support-now theme-btn\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n        className: \"ti-headphone-alt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Support\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#top\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"scroltop icon-up\",\n        type: \"button\",\n        style: {\n          display: \"inline-block\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: \"fa fa-arrow-up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2NhbGUiLCJ1c2VDb250ZXh0IiwiTG9jYWxlQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInRvZ2dsZTEiLCJzZXRUb2dnbGUxIiwidXNlU3RhdGUiLCJib2R5XyIsInNldGJvZHlfIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJzbGlkZXJWYWx1Iiwic2V0U2xpZGVyVmFsdSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxQb3NpdGlvbiIsInVzZVNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiYmFja0dyb3VuZEltYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJBcHBMb2NhbGUiLCJtZXNzYWdlcyIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUV2QyxRQUFNO0FBQUVDO0FBQUYsTUFBYUMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBN0I7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEtBQUQs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Q0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFHRSxlQUFTLEVBQUMsc0JBSFo7QUFBQSw4QkFLRTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBWUU7QUFDRSxVQUFJLEVBQUMsZ0NBRFA7QUFFRSxZQUFNLEVBQUMsUUFGVDtBQUdFLGVBQVMsRUFBQywwQkFIWjtBQUFBLDhCQUtFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFvQkU7QUFBRyxVQUFJLEVBQUMsTUFBUjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUV1QyxpQkFBTyxFQUFFO0FBQVgsU0FIVDtBQUFBLCtCQUtFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7QUFFY3pDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xuaW1wb3J0IExvY2FsZUNvbnRleHQgZnJvbSAnLi4vc3JjL2NvbnRleHQvTG9jYWxlQ29udGV4dCc7XG5pbXBvcnQgQXBwTG9jYWxlIGZyb20gJy4uL3NyYy9pMThuJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIFxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5Xywgc2V0Ym9keV9dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwid2lkZVwiKTtcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XG4gIGNvbnN0IFtoZWFkZXJfLCBzZXRIZWFkZXJfXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzbGlkZXJWYWx1LCBzZXRTbGlkZXJWYWx1XSA9IHVzZVN0YXRlKDIwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcbiAgICBzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHNjcm9sbFBvc2l0aW9uID0gdXNlU2Nyb2xsUG9zaXRpb24oKTtcbiAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xuICB9XG4gIFxuXG4gIGNvbnN0IGJhY2tHcm91bmRJbWFnZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt2YWx1ZX0pYDtcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiYXV0b1wiO1xuICB9O1xuXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0SGVhZGVyKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IFwiZml4ZWRcIikge1xuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xuICAgIGJvZHlfLnN0eWxlLnBhZGRpbmcgPSB2YWx1ZSArIFwicHhcIjtcbiAgfTtcblxuICBoZWFkZXIgPT09IFwiZml4ZWRcIiAmJiBzY3JvbGxQb3NpdGlvbiA+IDEwXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXG4gICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e0FwcExvY2FsZVtyb3V0ZXIubG9jYWxlXS5sb2NhbGV9IG1lc3NhZ2VzPXtBcHBMb2NhbGVbcm91dGVyLmxvY2FsZV0ubWVzc2FnZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBlclwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovLzEuZW52YXRvLm1hcmtldC9WTE1WT1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LWJ1eS1ub3cgdGhlbWUtYnRuXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktc2hvcHBpbmctY2FydFwiIC8+XG4gICAgICAgIDxzcGFuPkJ1eSBOb3c8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93M2l0ZXhwZXJ0cy50aWNrc3kuY29tXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnQtc3VwcG9ydC1ub3cgdGhlbWUtYnRuXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktaGVhZHBob25lLWFsdFwiIC8+XG4gICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiI3RvcFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L0ludGxQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/context/LocaleContext.js":
/*!**************************************!*\
  !*** ./src/context/LocaleContext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LocaleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  locale: {\n    lang: 'en',\n    label: 'English',\n    icon: 'us'\n  },\n  setLocale: () => {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocaleContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Mb2NhbGVDb250ZXh0LmpzPzVkMTMiXSwibmFtZXMiOlsiTG9jYWxlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImxvY2FsZSIsImxhbmciLCJsYWJlbCIsImljb24iLCJzZXRMb2NhbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsYUFBYSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN6Q0MsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRSxJQURDO0FBRVBDLFNBQUssRUFBRSxTQUZBO0FBR1BDLFFBQUksRUFBRTtBQUhDLEdBRGlDO0FBTXpDQyxXQUFTLEVBQUUsTUFBTSxDQUFFO0FBTnNCLENBQXBCLENBQXRCO0FBU2VQLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvTG9jYWxlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2FsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcblx0bG9jYWxlOiB7XG5cdFx0bGFuZzogJ2VuJyxcblx0XHRsYWJlbDogJ0VuZ2xpc2gnLFxuXHRcdGljb246ICd1cycsXG5cdH0sXG5cdHNldExvY2FsZTogKCkgPT4ge30sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/LocaleContext.js\n");

/***/ }),

/***/ "./src/i18n/entries/en-US.js":
/*!***********************************!*\
  !*** ./src/i18n/entries/en-US.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/en_US.json */ \"./src/i18n/locales/en_US.json\");\nvar _locales_en_US_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ \"./src/i18n/locales/en_US.json\", 1);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst EnLang = {\n  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_0__),\n  locale: 'en-US'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnLang);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9lbnRyaWVzL2VuLVVTLmpzPzBiZWUiXSwibmFtZXMiOlsiRW5MYW5nIiwibWVzc2FnZXMiLCJlbk1lc3NhZ2VzIiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLG9CQUNIQyxnREFERyxDQURLO0FBSWJDLFFBQU0sRUFBRTtBQUpLLENBQWY7QUFNZUgscUVBQWYiLCJmaWxlIjoiLi9zcmMvaTE4bi9lbnRyaWVzL2VuLVVTLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuTWVzc2FnZXMgZnJvbSAnLi4vbG9jYWxlcy9lbl9VUy5qc29uJztcblxuY29uc3QgRW5MYW5nID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLmVuTWVzc2FnZXMsXG4gIH0sXG4gIGxvY2FsZTogJ2VuLVVTJyxcbn07XG5leHBvcnQgZGVmYXVsdCBFbkxhbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/i18n/entries/en-US.js\n");

/***/ }),

/***/ "./src/i18n/entries/ua-UA.js":
/*!***********************************!*\
  !*** ./src/i18n/entries/ua-UA.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locales_ua_UA_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/ua_UA.json */ \"./src/i18n/locales/ua_UA.json\");\nvar _locales_ua_UA_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ua_UA.json */ \"./src/i18n/locales/ua_UA.json\", 1);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst uaLang = {\n  messages: _objectSpread({}, _locales_ua_UA_json__WEBPACK_IMPORTED_MODULE_0__),\n  locale: 'ua-UA'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (uaLang);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9lbnRyaWVzL3VhLVVBLmpzPzg5ZDAiXSwibmFtZXMiOlsidWFMYW5nIiwibWVzc2FnZXMiLCJ1YU1lc3NhZ2VzIiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLG9CQUNIQyxnREFERyxDQURLO0FBSWJDLFFBQU0sRUFBRTtBQUpLLENBQWY7QUFNZUgscUVBQWYiLCJmaWxlIjoiLi9zcmMvaTE4bi9lbnRyaWVzL3VhLVVBLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVhTWVzc2FnZXMgZnJvbSAnLi4vbG9jYWxlcy91YV9VQS5qc29uJztcblxuY29uc3QgdWFMYW5nID0ge1xuICBtZXNzYWdlczoge1xuICAgIC4uLnVhTWVzc2FnZXMsXG4gIH0sXG4gIGxvY2FsZTogJ3VhLVVBJyxcbn07XG5leHBvcnQgZGVmYXVsdCB1YUxhbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/i18n/entries/ua-UA.js\n");

/***/ }),

/***/ "./src/i18n/index.js":
/*!***************************!*\
  !*** ./src/i18n/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ \"./src/i18n/entries/en-US.js\");\n/* harmony import */ var _entries_ua_UA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/ua-UA */ \"./src/i18n/entries/ua-UA.js\");\n\n\nconst AppLocale = {\n  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ua: _entries_ua_UA__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLocale);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9pbmRleC5qcz8xMmNiIl0sIm5hbWVzIjpbIkFwcExvY2FsZSIsImVuIiwiZW5MYW5nIiwidWEiLCJ1YUxhbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRUMsc0RBRFk7QUFFaEJDLElBQUUsRUFBRUMsc0RBQU1BO0FBRk0sQ0FBbEI7QUFLZUosd0VBQWYiLCJmaWxlIjoiLi9zcmMvaTE4bi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbkxhbmcgZnJvbSAnLi9lbnRyaWVzL2VuLVVTJztcbmltcG9ydCB1YUxhbmcgZnJvbSAnLi9lbnRyaWVzL3VhLVVBJztcblxuY29uc3QgQXBwTG9jYWxlID0ge1xuICBlbjogZW5MYW5nLFxuICB1YTogdWFMYW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTG9jYWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/i18n/index.js\n");

/***/ }),

/***/ "./src/i18n/locales/en_US.json":
/*!*************************************!*\
  !*** ./src/i18n/locales/en_US.json ***!
  \*************************************/
/*! exports provided: main.header.section, main.header.contact, main.header.title, main.header.description, main.header.timer.dd, main.header.timer.hs, main.header.timer.min, main.header.timer.sec, main.more.title, main.more.goals, main.more.for-whom, main.more.description1, main.more.description2, main.more.description3, main.quote.title, main.quote.description1, main.quote.description2, main.vacancies.section, main.vacancies.title, main.vacancies.article1, main.vacancies.article2, main.vacancies.article3, main.vacancies.article4, main.support.section, main.support.title, main.support.article1.title, main.support.article2.title, main.support.article3.title, support.btn, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"main.header.section\\\":\\\"About us\\\",\\\"main.header.contact\\\":\\\"Contact us\\\",\\\"main.header.title\\\":\\\"World4life is an international, independent volunteer platform for help\\\",\\\"main.header.description\\\":\\\"Each of us may find ourselves in a difficult situation. We cannot predict this, but we never find ourselves alone with difficulties. Because each of us is a person with a big heart who can help with kind words, deeds, professional knowledge or share what he has in abundance.\\\",\\\"main.header.timer.dd\\\":\\\"dd.\\\",\\\"main.header.timer.hs\\\":\\\"hs.\\\",\\\"main.header.timer.min\\\":\\\"min.\\\",\\\"main.header.timer.sec\\\":\\\"sec.\\\",\\\"main.more.title\\\":\\\"More\\\",\\\"main.more.goals\\\":\\\"What goals do we set for World4life?\\\",\\\"main.more.for-whom\\\":\\\"Who are we creating World4life for?\\\",\\\"main.more.description1\\\":\\\"We are World4life. Volunteers who want to unite like-minded people from all over the world. So that everyone can ask for help in a convenient way and get it. And so that everyone who wants to improve this world can do so in a convenient and affordable way. Because there are no big needs or small opportunities and vice versa, right?\\\",\\\"main.more.description2\\\":\\\"World4life is a platform to advertise the needs of our users and the capabilities of our volunteers. For convenience, we have divided all ads into categories, the list of which will be constantly updated. Users can report on the need for housing, food, transportation, professional help - medical, financial, informational, legal, etc. or post information that you are willing to shelter, feed, help get to your destination, advise those who need it.\\\",\\\"main.more.description3\\\":\\\"The idea of ​​creating a multidisciplinary volunteer platform arose at the beginning of the unprecedented brutality and inadequacy of the Russian-Ukrainian war. It divided the lives of millions of Ukrainians into \\\\\\\"before\\\\\\\" and \\\\\\\"after\\\\\\\". But contrary to the expectations of the enemy, we were so united that in the new \\\\\\\"after\\\\\\\" everyone was ready to give the last and knew that someone else would do the same for him. We have brought together the European and global communities, and we will do our utmost to make the World4life platform work around the world, and everyone in the world knows that it will never be alone.\\\",\\\"main.quote.title\\\":\\\"Friends!\\\",\\\"main.quote.description1\\\":\\\"World4life is a purely volunteer project that we create not for money.\\\",\\\"main.quote.description2\\\":\\\"Our goal is real and affordable help for those who need it. So if you share our values ​​and have a little free time you can dedicate to the development of World4life - please welcome to the team!\\\",\\\"main.vacancies.section\\\":\\\"VACANCIES\\\",\\\"main.vacancies.title\\\":\\\"Now we are looking\\\",\\\"main.vacancies.article1\\\":\\\"Understanding the process of interaction with the back-end developer.\\\",\\\"main.vacancies.article2\\\":\\\"Understanding the process of interaction with the front-end developer.\\\",\\\"main.vacancies.article3\\\":\\\"Participate in the development of SMM strategies and develop content plans with the designer: write copyright. Suggest ideas and mechanisms for content (Meta, Google Ads, Telegram). Communicate with the designer in the process of creating visuals: from the brief to the control of the end result. Analyze indicators and suggest ways to improve them.\\\",\\\"main.vacancies.article4\\\":\\\"Work experience from 3 years. Deep understanding of search engine algorithms and ranking factors. Knowledge of optimization methods and the ability to find opportunities for project development. Understanding usability and basic knowledge of HTML/CSS/JS\\\",\\\"main.support.section\\\":\\\"PROJECT ASSISTANCE\\\",\\\"main.support.title\\\":\\\"We need any help\\\",\\\"main.support.article1.title\\\":\\\"Volunteer\\\",\\\"main.support.article2.title\\\":\\\"Cool Volunteer\\\",\\\"main.support.article3.title\\\":\\\"Rich Volunteer\\\",\\\"support.btn\\\":\\\"Assist\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9pMThuL2xvY2FsZXMvZW5fVVMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/i18n/locales/en_US.json\n");

/***/ }),

/***/ "./src/i18n/locales/ua_UA.json":
/*!*************************************!*\
  !*** ./src/i18n/locales/ua_UA.json ***!
  \*************************************/
/*! exports provided: main.header.section, main.header.contact, main.header.title, main.header.description, main.header.timer.dd, main.header.timer.hs, main.header.timer.min, main.header.timer.sec, main.more.title, main.more.goals, main.more.for-whom, main.more.description1, main.more.description2, main.more.description3, main.quote.title, main.quote.description1, main.quote.description2, main.vacancies.section, main.vacancies.title, main.vacancies.article1, main.vacancies.article2, main.vacancies.article3, main.vacancies.article4, main.support.section, main.support.title, main.support.article1.title, main.support.article2.title, main.support.article3.title, support.btn, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"main.header.section\\\":\\\"Про нас\\\",\\\"main.header.contact\\\":\\\"Зв'язатися з нами\\\",\\\"main.header.title\\\":\\\"World4life — це незалежна волонтерська платформа взаємодопомоги\\\",\\\"main.header.description\\\":\\\"Кожен з нас може опинитися в складній ситуації. Ми не можемо цього передбачити, але ми ніколи не опиняємося наодинці з труднощами. Бо кожен із нас – це людина з великим серцем, яка може допомогти добрим словом, ділом, професійними знаннями чи поділитися тим, що має в надлишку.\\\",\\\"main.header.timer.dd\\\":\\\"дн.\\\",\\\"main.header.timer.hs\\\":\\\"год.\\\",\\\"main.header.timer.min\\\":\\\"хв.\\\",\\\"main.header.timer.sec\\\":\\\"сек.\\\",\\\"main.more.title\\\":\\\"Докладніше\\\",\\\"main.more.goals\\\":\\\"Які цілі ми ставимо перед World4life?\\\",\\\"main.more.for-whom\\\":\\\"Для кого ми створюємо World4life?\\\",\\\"main.more.description1\\\":\\\"Ми - World4life. Волонтери, які хочуть об’єднати однодумців з усього світу. Щоб кожен міг попросити допомоги зручним способом і отримати її. І щоб кожен, хто прагне покращити цей світ, міг зробити це зручним і доступним способом. Тому що немає великих потреб чи малих можливостей і навпаки, чи не так?\\\",\\\"main.more.description2\\\":\\\"World4life — це платформа для розміщення оголошень про потреби наших користувачів та можливості наших волонтерів. Для зручності ми розподіляємо всі оголошення за категоріями, перелік яких постійно доповнюватиметься. Користувачі можуть повідомити про потребу в житлі, харчових продуктах, транспорті, професійній допомозі — медичній, фінансовій, інформаційній, юридичній та ін. або розмістити інформацію про те, що готовий прихистити, нагодувати, допомогти дістатися місця призначення, проконсультувати того, кому це потрібно.\\\",\\\"main.more.description3\\\":\\\"Ідея створення багатопрофільної волонтерської платформи з’явилася на початку безпрецедентної за розмахом жорстокості та неадекватності російсько-української війни. Вона поділила життя мільйонів українців на «до» та «після». Але всупереч сподіванням ворога ми згуртувалися настільки, що в новому «після» кожен був готовий віддати останнє і знав, що те ж саме для нього зробить хтось інший. Ми згуртували європейську та світову спільноту, і зробимо все, щоби платформа World4life працювала по всьому світу, і кожен у світі знав, що він ніколи не буде самотнім.\\\",\\\"main.quote.title\\\":\\\"Друзі!\\\",\\\"main.quote.description1\\\":\\\"World4life — це суто волонтерський проєкт, який ми створюємо не заради грошей.\\\",\\\"main.quote.description2\\\":\\\"Наша мета — реальна та доступна допомога тим, хто її потребує. Тож якщо ви поділяєте наші цінності та маєте трішки вільного часу, що можете присвятити розвитку World4life, — ласкаво просимо в команду!\\\",\\\"main.vacancies.section\\\":\\\"ВАКАНСІЇ\\\",\\\"main.vacancies.title\\\":\\\"Зараз Ми шукаємо\\\",\\\"main.vacancies.article1\\\":\\\"Розуміння процесу взаємодії з back-end розробником.\\\",\\\"main.vacancies.article2\\\":\\\"Розуміння процесу взаємодії з front-end розробником.\\\",\\\"main.vacancies.article3\\\":\\\"Брати участь у розробці SMM-стратегій та розробляти контент-плани у зв’язці з дизайнером: писати копірайти. Пропонувати ідеї та механіки для контенту (Meta, Google Ads, Telegram). Взаємодіяти з дизайнером у процесі створення візуалів: від брифу до контролю фінального результату. Аналізувати показники і пропонувати способи їхнього поліпшення.\\\",\\\"main.vacancies.article4\\\":\\\"досвід від 3-х років. Глибоке розуміння алгоритмів пошукових систем і факторів ранжування. Знання методів оптимізації та вміння знаходити можливості для зростання проєкту. Розуміння юзабіліті та базові знання HTML/CSS/JS\\\",\\\"main.support.section\\\":\\\"ДОПОМОГА ПРОЕКТУ\\\",\\\"main.support.title\\\":\\\"Нам потрібна будь-яка допомога\\\",\\\"main.support.article1.title\\\":\\\"Волонтер\\\",\\\"main.support.article2.title\\\":\\\"Крутий Волонтер\\\",\\\"main.support.article3.title\\\":\\\"Багатий Волонтер\\\",\\\"support.btn\\\":\\\"Допомогти\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9pMThuL2xvY2FsZXMvdWFfVUEuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/i18n/locales/ua_UA.json\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zd2l0Y2hlci5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/switcher.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCI/ODYwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intl\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-scroll-position\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCI/MjZiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1c2Utc2Nyb2xsLXBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///use-scroll-position\n");

/***/ })

/******/ });