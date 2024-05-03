const links = document.querySelectorAll(".tab");

links.forEach(function (item) {
  item.addEventListener("click", function (event) {
    links.forEach(function (item) {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
