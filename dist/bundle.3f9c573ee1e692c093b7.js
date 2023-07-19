/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactForm() {
  var contactSection = document.createElement("section");
  contactSection.id = "contact";
  var firstColumn = document.createElement("div");
  contactSection.appendChild(firstColumn);
  var secondColumn = document.createElement("div");
  secondColumn.className = "second-column";
  var contactH2 = document.createElement("h2");
  secondColumn.appendChild(contactH2);
  contactH2.textContent = "Contact Us";
  contactSection.appendChild(secondColumn);
  var contactIcon = document.createElement("span");
  contactIcon.className = "material-symbols-outlined";
  contactIcon.textContent = "contact_phone";
  secondColumn.appendChild(contactIcon);
  var contentSeparator = document.createElement("div");
  contentSeparator.className = "separator";
  secondColumn.appendChild(contentSeparator);
  var para = document.createElement("p");
  secondColumn.appendChild(para);
  para.textContent = "Do you have a question? Or maybe you just want to make a reservation? Have no worries, we are here for you! You can send us an email or just call us! ";
  var formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  secondColumn.appendChild(formContainer);
  var contactFormElement = document.createElement("form");
  contactFormElement.setAttribute("method", "post");
  var fieldset = document.createElement("fieldset");
  var labelFirstName = document.createElement("label");
  var inputFirstName = document.createElement("input");
  var labelLastName = document.createElement("label");
  var inputLastName = document.createElement("input");
  var labelUserEmail = document.createElement("label");
  var inputUserEmail = document.createElement("input");
  var labelMessage = document.createElement("label");
  var textAreaMessage = document.createElement("textarea");
  var formButton = document.createElement("button");
  formButton.textContent = "SUBMIT";
  formContainer.appendChild(fieldset);
  fieldset.appendChild(contactFormElement);
  contactFormElement.appendChild(labelFirstName);
  labelFirstName.textContent = "First Name:";
  labelFirstName.setAttribute("for", "first_name");
  labelFirstName.appendChild(inputFirstName);
  inputFirstName.setAttribute("type", "text");
  inputFirstName.id = "first_name";
  setAttributes(inputFirstName, {
    minlength: 3,
    name: "first_name",
    required: ""
  });
  contactFormElement.appendChild(labelLastName);
  labelLastName.textContent = "Last Name:";
  labelLastName.setAttribute("for", "last_name");
  labelLastName.appendChild(inputLastName);
  inputLastName.setAttribute("type", "text");
  inputLastName.id = "last_name";
  setAttributes(inputLastName, {
    minlength: 3,
    name: "last_name",
    required: ""
  });
  contactFormElement.appendChild(labelUserEmail);
  labelUserEmail.textContent = "Email:";
  labelUserEmail.setAttribute("for", "user_email");
  labelUserEmail.appendChild(inputUserEmail);
  inputUserEmail.setAttribute("type", "email");
  inputUserEmail.id = "user_email";
  setAttributes(inputUserEmail, {
    name: "first_name",
    required: ""
  });
  contactFormElement.appendChild(labelMessage);
  labelMessage.textContent = "Your message:";
  contactFormElement.appendChild(textAreaMessage);
  textAreaMessage.id = "message";
  setAttributes(textAreaMessage, {
    rows: 3,
    cols: 40,
    required: ""
  });
  contactFormElement.appendChild(formButton);
  var thirdColum = document.createElement("div");
  contactSection.appendChild(thirdColum);
  return contactSection;
}
function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(function (key) {
    return el.setAttribute(key, attrs[key]);
  });
}
function loadContact() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createContactForm());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
  var homeContainer = document.createElement("div");
  var testH1Home = document.createElement("h1");
  testH1Home.textContent = "Home Page";
  homeContainer.appendChild(testH1Home);
  return homeContainer;
}
function loadHome() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createHome());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  var menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  var testH1Title = document.createElement("h1");
  testH1Title.textContent = "Test for my website!";
  menuContainer.appendChild(testH1Title);
  return menuContainer;
}
function loadMenu() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createMenu());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/pages/website.js":
/*!******************************!*\
  !*** ./src/pages/website.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/pages/contact.js");




function createHeader() {
  var header = document.createElement("header");
  header.className = "header";
  header.appendChild(createNavbar());
  return header;
}
function createNavbar() {
  var nav = document.createElement("nav");
  var ulElement = document.createElement("ul");
  nav.appendChild(ulElement);
  for (var i = 0; i <= 4; i++) {
    var listedNavItem = document.createElement("li");
    listedNavItem.id = "menu-navigation";
    var headerLogo = document.createElement("img");
    var hyperLinkTag = document.createElement("a");
    hyperLinkTag.href = "#";
    headerLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    headerLogo.id = "header-logo";
    headerLogo.alt = "An logo of Art Caffe";
    ulElement.appendChild(listedNavItem);
    switch (i) {
      case 0:
        listedNavItem.appendChild(hyperLinkTag);
        hyperLinkTag.appendChild(headerLogo);
        break;
      case 1:
        listedNavItem.appendChild(hyperLinkTag);
        hyperLinkTag.textContent = "Home";
        break;
      case 2:
        listedNavItem.appendChild(hyperLinkTag);
        hyperLinkTag.textContent = "Menu";
        break;
      case 3:
        listedNavItem.appendChild(hyperLinkTag);
        hyperLinkTag.textContent = "About";
        break;
      case 4:
        listedNavItem.appendChild(hyperLinkTag);
        hyperLinkTag.textContent = "Contact";
        break;
    }
  }
  return nav;
}
function createHeaderContainer() {
  var headerContainer = document.createElement("div");
  headerContainer.className = "header";
  return headerContainer;
}
function createColumns() {
  var firstColumn = document.createElement("div");
  var secondColumn = document.createElement("div");
  var thirdColum = document.createElement("div");
  return firstColumn, secondColumn, thirdColum;
}
var clearContentContainer = function clearContentContainer() {
  var contentContainer = document.querySelector("#content");
  contentContainer.textContent = "";
};
function createFooter() {
  var footer = document.createElement("footer");
  var copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.textContent = new Date().getFullYear();
  footer.appendChild(copyright);
  return footer;
}
function loadWebsite() {
  var body = document.querySelector("body");
  var contentContainer = document.createElement("div");
  contentContainer.id = "content";
  body.appendChild(createHeaderContainer());
  var headerContainer = document.querySelector(".header");
  headerContainer.appendChild(createHeader());
  body.appendChild(contentContainer);
  contentContainer.appendChild(createColumns());
  body.appendChild(createFooter());
  var menuNavigation = document.querySelectorAll("#menu-navigation");
  menuNavigation.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
      console.log(e.target.id);
      switch (e.target.textContent) {
        case "Menu":
          clearContentContainer();
          (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
          break;
        case "Contact":
          clearContentContainer();
          (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
          break;
        case "Home":
          clearContentContainer();
          (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
      }
    });
  });
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* generic website styles */

