// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', function() {
  // Add reveal class to main sections
  const sections = document.querySelectorAll('h1, h2, .publication-year-section, .publication-item');
  sections.forEach(section => {
    if (!section.classList.contains('no-reveal')) {
      section.classList.add('reveal');
    }
  });

  // Initial check
  revealOnScroll();

  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
});

// Typing effect for intro
document.addEventListener('DOMContentLoaded', function() {
  const introText = document.querySelector('.author__bio');
  if (introText) {
    introText.style.opacity = '0';
    setTimeout(() => {
      introText.style.opacity = '1';
      introText.style.animation = 'fadeIn 1s ease-out';
    }, 500);
  }
});

// Add parallax effect to header
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.author__avatar');
  if (parallax && window.innerWidth > 768) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // Offset for fixed header
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic background gradient
document.addEventListener('DOMContentLoaded', function() {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];

  let currentColor = 0;
  const masthead = document.querySelector('.masthead');

  if (masthead) {
    setInterval(() => {
      masthead.style.transition = 'background 2s ease';
      masthead.style.background = colors[currentColor];
      currentColor = (currentColor + 1) % colors.length;
    }, 5000);
  }
});

// Counter animation for citations
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// Animate citation count when it loads
document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        const element = document.getElementById('total_cit');
        if (element && element.textContent !== 'Setting up...' && element.textContent !== '0') {
          const target = parseInt(element.textContent);
          if (!isNaN(target) && target > 0) {
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

// Add hover ripple effect
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn, a');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
      ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add loading animation style
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);