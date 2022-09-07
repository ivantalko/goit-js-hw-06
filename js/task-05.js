const input = document.querySelector('#name-input');
const spanS = document.querySelector('#name-output');      

input.addEventListener('input',onInputChage)
const text = spanS.textContent; 

function onInputChage(event) {
spanS.textContent = event.currentTarget.value;
 if (spanS.textContent === "") {
 spanS.textContent = text;
                };
}


