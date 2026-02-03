document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-link");
    const socialIcon = document.querySelectorAll(".social-icon");
    const sections = document.querySelectorAll("section");
  


    window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    header.style.backgroundColor = "#fff";

    links.forEach(link => link.style.color = "#000");
    socialIcon.forEach(link => link.style.color = "#8e3cd9");



  } else {
    header.style.backgroundColor = "initial";

    links.forEach(link => link.style.color = "#fff");
        socialIcon.forEach(link => link.style.color = "#fff");


 
  }
});


    /* ================= Toggle Menu ================= */
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");

      // Check if we're on mobile or desktop
      if (window.innerWidth <= 991) {
        // Mobile: toggle the slide-in menu
        navLinks.classList.toggle("active");
      } else {
        // Desktop: toggle visibility
        navLinks.classList.toggle("active");
      }

      console.log("Menu toggled");
    });
  
    /* ================= Close menu on link click ================= */
    links.forEach(link => {
      link.addEventListener("click", () => {
        // Remove active class from menu and toggle button on link click
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  
    /* ================= Scroll Effects & Active Link ================= */
    window.addEventListener("scroll", () => {
      if (header) {
          header.classList.toggle("scrolled", window.scrollY > 80);
      }
  
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
  
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") && link.getAttribute("href").includes(current) && current !== "") {
          link.classList.add("active");
        }
      });
    });
  
  });




