const images = document.querySelectorAll('.work img');

images.forEach(img => {
  img.addEventListener('mouseenter', () => img.classList.add('active'));
  img.addEventListener('mouseleave', () => img.classList.remove('active'));
});

let triggered = false;
const heart = document.querySelector('.heart');

