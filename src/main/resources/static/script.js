 window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
          document.getElementById('content').style.display = 'block';
          document.body.style.overflow = 'auto';
        }, 1000); // wait for fadeout transition
      }, 2500); // how long loader stays visible (adjust if needed)
    });

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
        // sidebar.style.height = "25vh"
      } else {
        // sidebar.style.height = "41vh"
        subServices.style.display = 'block';
        toggleIcon.textContent = '-';
      }
    }




     // HERO SECTION
  gsap.from(".hero-content", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from(".hero-image img", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
    },
    x: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  // CARDS
document.querySelectorAll(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    opacity: 0,
    scale: 0.95,  // safe zoom-in effect
    duration: 2,
    ease: "power2.out",
    delay: i * 0.1  // stagger effect
  });
});

  // SERVICES
document.querySelectorAll(".service-box").forEach((box, index) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
});

  // SERVE BOXES
document.querySelectorAll(".serve-box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
      // markers: true, // uncomment to debug
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    delay: i * 0.05
  });
});


  // WORK STEPS
  gsap.from(".step-box", {
    scrollTrigger: {
      trigger: ".work-section",
      start: "top 85%",
    },
    opacity: 0,
    x: 50,
    duration: 1.1,
    stagger: 0.2,
    ease: "power2.out"
  });

  // CTA SECTION
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

  // FOOTER
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

  // SCROLLING MARQUEE
  gsap.to(".scroller", {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: "linear"
  });



  
