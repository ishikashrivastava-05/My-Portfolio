const mainContainer = document.querySelector('.main-container');
const scrollSpeed = 2;
const scrollDirection = 1;
function scrollImages() {
    mainContainer.scrollLeft += scrollSpeed * scrollDirection;
  }
  setInterval(scrollImages, 16);
  const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
  scrollDirection = -1;
});

scrollRightBtn.addEventListener('click', () => {
  scrollDirection = 1;
});
  