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



    //  Our Team Members
    
    const container = document.getElementById("teamContainer");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

next.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});


 gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  // About Section Image
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 80%",
    },
    x: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  // Why Choose Us (Image & Text)
  gsap.from(".image-box", {
    scrollTrigger: {
      trigger: ".image-box",
      start: "top 85%",
    },
    opacity: 0,
    x: -40,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".text-box", {
    scrollTrigger: {
      trigger: ".text-box",
      start: "top 85%",
    },
    opacity: 0,
    x: 40,
    duration: 1,
    ease: "power2.out"
  });

  // Team Cards Animate One by One
  document.querySelectorAll(".team-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  // CTA
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