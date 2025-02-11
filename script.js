function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document.addEventListener('wheel', function(event) {
//   if (event.ctrlKey) {
//     event.preventDefault();
//   }
// }, { passive: false });

// document.addEventListener('gesturestart', function(event) {
//   event.preventDefault();
// });


