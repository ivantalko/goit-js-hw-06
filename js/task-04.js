// добавляем переменную значение кторой изначально 0.
let counterValue = 0; 
// мы ищем кнопку с id которая добовляет значение +
const incrementBtn = document.querySelector("[data-action='increment']");
// мы ищем кнопку с id которая отнимает значение -
const decrementBtn = document.querySelector("[data-action='decrement']");
// находим спан с id value чтобі записать в него значение.
const valueSummary = document.querySelector('#value');
//  доболяем слушателя на кнопку которая добовляет значение(по клику она вызывает функцию которая добовляет значение  )
incrementBtn.addEventListener ('click' , () => {
                counterValue += 1;
// текстовое значение приравниваеться результату работы функции.
                valueSummary.textContent = counterValue;

});
//  доболяем слушателя на кнопку которая добовляет значение(по клику она вызывает функцию которая отнимает значение  )
decrementBtn.addEventListener ('click' , () => {
                counterValue -= 1;
// текстовое значение приравниваеться результату работы функции.
                valueSummary.textContent = counterValue;
});
               