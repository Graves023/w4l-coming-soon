(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-2.css */ "./css/skin/skin-2.css");
/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_context_LocaleContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/context/LocaleContext */ "./src/context/LocaleContext.js");
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/i18n */ "./src/i18n/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Big-deal\\Company\\w4l-coming-soon\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function MyApp({
  Component,
  pageProps
}) {
  const {
    locale
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_context_LocaleContext__WEBPACK_IMPORTED_MODULE_11__.default);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  const {
    0: toggle1,
    1: setToggle1
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: layout,
    1: setLayout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("wide");
  const {
    0: header,
    1: setHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: sliderValu,
    1: setSliderValu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const backGroundImage = value => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
    locale: _src_i18n__WEBPACK_IMPORTED_MODULE_12__.default[router.locale].locale,
    messages: _src_i18n__WEBPACK_IMPORTED_MODULE_12__.default[router.locale].messages,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page-wraper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://1.envato.market/VLMVO",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://w3itexperts.ticksy.com",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-headphone-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/context/LocaleContext.js":
/*!**************************************!*\
  !*** ./src/context/LocaleContext.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LocaleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  locale: {
    lang: 'en',
    label: 'English',
    icon: 'us'
  },
  setLocale: () => {}
});
/* harmony default export */ __webpack_exports__["default"] = (LocaleContext);

/***/ }),

/***/ "./src/i18n/entries/en-US.js":
/*!***********************************!*\
  !*** ./src/i18n/entries/en-US.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/en_US.json */ "./src/i18n/locales/en_US.json");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_0__),
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./src/i18n/entries/ua-UA.js":
/*!***********************************!*\
  !*** ./src/i18n/entries/ua-UA.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_ua_UA_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/ua_UA.json */ "./src/i18n/locales/ua_UA.json");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const uaLang = {
  messages: _objectSpread({}, _locales_ua_UA_json__WEBPACK_IMPORTED_MODULE_0__),
  locale: 'ua-UA'
};
/* harmony default export */ __webpack_exports__["default"] = (uaLang);

/***/ }),

/***/ "./src/i18n/index.js":
/*!***************************!*\
  !*** ./src/i18n/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./src/i18n/entries/en-US.js");
/* harmony import */ var _entries_ua_UA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/ua-UA */ "./src/i18n/entries/ua-UA.js");


const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__.default,
  ua: _entries_ua_UA__WEBPACK_IMPORTED_MODULE_1__.default
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./css/skin/skin-2.css":
/*!*****************************!*\
  !*** ./css/skin/skin-2.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./src/i18n/locales/en_US.json":
/*!*************************************!*\
  !*** ./src/i18n/locales/en_US.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"btn.contactUs":"Contact us","about":"About us","about.title":"World4life is an international, independent volunteer platform for help","about.desc":"Each of us may find ourselves in a difficult situation. We cannot predict this, but we never stay alone with difficulties. Because we are people with big hearts, and we can help each other with kind words, actions, professional knowledge or sharing.","day":"ds.","hour":"hr.","minute":"min.","second":"sec.","details":"More details ","details.title":"What goals do we set for World4life?","details.desc":"We are World4life. We are volunteers from all over the world. Everyone can seek help here and get it. And everyone who wants to make this world a better place can do so in a convenient and accessible way. Because there are no great needs or small opportunities, right?","details.desc2":"World4life is a platform for placing ads about our user’s needs and our volunteers\' capabilities. To make it more convenient we divide all ads into categories, the list is constantly updated. Users can report on the need for housing, food, transport, professional assistance like medical, financial, informational, legal, etc. or post information that they are ready to shelter, feed, give a lift, consult people who need it.","details.why":"Whom do we create World4life for?","details.why.desc":"The idea emerged at the beginning of the unprecedented in its brutality and inadequacy Russian-Ukrainian war. Millions of lives were divided into \'before\' and \'after\'. But Ukrainians rallied so much that the new \'after\' meant that everyone was ready to help others and knew they were ready to do the same. We have brought together the European and global community, and we will do our best to make the World4life platform work around the world, so nobody ever feels desperate and lonely while being in need.","remark":"Friends!","remark.desk":"World4life is a purely volunteer project that we do not create for money.","remark.desk2":"Our goal is real and affordable help for those who need it. So if you share our values ​​and have a little free time that you can dedicate to the development of World4life - welcome to the team!","vacancies":"VACANCIES","vacancies.search":"Now we are looking","vacancies.front.middle":"Understanding the process of interaction with the back-end developer.","vacancies.back.middle":"Understanding the process of interaction with the front-end developer.","vacancies.smm":"Participate in the development of SMM strategies and develop content plans in connection with the designer: write copyrights. Offer ideas and mechanics for content (Meta, Google Ads, Telegram). Interact with the designer in the process of creating visuals: from the brief to the control of the final result. Analyze indicators and suggest ways to improve them.","vacancies.seo":"experience from 3 years. Deep understanding of search engine algorithms and ranking factors. Knowledge of optimization methods and the ability to find opportunities for project growth. Understanding usability and basic knowledge of HTML / CSS / JS","vacancies.moderator":"Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.","donate":"PROJECT ASSISTANCE","donate.subtitle":"We need any help!","donate.volunteer":"Volunteer","donate.volunteer.cool":"Cool Volunteer","donate.volunteer.rich":"Rich Volunteer","":""}');

/***/ }),

