import rightArrowImage from "../assets/right-arrow.svg";
import leftArrowImage from "../assets/left-arrow.svg";
import slideImage1 from "../assets/slide-img-1.jpg";
import slideImage2 from "../assets/slide-img-2.jpg";
import slideImage3 from "../assets/slide-img-3.jpg";
import homeImagePizza1 from "../assets/home-pizza-img-1.png";
import homeImagePizza2 from "../assets/home-pizza-img-2.png";
import homeImagePizza3 from "../assets/home-pizza-img-3.png";

function createWebsiteColumns() {
  const homePageSection = document.querySelector("#home");
  const firstColumn = document.createElement("div");
  homePageSection.appendChild(firstColumn);
  const secondColumn = document.createElement("div");
  homePageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  const thirdColum = document.createElement("div");
  homePageSection.appendChild(thirdColum);

  return homePageSection;
}

function appendCarousel() {
  const contentContainer = document.querySelector("#content");
  const homePageSection = document.createElement("section");
  homePageSection.id = "home";

  const carousel = document.createElement("div");
  carousel.className = "carousel";
  const previousButton = document.createElement("button");
  const rightArrow = document.createElement("img");
  rightArrow.src = rightArrowImage;
  previousButton.classList.add("carousel-button", "carousel-button--left", "is-hidden");
  const nextButton = document.createElement("button");
  const leftArrow = document.createElement("img");
  leftArrow.src = leftArrowImage;
  nextButton.classList.add("carousel-button", "carousel-button--right");
  const carouselTrackContainer = document.createElement("div");
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
  const ulCarouselTrack = document.createElement("ul");
  ulCarouselTrack.className = "carousel-track";

  for (let i = 0; i < arg; i++) {
    const carouselSlide = document.createElement("li");
    carouselSlide.className = "carousel-slide";
    const carouselImg = document.createElement("img");
    carouselImg.className = "carousel-image";
    ulCarouselTrack.appendChild(carouselSlide);
    carouselSlide.appendChild(carouselImg);

    switch (i) {
      case 0:
        carouselSlide.classList.add("current-slide");
        carouselImg.src = slideImage1;
        break;
      case 1:
        carouselImg.src = slideImage2;

        break;
      case 2:
        carouselImg.src = slideImage3;

        break;
    }
  }
  return ulCarouselTrack;
}

function createNextButtonIndicator(arg) {
  const carouselNavigation = document.createElement("div");
  carouselNavigation.className = "carousel-nav";

  for (let i = 0; i < arg; i++) {
    const buttonCarouselIndicator = document.createElement("button");
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
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const previousButton = document.querySelector(".carousel-button--left");
  const nextButton = document.querySelector(".carousel-button--right");
  const carouselDotsNavigation = document.querySelector(".carousel-nav");
  const allDots = Array.from(carouselDotsNavigation.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

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
  previousButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = carouselDotsNavigation.querySelector(".current-slide");
    const previousDot = currentDot.previousElementSibling;
    const previousIndex = slides.findIndex((slide) => slide === previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrows(slides, previousButton, nextButton, previousIndex);
  });

  // when i click right, it goes to the next slide
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = carouselDotsNavigation.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, previousButton, nextButton, nextIndex);
    //move to the next slide
  });

  // when i click button indicators it moves to that slide
  carouselDotsNavigation.addEventListener("click", (e) => {
    // what element was clicked

    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = carouselDotsNavigation.querySelector(".current-slide");
    const targetIndex = allDots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, previousButton, nextButton, targetIndex);
  });
}

