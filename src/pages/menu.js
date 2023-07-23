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
  const menuContainerSecond = document.createElement("div");
  const menuHeaderPizza = document.createElement("div");
  const pizzaH3 = document.createElement("h3");
  const menuHeaderPasta = document.createElement("div");
  const pastaH3 = document.createElement("h3");

  menuContainer.className = "menu-container";
  menuContainerSecond.className = "food-container";
  menuHeaderPizza.className = "menu-header";
  secondColumn.appendChild(menuHeaderPizza);
  menuHeaderPizza.appendChild(pizzaH3);

  pizzaH3.textContent = "Pizza";
  pizzaH3.className = "food-menu-h3";
  secondColumn.appendChild(menuContainer);
  menuContainer.className = "food-container";
  menuContainer.appendChild(createLiMenu(5));
  secondColumn.appendChild(menuHeaderPasta);
  menuHeaderPasta.appendChild(pastaH3);
  pastaH3.textContent = "Pasta";
  pastaH3.className = "food-menu-h3";
  secondColumn.appendChild(menuContainerSecond);
  menuContainerSecond.appendChild(createLiMenu(5));

  return menuPageSection;
}

function createLiMenu(arg) {
  const menuContainer = document.querySelectorAll(".food-container");

  const foodMenu = document.createElement("div");
  foodMenu.className = "food-list";
  for (let i = 0; i < arg; i++) {
    const foodPara = document.createElement("p");
    const dottedLine = document.createElement("div");
    const foodPrice = document.createElement("p");
    dottedLine.className = "dotted-line";
    foodPrice.className = "food-price";
    foodMenu.appendChild(foodPara);

    if (menuContainer.length === 1) {
      switch (i) {
        case 0:
          foodPara.textContent = "Margherita";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";

          break;
        case 1:
          foodPara.textContent = "Capricciosa";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$8";

          break;
        case 2:
          foodPara.textContent = "Diavola";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$8";

          break;
        case 3:
          foodPara.textContent = "Pepperoni";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$10";

          break;
        case 4:
          foodPara.textContent = "Quattro Formaggi";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";

          break;
      }
    } else if (menuContainer.length === 2) {
      switch (i) {
        case 0:
          foodPara.textContent = "Bolognese";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";

          break;
        case 1:
          foodPara.textContent = "Carbonara";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$12";

          break;
        case 2:
          foodPara.textContent = "Napolitano";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13 ";

          break;
        case 3:
          foodPara.textContent = "Tomato";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13";

          break;
        case 4:
          foodPara.textContent = "Aglio Olio";
          foodMenu.appendChild(dottedLine);
          foodMenu.appendChild(foodPrice);
          foodPrice.textContent = "$13";

          break;
      }
    }
  }
  return foodMenu;
}

function createDelivery() {
  const menuPageSection = document.querySelector("#menu");
  const secondColumn = document.querySelector(".second-column");

  const deliveryContainer = document.createElement("div");

  const paraQuote = document.createElement("p");
  const ul = document.createElement("ul");
  ul.className = "contact-icons-ul";

  paraQuote.className = "para-quote";

  deliveryContainer.className = "delivery-container";

  const clockLi = document.createElement("li");
  clockLi.className = "contact-li";

  const phoneLi = document.createElement("li");
  phoneLi.className = "contact-li";

  const clockIcon = document.createElement("span");
  clockIcon.className = "material-symbols-outlined";
  clockIcon.textContent = "nest_clock_farsight_analog";
  const phoneIcon = document.createElement("span");
  phoneIcon.className = "material-symbols-outlined";
  phoneIcon.textContent = "call";

  secondColumn.appendChild(deliveryContainer);
  deliveryContainer.appendChild(paraQuote);
  paraQuote.textContent = "We are doing delivery across the hole town. Free of charge!";

  const paraClock = document.createElement("p");
  paraClock.className = "para-contact-icons";
  paraClock.textContent = "8AM-12AM";

  const paraPhone = document.createElement("p");
  paraPhone.className = "para-contact-icons";
  paraPhone.textContent = "+381 123 4567";

  deliveryContainer.appendChild(ul);
  ul.appendChild(clockLi);
  ul.appendChild(phoneLi);

  clockLi.appendChild(clockIcon);
  clockLi.appendChild(paraClock);
  phoneLi.appendChild(phoneIcon);
  phoneLi.appendChild(paraPhone);

  return menuPageSection;
}

function loadMenu() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createWebsiteColumns());
  contentContainer.appendChild(createMenuContent());
  contentContainer.appendChild(createMenu());
  contentContainer.appendChild(createDelivery());
}

export default loadMenu;
