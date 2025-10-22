const images = document.querySelectorAll('.work img');

images.forEach(img => {
  img.addEventListener('mouseenter', () => img.classList.add('active'));
  img.addEventListener('mouseleave', () => img.classList.remove('active'));
});

let triggered = false;
const heart = document.querySelector('.heart');

window.addEventListener('scroll', () => {
  if (triggered) return; // 一度だけ発動

const rect = heart.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) { // 少しスクロールしたら
    heart.scrollIntoView({ behavior: 'smooth' });
    triggered = true;
}
});