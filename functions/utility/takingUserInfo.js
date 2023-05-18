import storageAvailable from "./checkForLocalStorage.js";
import deleteItemsInDiv from "./deleteItemsInDiv.js";

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

function typeText(userName, userLevel, div) {
  let i = 0;
  let text = `Hello ${userName}, ${userLevel} thank you for deciding to get informed about safe web experience and computer security. Please read some of our articles about how to protect yourself or even educate yourself with our quiz.`;
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

function refreshHelloDiv(userName, userLevel) {
  const enterDetailsDiv = document.querySelector(".enter-details");
  deleteItemsInDiv(enterDetailsDiv);

  const helloDiv = document.createElement("div");
  helloDiv.classList.add("name-input");
  enterDetailsDiv.appendChild(helloDiv);
  setTimeout(typeText(userName, userLevel, helloDiv), 25000);
}

function saveNewUser() {
  let newUser = userNameFactory(nameValue.value, 0, "Novice");
  saveToLocalStorage(newUser);
  refreshHelloDiv(newUser.name);
}

function takeUserInfo() {
  if (localStorage.getItem("storageUser") === null) {
    saveNewUser();
  }
}

if (nameSubmitButton) {
  nameSubmitButton.addEventListener("click", takeUserInfo);
}

export { refreshHelloDiv, saveToLocalStorage };
