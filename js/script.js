/*-----Javascript for Project Name */
$(document).ready(function () {
  // Fakes the loading setting a timeout
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 1500);
});

const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 500) {
    navbar.classList.remove("top");
    navbar.classList.add("bg-light-new");
    if (!scrolled) {
    }
    setTimeout(function () {
      scrolled = true;
    }, 250);
  } else {
    navbar.classList.remove("bg-light-new");
    scrolled = false;
  }

}