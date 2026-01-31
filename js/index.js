// نجيب العناصر
var hero = document.querySelector('header');
var navLinks = document.querySelectorAll('.nav-link'); // كل الروابط

// نراقب حركة السكروول
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY; // موقع السكروول الحالي

  if (scrollPosition >= 890) {
    hero.style.backgroundColor = "#fff";

    // تغيير لون كل الروابط
    navLinks.forEach(function(link) {
      link.style.color = "#000";
    });
  } else {
    hero.style.backgroundColor = "initial"; // يرجع للون الأصلي

    // إعادة لون الروابط للون الأصلي
    navLinks.forEach(function(link) {
      link.style.color = ""; // يترك اللون الأصلي للـ CSS
    });
  }

  // طباعة السكروول كل مرة للتجربة
//   console.log(scrollPosition);
});
