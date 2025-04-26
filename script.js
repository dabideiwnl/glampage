const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

const likeBtn = document.getElementById('like-btn');
const submitBtn = document.getElementById('submit-btn');
const confirmationMsg = document.getElementById('confirmation-msg');

likeBtn.addEventListener('click', () => {
  const pressed = likeBtn.getAttribute('aria-pressed') === 'true';
  likeBtn.setAttribute('aria-pressed', String(!pressed));
  // Optionally toggle heart icon or color handled by CSS
});

submitBtn.addEventListener('click', () => {
  // Collect current selections
  const selections = {
    color: selectedColor,
    shape: selectedShape,
    design: selectedDesign,
    liked: likeBtn.getAttribute('aria-pressed') === 'true',
  };

  // For demo, just show a confirmation message
  confirmationMsg.textContent = `Thank you for submitting your design! 
    Color: ${selections.color}, Shape: ${selections.shape}, 
    Design: ${selections.design}, Liked: ${selections.liked ? 'Yes' : 'No'}.`;
  confirmationMsg.hidden = false;

  // Optionally disable buttons or reset form here
  submitBtn.disabled = true;
  likeBtn.disabled = true;
});
