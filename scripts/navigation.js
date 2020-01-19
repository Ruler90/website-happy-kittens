let actualScrollY, previousScrollY;

const showNavOnScroll = () => {
  const nav = document.querySelector('nav');
  actualScrollY = window.scrollY;
    if (window.scrollY > 400 && actualScrollY < previousScrollY && !nav.classList.contains('showNav')) {
      nav.classList.add('showNav');
    }
    if (actualScrollY > previousScrollY && nav.classList.contains('showNav')) {
      nav.classList.remove('showNav');
    }
  previousScrollY = window.scrollY
}

window.addEventListener('scroll', _.throttle(showNavOnScroll, 300));

const showHideMobileMenu = () => {
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu__mobile');
  const checkbox = document.querySelector('#menu__button');
  if (checkbox.checked) {
    menu.classList.add('showMenu');
    nav.classList.add('navFixedPosition');
  } else {
    menu.classList.remove('showMenu');
    nav.classList.remove('navFixedPosition');
  }
}

document.querySelector('#menu__button').addEventListener('click', showHideMobileMenu);