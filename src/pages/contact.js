function createContactForm() {
  const contactSection = document.createElement("section");
  contactSection.id = "contact";

  const firstColumn = document.createElement("div");
  contactSection.appendChild(firstColumn);

  const secondColumn = document.createElement("div");
  secondColumn.className = "second-column";
  const contactH2 = document.createElement("h2");
  secondColumn.appendChild(contactH2);
  contactH2.textContent = "Contact Us";

  contactSection.appendChild(secondColumn);

  const contentSeparator = document.createElement("div");
  contentSeparator.className = "separator";
  secondColumn.appendChild(contentSeparator);

  const para = document.createElement("p");
  secondColumn.appendChild(para);
  para.textContent = "Do you have a question? Or maybe you just want to make a reservation? Have no worries, we are here for you! You can send us an email or just call us! ";

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  secondColumn.appendChild(formContainer);

  const contactFormElement = document.createElement("form");
  const fieldset = document.createElement("fieldset");

  const labelFirstName = document.createElement("label");
  const inputFirstName = document.createElement("input");

  const labelLastName = document.createElement("label");
  const inputLastName = document.createElement("input");

  const labelUserEmail = document.createElement("label");
  const inputUserEmail = document.createElement("input");

  const labelMessage = document.createElement("label");
  const textAreaMessage = document.createElement("textarea");

  const formButton = document.createElement("button");
  formButton.textContent = "SUBMIT";

  formContainer.appendChild(fieldset);
  fieldset.appendChild(contactFormElement);

  contactFormElement.appendChild(labelFirstName);
  labelFirstName.textContent = "First Name:";
  labelFirstName.setAttribute("for", "first_name");
  labelFirstName.appendChild(inputFirstName);

  inputFirstName.setAttribute("type", "text");
  inputFirstName.id = "first_name";
  setAttributes(inputFirstName, { minlength: 3, name: "first_name", required: "" });

  contactFormElement.appendChild(labelLastName);
  labelLastName.textContent = "Last Name:";
  labelLastName.setAttribute("for", "last_name");
  labelLastName.appendChild(inputLastName);

  inputLastName.setAttribute("type", "text");
  inputLastName.id = "last_name";
  setAttributes(inputLastName, { minlength: 3, name: "last_name", required: "" });

  contactFormElement.appendChild(labelUserEmail);
  labelUserEmail.textContent = "Email:";
  labelUserEmail.setAttribute("for", "user_email");
  labelUserEmail.appendChild(inputUserEmail);

  inputUserEmail.setAttribute("type", "email");
  inputUserEmail.id = "user_email";
  setAttributes(inputUserEmail, { name: "first_name", required: "" });

  contactFormElement.appendChild(labelMessage);
  labelMessage.textContent = "Your message:";
  contactFormElement.appendChild(textAreaMessage);

  textAreaMessage.id = "message";
  setAttributes(textAreaMessage, { rows: 3, cols: 40, required: "" });

  contactFormElement.appendChild(formButton);

  const thirdColum = document.createElement("div");
  contactSection.appendChild(thirdColum);

  return contactSection;
}

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
}

function loadContact() {
  const contentContainer = document.querySelector("#content");

  contentContainer.appendChild(createContactForm());
}

export default loadContact;