:root {
  --header-color: #000000;
  --nav-a-color: #ffffff;
  --nav-a-bg-mobile-devices-color: #563517;
  --nav-a-hover-text-color: #9c6f44;
  --content-separator-color: #9c6f44;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto, Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0;
}

/* google icons */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 3.2rem;
  color: #9c6f44;
}

#content {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

section {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

section h2 {
  font-size: 3rem;
  text-transform: uppercase;
  padding: 1rem;
  font-family: "Dancing Script", cursive;
}

.second-column {
  display: flex;
  height: 100vh;
  flex-flow: column wrap;
  align-items: center;
  gap: 50px;
}

.separator {
  display: flex;
  justify-content: flex-start;
  width: 200px;
  height: 2px;
  background-color: var(--content-separator-color);
}

section p {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  text-align: center;
}

/* header and nav styles */

.header {
  background-color: var(--header-color);
}

header {
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
}

#header-logo {
  max-width: 314px;
  max-height: 32px;
}

/* navigation styling across all the breakpoints */

nav ul {
  display: flex;
  gap: 0.5em;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  /* I have selected 48% for flex basis because I want to have two li elements per line. */
  flex-basis: 48%;
  margin-bottom: 0.6rem;
}

nav li:first-child {
  /* in order for logo to be on his own line on mobile devices we set a flex-basis selector to 100% */
  flex-basis: 100%;
  text-align: center;
}

nav a {
  display: block;
  padding: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--nav-a-color);
  background-color: var(--nav-a-bg-mobile-devices-color);
  text-align: center;
}

nav a:hover {
  color: var(--nav-a-hover-text-color);
}

nav li:first-child a {
  background-color: transparent;
}

/* contact section of the page */
#contact-container {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
}

input {
  display: block;
}

label {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-style: italic;
}

textarea {
  resize: none;
}

