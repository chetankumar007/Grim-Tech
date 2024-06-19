// JavaScript for toggling the mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle the "active" class on and off when the checkbox is clicked
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close the navigation menu when a nav menu item is clicked
  navMenu.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.checked = false;
    });
  });
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
