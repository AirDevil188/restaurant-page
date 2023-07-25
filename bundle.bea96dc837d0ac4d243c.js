/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_grid_image_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/grid-image-1.jpg */ "./src/assets/grid-image-1.jpg");
/* harmony import */ var _assets_grid_image_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/grid-image-2.jpg */ "./src/assets/grid-image-2.jpg");
/* harmony import */ var _assets_grid_image_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/grid-image-3.jpg */ "./src/assets/grid-image-3.jpg");
/* harmony import */ var _assets_grid_image_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/grid-image-4.jpg */ "./src/assets/grid-image-4.jpg");
/* harmony import */ var _assets_grid_image_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/grid-image-5.jpg */ "./src/assets/grid-image-5.jpg");





function createWebsiteColumns() {
  var aboutPageSection = document.createElement("section");
  aboutPageSection.id = "about-container";
  var firstColumn = document.createElement("div");
  aboutPageSection.appendChild(firstColumn);
  var secondColumn = document.createElement("div");
  aboutPageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  var thirdColum = document.createElement("div");
  aboutPageSection.appendChild(thirdColum);
  return aboutPageSection;
}
function createContentAbout() {
  var aboutPageSection = document.querySelector("#about-container");
  var secondColumn = document.querySelector(".second-column");
  var h2About = document.createElement("h2");
  h2About.textContent = "About Us";
  secondColumn.appendChild(h2About);
  var aboutUsIcon = document.createElement("span");
  aboutUsIcon.className = "material-symbols-outlined";
  aboutUsIcon.textContent = "history_edu";
  secondColumn.appendChild(aboutUsIcon);
  var contentSeparator = document.createElement("div");
  contentSeparator.className = "separator";
  secondColumn.appendChild(contentSeparator);
  return aboutPageSection;
}
function createParaInformation() {
  var aboutPageSection = document.querySelector("#about-container");
  var secondColumn = document.querySelector(".second-column");
  var aboutUsContainer = document.createElement("div");
  aboutUsContainer.className = "about-us-container";
  secondColumn.appendChild(aboutUsContainer);
  var paraAboutUs = document.createElement("p");
  aboutUsContainer.appendChild(paraAboutUs);
  paraAboutUs.textContent = "The quality was always our imperative. We started as a small pub in a relative small town in Serbia, called Apatin. What started as a family job, turned out to be something more than that. Our vision is that every costumer walks out happy! And after more than twenty years of experience we are still looking to innovate and learn new things.";
  return aboutPageSection;
}
function createGridImages() {
  var aboutPageSection = document.querySelector("#about-container");
  var secondColumn = document.querySelector(".second-column");
  var gridImagesContainer = document.createElement("div");
  gridImagesContainer.className = "grid-images-container";
  secondColumn.appendChild(gridImagesContainer);
  var ulGridImages = document.createElement("ul");
  var li1 = document.createElement("li");
  li1.className = "image-1";
  var aHyperLinkOne = document.createElement("a");
  aHyperLinkOne.className = "button";
  aHyperLinkOne.href = "#lightbox-item-1";
  var li2 = document.createElement("li");
  li2.className = "image-2";
  var aHyperLinkTwo = document.createElement("a");
  aHyperLinkTwo.className = "button";
  aHyperLinkTwo.href = "#lightbox-item-2";
  var li3 = document.createElement("li");
  li3.className = "image-3";
  var aHyperLinkThree = document.createElement("a");
  aHyperLinkThree.className = "button";
  aHyperLinkThree.href = "#lightbox-item-3";
  var li4 = document.createElement("li");
  li4.className = "image-4";
  var aHyperLinkFour = document.createElement("a");
  aHyperLinkFour.className = "button";
  aHyperLinkFour.href = "#lightbox-item-4";
  var li5 = document.createElement("li");
  li5.className = "image-5";
  var aHyperLinkFive = document.createElement("a");
  aHyperLinkFive.className = "button";
  aHyperLinkFive.href = "#lightbox-item-5";
  var imageOne = document.createElement("img");
  imageOne.src = _assets_grid_image_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imageOne.setAttribute("loading", "lazy");
  var imageTwo = document.createElement("img");
  imageTwo.src = _assets_grid_image_2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  imageTwo.setAttribute("loading", "lazy");
  var imageThree = document.createElement("img");
  imageThree.src = _assets_grid_image_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  imageThree.setAttribute("loading", "lazy");
  var imageFour = document.createElement("img");
  imageFour.src = _assets_grid_image_4_jpg__WEBPACK_IMPORTED_MODULE_3__;
  imageFour.setAttribute("loading", "lazy");
  var imageFive = document.createElement("img");
  imageFive.src = _assets_grid_image_5_jpg__WEBPACK_IMPORTED_MODULE_4__;
  imageFive.setAttribute("loading", "lazy");
  gridImagesContainer.appendChild(ulGridImages);
  ulGridImages.appendChild(li1);
  li1.appendChild(aHyperLinkOne);
  aHyperLinkOne.appendChild(imageOne);
  ulGridImages.appendChild(li2);
  li2.appendChild(aHyperLinkTwo);
  aHyperLinkTwo.appendChild(imageTwo);
  ulGridImages.appendChild(li3);
  li3.appendChild(aHyperLinkThree);
  aHyperLinkThree.appendChild(imageThree);
  ulGridImages.appendChild(li4);
  li4.appendChild(aHyperLinkFour);
  aHyperLinkFour.appendChild(imageFour);
  ulGridImages.appendChild(li5);
  li5.appendChild(aHyperLinkFive);
  aHyperLinkFive.appendChild(imageFive);
  return aboutPageSection;
}
function createLightbox() {
  var aboutPageSection = document.querySelector("#about-container");
  var secondColumn = document.querySelector(".second-column");
  var gridLightBoxes = document.createElement("div");
  gridLightBoxes.className = "grid-lightboxes";
  secondColumn.appendChild(gridLightBoxes);
  var gridLightBoxContainerOne = document.createElement("div");
  gridLightBoxContainerOne.className = "grid-lightbox-container";
  gridLightBoxContainerOne.id = "lightbox-item-1";
  gridLightBoxes.appendChild(gridLightBoxContainerOne);
  var gridLightBoxContentOne = document.createElement("div");
  gridLightBoxContentOne.className = "grid-lightbox-content";
  gridLightBoxContentOne.id = "grid-vertical-picture";
  gridLightBoxContainerOne.appendChild(gridLightBoxContentOne);
  var aHyperLinkOne = document.createElement("a");
  aHyperLinkOne.href = "#!";
  aHyperLinkOne.className = "lightbox-close-button";
  gridLightBoxContentOne.appendChild(aHyperLinkOne);
  var gridLightBoxOne = document.createElement("img");
  gridLightBoxOne.className = "lightbox-image";
  gridLightBoxOne.src = _assets_grid_image_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  gridLightBoxContentOne.appendChild(gridLightBoxOne);
  var gridLightBoxContainerTwo = document.createElement("div");
  gridLightBoxContainerTwo.className = "grid-lightbox-container";
  gridLightBoxContainerTwo.id = "lightbox-item-2";
  gridLightBoxes.appendChild(gridLightBoxContainerTwo);
  var gridLightBoxContentTwo = document.createElement("div");
  gridLightBoxContentTwo.className = "grid-lightbox-content";
  gridLightBoxContainerTwo.appendChild(gridLightBoxContentTwo);
  var aHyperLinkTwo = document.createElement("a");
  aHyperLinkTwo.href = "#!";
  aHyperLinkTwo.className = "lightbox-close-button";
  gridLightBoxContentTwo.appendChild(aHyperLinkTwo);
  var gridLightBoxTwo = document.createElement("img");
  gridLightBoxTwo.className = "lightbox-image";
  gridLightBoxTwo.src = _assets_grid_image_2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  gridLightBoxContentTwo.appendChild(gridLightBoxTwo);
  var gridLightboxContainerThree = document.createElement("div");
  gridLightboxContainerThree.className = "grid-lightbox-container";
  gridLightboxContainerThree.id = "lightbox-item-3";
  gridLightBoxes.appendChild(gridLightboxContainerThree);
  var gridLightBoxContentThree = document.createElement("div");
  gridLightBoxContentThree.className = "grid-lightbox-content";
  gridLightboxContainerThree.appendChild(gridLightBoxContentThree);
  var aHyperLinkThree = document.createElement("a");
  aHyperLinkThree.href = "#!";
  aHyperLinkThree.className = "lightbox-close-button";
  gridLightBoxContentThree.appendChild(aHyperLinkThree);
  var gridLightBoxThree = document.createElement("img");
  gridLightBoxThree.className = "lightbox-image";
  gridLightBoxThree.src = _assets_grid_image_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  gridLightBoxContentThree.appendChild(gridLightBoxThree);
  var gridLightBoxContainerFour = document.createElement("div");
  gridLightBoxContainerFour.className = "grid-lightbox-container";
  gridLightBoxContainerFour.id = "lightbox-item-4";
  gridLightBoxes.appendChild(gridLightBoxContainerFour);
  var gridLightBoxContentFour = document.createElement("div");
  gridLightBoxContentFour.className = "grid-lightbox-content";
  gridLightBoxContainerFour.appendChild(gridLightBoxContentFour);
  var aHyperLinkFour = document.createElement("a");
  aHyperLinkFour.href = "#!";
  aHyperLinkFour.className = "lightbox-close-button";
  gridLightBoxContentFour.appendChild(aHyperLinkFour);
  var gridLightBoxFour = document.createElement("img");
  gridLightBoxFour.className = "lightbox-image";
  gridLightBoxFour.src = _assets_grid_image_4_jpg__WEBPACK_IMPORTED_MODULE_3__;
  gridLightBoxContentFour.appendChild(gridLightBoxFour);
  var gridLightBoxContainerFive = document.createElement("div");
  gridLightBoxContainerFive.className = "grid-lightbox-container";
  gridLightBoxContainerFive.id = "lightbox-item-5";
  gridLightBoxes.appendChild(gridLightBoxContainerFive);
  var gridLightBoxContentFive = document.createElement("div");
  gridLightBoxContentFive.className = "grid-lightbox-content";
  gridLightBoxContainerFive.appendChild(gridLightBoxContentFive);
  var aHyperLinkFive = document.createElement("a");
  aHyperLinkFive.href = "#!";
  aHyperLinkFive.className = "lightbox-close-button";
  gridLightBoxContentFive.appendChild(aHyperLinkFive);
  var gridLightBoxFive = document.createElement("img");
  gridLightBoxFive.className = "lightbox-image";
  gridLightBoxFive.src = _assets_grid_image_5_jpg__WEBPACK_IMPORTED_MODULE_4__;
  gridLightBoxContentFive.appendChild(gridLightBoxFive);
  return aboutPageSection;
}
function loadAbout() {
  createWebsiteColumns();
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createContentAbout());
  contentContainer.appendChild(createParaInformation());
  contentContainer.appendChild(createGridImages());
  contentContainer.appendChild(createLightbox());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createWebsiteColumns() {
  var contactPageSection = document.createElement("section");
  contactPageSection.id = "contact";
  var firstColumn = document.createElement("div");
  contactPageSection.appendChild(firstColumn);
  var secondColumn = document.createElement("div");
  contactPageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  var thirdColum = document.createElement("div");
  contactPageSection.appendChild(thirdColum);
  return contactPageSection;
}
function createContactContent() {
  var contactPageSection = document.querySelector("#contact");
  var secondColumn = document.querySelector(".second-column");
  var contactH2 = document.createElement("h2");
  secondColumn.appendChild(contactH2);
  contactH2.textContent = "Contact Us";
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
  return contactPageSection;
}
function createContactForm() {
  var contactPageSection = document.querySelector("#contact");
  var secondColumn = document.querySelector(".second-column");
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
  var formButtonContainer = document.createElement("div");
  formButtonContainer.className = "form-button-container";
  var formButton = document.createElement("button");
  formButton.className = "submit-button";
  formButton.setAttribute("type", "submit");
  formButton.textContent = "SUBMIT";
  formContainer.appendChild(fieldset);
  fieldset.appendChild(contactFormElement);
  contactFormElement.appendChild(labelFirstName);
  labelFirstName.textContent = "First Name: ";
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
  labelLastName.textContent = "Last Name: ";
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
  labelUserEmail.textContent = "Email: ";
  labelUserEmail.setAttribute("for", "user_email");
  labelUserEmail.appendChild(inputUserEmail);
  inputUserEmail.setAttribute("type", "email");
  inputUserEmail.id = "user_email";
  setAttributes(inputUserEmail, {
    name: "first_name",
    required: ""
  });
  contactFormElement.appendChild(labelMessage);
  labelMessage.textContent = "Your message: ";
  labelMessage.appendChild(textAreaMessage);
  textAreaMessage.id = "message";
  setAttributes(textAreaMessage, {
    rows: 3,
    cols: 40,
    required: ""
  });
  fieldset.appendChild(formButtonContainer);
  formButtonContainer.appendChild(formButton);
  return contactPageSection;
}
function createContactDetailsInformation() {
  var contactPageSection = document.querySelector("#contact");
  var secondColumn = document.querySelector(".second-column");
  var ul = document.createElement("ul");
  ul.className = "contact-icons-ul";
  var emailLi = document.createElement("li");
  emailLi.className = "contact-li";
  var phoneLi = document.createElement("li");
  phoneLi.className = "contact-li";
  var locationLi = document.createElement("li");
  locationLi.className = "contact-li";
  var emailIcon = document.createElement("span");
  emailIcon.className = "material-symbols-outlined";
  emailIcon.textContent = "mail";
  var phoneIcon = document.createElement("span");
  phoneIcon.className = "material-symbols-outlined";
  phoneIcon.textContent = "call";
  var locationIcon = document.createElement("span");
  locationIcon.className = "material-symbols-outlined";
  locationIcon.textContent = "location_on";
  var paraEmail = document.createElement("p");
  paraEmail.className = "para-contact-icons";
  paraEmail.textContent = "artcaffe@example.com";
  var paraPhone = document.createElement("p");
  paraPhone.className = "para-contact-icons";
  paraPhone.textContent = "+381 123 4567";
  var paraLocation = document.createElement("p");
  paraLocation.className = "para-contact-icons";
  paraLocation.textContent = "Srpskih Vladara 15, Apatin";
  secondColumn.appendChild(ul);
  ul.appendChild(emailLi);
  ul.appendChild(phoneLi);
  ul.appendChild(locationLi);
  emailLi.appendChild(emailIcon);
  emailLi.appendChild(paraEmail);
  phoneLi.appendChild(phoneIcon);
  phoneLi.appendChild(paraPhone);
  locationLi.appendChild(locationIcon);
  locationLi.appendChild(paraLocation);
  return contactPageSection;
}
function createQuote() {
  var contactPageSection = document.querySelector("#contact");
  var secondColumn = document.querySelector(".second-column");
  var quoteContainer = document.createElement("div");
  var paraQuote = document.createElement("p");
  quoteContainer.className = "quote-container";
  paraQuote.className = "para-quote";
  paraQuote.textContent = "We really hope that you have a pleasant day!";
  secondColumn.appendChild(quoteContainer);
  quoteContainer.appendChild(paraQuote);
  return contactPageSection;
}
function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(function (key) {
    return el.setAttribute(key, attrs[key]);
  });
}
function loadContact() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createContactContent());
  contentContainer.appendChild(createContactDetailsInformation());
  contentContainer.appendChild(createContactForm());
  contentContainer.appendChild(createQuote());
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
/* harmony import */ var _assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/right-arrow.svg */ "./src/assets/right-arrow.svg");
/* harmony import */ var _assets_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/left-arrow.svg */ "./src/assets/left-arrow.svg");
/* harmony import */ var _assets_slide_img_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/slide-img-1.jpg */ "./src/assets/slide-img-1.jpg");
/* harmony import */ var _assets_slide_img_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/slide-img-2.jpg */ "./src/assets/slide-img-2.jpg");
/* harmony import */ var _assets_slide_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/slide-img-3.jpg */ "./src/assets/slide-img-3.jpg");
/* harmony import */ var _assets_home_pizza_img_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/home-pizza-img-1.png */ "./src/assets/home-pizza-img-1.png");
/* harmony import */ var _assets_home_pizza_img_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/home-pizza-img-2.png */ "./src/assets/home-pizza-img-2.png");
/* harmony import */ var _assets_home_pizza_img_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/home-pizza-img-3.png */ "./src/assets/home-pizza-img-3.png");








