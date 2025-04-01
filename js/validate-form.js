const form = document.querySelector("#timer-form");
const username = form.querySelector("[name='name']");
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

function validateInput(input) {
  if (input.name === "name") {
    if (input.value.trim() === "") {
      showError(input, "Будь ласка, введіть своє ім'я");
    } else {
      clearError(input);
    }
  } else if (input.name === "email") {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(input.value.trim())) {
      showError(input, "Введіть коректний email");
    } else {
      clearError(input);
    }
  } else if (input.name === "phone") {
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(input.value.trim())) {
      showError(input, "Введіть коректний номер");
    } else {
      clearError(input);
    }
  } else if (input.type === "checkbox") {
    if (!input.checked) {
      showError(input, "Потрібно погодитися з умовами");
    } else {
      clearError(input);
    }
  }
}

[username, email, phone].forEach((input) => {
  input.addEventListener("input", () => validateInput(input));
});

terms.addEventListener("change", () => validateInput(terms));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  [username, email, phone, terms].forEach((input) => {
    validateInput(input);
    if (input.classList.contains("error")) {
      isValid = false;
    }
  });

  if (isValid) {
    const data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
    };

    fetch("https://example.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Дані успішно надіслано!");
        } else {
          console.error("Помилка при відправці даних:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Помилка при запиті:", error);
      });

    form.reset();
  }
});
