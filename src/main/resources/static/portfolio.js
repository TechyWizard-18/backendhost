const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    function toggleServices() {
      const subServices = document.getElementById('subServices');
      const toggleIcon = document.getElementById('toggle-icon');
      const isVisible = subServices.style.display === 'block';

      if (isVisible) {
        subServices.style.display = 'none';
        toggleIcon.textContent = '+';
      } else {
        subServices.style.display = 'block';
        toggleIcon.textContent = '-';
      }
    }


    // GSAP Hero Banner Animation
gsap.from(".portfolio-banner h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3,
});

// Portfolio Section Titles
gsap.from(".portfolio-header h4", {
  scrollTrigger: {
    trigger: ".portfolio-header h4",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".portfolio-header h2", {
  scrollTrigger: {
    trigger: ".portfolio-header h2",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.2,
});

// Animate Each Portfolio Card Individually
gsap.utils.toArray(".portfolio-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power2.out",
  });
});

// CTA Section Animation
gsap.from(".cta-section .cta-container", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
