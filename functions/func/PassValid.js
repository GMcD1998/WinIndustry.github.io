function validatePassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    let validationMessage = document.getElementById("validationMessage");
    if (isValidPassword(passwordInput)) {
      validationMessage.textContent = "Valid password!";
      validationMessage.style.color = "green";
    } else {
      validationMessage.textContent =
        "Invalid password! It should have at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
      validationMessage.style.color = "red";
    }
  }
  function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  }
  /* toogle password visibility!! */
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#passwordInput");
  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
  });