function createWebsiteColumns() {
  var homePageSection = document.querySelector("#home");
  var firstColumn = document.createElement("div");
  homePageSection.appendChild(firstColumn);
  var secondColumn = document.createElement("div");
  homePageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  var thirdColum = document.createElement("div");
  homePageSection.appendChild(thirdColum);
  return homePageSection;
}
function appendCarousel() {
  var contentContainer = document.querySelector("#content");
  var homePageSection = document.createElement("section");
  homePageSection.id = "home";
  var carousel = document.createElement("div");
  carousel.className = "carousel";
  var previousButton = document.createElement("button");
  var rightArrow = document.createElement("img");
  rightArrow.src = _assets_right_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;
  previousButton.classList.add("carousel-button", "carousel-button--left", "is-hidden");
  var nextButton = document.createElement("button");
  var leftArrow = document.createElement("img");
  leftArrow.src = _assets_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__;
  nextButton.classList.add("carousel-button", "carousel-button--right");
  var carouselTrackContainer = document.createElement("div");
  carouselTrackContainer.className = "carousel-track-container";
  contentContainer.appendChild(carousel);
  carousel.appendChild(carouselTrackContainer);
  carousel.appendChild(previousButton);
  previousButton.appendChild(leftArrow);
  carouselTrackContainer.appendChild(createCarouselUlAndLi(3));
  carousel.appendChild(nextButton);
  nextButton.appendChild(rightArrow);
  carousel.appendChild(createNextButtonIndicator(3));
  carouselFunctionality();
  return homePageSection;
}
function createCarouselUlAndLi(arg) {
  var ulCarouselTrack = document.createElement("ul");
  ulCarouselTrack.className = "carousel-track";
  for (var i = 0; i < arg; i++) {
    var carouselSlide = document.createElement("li");
    carouselSlide.className = "carousel-slide";
    var carouselImg = document.createElement("img");
    carouselImg.className = "carousel-image";
    ulCarouselTrack.appendChild(carouselSlide);
    carouselSlide.appendChild(carouselImg);
    switch (i) {
      case 0:
        carouselSlide.classList.add("current-slide");
        carouselImg.src = _assets_slide_img_1_jpg__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case 1:
        carouselImg.src = _assets_slide_img_2_jpg__WEBPACK_IMPORTED_MODULE_3__;
        break;
      case 2:
        carouselImg.src = _assets_slide_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__;
        break;
    }
  }
  return ulCarouselTrack;
}
function createNextButtonIndicator(arg) {
  var carouselNavigation = document.createElement("div");
  carouselNavigation.className = "carousel-nav";
  for (var i = 0; i < arg; i++) {
    var buttonCarouselIndicator = document.createElement("button");
    buttonCarouselIndicator.className = "button-carousel-indicator";
    carouselNavigation.appendChild(buttonCarouselIndicator);
    switch (i) {
      case 0:
        buttonCarouselIndicator.classList.add("current-slide");
        break;
    }
  }
  return carouselNavigation;
}
function carouselFunctionality() {
  var track = document.querySelector(".carousel-track");
  var slides = Array.from(track.children);
  var previousButton = document.querySelector(".carousel-button--left");
  var nextButton = document.querySelector(".carousel-button--right");
  var carouselDotsNavigation = document.querySelector(".carousel-nav");
  var allDots = Array.from(carouselDotsNavigation.children);
  var slideWidth = slides[0].getBoundingClientRect().width;

  // arrange the slides to be next to one another
  function setSlidePosition(slide, index) {
    slide.style.left = slideWidth * index + "px";
  }
  slides.forEach(setSlidePosition);
  function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  }
  function updateDots(currentDot, targetDot) {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  }
  function hideShowArrows(slides, previousButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
      previousButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      previousButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      previousButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  }

  // when i click left, it goes to the previous slide
  previousButton.addEventListener("click", function (e) {
    var currentSlide = track.querySelector(".current-slide");
    var previousSlide = currentSlide.previousElementSibling;
    var currentDot = carouselDotsNavigation.querySelector(".current-slide");
    var previousDot = currentDot.previousElementSibling;
    var previousIndex = slides.findIndex(function (slide) {
      return slide === previousSlide;
    });
    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrows(slides, previousButton, nextButton, previousIndex);
  });

  // when i click right, it goes to the next slide
  nextButton.addEventListener("click", function (e) {
    var currentSlide = track.querySelector(".current-slide");
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = carouselDotsNavigation.querySelector(".current-slide");
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(function (slide) {
      return slide === nextSlide;
    });
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, previousButton, nextButton, nextIndex);
    //move to the next slide
  });

  // when i click button indicators it moves to that slide
  carouselDotsNavigation.addEventListener("click", function (e) {
    // what element was clicked

    var targetDot = e.target.closest("button");
    if (!targetDot) return;
    var currentSlide = track.querySelector(".current-slide");
    var currentDot = carouselDotsNavigation.querySelector(".current-slide");
    var targetIndex = allDots.findIndex(function (dot) {
      return dot === targetDot;
    });
    var targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, previousButton, nextButton, targetIndex);
  });
}
function createHomeDiscountContent() {
  var homePageSection = document.querySelector("#home");
  var secondColumn = document.querySelector(".second-column");
  var separator = document.createElement("div");
  var discountContainer = document.createElement("div");
  var discountPara = document.createElement("p");
  var homeImgPizza1 = document.createElement("img");
  var homeImgPizza2 = document.createElement("img");
  var homeImgPizza3 = document.createElement("img");
  function createLiDiscount(arg) {
    var discountElementsUl = document.createElement("ul");
    discountElementsUl.className = "items-discount";
    for (var i = 0; i < arg; i++) {
      var liDiscount = document.createElement("li");
      var regularPriceItem = document.createElement("p");
      var discountedPriceItem = document.createElement("p");
      regularPriceItem.className = "regular-price-item";
      discountedPriceItem.className = "discount-price-item";
      discountElementsUl.appendChild(liDiscount);
      switch (i) {
        case 0:
          liDiscount.appendChild(homeImgPizza1);
          liDiscount.appendChild(regularPriceItem);
          liDiscount.appendChild(discountedPriceItem);
          regularPriceItem.textContent = "12$";
          discountedPriceItem.textContent = "9.00$";
          break;
        case 1:
          liDiscount.appendChild(homeImgPizza2);
          liDiscount.appendChild(regularPriceItem);
          liDiscount.appendChild(discountedPriceItem);
          regularPriceItem.textContent = "10$";
          discountedPriceItem.textContent = "7.00$";
          break;
        case 2:
          liDiscount.appendChild(homeImgPizza3);
          liDiscount.appendChild(regularPriceItem);
          liDiscount.appendChild(discountedPriceItem);
          regularPriceItem.textContent = "10$";
          discountedPriceItem.textContent = "5.00$";
          break;
      }
    }
    return discountElementsUl;
  }
  homeImgPizza1.src = _assets_home_pizza_img_1_png__WEBPACK_IMPORTED_MODULE_5__;
  homeImgPizza2.src = _assets_home_pizza_img_2_png__WEBPACK_IMPORTED_MODULE_6__;
  homeImgPizza3.src = _assets_home_pizza_img_3_png__WEBPACK_IMPORTED_MODULE_7__;
  homeImgPizza1.style.width = "200px";
  homeImgPizza2.style.width = "200px";
  homeImgPizza3.style.width = "200px";
  discountContainer.className = "discount-container";
  separator.className = "carousel-separator";
  discountPara.className = "para-quote";
  secondColumn.appendChild(separator);
  secondColumn.appendChild(discountContainer);
  discountContainer.appendChild(discountPara);
  discountContainer.appendChild(createLiDiscount(3));
  discountPara.textContent = "Pizza Day is here! Get cheesy on National Pizza Day with these money-saving deals! Order now!";
  return homePageSection;
}
function createMakeReservation() {
  var homePageSection = document.querySelector("#home");
  var secondColumn = document.querySelector(".second-column");
  var separator = document.createElement("div");
  var reservationContainer = document.createElement("div");
  var paraReservation = document.createElement("p");
  var reservationButton = document.createElement("button");
  separator.className = "carousel-separator";
  reservationContainer.className = "reservation-container";
  paraReservation.className = "para-quote";
  reservationButton.classList.add("reservation-button", "open-button");
  paraReservation.textContent = "Do you want to make a reservation? No problem, you can do that by filling out our online reservation form! ";
  reservationButton.textContent = "RESERVE NOW";
  secondColumn.appendChild(separator);
  secondColumn.appendChild(reservationContainer);
  reservationContainer.appendChild(paraReservation);
  reservationContainer.appendChild(reservationButton);
  return homePageSection;
}
function createReservationModal() {
  var homePageSection = document.querySelector("#home");
  var secondColumn = document.querySelector(".second-column");
  var dialogModal = document.createElement("dialog");
  dialogModal.id = "form-modal";
  dialogModal.className = "modal";
  secondColumn.appendChild(dialogModal);
  dialogModal.appendChild(createFormReservation(5));
  createSelectDropdown(6);
  modalFunctions();
  function createFormReservation(arg) {
    var formModal = document.createElement("form");
    for (var i = 0; i < arg; i++) {
      var formGroup = document.createElement("div");
      formGroup.className = "form-group";
      formModal.appendChild(formGroup);
      var label = document.createElement("label");
      var input = document.createElement("input");
      formGroup.appendChild(label);
      formModal.setAttribute("method", "dialog");
      switch (i) {
        case 0:
          label.setAttribute("for", "first_name");
          label.textContent = "First Name";
          label.appendChild(input);
          setAttributes(input, {
            minlength: 3,
            name: "first_name",
            required: ""
          });
          break;
        case 1:
          label.setAttribute("for", "last_name");
          label.textContent = "Last Name";
          label.appendChild(input);
          setAttributes(input, {
            type: "text",
            minlength: 3,
            name: "last_name",
            required: ""
          });
          break;
        case 2:
          label.setAttribute("for", "user_email");
          label.textContent = "Email";
          label.appendChild(input);
          setAttributes(input, {
            type: "email",
            name: "user_email",
            required: ""
          });
          break;
        case 3:
          label.setAttribute("for", "user_phone");
          label.textContent = "Phone";
          label.appendChild(input);
          setAttributes(input, {
            type: "phone",
            name: "user_phone",
            required: ""
          });
          break;
        case 4:
          label.setAttribute("for", "date");
          label.textContent = "Select the date:";
          label.appendChild(input);
          setAttributes(input, {
            type: "date",
            id: "date",
            name: "reservation",
            value: "2023-01-01",
            min: "2023-01-01",
            max: "2023-12-31"
          });
      }
    }
    return formModal;
  }
  function createSelectDropdown(arg) {
    var form = document.querySelector("form");
    var formGroup = document.createElement("div");
    var selectElementTypeReservation = document.createElement("select");
    var dialogButton = document.createElement("button");
    dialogButton.className = "submit";
    dialogButton.setAttribute("type", "submit");
    dialogButton.textContent = "SUBMIT";
    formGroup.className = "form-group";
    var label = document.createElement("label");
    label.setAttribute("for", "reservation-select");
    label.textContent = "Choose a type of a reservation:";
    form.appendChild(formGroup);
    formGroup.appendChild(label);
    form.appendChild(dialogButton);
    selectElementTypeReservation.setAttribute("name", "reservation");
    formGroup.appendChild(selectElementTypeReservation);
    for (var i = 0; i < arg; i++) {
      var option = document.createElement("option");
      switch (i) {
        case 0:
          option.setAttribute("value", "");
          option.textContent = "Please choose an option";
          selectElementTypeReservation.appendChild(option);
          break;
        case 1:
          option.setAttribute("value", "dinner");
          option.textContent = "Dinner";
          selectElementTypeReservation.appendChild(option);
          break;
        case 2:
          option.setAttribute("value", "birthday/private party");
          option.textContent = "Birthday/Private Party";
          selectElementTypeReservation.appendChild(option);
          break;
        case 3:
          option.setAttribute("value", "anniversary");
          option.textContent = "Anniversary";
          selectElementTypeReservation.appendChild(option);
          break;
        case 4:
          option.setAttribute("value", "meeting");
          option.textContent = "Meeting";
          selectElementTypeReservation.appendChild(option);
          break;
        case 5:
          option.setAttribute("value", "weeding");
          option.textContent = "Weeding";
          selectElementTypeReservation.appendChild(option);
          break;
      }
    }
    return form;
  }
  function modalFunctions() {
    var modal = document.querySelector(".modal");
    var openModal = document.querySelector(".open-button");
    openModal.addEventListener("click", function () {
      modal.showModal();
    });
  }
  function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(function (key) {
      return el.setAttribute(key, attrs[key]);
    });
  }
  return homePageSection;
}
function loadHome() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(appendCarousel());
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createHomeDiscountContent());
  contentContainer.appendChild(createMakeReservation());
  contentContainer.appendChild(createReservationModal());
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
function createWebsiteColumns() {
  var menuPageSection = document.createElement("section");
  menuPageSection.id = "menu";
  var firstColumn = document.createElement("div");
  menuPageSection.appendChild(firstColumn);
  var secondColumn = document.createElement("div");
  menuPageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  var thirdColum = document.createElement("div");
  menuPageSection.appendChild(thirdColum);
  return menuPageSection;
}
function createMenuContent() {
  var menuPageSection = document.querySelector("#menu");
  var secondColumn = document.querySelector(".second-column");
  var menuH2 = document.createElement("h2");
  menuH2.textContent = "MENU";
  var menuIcon = document.createElement("span");
  menuIcon.className = "material-symbols-outlined";
  menuIcon.textContent = "restaurant_menu";
  var separator = document.createElement("div");
  separator.className = "separator";
  secondColumn.appendChild(menuH2);
  secondColumn.appendChild(menuIcon);
  secondColumn.appendChild(separator);
  return menuPageSection;
}
function createMenu() {
  var menuPageSection = document.querySelector("#menu");
  var secondColumn = document.querySelector(".second-column");
  var menuContainer = document.createElement("div");
  var menuContainerSecond = document.createElement("div");
  var menuHeaderPizza = document.createElement("div");
  var pizzaH3 = document.createElement("h3");
  var menuHeaderPasta = document.createElement("div");
  var pastaH3 = document.createElement("h3");
  menuContainer.className = "menu-container";
  menuContainerSecond.className = "food-container";
  menuHeaderPizza.className = "menu-header";
  secondColumn.appendChild(menuHeaderPizza);
  menuHeaderPizza.appendChild(pizzaH3);
  pizzaH3.textContent = "Pizza";
  pizzaH3.className = "food-menu-h3";
  secondColumn.appendChild(menuContainer);
  menuContainer.className = "food-container";
  menuContainer.appendChild(createLiMenu(5));
  secondColumn.appendChild(menuHeaderPasta);
  menuHeaderPasta.appendChild(pastaH3);
  pastaH3.textContent = "Pasta";
  pastaH3.className = "food-menu-h3";
  secondColumn.appendChild(menuContainerSecond);
  menuContainerSecond.appendChild(createLiMenu(5));
  return menuPageSection;
}
function createLiMenu(arg) {
  var menuContainer = document.querySelectorAll(".food-container");
  var foodMenu = document.createElement("div");
  foodMenu.className = "food-list";
  for (var i = 0; i < arg; i++) {
    var foodPara = document.createElement("p");
    var dottedLine = document.createElement("div");
    var foodPrice = document.createElement("p");
    dottedLine.className = "dotted-line";
    foodPrice.className = "food-price";
    foodMenu.appendChild(foodPara);
    if (menuContainer.length === 1) {
      switch (i) {
        case 0:
          foodPara.textContent = "Margherita";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";
          break;
        case 1:
          foodPara.textContent = "Capricciosa";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$8";
          break;
        case 2:
          foodPara.textContent = "Diavola";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$8";
          break;
        case 3:
          foodPara.textContent = "Pepperoni";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$10";
          break;
        case 4:
          foodPara.textContent = "Quattro Formaggi";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";
          break;
      }
    } else if (menuContainer.length === 2) {
      switch (i) {
        case 0:
          foodPara.textContent = "Bolognese";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";
          break;
        case 1:
          foodPara.textContent = "Carbonara";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";
          break;
        case 2:
          foodPara.textContent = "Napolitano";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13 ";
          break;
        case 3:
          foodPara.textContent = "Tomato";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13";
          break;
        case 4:
          foodPara.textContent = "Aglio Olio";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13";
          break;
      }
    }
  }
  return foodMenu;
}
function createDelivery() {
  var menuPageSection = document.querySelector("#menu");
  var secondColumn = document.querySelector(".second-column");
  var deliveryContainer = document.createElement("div");
  var paraQuote = document.createElement("p");
  var ul = document.createElement("ul");
  ul.className = "contact-icons-ul";
  paraQuote.className = "para-quote";
  deliveryContainer.className = "delivery-container";
  var clockLi = document.createElement("li");
  clockLi.className = "contact-li";
  var phoneLi = document.createElement("li");
  phoneLi.className = "contact-li";
  var clockIcon = document.createElement("span");
  clockIcon.className = "material-symbols-outlined";
  clockIcon.textContent = "nest_clock_farsight_analog";
  var phoneIcon = document.createElement("span");
  phoneIcon.className = "material-symbols-outlined";
  phoneIcon.textContent = "call";
  secondColumn.appendChild(deliveryContainer);
  deliveryContainer.appendChild(paraQuote);
  paraQuote.textContent = "We are doing delivery across the hole town. Free of charge!";
  var paraClock = document.createElement("p");
  paraClock.className = "para-contact-icons";
  paraClock.textContent = "8AM-12AM";
  var paraPhone = document.createElement("p");
  paraPhone.className = "para-contact-icons";
  paraPhone.textContent = "+381 123 4567";
  deliveryContainer.appendChild(ul);
  ul.appendChild(clockLi);
  ul.appendChild(phoneLi);
  clockLi.appendChild(clockIcon);
  clockLi.appendChild(paraClock);
  phoneLi.appendChild(phoneIcon);
  phoneLi.appendChild(paraPhone);
  return menuPageSection;
}
function loadMenu() {
  var contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createMenuContent());
  contentContainer.appendChild(createMenu());
  contentContainer.appendChild(createDelivery());
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/pages/about.js");
/* harmony import */ var _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/github-mark-white.svg */ "./src/assets/github-mark-white.svg");






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
var clearContentContainer = function clearContentContainer() {
  var contentContainer = document.querySelector("#content");
  contentContainer.textContent = "";
};
function createFooter() {
  var footer = document.createElement("footer");
  var footerContainer = document.createElement("div");
  var copyright = document.createElement("p");
  var linkGitHub = document.createElement("p");
  var aHyperLink = document.createElement("a");
  var gitHubLogo = document.createElement("img");
  gitHubLogo.src = _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_5__;
  footerContainer.className = "footer-container";
  copyright.className = "copyright";
  copyright.textContent = "© " + new Date().getFullYear();
  aHyperLink.setAttribute("href", "https://github.com/AirDevil188");
  aHyperLink.textContent = "AirDevil188";
  footer.appendChild(footerContainer);
  footerContainer.appendChild(gitHubLogo);
  footerContainer.appendChild(linkGitHub);
  linkGitHub.appendChild(aHyperLink);
  footerContainer.appendChild(copyright);
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
  body.appendChild(createFooter());
  var menuNavigation = document.querySelectorAll("#menu-navigation");
  menuNavigation.forEach(function (button) {
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
          break;
        case "About":
          clearContentContainer();
          (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
          break;
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/reforma-1918);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* generic website styles */

:root {
  --header-color: #000000;
  --nav-a-color: #ffffff;
  --nav-a-bg-mobile-devices-color: #563517;
  --nav-a-hover-text-color: #9c6f44;
  --content-separator-color: #9c6f44;
  --border-color: #9c6f44;
  --primary-font: "Roboto, Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --secondary-font: "Dancing Script", cursive;
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
  font-family: var(--primary-font);
  padding: 0;
  margin: 0;
}

/* google icons */
.material-symbols-outlined {
  grid-row: 2/3;
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 48;
  font-size: 3.2rem;
  color: #9c6f44;
}

#content {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.1rem;
}

section h2 {
  font-size: 2.8rem;
  text-transform: uppercase;
  padding: 1rem;
  font-family: var(--secondary-font);
}

h3 {
  font-size: 3rem;
}

.second-column {
  display: grid;
  justify-items: center;
  gap: 2rem;
}

.separator {
  grid-row: 3/3;
  width: 300px;
  height: 2px;
  background-color: var(--content-separator-color);
}

section p {
  padding: 1rem;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  text-align: center;
}

a {
  text-decoration: none;
  color: goldenrod;
}

/* lightbox */
.lightbox-image {
  max-width: 100%;
}

.grid-lightbox-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0, 0);
  transition: transform ease-in-out 200ms;
}

