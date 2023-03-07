/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
console.log(navMenu)
if (navToggle) {
  console.log(navToggle)
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

if (navClose) {
  console.log(navClose)
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(item => item.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
