document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");
  const social = document.querySelectorAll(".social-icon");

  /* ================= Handle Scroll Colors ================= */
  function handleScrollColors() {
    let scrollPosition = window.scrollY;

    // لو المينيو مفتوحة خلي اللون أسود
    if (navLinks.classList.contains("active")) {
      links.forEach(link => link.style.color = "#000");
      social.forEach(icon => icon.style.color = "#000");
      header.style.backgroundColor = "#fff";
      return;
    }

    if (scrollPosition >= 546) {
      header.style.backgroundColor = "#fff";

      // links gradient
      links.forEach(link => link.classList.add('gradient'));
      
      // social gradient
      social.forEach(icon => {
        icon.style.color = "#7C3AED";

      });

    } else {
      header.style.backgroundColor = "transparent";

      // links white
      links.forEach(link => {
        link.classList.remove('gradient');
        link.style.color = "#fff";
      });

      // social white
      social.forEach(icon => {
        icon.style.background = "none";
        icon.style.color = "#fff";
        icon.style.webkitTextFillColor = "initial";
      });
    }
  }

  /* ================= Scroll Event ================= */
  window.addEventListener("scroll", handleScrollColors);

  /* ================= Toggle Menu ================= */
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    handleScrollColors();
  });

  /* ================= Close Menu on Link Click ================= */
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      handleScrollColors();
    });
  });

  /* ================= Close Menu on Outside Click ================= */
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      handleScrollColors();
    }
  });

  /* ================= Resize Fix ================= */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      handleScrollColors();
    }
  });

  /* ================= First Load ================= */
  handleScrollColors();

  /* ================= SMOOTH ANIMATIONS USING INTERSECTION OBSERVER ================= */
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    
    // ANIMATION: Fade up reveal for sections
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay based on index within parent
          const delay = entry.target.dataset.animationDelay || 0;
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    };

    // Create observer with threshold
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Select elements to animate
    const animateElements = document.querySelectorAll(
      '.section, .who-section, .how-section, .program-section, ' +
      '.info-card, .custom-card, .what-card, .how-card, .minding-card, ' +
      '.title-content, .hero-content, .leftCard, .add-box, .featured-course-card'
    );

    // Add animation classes and observe
    animateElements.forEach((el, index) => {
      el.classList.add('animate-element');
      // Add staggered delay for cards (50ms between each)
      if (el.classList.contains('info-card') || 
          el.classList.contains('custom-card') || 
          el.classList.contains('what-card') ||
          el.classList.contains('how-card') ||
          el.classList.contains('minding-card')) {
        el.dataset.animationDelay = (index * 50) % 300; // Max 300ms delay
      }
      observer.observe(el);
    });

    // ANIMATION: Hero elements fade in on load
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    });

    // ANIMATION: Subtle image zoom on scroll
    const animateImages = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('image-animate-in');
          animateImages.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.featured-course-card img').forEach(img => {
      img.classList.add('image-animate-element');
      animateImages.observe(img);
    });

    // ANIMATION: Button hover micro-interactions (handled via CSS)
    // Added via CSS animation classes below
    
  }

});



// click payment section functaion

const paymentItems = document.querySelectorAll('.payment-item');

paymentItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    paymentItems.forEach(i => i.classList.remove('active'));

    if (!isActive) item.classList.add('active');
  });
});