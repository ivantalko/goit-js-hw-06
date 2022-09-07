
const form = document.querySelector(
  '.login-form'
);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } =
    event.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    alert('Warning! All fills must be complane');
  }
  const userForm = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userForm);
  event.currentTarget.reset();
}