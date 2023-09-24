//function for hamburger nav
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const techStackButton = document.getElementById("techStackButton");
const toolsButton = document.getElementById("toolsButton");
const techStackImages = document.getElementById("Tech_StackImages");
const toolsImages = document.getElementById("tools_Images");

// Function to toggle button styles
function switchButtonStyles() {
  techStackButton.classList.toggle("default_button");
  toolsButton.classList.toggle("default_button");

  // Toggle the visibility of image containers based on which button is clicked
  if (techStackButton.classList.contains("default_button")) {
    techStackImages.style.display = "flex"; // Show tech stack images
    toolsImages.style.display = "none"; // Hide tools images
  } else {
    techStackImages.style.display = "none"; // Hide tech stack images
    toolsImages.style.display = "flex"; // Show tools images
  }
}

// Add click event listeners to both buttons
techStackButton.addEventListener("click", switchButtonStyles);
toolsButton.addEventListener("click", switchButtonStyles);

// Initially, set the initial state (e.g., tech stack images are visible, tools images are hidden)
techStackImages.style.display = "flex";
toolsImages.style.display = "none";