/***/ "./src/i18n/locales/ua_UA.json":
/*!*************************************!*\
  !*** ./src/i18n/locales/ua_UA.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"btn.contactUs":"Зв\'язатися з нами","about":"Про нас","about.title":"World4life — це незалежна волонтерська платформа взаємодопомоги","about.desc":"Кожен із нас може опинитися в скрутній ситуації. Ми не можемо цього передбачити, але ми ніколи не опиняємось сам на сам із труднощами. Тому що кожен із нас — людина з великим серцем, що може допомогти добрим словом, дією, професійними знаннями, або поділитися тим, що має в достатку.","day":"дн.","hour":"год.","minute":"хв.","second":"сек.","details":"Докладніше","details.title":"Які цілі ми ставимо перед World4life?","details.desc":"Ми — World4life. Волонтери, що прагнуть об’єднати своїх однодумців з усього світу. Щоби кожен міг у зручний спосіб звернутися по допомогу й отримати її. І щоби кожен, хто прагне покращити цей світ, міг зробити це в зручний та доступний спосіб. Тому що не буває великих потреб чи замалих можливостей і навпаки, чи не так?","details.desc2":"World4life — це платформа для розміщення оголошень про потреби наших користувачів та можливості наших волонтерів. Для зручності ми розподіляємо всі оголошення за категоріями, перелік яких постійно доповнюватиметься. Користувачі можуть повідомити про потребу в житлі, харчових продуктах, транспорті, професійній допомозі — медичній, фінансовій, інформаційній, юридичній та ін. або розмістити інформацію про те, що готовий прихистити, нагодувати, допомогти дістатися місця призначення, проконсультувати того, кому це потрібно.","details.why":"Для кого ми створюємо World4life?","details.why.desc":"Ідея створення багатопрофільної волонтерської платформи з’явилася на початку безпрецедентної за розмахом жорстокості та неадекватності російсько-української війни. Вона поділила життя мільйонів українців на «до» та «після». Але всупереч сподіванням ворога ми згуртувалися настільки, що в новому «після» кожен був готовий віддати останнє і знав, що те ж саме для нього зробить хтось інший. Ми згуртували європейську та світову спільноту, і зробимо все, щоби платформа World4life працювала по всьому світу, і кожен у світі знав, що він ніколи не буде самотнім.","remark":"Друзі!","remark.desk":"World4life — це суто волонтерський проєкт, який ми створюємо не заради грошей.","remark.desk2":"Наша мета — реальна та доступна допомога тим, хто її потребує. Тож якщо ви поділяєте наші цінності та маєте трішки вільного часу, що можете присвятити розвитку World4life, — ласкаво просимо в команду!","vacancies":"ВАКАНСІЇ","vacancies.search":"Зараз Ми шукаємо","vacancies.front.middle":"Розуміння процесу взаємодії з back-end розробником.","vacancies.back.middle":"Розуміння процесу взаємодії з front-end розробником.","vacancies.smm":"Брати участь у розробці SMM-стратегій та розробляти контент-плани у зв’язці з дизайнером: писати копірайти. Пропонувати ідеї та механіки для контенту (Meta, Google Ads, Telegram). Взаємодіяти з дизайнером у процесі створення візуалів: від брифу до контролю фінального результату. Аналізувати показники і пропонувати способи їхнього поліпшення.","vacancies.seo":"досвід від 3-х років. Глибоке розуміння алгоритмів пошукових систем і факторів ранжування. Знання методів оптимізації та вміння знаходити можливості для зростання проєкту. Розуміння юзабіліті та базові знання HTML / CSS / JS","vacancies.moderator":"Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.","donate":"ДОПОМОГА ПРОЕКТУ","donate.subtitle":"Нам потрібна будь-яка допомога!","donate.volunteer":"Волонтер","donate.volunteer.cool":"Крутий Волонтер","donate.volunteer.rich":"Багатий Волонтер","":""}');

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-intl");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-scroll-position");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9zcmMvY29udGV4dC9Mb2NhbGVDb250ZXh0LmpzIiwid2VicGFjazovL3NhbWFyLy4vc3JjL2kxOG4vZW50cmllcy9lbi1VUy5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL3NyYy9pMThuL2VudHJpZXMvdWEtVUEuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9zcmMvaTE4bi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2NhbGUiLCJ1c2VDb250ZXh0IiwiTG9jYWxlQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInRvZ2dsZTEiLCJzZXRUb2dnbGUxIiwidXNlU3RhdGUiLCJib2R5XyIsInNldGJvZHlfIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJzbGlkZXJWYWx1Iiwic2V0U2xpZGVyVmFsdSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxQb3NpdGlvbiIsInVzZVNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiYmFja0dyb3VuZEltYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJBcHBMb2NhbGUiLCJtZXNzYWdlcyIsImRpc3BsYXkiLCJSZWFjdCIsImxhbmciLCJsYWJlbCIsImljb24iLCJzZXRMb2NhbGUiLCJFbkxhbmciLCJlbk1lc3NhZ2VzIiwidWFMYW5nIiwidWFNZXNzYWdlcyIsImVuIiwiZW5MYW5nIiwidWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFFdkMsUUFBTTtBQUFFQztBQUFGLE1BQWFDLGlEQUFVLENBQUNDLGdFQUFELENBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx1REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxFQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQyxNQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTiwrQ0FBUSxDQUFDLE9BQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JSLCtDQUFRLEVBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFFQVcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RULFlBQVEsQ0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zd2l0Y2hlci5jc3NcIjtcclxuaW1wb3J0IExvY2FsZUNvbnRleHQgZnJvbSAnLi4vc3JjL2NvbnRleHQvTG9jYWxlQ29udGV4dCc7XHJcbmltcG9ydCBBcHBMb2NhbGUgZnJvbSAnLi4vc3JjL2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICBjb25zdCBbdG9nZ2xlMSwgc2V0VG9nZ2xlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShcIndpZGVcIik7XHJcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XHJcbiAgY29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2xpZGVyVmFsdSwgc2V0U2xpZGVyVmFsdV0gPSB1c2VTdGF0ZSgyMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRib2R5Xyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcbiAgICBzZXRIZWFkZXJfKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJhci13cmFwZXJcIikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgbGV0IHNjcm9sbFBvc2l0aW9uID0gdXNlU2Nyb2xsUG9zaXRpb24oKTtcclxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICBzZXRUb2dnbGUxKCF0b2dnbGUxKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGJhY2tHcm91bmRJbWFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgYm9keV8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3ZhbHVlfSlgO1xyXG4gICAgYm9keV8uc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImF1dG9cIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SGVhZGVyKHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1ub1wiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xyXG4gICAgYm9keV8uc3R5bGUucGFkZGluZyA9IHZhbHVlICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gIGhlYWRlciA9PT0gXCJmaXhlZFwiICYmIHNjcm9sbFBvc2l0aW9uID4gMTBcclxuICAgID8gaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKVxyXG4gICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e0FwcExvY2FsZVtyb3V0ZXIubG9jYWxlXS5sb2NhbGV9IG1lc3NhZ2VzPXtBcHBMb2NhbGVbcm91dGVyLmxvY2FsZV0ubWVzc2FnZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly8xLmVudmF0by5tYXJrZXQvVkxNVk9cIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnQtYnV5LW5vdyB0aGVtZS1idG5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktc2hvcHBpbmctY2FydFwiIC8+XHJcbiAgICAgICAgPHNwYW4+QnV5IE5vdzwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3czaXRleHBlcnRzLnRpY2tzeS5jb21cIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnQtc3VwcG9ydC1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLWhlYWRwaG9uZS1hbHRcIiAvPlxyXG4gICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cIiN0b3BcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbHRvcCBpY29uLXVwXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXVwXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9JbnRsUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2NhbGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcblx0bG9jYWxlOiB7XHJcblx0XHRsYW5nOiAnZW4nLFxyXG5cdFx0bGFiZWw6ICdFbmdsaXNoJyxcclxuXHRcdGljb246ICd1cycsXHJcblx0fSxcclxuXHRzZXRMb2NhbGU6ICgpID0+IHt9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlQ29udGV4dDsiLCJpbXBvcnQgZW5NZXNzYWdlcyBmcm9tICcuLi9sb2NhbGVzL2VuX1VTLmpzb24nO1xyXG5cclxuY29uc3QgRW5MYW5nID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi5lbk1lc3NhZ2VzLFxyXG4gIH0sXHJcbiAgbG9jYWxlOiAnZW4tVVMnLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFbkxhbmc7XHJcbiIsImltcG9ydCB1YU1lc3NhZ2VzIGZyb20gJy4uL2xvY2FsZXMvdWFfVUEuanNvbic7XHJcblxyXG5jb25zdCB1YUxhbmcgPSB7XHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIC4uLnVhTWVzc2FnZXMsXHJcbiAgfSxcclxuICBsb2NhbGU6ICd1YS1VQScsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVhTGFuZztcclxuIiwiaW1wb3J0IGVuTGFuZyBmcm9tICcuL2VudHJpZXMvZW4tVVMnO1xyXG5pbXBvcnQgdWFMYW5nIGZyb20gJy4vZW50cmllcy91YS1VQSc7XHJcblxyXG5jb25zdCBBcHBMb2NhbGUgPSB7XHJcbiAgZW46IGVuTGFuZyxcclxuICB1YTogdWFMYW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTG9jYWxlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==