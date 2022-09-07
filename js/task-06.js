const  inputEl= document.querySelector(
    '#validation-input'
 )

const validLength = Number(
  inputEl.dataset.length
);
inputEl.addEventListener(
  'blur',
  onInputValid
);
function onInputValid(event) {
  if (event.target.value.length === validLength) {
    updateClassElem('valid', 'invalid');
  } else {
    updateClassElem('invalid', 'valid');
  }
}
function updateClassElem(addCl, remCl) {
 inputEl.classList.remove(remCl);
  inputEl.classList.add(addCl);
}