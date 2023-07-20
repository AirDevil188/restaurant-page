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

function loadAbout() {
  createWebsiteColumns();
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createContentAbout());
  contentContainer.appendChild(createParaInformation());
}

export default loadAbout;