.grid-lightbox-container:target {
  transform: scale(1, 1);
}

.grid-lightbox-content {
  width: 75%;
  padding: 1rem;
  position: relative;
}

.lightbox-close-button {
  position: absolute;
  width: 2em;
  height: 2em;
  background: #563517;
  top: -1em;
  right: -1em;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close-button::after {
  content: "X";
  color: white;
  font-weight: 900;
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

/* footer */
footer {
  background-color: #000000;
  margin-top: 5rem;
  justify-items: center;
  display: grid;
}

.footer-container {
  height: 50px;
  display: flex;
  gap: 2rem;
}

.footer-container p {
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
}

.footer-container img {
  width: 50px;
  height: 50px;
  padding: 0.5rem;
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

/* form */

.form-container form {
  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

input {
  display: block;
  margin-top: 1px;
  border: 1px solid var(--border-color);
}

label {
  display: block;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-style: italic;
}

textarea {
  display: block;
  max-width: 220px;
  margin-top: 1px;
  border: 1px solid var(--border-color);
  resize: vertical;
}

.form-button-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  border: 1px solid var(--border-color);
  font-family: var(--secondary-font);
  width: 150px;
  height: 33px;
}

fieldset {
  width: 100%;
  border-color: var(--border-color);
}

/* contact icons and information */
.contact-icons-ul {
  display: flex;
  cursor: pointer;
  flex-flow: column;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 10px;
}

.contact-li {
  display: flex;
  cursor: pointer;
  flex-flow: column;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 10px;
}
.para-contact-icons {
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: 1rem;
  padding: 1rem;
}

.para-quote {
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 2.2rem;
  text-align: center;
  letter-spacing: 0;
}

/* about section  */
.grid-images-container img {
  width: 100%;
  height: 100%;
}

.grid-images-container ul {
  list-style: none;
  display: grid;
  gap: 0.3rem;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
}

/* menu section  */

.food-menu-h3 {
  font-family: "Reforma 1918", sans-serif;
  font-style: italic;
  font-weight: 300;
}

.menu-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}

.menu-header {
  grid-row: 4/5;
}

.menu-container ul {
  display: flex;
  padding: 0;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 2rem;
}

.food-container,
.food-container-2 {
  display: grid;
  border: 2px solid #9c6f44;
}

.food-list p {
  font-family: var(--secondary-font);
  font-style: normal;
  font-size: 2rem;
  font-weight: 300;
}

.food-list {
  font-family: var(--secondary-font);
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: baseline;
}

.dotted-line {
  border-bottom: 2px dashed #9c6f44;
  grid-column: 2/3;
}

.food-price {
  font-weight: 700 !important;
  grid-column: 3/4;
}

.delivery-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 1rem;
}

/* home page */

/* carousel styles */
.carousel {
  position: relative;
  height: 600px;
  width: 100%;
  margin: 0 auto;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-track-container {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-track {
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 250ms ease-in;
}

.carousel-slide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.carousel-button--left {
  left: 10px;
}

.carousel-button--right {
  right: 10px;
}

.carousel-button img {
  width: 35px;
}

.carousel-nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.button-carousel-indicator {
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0 12px;
  background: #9c6f44;
  cursor: pointer;
}

.button-carousel-indicator.current-slide {
  background: rgba(0, 0, 0, 0.75);
}

.is-hidden {
  display: none;
}

.carousel-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 2px;
  background-color: #9c6f44;
  margin-top: 5rem;
}

/* discount section */
.discount-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.items-discount {
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 5rem;
  cursor: pointer;
  padding: 0;
}

.regular-price-item {
  font-size: 1.5rem;
  text-decoration: line-through;
}

.discount-price-item {
  font-size: 2rem;
  font-weight: 400;
  color: green;
}

/* reserve section */
.reservation-container {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}

.reservation-button {
  width: 250px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  border: 1px solid var(--border-color);
  font-family: var(--secondary-font);
}

/* modal - reservation form */

.modal {
  width: 500px;
  padding: 1rem;
  border: 3px solid #9c6f44;
  overflow: hidden;
}

.modal form {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.form-group {
  display: grid;
  justify-items: center;
  padding: 0.5rem;
}

select {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.modal form {
  display: grid;
  justify-items: center;
  gap: 1rem;
}

.submit {
  border: 1px solid var(--border-color);
  font-family: var(--secondary-font);
  width: 150px;
  height: 33px;
}

.modal::backdrop {
  background-color: white;
  opacity: 1;
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

  /* menu page */

  .food-list {
    grid-template-columns: 1fr 4fr 1fr;
    align-items: baseline;
    width: 500px;
  }
  .food-container {
    padding: 2rem;
  }
}

/* home page */

/* discount section */

/* for desktop */
@media (min-width: 800px) {
  /* general styles */
  section {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section p {
    font-size: 1.5rem;
    text-align: center;
  }
  /* navbar */
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

  /* contact page section */

  /* form */
  .form-container form {
    flex-flow: row wrap;
    justify-content: center;
  }

  fieldset {
    width: 700px;
    padding: 2rem;
  }

  textarea {
    max-width: 100%;
  }

  .contact-icons-ul {
    flex-flow: row nowrap;
  }

  /* about section */
  .grid-images-container ul {
    grid-template-columns: repeat(2, minmax(400px, 1fr));
  }

  .image-1 {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  .image-2 {
    grid-column: 1/2;
    grid-row: 4/6;
  }

  .image-3 {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  .image-4 {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  .image-5 {
    grid-column: 2/3;
    grid-row: 4/6;
  }

  /* lightbox */

  .grid-lightbox-content {
    width: 40%;
    position: relative;
  }

  #grid-vertical-picture {
    width: 25%;
    position: relative;
  }

  /* menu page */
  .food-list {
    grid-template-columns: 1fr 4fr 1fr;
    align-items: baseline;
    width: 800px;
  }

  /* home page */

  /* discount section */

  .items-discount {
    flex-flow: row nowrap;
    gap: 5rem;
  }

  /* reservation form */
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* generic website styles */\n\n:root {\n  --header-color: #000000;\n  --nav-a-color: #ffffff;\n  --nav-a-bg-mobile-devices-color: #563517;\n  --nav-a-hover-text-color: #9c6f44;\n  --content-separator-color: #9c6f44;\n  --border-color: #9c6f44;\n  --primary-font: \"Roboto, Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  --secondary-font: \"Dancing Script\", cursive;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap\");\n@import url(\"https://fonts.cdnfonts.com/css/reforma-1918\");\n\nbody {\n  font-family: var(--primary-font);\n  padding: 0;\n  margin: 0;\n}\n\n/* google icons */\n.material-symbols-outlined {\n  grid-row: 2/3;\n  font-variation-settings: \"FILL\" 0, \"wght\" 300, \"GRAD\" 0, \"opsz\" 48;\n  font-size: 3.2rem;\n  color: #9c6f44;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsection {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 0.1rem;\n}\n\nsection h2 {\n  font-size: 2.8rem;\n  text-transform: uppercase;\n  padding: 1rem;\n  font-family: var(--secondary-font);\n}\n\nh3 {\n  font-size: 3rem;\n}\n\n.second-column {\n  display: grid;\n  justify-items: center;\n  gap: 2rem;\n}\n\n.separator {\n  grid-row: 3/3;\n  width: 300px;\n  height: 2px;\n  background-color: var(--content-separator-color);\n}\n\nsection p {\n  padding: 1rem;\n  font-family: \"Roboto\";\n  font-style: italic;\n  font-weight: 300;\n  letter-spacing: 0.2rem;\n  font-size: 1rem;\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n  color: goldenrod;\n}\n\n/* lightbox */\n.lightbox-image {\n  max-width: 100%;\n}\n\n.grid-lightbox-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: scale(0, 0);\n  transition: transform ease-in-out 200ms;\n}\n\n.grid-lightbox-container:target {\n  transform: scale(1, 1);\n}\n\n.grid-lightbox-content {\n  width: 75%;\n  padding: 1rem;\n  position: relative;\n}\n\n.lightbox-close-button {\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  background: #563517;\n  top: -1em;\n  right: -1em;\n  border-radius: 50%;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lightbox-close-button::after {\n  content: \"X\";\n  color: white;\n  font-weight: 900;\n}\n\n/* header and nav styles */\n\n.header {\n  background-color: var(--header-color);\n}\n\nheader {\n  max-width: 1200px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n#header-logo {\n  max-width: 314px;\n  max-height: 32px;\n}\n\n/* footer */\nfooter {\n  background-color: #000000;\n  margin-top: 5rem;\n  justify-items: center;\n  display: grid;\n}\n\n.footer-container {\n  height: 50px;\n  display: flex;\n  gap: 2rem;\n}\n\n.footer-container p {\n  font-size: 1.1rem;\n  color: #ffffff;\n  font-weight: 600;\n}\n\n.footer-container img {\n  width: 50px;\n  height: 50px;\n  padding: 0.5rem;\n}\n\n/* navigation styling across all the breakpoints */\n\nnav ul {\n  display: flex;\n  gap: 0.5em;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav li {\n  /* I have selected 48% for flex basis because I want to have two li elements per line. */\n  flex-basis: 48%;\n  margin-bottom: 0.6rem;\n}\n\nnav li:first-child {\n  /* in order for logo to be on his own line on mobile devices we set a flex-basis selector to 100% */\n  flex-basis: 100%;\n  text-align: center;\n}\n\nnav a {\n  display: block;\n  padding: 1rem;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 1.2rem;\n  color: var(--nav-a-color);\n  background-color: var(--nav-a-bg-mobile-devices-color);\n  text-align: center;\n}\n\nnav a:hover {\n  color: var(--nav-a-hover-text-color);\n}\n\nnav li:first-child a {\n  background-color: transparent;\n}\n\n/* contact section of the page */\n#contact-container {\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n}\n\n/* form */\n\n.form-container form {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n}\n\ninput {\n  display: block;\n  margin-top: 1px;\n  border: 1px solid var(--border-color);\n}\n\nlabel {\n  display: block;\n  text-align: center;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1.2rem;\n  font-family: var(--secondary-font);\n  font-weight: 400;\n  font-style: italic;\n}\n\ntextarea {\n  display: block;\n  max-width: 220px;\n  margin-top: 1px;\n  border: 1px solid var(--border-color);\n  resize: vertical;\n}\n\n.form-button-container {\n  display: flex;\n  justify-content: center;\n}\n\n.submit-button {\n  border: 1px solid var(--border-color);\n  font-family: var(--secondary-font);\n  width: 150px;\n  height: 33px;\n}\n\nfieldset {\n  width: 100%;\n  border-color: var(--border-color);\n}\n\n/* contact icons and information */\n.contact-icons-ul {\n  display: flex;\n  cursor: pointer;\n  flex-flow: column;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  gap: 10px;\n}\n\n.contact-li {\n  display: flex;\n  cursor: pointer;\n  flex-flow: column;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  gap: 10px;\n}\n.para-contact-icons {\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1rem;\n  padding: 1rem;\n}\n\n.para-quote {\n  font-family: var(--secondary-font);\n  font-weight: 300;\n  font-size: 2.2rem;\n  text-align: center;\n  letter-spacing: 0;\n}\n\n/* about section  */\n.grid-images-container img {\n  width: 100%;\n  height: 100%;\n}\n\n.grid-images-container ul {\n  list-style: none;\n  display: grid;\n  gap: 0.3rem;\n  grid-template-columns: 1fr;\n  padding: 0;\n  margin: 0;\n}\n\n/* menu section  */\n\n.food-menu-h3 {\n  font-family: \"Reforma 1918\", sans-serif;\n  font-style: italic;\n  font-weight: 300;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n}\n\n.menu-header {\n  grid-row: 4/5;\n}\n\n.menu-container ul {\n  display: flex;\n  padding: 0;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  font-size: 2rem;\n}\n\n.food-container,\n.food-container-2 {\n  display: grid;\n  border: 2px solid #9c6f44;\n}\n\n.food-list p {\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.food-list {\n  font-family: var(--secondary-font);\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  align-items: baseline;\n}\n\n.dotted-line {\n  border-bottom: 2px dashed #9c6f44;\n  grid-column: 2/3;\n}\n\n.food-price {\n  font-weight: 700 !important;\n  grid-column: 3/4;\n}\n\n.delivery-container {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  gap: 1rem;\n}\n\n/* home page */\n\n/* carousel styles */\n.carousel {\n  position: relative;\n  height: 600px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.carousel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.carousel-track-container {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.carousel-track {\n  position: relative;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  transition: transform 250ms ease-in;\n}\n\n.carousel-slide {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.carousel-button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.carousel-button--left {\n  left: 10px;\n}\n\n.carousel-button--right {\n  right: 10px;\n}\n\n.carousel-button img {\n  width: 35px;\n}\n\n.carousel-nav {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n}\n\n.button-carousel-indicator {\n  border: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  margin: 0 12px;\n  background: #9c6f44;\n  cursor: pointer;\n}\n\n.button-carousel-indicator.current-slide {\n  background: rgba(0, 0, 0, 0.75);\n}\n\n.is-hidden {\n  display: none;\n}\n\n.carousel-separator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 2px;\n  background-color: #9c6f44;\n  margin-top: 5rem;\n}\n\n/* discount section */\n.discount-container {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n}\n\n.items-discount {\n  list-style: none;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  gap: 5rem;\n  cursor: pointer;\n  padding: 0;\n}\n\n.regular-price-item {\n  font-size: 1.5rem;\n  text-decoration: line-through;\n}\n\n.discount-price-item {\n  font-size: 2rem;\n  font-weight: 400;\n  color: green;\n}\n\n/* reserve section */\n.reservation-container {\n  display: flex;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.reservation-button {\n  width: 250px;\n  height: 60px;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border: 1px solid var(--border-color);\n  font-family: var(--secondary-font);\n}\n\n/* modal - reservation form */\n\n.modal {\n  width: 500px;\n  padding: 1rem;\n  border: 3px solid #9c6f44;\n  overflow: hidden;\n}\n\n.modal form {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n}\n\n.form-group {\n  display: grid;\n  justify-items: center;\n  padding: 0.5rem;\n}\n\nselect {\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.modal form {\n  display: grid;\n  justify-items: center;\n  gap: 1rem;\n}\n\n.submit {\n  border: 1px solid var(--border-color);\n  font-family: var(--secondary-font);\n  width: 150px;\n  height: 33px;\n}\n\n.modal::backdrop {\n  background-color: white;\n  opacity: 1;\n}\n/* for tablet */\n@media (min-width: 550px) {\n  nav ul {\n    justify-content: center;\n    gap: 0.5em;\n  }\n  nav li {\n    flex-basis: auto;\n    margin-bottom: 0;\n  }\n  nav a {\n    font-size: 1.2rem;\n    color: var(--nav-a-color);\n    background-color: transparent;\n  }\n  nav a:hover {\n    background-color: transparent;\n  }\n\n  /* menu page */\n\n  .food-list {\n    grid-template-columns: 1fr 4fr 1fr;\n    align-items: baseline;\n    width: 500px;\n  }\n  .food-container {\n    padding: 2rem;\n  }\n}\n\n/* home page */\n\n/* discount section */\n\n/* for desktop */\n@media (min-width: 800px) {\n  /* general styles */\n  section {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    max-width: 1200px;\n    height: 100%;\n    margin: 0 auto;\n    padding: 0 1rem;\n  }\n\n  section p {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n  /* navbar */\n  /* navigation for logo in the center */\n  nav ul {\n    justify-content: flex-end;\n    gap: none;\n  }\n\n  nav a {\n    font-size: 1.5rem;\n  }\n\n  nav li:first-child {\n    flex-basis: auto;\n    margin: 0 auto;\n    order: 2;\n  }\n  nav li:nth-child(2),\n  nav li:nth-child(3) {\n    order: 1;\n  }\n  nav li:nth-child(4),\n  nav li:nth-child(5) {\n    order: 3;\n  }\n\n  /* contact page section */\n\n  /* form */\n  .form-container form {\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n\n  fieldset {\n    width: 700px;\n    padding: 2rem;\n  }\n\n  textarea {\n    max-width: 100%;\n  }\n\n  .contact-icons-ul {\n    flex-flow: row nowrap;\n  }\n\n  /* about section */\n  .grid-images-container ul {\n    grid-template-columns: repeat(2, minmax(400px, 1fr));\n  }\n\n  .image-1 {\n    grid-column: 1/2;\n    grid-row: 1/3;\n  }\n\n  .image-2 {\n    grid-column: 1/2;\n    grid-row: 4/6;\n  }\n\n  .image-3 {\n    grid-column: 2/3;\n    grid-row: 1/2;\n  }\n\n  .image-4 {\n    grid-column: 2/3;\n    grid-row: 2/3;\n  }\n\n  .image-5 {\n    grid-column: 2/3;\n    grid-row: 4/6;\n  }\n\n  /* lightbox */\n\n  .grid-lightbox-content {\n    width: 40%;\n    position: relative;\n  }\n\n  #grid-vertical-picture {\n    width: 25%;\n    position: relative;\n  }\n\n  /* menu page */\n  .food-list {\n    grid-template-columns: 1fr 4fr 1fr;\n    align-items: baseline;\n    width: 800px;\n  }\n\n  /* home page */\n\n  /* discount section */\n\n  .items-discount {\n    flex-flow: row nowrap;\n    gap: 5rem;\n  }\n\n  /* reservation form */\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/assets/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-mark-white.svg";

/***/ }),

/***/ "./src/assets/grid-image-1.jpg":
/*!*************************************!*\
  !*** ./src/assets/grid-image-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid-image-1.jpg";

/***/ }),

/***/ "./src/assets/grid-image-2.jpg":
/*!*************************************!*\
  !*** ./src/assets/grid-image-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid-image-2.jpg";

/***/ }),

/***/ "./src/assets/grid-image-3.jpg":
/*!*************************************!*\
  !*** ./src/assets/grid-image-3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid-image-3.jpg";

/***/ }),

/***/ "./src/assets/grid-image-4.jpg":
/*!*************************************!*\
  !*** ./src/assets/grid-image-4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid-image-4.jpg";

/***/ }),

