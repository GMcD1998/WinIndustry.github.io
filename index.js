import { refreshHelloDiv } from "./functions/utility/takingUserInfo.js";
import storageAvailable from "./functions/utility/checkForLocalStorage.js";
import resourcesLink from "./functions/func/dropdownMenu.js";
import "./functions/func/responsiveDropdown.js";

let user = {};


(function () {
  if (storageAvailable("localStorage") === true) {
    let storedUser = JSON.parse(localStorage.getItem("storageUser"));
    console.log(storedUser);
    if (storedUser !== null) {
      user = storedUser;
      const enterDetailsDiv = document.querySelector(".enter-details");
      if (enterDetailsDiv) {
        refreshHelloDiv(user.name, user.level);
      }
    }
  }
})();


export default user;
