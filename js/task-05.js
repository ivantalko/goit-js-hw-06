// находим input
const input = document.querySelector('#name-input');
// находим span и текст значение которго будем изменять.
const spanS = document.querySelector('#name-output');      
const text = spanS.textContent;
// добавляем слушателя на input и добовляем функцию коллбэк.
input.addEventListener('input',onInputChage)

// добавляем функцию которая принимает параметр события.
function onInputChage(event) {
spanS.textContent = event.currentTarget.value;
// текст спан приравниваем к текущему значению события.               
//  Прописываем условие если пустая строка.текст в спане остаёться заданным по дефолту.
if (spanS.textContent === "") {
 spanS.textContent = text;
                };
}


