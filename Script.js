const headerButtons = document.querySelectorAll('.header-button');
const overlay = document.querySelector('.overlay');

headerButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    overlay.style.display = 'block';
  });

  button.addEventListener('mouseout', () => {
    overlay.style.display = 'none';
  });
});
