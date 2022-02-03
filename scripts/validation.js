const validate = (() => {
  let password = document.getElementById('password');
  let confirm = document.getElementById('confirm-password');
  let submit = document.getElementById('submit');

  const validate = () => {    
    if (password.value !== confirm.value) {
      confirm.setCustomValidity('Password does not match');
      confirm.nextElementSibling.innerHTML = 'passwords do not match';
      return false;
    } else {
      confirm.setCustomValidity('');
      confirm.nextElementSibling.innerHTML = '8-20 characters';
      return true;
    }
  }

  confirm.addEventListener('keyup', (e) => {
    validate();
  })
  password.addEventListener('keyup', (e) => {
    validate();
  })
  submit.addEventListener('click', (e) => {
    if (validate() === false) { e.preventDefault() }
  })
})()