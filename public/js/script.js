const menu = document.getElementById("menu");
const navBar = document.getElementById("navBar");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  navBar.classList.toggle("nav-active");
  navBar.classList.toggle("translate-x-full");
  navBar.classList.toggle("translate-x-0");
});