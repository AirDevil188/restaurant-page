function createWebsiteColumns() {
  const menuPageSection = document.createElement("section");
  menuPageSection.id = "menu";

  const firstColumn = document.createElement("div");
  menuPageSection.appendChild(firstColumn);
  const secondColumn = document.createElement("div");
  menuPageSection.appendChild(secondColumn);
  secondColumn.className = "second-column";
  const thirdColum = document.createElement("div");
  menuPageSection.appendChild(thirdColum);

  return menuPageSection;
}

function createMenuContent() {
  const menuPageSection = document.querySelector("#menu");
  const secondColumn = document.querySelector(".second-column");

  const menuH2 = document.createElement("h2");
  menuH2.textContent = "MENU";
  const menuIcon = document.createElement("span");
  menuIcon.className = "material-symbols-outlined";
  menuIcon.textContent = "restaurant_menu";
  const separator = document.createElement("div");
  separator.className = "separator";

  secondColumn.appendChild(menuH2);
  secondColumn.appendChild(menuIcon);
  secondColumn.appendChild(separator);

  return menuPageSection;
}

function createMenu() {
  const menuPageSection = document.querySelector("#menu");
  const secondColumn = document.querySelector(".second-column");

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";
  secondColumn.appendChild(menuContainer);
  menuContainer.textContent = "test";

  return menuPageSection;
}

function loadMenu() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createMenuContent());
  contentContainer.appendChild(createMenu());
}

export default loadMenu;
