function createHome() {
  const homeContainer = document.createElement("div");

  const testH1Home = document.createElement("h1");
  testH1Home.textContent = "Home Page";
  homeContainer.appendChild(testH1Home);

  return homeContainer;
}

function loadHome() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createHome());
}

export default loadHome;
