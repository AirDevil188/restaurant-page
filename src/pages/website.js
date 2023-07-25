import logo from "../assets/logo.png";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadAbout from "./about";
import gitLogo from "../assets/github-mark-white.svg";

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.appendChild(createNavbar());

  return header;
}

function createNavbar() {
  const nav = document.createElement("nav");
  const ulElement = document.createElement("ul");
  nav.appendChild(ulElement);
  for (let i = 0; i <= 4; i++) {
    const listedNavItem = document.createElement("li");
    listedNavItem.id = "menu-navigation";
    const headerLogo = document.createElement("img");
    const hyperLinkTag = document.createElement("a");
    hyperLinkTag.href = "#";
    headerLogo.src = logo;
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
  const headerContainer = document.createElement("div");
  headerContainer.className = "header";

  return headerContainer;
}

const clearContentContainer = () => {
  const contentContainer = document.querySelector("#content");

  contentContainer.textContent = "";
};

function createFooter() {
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  const copyright = document.createElement("p");
  const linkGitHub = document.createElement("p");
  const aHyperLink = document.createElement("a");
  const gitHubLogo = document.createElement("img");
  gitHubLogo.src = gitLogo;

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
  const body = document.querySelector("body");
  const contentContainer = document.createElement("div");

  contentContainer.id = "content";
  body.appendChild(createHeaderContainer());
  const headerContainer = document.querySelector(".header");
  headerContainer.appendChild(createHeader());
  body.appendChild(contentContainer);
  body.appendChild(createFooter());

  const menuNavigation = document.querySelectorAll("#menu-navigation");
  menuNavigation.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.id);

      switch (e.target.textContent) {
        case "Menu":
          clearContentContainer();
          loadMenu();
          break;
        case "Contact":
          clearContentContainer();
          loadContact();
          break;

        case "Home":
          clearContentContainer();
          loadHome();
          break;

        case "About":
          clearContentContainer();
          loadAbout();
          break;
      }
    });
  });

  loadHome();
}

export default loadWebsite;
