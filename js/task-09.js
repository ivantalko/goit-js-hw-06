// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div >
// функция которая генерирует рандомный цвет.и возвращет его значение
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// находим тело html листа.
const stylebody = document.querySelector('body');
// находим текст spana
const spantext = document.querySelector('.color');
// находим кнопку которая изменяет цвет
const button = document.querySelector('.change-color');
// добавляем слушателя события при клике вызывает функцию.
button.addEventListener('click', targetInputHandler);
// создём функцию колбэка с параметром события 
function targetInputHandler(event) {
  //  создём переменную для  функции рандомного цвета 
  const randomcolor = getRandomHexColor();
  // приравниваем радомный цвет телу html лису
  stylebody.style.backgroundColor = randomcolor;
  // выводим рандомное значение цвета в текст spana.
  spantext.textContent = randomcolor;
}