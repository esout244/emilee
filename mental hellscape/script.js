let currentIndex = 0;   // Start with the first image in the array

const images = [
  'pics/happykitty.gif',  // Image 1 path
  'pics/vibin.gif',  // Image 2 path
  'pics/kisseskitty.gif'  // Image 3 path
];

function revealImage() {
  const img = document.getElementById("hiddenImage");
  const button = document.querySelector("button");
  const buttonText = document.getElementById("buttonText");

  const clickSound = new Audio('sounds/dry-fart.mp3'); 
clickSound.play(); 

  // Update the image source dynamically using currentIndex
  img.src = images[currentIndex];
  img.style.display = "block";  // Make the image visible

  // Move the button to the right
  button.style.transform = "translateX(550px)";
  button.style.transition = "transform 0.5s ease";

  // Increment currentIndex to show next image
  currentIndex++;

  // Loop back to the first image if we reach the end
  if (currentIndex >= images.length) {
    currentIndex = 0;  // Reset to the first image if at the end
  }

  // Change the button text after the first click
  if (buttonText.textContent === "Reveal") {
    buttonText.textContent = "Click Again!";
  } else {
    buttonText.textContent = "Reveal";
  }
}




