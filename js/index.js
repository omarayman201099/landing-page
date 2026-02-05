document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");
  const social = document.querySelectorAll(".social-icon");

  /* ================= Handle Scroll Colors ================= */
  function handleScrollColors() {
    let scrollPosition = window.scrollY;

    // لو المينيو مفتوحة سيب اللون أسود
    if (navLinks.classList.contains("active")) {
      links.forEach(link => link.style.color = "#000");
      social.forEach(icon => icon.style.color = "#000");
      header.style.backgroundColor = "#fff";
      return;
    }

    if (scrollPosition >= 546) {
      header.style.backgroundColor = "#fff";
      links.forEach(link => link.style.color = "#000");
      social.forEach(icon => icon.style.color = "#000");
    } else {
      header.style.backgroundColor = "transparent";
      links.forEach(link => link.style.color = "#fff");
      social.forEach(icon => icon.style.color = "#fff");
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

  // أول تحميل
  handleScrollColors();
});
