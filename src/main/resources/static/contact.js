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



    // Contact

     // Header / Hero Section
  gsap.from(".contact-hero", {
    scrollTrigger: {
      trigger: ".contact-hero",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out"
  });

  // Contact Info
  gsap.from(".contact-info", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 85%",
    },
    opacity: 0,
    x: -40,
    duration: 1,
    ease: "power2.out"
  });

  // Contact Form
  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%",
    },
    opacity: 0,
    x: 40,
    duration: 1,
    ease: "power2.out"
  });

  // Map or Additional Sections
  gsap.from(".contact-map", {
    scrollTrigger: {
      trigger: ".contact-map",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
  });

  // CTA Section (if present)
  gsap.from(".cta-container", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
  });

  // Footer
  gsap.from(".footer-col", {
    scrollTrigger: {
      trigger: ".footer-top",
      start: "top 95%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  ScrollTrigger.config({
  ignoreMobileResize: true
});


    