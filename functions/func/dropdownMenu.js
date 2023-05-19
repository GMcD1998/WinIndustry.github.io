const dropdownMenu = document.querySelector(".collapse-div");
const resourcesLink = document.querySelector("#resources-link");
const chevron = document.querySelector(".fas");

resourcesLink.addEventListener("click", (e) => {
  e.preventDefault();

  if (dropdownMenu.style.height === "0px" || dropdownMenu.style.height === "") {
    dropdownMenu.style.height = "120px";
    chevron.classList.remove("fa-chevron-down");
    chevron.classList.add("fa-chevron-up");
  } else {
    dropdownMenu.style.height = "0px";
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");
  }
});

export default resourcesLink;
