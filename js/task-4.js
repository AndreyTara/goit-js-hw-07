// Отримуємо посилання на елементи DOM
const form = document.querySelector("form.login-form");
const formInputs = document.querySelectorAll("input");
const formEmail = document.querySelector("input[name='email']");
const formPassword = document.querySelector("input[name='password']");
const formButtom = document.querySelector("form.login-form button[submit]");
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
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // додавання змінної для зберігання значення form
  const form = event.target;

  // додавання змінної для зберігання значення email
  let emailVal = form.elements.email.value;

  // додавання змінної для зберігання значення password
  const passwordVal = form.elements.password.value;
  const emptyInputsType = [];
  // перевірка на пусоту знаначення введеного у inputs
  let emptyInputs = Array.from(formInputs).filter((input) => {
    if (input.value.trim() === "") {
      emptyInputsType.push(input.name);
      return input;
    }
  });

  // додавання класу ".error" або зняття класу ".error"
  formInputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  // перевірка чи заповнені всі inputs
  if (emailVal === "" || passwordVal === "") {
    return console.log(
      `All form fields must be filled in ${`${emptyInputsType.join(",")}`}`
    );
  }

  if (emptyInputs.length !== 0) {
    console.log("Input(s) not filled");
    // event.preventDefault();
    return;
  }

  // перевірка чи inputEmail відповідаэ формату пошти
  if (!validateEmail(emailVal)) {
    formEmail.classList.add("error");
    console.log("Input email invalid");
    return;
  } else {
    formEmail.classList.remove("error");
  }

  form.submit();
});
