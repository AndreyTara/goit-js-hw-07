document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form.login-form");
  /**
   * Функція відправки для форми loginForm
   * @param {Event} event - Об’єкт події надсилання.
   */

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Перешкоджаємо стандатній поведінці при відправлені loginForm

    // Отримаємо елементи із loginForm
    const emailInput = loginForm.elements["email"];
    const passwordInput = loginForm.elements["password"];

    // Очищіємо елементи від зайвих пробілів
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      alert("All form fields must be filled in");
    } else {
      const formData = {
        email: emailValue,
        password: passwordValue,
      };
      console.log(formData); // Відправка форми у консоль
      loginForm.reset(); // очищення полів loginForm
    }
  });
});
