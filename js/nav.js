document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    });
  });
});