/***/ "./src/assets/grid-image-5.jpg":
/*!*************************************!*\
  !*** ./src/assets/grid-image-5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid-image-5.jpg";

/***/ }),

/***/ "./src/assets/home-pizza-img-1.png":
/*!*****************************************!*\
  !*** ./src/assets/home-pizza-img-1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-pizza-img-1.png";

/***/ }),

/***/ "./src/assets/home-pizza-img-2.png":
/*!*****************************************!*\
  !*** ./src/assets/home-pizza-img-2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-pizza-img-2.png";

/***/ }),

/***/ "./src/assets/home-pizza-img-3.png":
/*!*****************************************!*\
  !*** ./src/assets/home-pizza-img-3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-pizza-img-3.png";

/***/ }),

/***/ "./src/assets/left-arrow.svg":
/*!***********************************!*\
  !*** ./src/assets/left-arrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "left-arrow.svg";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/right-arrow.svg":
/*!************************************!*\
  !*** ./src/assets/right-arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "right-arrow.svg";

/***/ }),

/***/ "./src/assets/slide-img-1.jpg":
/*!************************************!*\
  !*** ./src/assets/slide-img-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-img-1.jpg";

/***/ }),

/***/ "./src/assets/slide-img-2.jpg":
/*!************************************!*\
  !*** ./src/assets/slide-img-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-img-2.jpg";

/***/ }),

/***/ "./src/assets/slide-img-3.jpg":
/*!************************************!*\
  !*** ./src/assets/slide-img-3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-img-3.jpg";

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
//# sourceMappingURL=bundle.bea96dc837d0ac4d243c.js.map