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
  paraAboutUs.textContent = "Since  1st of January 2000. the quality was always our imperative. We started as a small pub in a relative small town in Serbia, called Apatin. What started as a family job, turned out to be something more then that. Our vision is that every costumer walks out happy! And after more then twenty years of experience we are still looking to innovate and learn new things.";

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
  const li2 = document.createElement("li");
  li2.className = "image-2";
  const li3 = document.createElement("li");
  li3.className = "image-3";
  const li4 = document.createElement("li");
  li4.className = "image-4";
  const li5 = document.createElement("li");
  li5.className = "image-5";

  const imageOne = document.createElement("img");
  imageOne.src = gridImage1;
  const imageTwo = document.createElement("img");
  imageTwo.src = gridImage2;
  const imageThree = document.createElement("img");
  imageThree.src = gridImage3;
  const imageFour = document.createElement("img");
  imageFour.src = gridImage4;
  const imageFive = document.createElement("img");
  imageFive.src = gridImage5;

  gridImagesContainer.appendChild(ulGridImages);
  ulGridImages.appendChild(li1);
  li1.appendChild(imageFour);

  ulGridImages.appendChild(li2);
  li2.appendChild(imageTwo);

  ulGridImages.appendChild(li3);
  li3.appendChild(imageThree);

  ulGridImages.appendChild(li4);
  li4.appendChild(imageOne);

  ulGridImages.appendChild(li5);
  li5.appendChild(imageFive);

  return aboutPageSection;
}

function loadAbout() {
  createWebsiteColumns();
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createContentAbout());
  contentContainer.appendChild(createParaInformation());
  contentContainer.appendChild(createGridImages());
}

export default loadAbout;
