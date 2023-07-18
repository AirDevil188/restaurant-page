function createMenu() {
  const menuContainer = document.createElement("div");

  menuContainer.classList.add("menu-container");

  const testH1Title = document.createElement("h1");
  testH1Title.textContent = "Test for my website!";

  menuContainer.appendChild(testH1Title);

  return menuContainer;
}

function loadMenu() {
  const mainContentContainer = document.getElementById("main-container");
  mainContentContainer.appendChild(createMenu());
}

export default loadMenu;
