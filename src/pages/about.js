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

function createAboutPage() {
  const aboutPageSection = document.querySelector("#about-container");
  const h2About = document.createElement("h2");
  h2About.textContent = "About Us";
  aboutPageSection.appendChild(h2About);

  return aboutPageSection;
}

function loadAbout() {
  createWebsiteColumns();
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createAboutPage());
}

export default loadAbout;
