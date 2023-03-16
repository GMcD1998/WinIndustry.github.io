import { refreshHelloDiv } from "./functions/utility/takingUserInfo.js";
import storageAvailable from "./functions/utility/checkForLocalStorage.js";

let user = {};

(function () {
  if (storageAvailable("localStorage") === true) {
    let storedUser = JSON.parse(localStorage.getItem("storageUser"));
    if (storedUser !== null) {
      user = storedUser;
      refreshHelloDiv(user.name);
    };
  }
})();

export default user;
