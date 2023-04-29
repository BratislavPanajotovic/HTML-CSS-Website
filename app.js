"use strict";
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector(".body");
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

body.addEventListener("click", function () {
  menu.classList.remove("is-active");
  menuLinks.classList.remove("active");
});
