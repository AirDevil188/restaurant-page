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

  const contactIcon = document.createElement("span");
  contactIcon.className = "material-symbols-outlined";
  contactIcon.textContent = "contact_phone";
  secondColumn.appendChild(contactIcon);

  const contentSeparator = document.createElement("div");
  contentSeparator.className = "separator";
  secondColumn.appendChild(contentSeparator);

  const para = document.createElement("p");
  secondColumn.appendChild(para);
  para.textContent = "Do you have a question? Or maybe you just want to make a reservation? Have no worries, we are here for you! You can send us an email or just call us! ";

  const ul = document.createElement("ul");
  ul.className = "contact-icons-ul";

  const emailLi = document.createElement("li");
  emailLi.className = "contact-li";
  const phoneLi = document.createElement("li");
  phoneLi.className = "contact-li";
  const locationLi = document.createElement("li");
  locationLi.className = "contact-li";
  const emailIcon = document.createElement("span");
  emailIcon.className = "material-symbols-outlined";
  emailIcon.textContent = "mail";

  const phoneIcon = document.createElement("span");
  phoneIcon.className = "material-symbols-outlined";
  phoneIcon.textContent = "call";

  const locationIcon = document.createElement("span");
  locationIcon.className = "material-symbols-outlined";
  locationIcon.textContent = "location_on";

  const paraEmail = document.createElement("p");
  paraEmail.className = "para-contact-icons";
  paraEmail.textContent = "artcaffe@example.com";
  const paraPhone = document.createElement("p");
  paraPhone.className = "para-contact-icons";
  paraPhone.textContent = "+381 123 4567";
  const paraLocation = document.createElement("p");
  paraLocation.className = "para-contact-icons";
  paraLocation.textContent = "Srpskih Vladara 15, Apatin";

  secondColumn.appendChild(ul);
  ul.appendChild(emailLi);
  ul.appendChild(phoneLi);
  ul.appendChild(locationLi);

  emailLi.appendChild(emailIcon);
  emailLi.appendChild(paraEmail);
  phoneLi.appendChild(phoneIcon);
  phoneLi.appendChild(paraPhone);
  locationLi.appendChild(locationIcon);
  locationLi.appendChild(paraLocation);

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  secondColumn.appendChild(formContainer);

  const contactFormElement = document.createElement("form");
  contactFormElement.setAttribute("method", "post");
  const fieldset = document.createElement("fieldset");

  const labelFirstName = document.createElement("label");
  const inputFirstName = document.createElement("input");

  const labelLastName = document.createElement("label");
  const inputLastName = document.createElement("input");

  const labelUserEmail = document.createElement("label");
  const inputUserEmail = document.createElement("input");

  const labelMessage = document.createElement("label");
  const textAreaMessage = document.createElement("textarea");

  const formButtonContainer = document.createElement("div");
  formButtonContainer.className = "form-button-container";
  const formButton = document.createElement("button");
  formButton.className = "submit-button";
  formButton.textContent = "SUBMIT";

  formContainer.appendChild(fieldset);
  fieldset.appendChild(contactFormElement);

  contactFormElement.appendChild(labelFirstName);
  labelFirstName.textContent = "First Name: ";
  labelFirstName.setAttribute("for", "first_name");
  labelFirstName.appendChild(inputFirstName);

  inputFirstName.setAttribute("type", "text");
  inputFirstName.id = "first_name";
  setAttributes(inputFirstName, { minlength: 3, name: "first_name", required: "" });

  contactFormElement.appendChild(labelLastName);
  labelLastName.textContent = "Last Name: ";
  labelLastName.setAttribute("for", "last_name");
  labelLastName.appendChild(inputLastName);

  inputLastName.setAttribute("type", "text");
  inputLastName.id = "last_name";
  setAttributes(inputLastName, { minlength: 3, name: "last_name", required: "" });

  contactFormElement.appendChild(labelUserEmail);
  labelUserEmail.textContent = "Email: ";
  labelUserEmail.setAttribute("for", "user_email");
  labelUserEmail.appendChild(inputUserEmail);

  inputUserEmail.setAttribute("type", "email");
  inputUserEmail.id = "user_email";
  setAttributes(inputUserEmail, { name: "first_name", required: "" });

  contactFormElement.appendChild(labelMessage);
  labelMessage.textContent = "Your message: ";
  labelMessage.appendChild(textAreaMessage);

  textAreaMessage.id = "message";
  setAttributes(textAreaMessage, { rows: 3, cols: 40, required: "" });

  fieldset.appendChild(formButtonContainer);
  formButtonContainer.appendChild(formButton);

  const quoteContainer = document.createElement("div");
  const paraQuote = document.createElement("p");

  quoteContainer.className = "quote-container";
  paraQuote.className = "para-quote";
  paraQuote.textContent = "We really hope that you have a pleasant day!";

  secondColumn.appendChild(quoteContainer);
  quoteContainer.appendChild(paraQuote);

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
