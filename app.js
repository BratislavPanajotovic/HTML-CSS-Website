"use strict";
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
//! Menu behaviour //
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function closeMenu() {
  if (menu.classList.contains("is-active")) {
    menuLinks.classList.toggle("active");
    menu.classList.toggle("is-active");
  }
}
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target)) {
    closeMenu();
  }
});
//!Menu behaviour//
