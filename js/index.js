document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function handleScroll() {
    /* ===== Header Style ===== */
    header.classList.toggle("scrolled", window.scrollY > 80);

    /* ===== Default (Hero) ===== */
    if (window.scrollY < 50) {
      links.forEach(link => link.classList.remove("active"));
      document
        .querySelector('.nav-link[href="#hero"]')
        ?.classList.add("active");
      return;
    }

    /* ===== Detect Current Section ===== */
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (
        currentSection &&
        link.getAttribute("href").includes(currentSection)
      ) {
        link.classList.add("active");
      }
    });
  }

  /* ===== Run on load + scroll ===== */
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  /* ===== Toggle Menu ===== */
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  /* ===== Close Menu on Link Click ===== */
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  /* ===== Close Menu on Outside Click ===== */
  document.addEventListener("click", (e) => {
    if (
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  /* ===== Resize Fix ===== */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});
