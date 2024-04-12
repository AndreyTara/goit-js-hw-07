// Отримуємо посилання на елементи DOM
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("div#boxes");

// Додаємо обробник події для кнопки "Create"
createBtn.addEventListener("click", function () {
  const amount = parseInt(input.value);
  // Перевіряємо чи введене число коректне та відповідає умові
  if (isNaN(amount) || amount <= 0 || amount > 101) {
    // Виводимо коментар
    alert("Please enter a valid input number from 1 to 100.");
    return;
  }
  // Створюємо блоки та виводимо їх у контейнер
  createBoxes(amount);
  // Очищатися значення в інпуті.
  input.value = "";
  boxesContainer.classList.add("boxes");
});

// Очищення колекції після натискання на кнопку "Destroy" створи функцію destroyBoxes(), яка очищає вміст div#boxes
destroyBtn.addEventListener("click", function () {
  // Очищуємо контейнер
  boxesContainer.innerHTML = "";
  boxesContainer.classList.remove("boxes");
});

/**
 * createBoxes(amount)
 * @param {Number} amount  вказана кількість бокс-контейнерів
 * @returns повертаэмо строки до бокс контейнер
 */
function createBoxes(amount) {
  let html = "";
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const boxColor = generateRandomColor();

    html += `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${boxColor}"></div>`;
  }
  boxesContainer.innerHTML = html;
}

/**
 * generateRandomColor() - додавання рандомного значення кольору
 * @returns {String} у форматі 16 коду
 */
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
