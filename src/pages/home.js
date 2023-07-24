import rightArrowImage from "../assets/right-arrow.svg";
import leftArrowImage from "../assets/left-arrow.svg";
import slideImage1 from "../assets/slide-img-1.jpg";
import slideImage2 from "../assets/slide-img-2.jpg";
import slideImage3 from "../assets/slide-img-3.jpg";

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
  carousel.appendChild(previousButton);
  previousButton.appendChild(leftArrow);
  carousel.appendChild(carouselTrackContainer);
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
    console.log(targetIndex);

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, previousButton, nextButton, targetIndex);
  });
}

function createHomeContent() {
  const homePageSection = document.querySelector("#home");
  const secondColumn = document.querySelector(".second-column");
  const separator = document.createElement("div");
  separator.className = "carousel-separator";
  secondColumn.appendChild(separator);

  return homePageSection;
}

function loadHome() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(appendCarousel());
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createHomeContent());
}

export default loadHome;
