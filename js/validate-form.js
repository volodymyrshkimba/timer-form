const form = document.querySelector("#timer-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const name = form.querySelector("[name='name']");
  const email = form.querySelector("[name='email']");
  const phone = form.querySelector("[name='phone']");
  const terms = form.querySelector("#terms");

  function clearError(input) {
    input.classList.remove("error");
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains("error-message")) {
      errorMessage.remove();
    }
  }

  function showError(input, message) {
    clearError(input);
    input.classList.add("error");
    const error = document.createElement("div");
    error.classList.add("error-message");
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }

  if (name.value.trim() === "") {
    showError(name, "Будь ласка, введіть своє ім'я");
    isValid = false;
  } else {
    clearError(name);
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Введіть коректний email");
    isValid = false;
  } else {
    clearError(email);
  }

  const phonePattern = /^\+380\d{9}$/;
  if (!phonePattern.test(phone.value.trim())) {
    showError(phone, "Введіть коректний номер");
    isValid = false;
  } else {
    clearError(phone);
  }

  if (!terms.checked) {
    showError(terms, "Потрібно погодитися з умовами");
    isValid = false;
  } else {
    clearError(terms);
  }

  if (isValid) {
    alert("Форма успішно відправлена!");
    form.reset();
  }
});
