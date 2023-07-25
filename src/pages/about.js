import gridImage1 from "../assets/grid-image-1.jpg";
import gridImage2 from "../assets/grid-image-2.jpg";
import gridImage3 from "../assets/grid-image-3.jpg";
import gridImage4 from "../assets/grid-image-4.jpg";
import gridImage5 from "../assets/grid-image-5.jpg";

function createWebsiteColumns() {
  const aboutPageSection = document.createElement("section");
  aboutPageSection.id = "about-container";

  const firstColumn = document.createElement("div");
  aboutPageSection.appendChild(firstColumn);
  const secondColumn = document.createElement("div");
  aboutPageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  const thirdColum = document.createElement("div");
  aboutPageSection.appendChild(thirdColum);

  return aboutPageSection;
}

function createContentAbout() {
  const aboutPageSection = document.querySelector("#about-container");
  const secondColumn = document.querySelector(".second-column");

  const h2About = document.createElement("h2");
  h2About.textContent = "About Us";
  secondColumn.appendChild(h2About);

  const aboutUsIcon = document.createElement("span");
  aboutUsIcon.className = "material-symbols-outlined";
  aboutUsIcon.textContent = "history_edu";
  secondColumn.appendChild(aboutUsIcon);
  const contentSeparator = document.createElement("div");
  contentSeparator.className = "separator";
  secondColumn.appendChild(contentSeparator);

  return aboutPageSection;
}

function createParaInformation() {
  const aboutPageSection = document.querySelector("#about-container");
  const secondColumn = document.querySelector(".second-column");

  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.className = "about-us-container";
  secondColumn.appendChild(aboutUsContainer);
  const paraAboutUs = document.createElement("p");
  aboutUsContainer.appendChild(paraAboutUs);
  paraAboutUs.textContent = "The quality was always our imperative. We started as a small pub in a relative small town in Serbia, called Apatin. What started as a family job, turned out to be something more than that. Our vision is that every costumer walks out happy! And after more than twenty years of experience we are still looking to innovate and learn new things.";

  return aboutPageSection;
}

