let currentIndex = 0;
const testimonials = document.querySelectorAll(".card-testi");

// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testi, i) => {
    testi.classList.remove("active"); // Hide all cards
    testi.querySelector(".star-testi").classList.remove("animate"); // Reset animation
    if (i === index) {
      testi.classList.add("active"); // Show only the current card
      // Trigger star animation with a small delay
      setTimeout(() => {
        testi.querySelector(".star-testi").classList.add("animate");
      }, 100);
    }
  });
}

// Show next testimonial
function showNext() {
  currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next card, loop back if at end
  showTestimonial(currentIndex);
}

// Show previous testimonial
function showPrev() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Move to the previous card, loop to end if at start
  showTestimonial(currentIndex);
}

// Initial display of the first testimonial
showTestimonial(currentIndex);
