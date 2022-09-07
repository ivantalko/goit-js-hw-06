const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// мы находим (ul)
const ingredientsRef = document.querySelector("#ingredients");
// мы перебираем масив и для каждого элемента масива создём li(добавляем класс и текстовый контент с именем элемента масива)
const list = ingredients.map((ingredient) => {
const li = document.createElement("li");
li.classList.add("item");
  li.textContent = ingredient;
  // возвращаем li.
return li;

});
// добавляем распілённый масив лишек.
ingredientsRef.append(...list);