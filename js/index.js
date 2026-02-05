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

});