function createHomeDiscountContent() {
  const homePageSection = document.querySelector("#home");
  const secondColumn = document.querySelector(".second-column");
  const separator = document.createElement("div");
  const discountContainer = document.createElement("div");
  const discountPara = document.createElement("p");
  const homeImgPizza1 = document.createElement("img");
  const homeImgPizza2 = document.createElement("img");
  const homeImgPizza3 = document.createElement("img");

  function createLiDiscount(arg) {
    const discountElementsUl = document.createElement("ul");
    discountElementsUl.className = "items-discount";
    for (let i = 0; i < arg; i++) {
      const liDiscount = document.createElement("li");
      const regularPriceItem = document.createElement("p");
      const discountedPriceItem = document.createElement("p");
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

  homeImgPizza1.src = homeImagePizza1;
  homeImgPizza2.src = homeImagePizza2;
  homeImgPizza3.src = homeImagePizza3;
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
  const homePageSection = document.querySelector("#home");
  const secondColumn = document.querySelector(".second-column");
  const separator = document.createElement("div");
  const reservationContainer = document.createElement("div");
  const paraReservation = document.createElement("p");
  const reservationButton = document.createElement("button");

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
  const homePageSection = document.querySelector("#home");
  const secondColumn = document.querySelector(".second-column");

  const dialogModal = document.createElement("dialog");
  const closeDialogButton = document.createElement("button");
  closeDialogButton.setAttribute("type", "button");
  closeDialogButton.classList.add("close", "close-button");

  dialogModal.id = "form-modal";
  dialogModal.className = "modal";

  secondColumn.appendChild(dialogModal);
  dialogModal.appendChild(createFormReservation(5));
  createSelectDropdown(6);
  modalFunctions();

  function createFormReservation(arg) {
    const formModal = document.createElement("form");
    formModal.appendChild(closeDialogButton);
    closeDialogButton.textContent = "CLOSE MODAL";
    closeDialogButton.classList.add("submit-button", "close-button");

    for (let i = 0; i < arg; i++) {
      const formGroup = document.createElement("div");
      formGroup.className = "form-group";
      formModal.appendChild(formGroup);
      const label = document.createElement("label");
      const input = document.createElement("input");
      formGroup.appendChild(label);
      formModal.setAttribute("method", "dialog");

      switch (i) {
        case 0:
          label.setAttribute("for", "first_name");
          label.textContent = "First Name";
          label.appendChild(input);
          setAttributes(input, { minlength: 3, name: "first_name", required: "" });
          break;

        case 1:
          label.setAttribute("for", "last_name");
          label.textContent = "Last Name";
          label.appendChild(input);
          setAttributes(input, { type: "text", minlength: 3, name: "last_name", required: "" });
          break;

        case 2:
          label.setAttribute("for", "user_email");
          label.textContent = "Email";
          label.appendChild(input);
          setAttributes(input, { type: "email", name: "user_email", required: "" });
          break;

        case 3:
          label.setAttribute("for", "user_phone");
          label.textContent = "Phone";
          label.appendChild(input);
          setAttributes(input, { type: "phone", name: "user_phone", required: "" });
          break;

        case 4:
          label.setAttribute("for", "date");
          label.textContent = "Select the date:";
          label.appendChild(input);
          setAttributes(input, { type: "date", id: "date", name: "reservation", value: "2023-01-01", min: "2023-01-01", max: "2023-12-31" });
      }
    }
    return formModal;
  }

  function createSelectDropdown(arg) {
    const form = document.querySelector("form");
    const formGroup = document.createElement("div");
    const selectElementTypeReservation = document.createElement("select");

    const dialogButton = document.createElement("button");
    dialogButton.className = "submit";
    dialogButton.setAttribute("type", "submit");
    dialogButton.textContent = "SUBMIT";
    formGroup.className = "form-group";

    const label = document.createElement("label");
    label.setAttribute("for", "reservation-select");
    label.textContent = "Choose a type of a reservation:";

    form.appendChild(formGroup);
    formGroup.appendChild(label);
    form.appendChild(dialogButton);

    selectElementTypeReservation.setAttribute("name", "reservation");
    formGroup.appendChild(selectElementTypeReservation);

    for (let i = 0; i < arg; i++) {
      const option = document.createElement("option");

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
    const modal = document.querySelector(".modal");
    const openModal = document.querySelector(".open-button");
    const closeModal = document.querySelector(".close-button");

    openModal.addEventListener("click", () => {
      modal.showModal();
    });

    closeModal.addEventListener("click", () => {
      modal.close();
    });
  }

  function setAttributes(el, attrs) {
    Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
  }
  return homePageSection;
}

function loadHome() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(appendCarousel());
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createHomeDiscountContent());
  contentContainer.appendChild(createMakeReservation());
  contentContainer.appendChild(createReservationModal());
}

export default loadHome;
