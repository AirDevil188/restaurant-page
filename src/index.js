import "./styles/main.css";
import logo from "./assets/logo.svg";

const contentContainer = document.getElementById("content");
const headerLogo = document.createElement("img");
headerLogo.src = logo;

contentContainer.appendChild(headerLogo);
