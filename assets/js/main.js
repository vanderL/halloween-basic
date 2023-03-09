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
function scrollHeader() {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
