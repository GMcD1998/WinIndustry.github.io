window.addEventListener("load", initiated);

function initiated() {
  
  let checkPasswordBtn = document.querySelector("#checkPasswordBtn");
  let clearPasswordBtn = document.querySelector("#clearPasswordBtn");

  checkPasswordBtn.addEventListener("click", validatePassword);
  clearPasswordBtn.addEventListener("click", clearPassFiend);

  // toogle password visibility
  let togglePasswordEye = document.querySelector("#togglePasswordEye");
  let passwordInput = document.querySelector("#passwordInput");

  togglePasswordEye.addEventListener("click", function() {
    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      togglePasswordEye.setAttribute("class", "fas fa-eye-slash");
    } else if (passwordInput.getAttribute("type") === "text") {
      passwordInput.setAttribute("type", "password");
      togglePasswordEye.setAttribute("class", "fas fa-eye");
    }
  });
  /* Adding JavaScript content for the second input field */
    let pass = document.querySelector("#passwordTTC");
    pass.addEventListener("keyup", estimateTimeToCrack);
}

function isValidPassword(password) {
  console.log(password)
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&>])[A-Za-z\d@$!%*?&>{}[\]:;"'<>,.?/\\|~`\-=_+()^]+$/;
  return regex.test(password);
}

function clearPassFiend() {
  let validationMessage = document.querySelector("#validationMessage");
  let passwordInput = document.querySelector("#passwordInput");
  validationMessage.textContent = "";
  passwordInput.value = "";

}

function validatePassword() {
  
  
  let passwordInput = document.querySelector("#passwordInput");
  let validationMessage = document.querySelector("#validationMessage");


  if (isValidPassword(passwordInput.value)) {
    validationMessage.textContent = "Valid password!";
    validationMessage.style.color = "green";
  } else {
    validationMessage.textContent =
      "Invalid password! It should have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
    validationMessage.style.color = "red";
  }
}
function estimateTimeToCrack() {    /* the function checkin how long it will take to crach the password by brute force */
        let password = document.querySelector("#passwordTTC").value;
        const computationsPerSecond = 500000000000; /* decided on 1/2 of a trillion as that is the average computational power of a 2022 computer */

        let characters = password.length;
        let combinations = Math.pow(94, characters);
        let seconds = combinations / computationsPerSecond;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        let years = days / 365;

        let message = '';

        if (years >= 1) {
          message += `${Math.floor(years)} years, `;
          days -= Math.floor(years) * 365;
        }

        if (days >= 1) {
          message += `${Math.floor(days)} days, `;
          hours -= Math.floor(days) * 24;
        }

        if (hours >= 1) {
          message += `${Math.floor(hours)} hours, `;
          minutes -= Math.floor(hours) * 60;
        }

        if (minutes >= 1) {
          message += `${Math.floor(minutes)} minutes, `;
          seconds -= Math.floor(minutes) * 60;
        }

        if (seconds >= 1) {
          message += `${Math.floor(seconds)} seconds`;
        }

        if (message === '') {
          message = 'less than a second';
        } else {
          message = `It would take ${message} to crack this password.`;
        }

		/* if password field is empty I need it to hide the paragraph with the message */
        if (password === '') {
          document.getElementById('timeToCrack').style.display = 'none';
        } else {
          document.getElementById('timeToCrack').textContent = message;
          document.getElementById('timeToCrack').style.display = 'block';
        }
    }



