function toggleNav() {
  const navlinks = document.querySelector('.nav__menu');
  const hamburger = document.querySelector('.hamburger');
  const mainContent = document.querySelector('.main-content');
  const footer = document.querySelector('footer');
  
  navlinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  mainContent.classList.toggle('hidden');
  footer.classList.toggle('hidden');
}