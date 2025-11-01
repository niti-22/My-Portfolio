// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple alert for message form submission
const form = document.querySelector('.message-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent successfully.');
  form.reset();
});
