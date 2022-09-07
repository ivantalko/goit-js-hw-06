// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div >
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const stylebody = document.querySelector('body');
const spantext = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', targetInputHandler);
function targetInputHandler(event) {
  const randomcolor = getRandomHexColor();
  stylebody.style.backgroundColor = randomcolor;
  spantext.textContent = randomcolor;
}