'use strict';


const buttonOpenNav = document.getElementById("btn-open");
const buttonCloseNav = document.getElementById("btn-close");
const menu = document.getElementById("container-menu");

const toggleNav = () => {
    menu.classList.toggle('container-menu-lateral-visible');
};

buttonOpenNav.addEventListener("click", toggleNav);
buttonCloseNav.addEventListener("click", toggleNav);