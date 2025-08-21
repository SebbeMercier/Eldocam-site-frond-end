function toggleNav() {
  const navlinks = document.querySelector('.nav__menu');
  const hamburger = document.querySelector('.hamburger');
  const mainContent = document.querySelector('.main-content'); // Reference to main content
  
  navlinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  mainContent.classList.toggle('hidden'); // Toggle hidden class on main content
}