// Отримуємо посилання на елементи DOM всіх елементів "ul#categories>li.item"
const categoriesUl = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
//кількість категорій в ul#categories
console.log(`Number of categories ${categoriesUl.length}`);

// Отримуємо посилання на елементи DOM всіх елементів "ul#categories li.item ul "
const categoriesList = Array.from(
  document.querySelectorAll("ul#categories li.item ul ")
);

/**
 * getElements()  виведення порахованиї елементів в консоль
 */
function getElements() {
  const categoriesArr = [];
  categoriesList.forEach((element) => {
    categoriesArr.push(
      `Category: ${document.querySelector("h2").textContent}  `
    );
    categoriesArr.push(`Elements: ${element.children.length} `);
  });

  categoriesArr.forEach((el) => {
    console.log(el);
  });
}

getElements();
