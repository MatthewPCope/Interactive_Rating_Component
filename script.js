// Selecting all the necessary elements
const circles = document.querySelectorAll('.circle');
const submitBtn = document.querySelector('.btn');
const mainRating = document.querySelector('.main');
const thankYouPage = document.querySelector('.thank-you');
const selectedRatingText = document.querySelector('.selected-rating');

let selectedRating = 0;

// Add event listeners to each circle for selecting the rating
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => c.classList.remove('selected')); // remove 'selected' class from all circles
    circle.classList.add('selected'); // add 'selected' class to the clicked circle
    selectedRating = circle.textContent; // store the selected rating
  });
});

// Submit button event listener
submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    mainRating.classList.add('hidden'); // hide the rating component
    thankYouPage.classList.remove('hidden'); // show the success page
    thankYouPage.classList.add('visible'); // ensure it's displayed as flex
    selectedRatingText.textContent = selectedRating; // show the selected rating
  } else {
    alert('Please select a rating before submitting');
  }
});