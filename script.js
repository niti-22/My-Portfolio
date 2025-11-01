// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Scroll Animations =====
const sections = document.querySelectorAll('.column');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Hover Effects for Cards or Buttons =====
const cards = document.querySelectorAll('.card, .project-card, button');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = '0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// ===== Contact Form Message Box (Optional) =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('📩 Thank you for reaching out! Your message has been sent successfully.');
    form.reset();
  });
}

// ===== Navbar Animation on Scroll =====
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
