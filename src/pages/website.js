import logo from "../assets/logo.svg";

const contentContainer = document.getElementById("content");
function createHeader() {
  const header = document.createElement("header");
  contentContainer.appendChild(header);
  const logoImage = document.createElement("img");
  logoImage.src = logo;
  header.appendChild(logoImage).className = "logo-header";
}

export default createHeader;
