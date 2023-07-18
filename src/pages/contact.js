function createContactForm() {
  const contactSection = document.createElement("section");
  contactSection.id = "contact";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contactSection.appendChild(contactContainer);

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
  labelFirstName.textContent = "First Name:";
  labelFirstName.appendChild(inputFirstName);

  contactFormElement.appendChild(labelLastName);
  labelLastName.textContent = "Last Name:";
  labelLastName.appendChild(inputLastName);

  contactFormElement.appendChild(labelMessage);
  labelMessage.textContent = "Your message:";
  labelMessage.appendChild(inputMessage);

  return contactSection;
}

function loadContact() {
  const contentContainer = document.querySelector("#content");

  contentContainer.appendChild(createContactForm());
}

export default loadContact;
