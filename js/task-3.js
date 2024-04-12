// Отримуємо посилання на елементи DOM
const nameInputDom = document.querySelector("input#name-input");
const nameOutputDom = document.querySelector("span#name-output");

// Додаємо обробник події для "nameInputDom"
nameInputDom.addEventListener("input", function () {
  !this.value.trim()
    ? (nameOutputDom.innerHTML = "Anonymous") //  input '' - is empty
    : (nameOutputDom.innerHTML = this.value.trim()); // input 'asd' - is fill
});
