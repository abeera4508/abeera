const menuIcon = document.querySelector('#menu-icon');
const navbar = document('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}