.form-container form {
  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

/* for tablet */
@media (min-width: 550px) {
  nav ul {
    justify-content: center;
    gap: 0.5em;
  }
  nav li {
    flex-basis: auto;
    margin-bottom: 0;
  }
  nav a {
    font-size: 1.2rem;
    color: var(--nav-a-color);
    background-color: transparent;
  }
  nav a:hover {
    background-color: transparent;
  }
}

/* for desktop */
@media (min-width: 800px) {
  /* navigation for logo in the center */
  nav ul {
    justify-content: flex-end;
    gap: none;
  }

  nav a {
    font-size: 1.5rem;
  }

  nav li:first-child {
    flex-basis: auto;
    margin: 0 auto;
    order: 2;
  }
  nav li:nth-child(2),
  nav li:nth-child(3) {
    order: 1;
  }
  nav li:nth-child(4),
  nav li:nth-child(5) {
    order: 3;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA,2BAA2B;;AAE3B;EACE,uBAAuB;EACvB,sBAAsB;EACtB,wCAAwC;EACxC,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAIA;EACE,oEAAoE;EACpE,UAAU;EACV,SAAS;AACX;;AAEA,iBAAiB;AACjB;EACE,kEAAkE;EAClE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,gDAAgD;AAClD;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,0BAA0B;;AAE1B;EACE,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,kDAAkD;;AAElD;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wFAAwF;EACxF,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,mGAAmG;EACnG,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,sDAAsD;EACtD,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE;IACE,uBAAuB;IACvB,UAAU;EACZ;EACA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,iBAAiB;IACjB,yBAAyB;IACzB,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;AACF;;AAEA,gBAAgB;AAChB;EACE,sCAAsC;EACtC;IACE,yBAAyB;IACzB,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,cAAc;IACd,QAAQ;EACV;EACA;;IAEE,QAAQ;EACV;EACA;;IAEE,QAAQ;EACV;AACF","sourcesContent":["/* generic website styles */\n\n:root {\n  --header-color: #000000;\n  --nav-a-color: #ffffff;\n  --nav-a-bg-mobile-devices-color: #563517;\n  --nav-a-hover-text-color: #9c6f44;\n  --content-separator-color: #9c6f44;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap\");\n\nbody {\n  font-family: \"Roboto, Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n/* google icons */\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n  font-size: 3.2rem;\n  color: #9c6f44;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsection {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\nsection h2 {\n  font-size: 3rem;\n  text-transform: uppercase;\n  padding: 1rem;\n  font-family: \"Dancing Script\", cursive;\n}\n\n.second-column {\n  display: flex;\n  height: 100vh;\n  flex-flow: column wrap;\n  align-items: center;\n  gap: 50px;\n}\n\n.separator {\n  display: flex;\n  justify-content: flex-start;\n  width: 200px;\n  height: 2px;\n  background-color: var(--content-separator-color);\n}\n\nsection p {\n  font-family: \"Roboto\";\n  font-style: italic;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n  font-size: 1.3rem;\n  text-align: center;\n}\n\n/* header and nav styles */\n\n.header {\n  background-color: var(--header-color);\n}\n\nheader {\n  max-width: 1200px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n#header-logo {\n  max-width: 314px;\n  max-height: 32px;\n}\n\n/* navigation styling across all the breakpoints */\n\nnav ul {\n  display: flex;\n  gap: 0.5em;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav li {\n  /* I have selected 48% for flex basis because I want to have two li elements per line. */\n  flex-basis: 48%;\n  margin-bottom: 0.6rem;\n}\n\nnav li:first-child {\n  /* in order for logo to be on his own line on mobile devices we set a flex-basis selector to 100% */\n  flex-basis: 100%;\n  text-align: center;\n}\n\nnav a {\n  display: block;\n  padding: 1rem;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.2rem;\n  color: var(--nav-a-color);\n  background-color: var(--nav-a-bg-mobile-devices-color);\n  text-align: center;\n}\n\nnav a:hover {\n  color: var(--nav-a-hover-text-color);\n}\n\nnav li:first-child a {\n  background-color: transparent;\n}\n\n/* contact section of the page */\n#contact-container {\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n}\n\ninput {\n  display: block;\n}\n\nlabel {\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n  font-style: italic;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-container form {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n}\n\n/* for tablet */\n@media (min-width: 550px) {\n  nav ul {\n    justify-content: center;\n    gap: 0.5em;\n  }\n  nav li {\n    flex-basis: auto;\n    margin-bottom: 0;\n  }\n  nav a {\n    font-size: 1.2rem;\n    color: var(--nav-a-color);\n    background-color: transparent;\n  }\n  nav a:hover {\n    background-color: transparent;\n  }\n}\n\n/* for desktop */\n@media (min-width: 800px) {\n  /* navigation for logo in the center */\n  nav ul {\n    justify-content: flex-end;\n    gap: none;\n  }\n\n  nav a {\n    font-size: 1.5rem;\n  }\n\n  nav li:first-child {\n    flex-basis: auto;\n    margin: 0 auto;\n    order: 2;\n  }\n  nav li:nth-child(2),\n  nav li:nth-child(3) {\n    order: 1;\n  }\n  nav li:nth-child(4),\n  nav li:nth-child(5) {\n    order: 3;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pages_website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/website */ "./src/pages/website.js");


(0,_pages_website__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.3f9c573ee1e692c093b7.js.map