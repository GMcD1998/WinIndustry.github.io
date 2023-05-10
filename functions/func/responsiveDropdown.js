import deleteItemsInDiv from "../utility/deleteItemsInDiv.js";
const navBar = document.querySelector(".navbar");
const menuItem = document.querySelector(".menuicon");
const navUl = document.querySelector(".navUl");

menuItem.addEventListener("click", () => {
  menuItem.classList.toggle("fa-bars");
  menuItem.classList.toggle("fa-times");
  navUl.classList.toggle("navUlOpen");
  navUl.classList.toggle("navUl");
});
