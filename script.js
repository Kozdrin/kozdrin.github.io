const educationImageLinks = document.querySelectorAll('.education-image-link');
const educationImages = document.querySelectorAll('.education-image');

educationImageLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const scrollPosition = window.pageYOffset;
    const image = educationImages[index];

    document.body.classList.toggle('education-image_fullscreen');
    image.classList.toggle('education-image_fullscreen');

    if (!document.body.classList.contains('education-image_fullscreen')) {
      window.scrollTo({top: scrollPosition, left: 0});
    }
  });
});