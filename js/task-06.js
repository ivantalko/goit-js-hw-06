// находим input 
const inputEl = document.querySelector(
    '#validation-input'
 )
// колличество введённых симовлов в input приравниваем к числу.
const validLength = Number(
  inputEl.dataset.length
);
// добавляем слушателя на input с событием blur(потерять фокус) и callback function.
inputEl.addEventListener(
  'blur',
  onInputValid
);
// добавляем функцию с параметром события.Делаем проверку-если длина значения введёного события строго равна количеству введённых символов .то вызываем фунцию со значениями.
function onInputValid(event) {
  if (event.target.value.length === validLength) {
    updateClassElem('valid', 'invalid');
  } else {
    updateClassElem('invalid', 'valid');
  }
}
// создаём функцию которая добавляет или удаляет класс.
function updateClassElem(addCl, remCl) {
 inputEl.classList.remove(remCl);
  inputEl.classList.add(addCl);
}