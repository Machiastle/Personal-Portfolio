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

//For typing animation
const bioText = document.getElementById('bio-text');
const bioOptions = ['BSIS-NS STUDENT', 'DATA SCIENTIST', 'CYBERSECURITY', 'WEB DEVELOPER'];
let index = 0;
let isTyping = true;

function typeAndDelete() {
  const text = bioOptions[index];
  let delay = 100; // 1 seconds

  if (isTyping) {
    if (bioText.textContent === text) {
      isTyping = false;
    } else {
      bioText.textContent += text.charAt(bioText.textContent.length);
      
    }
  } else {
    if (bioText.textContent === '') {
      isTyping = true;
      index = (index + 1) % bioOptions.length;
      
    } else {
      bioText.textContent = text.slice(0, bioText.textContent.length - 1);
    }
  }

  setTimeout(typeAndDelete, delay);
}

typeAndDelete();
//Script for contact form
const scriptURL =
      "https://script.google.com/macros/s/AKfycbyQCG2VPANX9weqSygF77ygiEG2yYqmjtsZKUhaQCdjQjxBqagMT3Om-Z4Ob1XwCK04/exec";
    const form = document.forms["submit-to-google-sheet"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
        (response) => console.log("Success!", response)
      );
      form.reset().catch((error) => console.error("Error!", error.message));
    });