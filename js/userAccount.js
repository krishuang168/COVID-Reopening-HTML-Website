function submitSignup(formValue) {
  postData(`${baseUrl}/users/signup`, formValue);
  alert(`Registration successful! Welcome!`);
  history.back();
}

function submitLogin() {
  alert(`Welcome back!`);
  history.back();
}
