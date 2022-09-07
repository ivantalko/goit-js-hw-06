
// находим input 
const sizeControl = document.querySelector(
  '#font-size-control'
);
// находим спан  в котором будем менять размер текста
const text = document.querySelector('#text');
// добавляем слушателя на input прописываем стрелочную функцию с событием и меняем размер текста.
sizeControl.addEventListener('input', (event) => {
  // стиль размера текста приравниваем к текущему значения события которя записыветься с помощью итерполяциию(текущее значение события.)
  text.style.fontSize = `${event.currentTarget.value}px`;
  console.log(sizeControl.value);
});