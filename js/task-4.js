// Отримуємо посилання на елементи DOM
const formDom = document.querySelector("form.login-form");
const formInputs = formDom.querySelectorAll("input");
const inputEmail = document.querySelector("input[name='email']");

/**
 * validateEmail(email) Функція для перевірки правильності формату email
 * @param {String} email
 * @returns  {Boolean}
 */
function validateEmail(email) {
  const re =
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
  // /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLocaleLowerCase());
}

// Додаємо обробник події для "form"
formDom.addEventListener("submit", () => {
  // event.preventDefault();
  // додавання змінної для зберігання занчення пошти
  let emailVal = inputEmail.value;

  // перевірка на пусоту знаначення введеного у inputs
  let emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  // додавання класу ".error" або зняття класу ".error"
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
  // перевірка чи заповнені всі inputs
  if (emptyInputs.length !== 0) {
    console.log("Inputs not filled");
    return false;
  }

  // перевірка чи inputEmail відповідаэ формату пошти
  if (!validateEmail(emailVal)) {
    inputEmail.classList.add("error");
    console.log("Input email invalid");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }
});
