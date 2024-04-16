// Отримуємо посилання на елементи DOM всіх елементів "ul#categories>li.item"
const categoriesUl = document.querySelectorAll("ul#categories>li.item");
//кількість категорій в ul#categories
console.log(`Number of categories ${categoriesUl.length}`);

// Отримуємо посилання на елементи DOM всіх елементів "ul#categories li.item ul "
const categoriesSublist = document.querySelectorAll("ul#categories li.item ul");
// Отримуємо посилання на елементи DOM всіх елементів "ul#categories>li.item h2"
const categoriesH2 = document.querySelectorAll("ul#categories li.item h2");
/**
 * getElements()  виведення порахованиї елементів в консоль
 */
function getElements() {
  const categoriesArr = [];
  categoriesSublist.forEach((item, index) => {
    categoriesArr.push(`Category: ${categoriesH2[index].textContent}`);
    categoriesArr.push(`Elements: ${item.children.length} `);
  });

  categoriesArr.forEach((el) => {
    console.log(el);
  });
}

getElements();
