const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
