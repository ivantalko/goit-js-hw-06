// мы находим форму на странице
const form = document.querySelector(
  '.login-form'
);
// мы добавляем слушателя на форму сабмит и функцию колбэк.
form.addEventListener('submit', onFormSubmit);
// добавляем фунцию с параметром события .по умолчанию добавляем фунцию отмена перезагрузки.
function onFormSubmit(event) {
  event.preventDefault();
  // деструктуризируем введеные данные и добовляем условие проверки на введение текста без пробелов.
  const { email, password } =
    event.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    // возвращаем предупреждение.
   return alert('Warning! All fills must be complane');
    
  }
  // создаём переменную с обьектом свойств ввода.
  const userForm = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userForm);
  // после отправки формы значения автоматически очищаються.
  event.currentTarget.reset();
}