function createGridImages() {
  const aboutPageSection = document.querySelector("#about-container");
  const secondColumn = document.querySelector(".second-column");

  const gridImagesContainer = document.createElement("div");
  gridImagesContainer.className = "grid-images-container";
  secondColumn.appendChild(gridImagesContainer);

  const ulGridImages = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.className = "image-1";
  const aHyperLinkOne = document.createElement("a");
  aHyperLinkOne.className = "button";
  aHyperLinkOne.href = "#lightbox-item-1";

  const li2 = document.createElement("li");
  li2.className = "image-2";
  const aHyperLinkTwo = document.createElement("a");
  aHyperLinkTwo.className = "button";
  aHyperLinkTwo.href = "#lightbox-item-2";

  const li3 = document.createElement("li");
  li3.className = "image-3";
  const aHyperLinkThree = document.createElement("a");
  aHyperLinkThree.className = "button";
  aHyperLinkThree.href = "#lightbox-item-3";

  const li4 = document.createElement("li");
  li4.className = "image-4";
  const aHyperLinkFour = document.createElement("a");
  aHyperLinkFour.className = "button";
  aHyperLinkFour.href = "#lightbox-item-4";
  const li5 = document.createElement("li");
  li5.className = "image-5";
  const aHyperLinkFive = document.createElement("a");
  aHyperLinkFive.className = "button";
  aHyperLinkFive.href = "#lightbox-item-5";

  const imageOne = document.createElement("img");
  imageOne.src = gridImage1;
  imageOne.setAttribute("loading", "lazy");
  const imageTwo = document.createElement("img");
  imageTwo.src = gridImage2;
  imageTwo.setAttribute("loading", "lazy");
  const imageThree = document.createElement("img");
  imageThree.src = gridImage3;
  imageThree.setAttribute("loading", "lazy");
  const imageFour = document.createElement("img");
  imageFour.src = gridImage4;
  imageFour.setAttribute("loading", "lazy");
  const imageFive = document.createElement("img");
  imageFive.src = gridImage5;
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
  const aboutPageSection = document.querySelector("#about-container");
  const secondColumn = document.querySelector(".second-column");

  const gridLightBoxes = document.createElement("div");
  gridLightBoxes.className = "grid-lightboxes";
  secondColumn.appendChild(gridLightBoxes);

  const gridLightBoxContainerOne = document.createElement("div");
  gridLightBoxContainerOne.className = "grid-lightbox-container";
  gridLightBoxContainerOne.id = "lightbox-item-1";
  gridLightBoxes.appendChild(gridLightBoxContainerOne);

  const gridLightBoxContentOne = document.createElement("div");
  gridLightBoxContentOne.className = "grid-lightbox-content";
  gridLightBoxContentOne.id = "grid-vertical-picture";
  gridLightBoxContainerOne.appendChild(gridLightBoxContentOne);
  const aHyperLinkOne = document.createElement("a");
  aHyperLinkOne.href = "#!";
  aHyperLinkOne.className = "lightbox-close-button";
  gridLightBoxContentOne.appendChild(aHyperLinkOne);
  const gridLightBoxOne = document.createElement("img");
  gridLightBoxOne.className = "lightbox-image";
  gridLightBoxOne.src = gridImage1;
  gridLightBoxContentOne.appendChild(gridLightBoxOne);

  const gridLightBoxContainerTwo = document.createElement("div");
  gridLightBoxContainerTwo.className = "grid-lightbox-container";
  gridLightBoxContainerTwo.id = "lightbox-item-2";
  gridLightBoxes.appendChild(gridLightBoxContainerTwo);

  const gridLightBoxContentTwo = document.createElement("div");
  gridLightBoxContentTwo.className = "grid-lightbox-content";
  gridLightBoxContainerTwo.appendChild(gridLightBoxContentTwo);
  const aHyperLinkTwo = document.createElement("a");
  aHyperLinkTwo.href = "#!";
  aHyperLinkTwo.className = "lightbox-close-button";
  gridLightBoxContentTwo.appendChild(aHyperLinkTwo);
  const gridLightBoxTwo = document.createElement("img");
  gridLightBoxTwo.className = "lightbox-image";
  gridLightBoxTwo.src = gridImage2;
  gridLightBoxContentTwo.appendChild(gridLightBoxTwo);

  const gridLightboxContainerThree = document.createElement("div");
  gridLightboxContainerThree.className = "grid-lightbox-container";
  gridLightboxContainerThree.id = "lightbox-item-3";
  gridLightBoxes.appendChild(gridLightboxContainerThree);

  const gridLightBoxContentThree = document.createElement("div");
  gridLightBoxContentThree.className = "grid-lightbox-content";
  gridLightboxContainerThree.appendChild(gridLightBoxContentThree);
  const aHyperLinkThree = document.createElement("a");
  aHyperLinkThree.href = "#!";
  aHyperLinkThree.className = "lightbox-close-button";
  gridLightBoxContentThree.appendChild(aHyperLinkThree);
  const gridLightBoxThree = document.createElement("img");
  gridLightBoxThree.className = "lightbox-image";
  gridLightBoxThree.src = gridImage3;
  gridLightBoxContentThree.appendChild(gridLightBoxThree);

  const gridLightBoxContainerFour = document.createElement("div");
  gridLightBoxContainerFour.className = "grid-lightbox-container";
  gridLightBoxContainerFour.id = "lightbox-item-4";
  gridLightBoxes.appendChild(gridLightBoxContainerFour);

  const gridLightBoxContentFour = document.createElement("div");
  gridLightBoxContentFour.className = "grid-lightbox-content";
  gridLightBoxContainerFour.appendChild(gridLightBoxContentFour);
  const aHyperLinkFour = document.createElement("a");
  aHyperLinkFour.href = "#!";
  aHyperLinkFour.className = "lightbox-close-button";
  gridLightBoxContentFour.appendChild(aHyperLinkFour);
  const gridLightBoxFour = document.createElement("img");
  gridLightBoxFour.className = "lightbox-image";
  gridLightBoxFour.src = gridImage4;
  gridLightBoxContentFour.appendChild(gridLightBoxFour);

  const gridLightBoxContainerFive = document.createElement("div");
  gridLightBoxContainerFive.className = "grid-lightbox-container";
  gridLightBoxContainerFive.id = "lightbox-item-5";
  gridLightBoxes.appendChild(gridLightBoxContainerFive);

  const gridLightBoxContentFive = document.createElement("div");
  gridLightBoxContentFive.className = "grid-lightbox-content";
  gridLightBoxContainerFive.appendChild(gridLightBoxContentFive);
  const aHyperLinkFive = document.createElement("a");
  aHyperLinkFive.href = "#!";
  aHyperLinkFive.className = "lightbox-close-button";
  gridLightBoxContentFive.appendChild(aHyperLinkFive);
  const gridLightBoxFive = document.createElement("img");
  gridLightBoxFive.className = "lightbox-image";
  gridLightBoxFive.src = gridImage5;
  gridLightBoxContentFive.appendChild(gridLightBoxFive);

  return aboutPageSection;
}

function loadAbout() {
  createWebsiteColumns();
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createContentAbout());
  contentContainer.appendChild(createParaInformation());
  contentContainer.appendChild(createGridImages());
  contentContainer.appendChild(createLightbox());
}

export default loadAbout;
