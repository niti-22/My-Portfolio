// ===== Scroll Animation =====
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    }
  });
});

// ===== Message Form (Demo Only) =====
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (name && email && message) {
    status.style.color = "#38bdf8";
    status.textContent = "✅ Message sent successfully! (Demo only)";
    event.target.reset();
  } else {
    status.style.color = "red";
    status.textContent = "❌ Please fill all fields correctly.";
  }
}
