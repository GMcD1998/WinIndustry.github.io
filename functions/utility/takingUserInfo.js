let user = {
    userName: "currentUser",
  };

function userInfoTaken() {
    if (storageAvailable("localStorage") === true) {
        if(localStorage.getItem("userName") === null){
            let localUser = JSON.stringify(user);
            localStorage.setItem("userInfo", localUser);
        }
    }
  }