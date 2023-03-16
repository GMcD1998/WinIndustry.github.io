import storageAvailable from "./checkForLocalStorage.js";
import deleteItemsInDiv from "./deleteItemsInDiv.js";
import user from "../../index.js";

const nameSubmitButton = document.querySelector("#name-submit");
const nameValue = document.querySelector("#name-value");

const userNameFactory = (name, currentExperiencePoints, level) => {
  return { name, currentExperiencePoints, level };
};

function saveToLocalStorage(userName) {
  if (storageAvailable("localStorage") === true) {
    let user = JSON.stringify(userName);
    localStorage.setItem("storageUser", user);
  }
}

function typeText(userName, div) {
  let i = 0;
  let text = `Hello ${userName} thank you for deciding to get informed about safe web experience and computer security. Please read some of our articles about how to protect yourself or even educate yourself with our quiz.`;
  let speed = 60;

  function typeWriter() {
    if (i < text.length) {
      div.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

function refreshHelloDiv(userName) {
  const enterDetailsDiv = document.querySelector(".enter-details");
  deleteItemsInDiv(enterDetailsDiv);

  const helloDiv = document.createElement("div");
  helloDiv.classList.add("name-input");
  enterDetailsDiv.appendChild(helloDiv);
  setTimeout(typeText(userName, helloDiv), 25000);
}

function saveNewUser() {
  let newUser = userNameFactory(nameValue.value, 0, "Beginner");
  saveToLocalStorage(newUser);
  refreshHelloDiv(newUser.name);
}

function takeUserInfo() {
  if (localStorage.getItem("storageUser") === null) {
    saveNewUser();
  }
}

nameSubmitButton.addEventListener("click", takeUserInfo);

export { refreshHelloDiv };
/*
function userInfoTaken() {
  if (storageAvailable("localStorage") === true) {
    if (localStorage.getItem("userName") === null) {
      let localUser = JSON.stringify(user);
      localStorage.setItem("userInfo", localUser);
    }
  }
}
*/
