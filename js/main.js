// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true"
    menuToggle.setAttribute("aria-expanded", !isExpanded)
    navLinks.classList.toggle("active")
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-container")) {
      menuToggle.setAttribute("aria-expanded", "false")
      navLinks.classList.remove("active")
    }
  })

  // Close menu when clicking a link
  const navLinkItems = navLinks.querySelectorAll(".nav-link")
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false")
      navLinks.classList.remove("active")
    })
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add active state to current page in navigation
const currentLocation = window.location.pathname.split("/").pop() || "index.html"
document.querySelectorAll(".nav-link").forEach((link) => {
  const linkHref = link.getAttribute("href")
  if (linkHref === currentLocation) {
    link.classList.add("active")
    link.setAttribute("aria-current", "page")
  } else {
    link.classList.remove("active")
    link.removeAttribute("aria-current")
  }
})
// About Page Image Slider
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("aboutSlider");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.opacity = 0;

    setTimeout(() => {
        slider.src = images[currentIndex];
        slider.style.opacity = 1;
    }, 400);
}, 5000); // changes image every 3 seconds

