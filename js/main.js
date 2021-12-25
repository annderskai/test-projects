const btn = document.getElementById('hamnav');
const hmenu = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
  hmenu.classList.toggle('menu__list--active');
});