const circles = document.querySelectorAll('.circle');
const submitBtn = document.querySelector('.btn');
const mainRating = document.querySelector('.main');
const thankYouPage = document.querySelector('.thank-you');
const selectedRatingText = document.querySelector('.selected-rating');

let selectedRating = 0;


circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => c.classList.remove('selected'));
    circle.classList.add('selected');
    selectedRating = circle.textContent;
  });
});


submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    mainRating.classList.add('hidden');
    thankYouPage.classList.remove('hidden');
    thankYouPage.classList.add('visible');
    selectedRatingText.textContent = selectedRating;
  } else {
    alert('Please select a rating before submitting');
  }
});