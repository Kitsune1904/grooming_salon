let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarList.classList.toggle("active");
});