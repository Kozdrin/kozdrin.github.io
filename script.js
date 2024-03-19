const educationImageLink = document.querySelector('.education-image-link');
const educationImage = document.querySelector('.education-image');
let scrollPosition = 0;

educationImageLink.addEventListener('click', (event) => {
  event.preventDefault();

  if (document.body.classList.contains('education-image_fullscreen')) {
    document.body.classList.remove('education-image_fullscreen');
    window.scrollTo({top: scrollPosition, left: 0});
  } else {
    scrollPosition = window.pageYOffset;
    document.body.classList.add('education-image_fullscreen');
  }
});