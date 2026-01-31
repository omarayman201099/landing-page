var nav = document.querySelector("header");
var navLinks = document.querySelectorAll(".nav-link");
var socialIcons = document.querySelectorAll(".social-icon");
var socialBorders = document.querySelectorAll(".social-icon");

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 890) {
    nav.style.backgroundColor = "#fff";

    navLinks.forEach(link => link.style.color = "#000");
    socialIcons.forEach(icon => icon.style.color = "#000");

    socialBorders.forEach(border => {
      border.style.border = "2px solid #000";
    });

  } else {
    nav.style.backgroundColor = "initial";

    navLinks.forEach(link => link.style.color = "#ffff");
    socialIcons.forEach(icon => icon.style.color = "#ffff");

    socialBorders.forEach(border => {
      border.style.borderColor = "#ffff";
    });
  }
});
