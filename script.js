//function for hamburger nav
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
//functions for skills button indicator
// Get references to the buttons
const techStackButton = document.getElementById('techStackButton');
const toolsButton = document.getElementById('toolsButton');

// Function to switch button styles
function switchButtonStyles() {
  // Toggle the "default_button" class for both buttons
  techStackButton.classList.toggle('default_button');
  toolsButton.classList.toggle('default_button');
}

// Add a click event listener to both buttons
techStackButton.addEventListener('click', switchButtonStyles);
toolsButton.addEventListener('click', switchButtonStyles);
