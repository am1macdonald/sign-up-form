const validate = (() => {
  let password = document.getElementById('password');
  let confirm = document.getElementById('confirm-password');
  let submit = document.getElementById('submit');

  submit.addEventListener('submit', (e) => {
    if (password.value !== confirm.value) {
      e.preventDefault();
      confirm.setCustomValidity("does not match");
      alert('does not match!');
    }
  })
})()