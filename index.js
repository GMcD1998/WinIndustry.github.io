import storageAvailable from "./functions/utility/checkForLocalStorage.js";

let user = {};

(function () {
  if (storageAvailable("localStorage") === true) {
    let currentKey = JSON.parse(localStorage.getItem("userInfo"));
    if (currentKey !== null) user = currentKey;
  }
})();
