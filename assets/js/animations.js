// Subtle scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', function() {
  // Add reveal class to main sections
  const sections = document.querySelectorAll('h2, .publication-year-section');
  sections.forEach(section => {
    if (!section.classList.contains('no-reveal')) {
      section.classList.add('reveal');
    }
  });

  // Initial check
  revealOnScroll();

  // Check on scroll with throttling
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(revealOnScroll);
      ticking = true;
      setTimeout(() => { ticking = false; }, 100);
    }
  }
  window.addEventListener('scroll', requestTick);
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Simple counter animation for citations
function animateCounter(element, target) {
  let current = 0;
  const duration = 1000; // 1 second
  const increment = target / (duration / 16); // 60fps

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Animate citation count when it loads
document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        const element = document.getElementById('total_cit');
        if (element && element.textContent !== 'Setting up...' && element.textContent !== '0') {
          const target = parseInt(element.textContent);
          if (!isNaN(target) && target > 0 && !element.dataset.animated) {
            element.dataset.animated = 'true';
            animateCounter(element, target);
            observer.disconnect();
          }
        }
      }
    });
  });

  const citElement = document.getElementById('total_cit');
  if (citElement) {
    observer.observe(citElement, { childList: true, characterData: true, subtree: true });
  }
});

// Simple focus indicator for accessibility
document.addEventListener('DOMContentLoaded', function() {
  // Add keyboard navigation helper
  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });
});

// Add minimal style for keyboard navigation
const style = document.createElement('style');
style.textContent = `
  .keyboard-nav a:focus,
  .keyboard-nav button:focus,
  .keyboard-nav input:focus {
    outline: 2px solid #007bff !important;
    outline-offset: 2px !important;
  }
`;
document.head.appendChild(style);