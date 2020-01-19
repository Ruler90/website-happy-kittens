const slides = document.querySelectorAll('.mainSlides');
const time = +getComputedStyle(document.querySelector('.animation--time')).animationDuration.replace('s', '') * 1000;

function nextSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (slides[slides.length - 1].classList.contains('activeSlide')) {
      slides[0].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft', 'activeSlide');
      slides[slides.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { slides[slides.length - 1].setAttribute('class', 'mainSlides') }, time);
      break;
    }
    if (slides[i].classList.contains('activeSlide')) {
      slides[i + 1].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft', 'activeSlide');
      slides[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { slides[i].setAttribute('class', 'mainSlides') }, time);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}

let autoChange = setInterval(nextSlide, 4000);

function previousSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (slides[0].classList.contains('activeSlide')) {
      slides[slides.length - 1].setAttribute('class', 'mainSlides animation animation--time animation__slideFromLeftToRight activeSlide');
      slides[0].setAttribute('class', 'mainSlides animation animation--time animation__slideFromZeroToRight');
      setTimeout(function () { slides[0].setAttribute('class', 'mainSlides') }, time);
      break;
    }
    if (slides[i].classList.contains('activeSlide')) {
      slides[i - 1].setAttribute('class', 'mainSlides animation animation--time animation__slideFromLeftToRight activeSlide');
      slides[i].setAttribute('class', 'mainSlides animation animation--time animation__slideFromZeroToRight');
      setTimeout(function () { slides[i].setAttribute('class', 'mainSlides') }, time);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}
