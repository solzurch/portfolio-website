(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
    
    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  function validateEmail() {
    let value = emailInput.value;
    
    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }

    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    
    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validatePassword() {
    let value = passwordInput.value;
    
    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }
    
    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }
    
    showErrorMessage(passwordInput, null);
    return true;
  }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });
  
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  // THE RETURN STATEMENT HERE
})();