function createContactForm() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactFormElement = document.createElement("form");

  const labelFirstName = document.createElement("label");
  const inputFirstName = document.createElement("input");

  const labelLastName = document.createElement("label");
  const inputLastName = document.createElement("input");

  const labelMessage = document.createElement("label");
  const inputMessage = document.createElement("input");

  const formButton = document.createElement("button");

  contactContainer.appendChild(contactFormElement);

  contactFormElement.appendChild(labelFirstName);
  labelFirstName.appendChild(inputFirstName);

  contactFormElement.appendChild(labelLastName);
  labelLastName.appendChild(inputLastName);

  contactFormElement.appendChild(labelMessage);
  labelMessage.appendChild(inputMessage);
  labelMessage.textContent = "Your message:";

  return contactContainer;
}

function loadContact() {
  const mainContentContainer = document.getElementById("main-container");
  mainContentContainer.appendChild(createContactForm());
}

export default loadContact;
