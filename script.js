// Hero Navigation floating functionality
window.addEventListener("scroll", () => {
  const heroNav = document.querySelector(".hero-nav");
  const heroSection = document.querySelector(".hero-section");

  if (heroSection && heroNav) {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight - 100) {
      heroNav.classList.add("fixed");
    } else {
      heroNav.classList.remove("fixed");
    }
  }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlighting for hero navigation
const sections = document.querySelectorAll("section[id]");
const heroNavLinks = document.querySelectorAll(".hero-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPosition = window.scrollY + 200; // Offset for fixed header

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  heroNavLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(
    ".team-member, .benefit-card, .stat-item",
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  }

  updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((stat) => {
          const target = parseInt(stat.textContent);
          animateCounter(stat, target);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

// Observe stats section
const statsSection = document.querySelector(".about-stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Hover effects for team members
document.querySelectorAll(".team-member").forEach((member) => {
  member.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  member.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Hover effects for benefit cards
document.querySelectorAll(".benefit-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Form validation (if contact form is added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add some interactive elements
document.addEventListener("DOMContentLoaded", () => {
  // Add click to copy email functionality
  const emailElement = document.querySelector(
    ".footer-section p:first-of-type",
  );
  if (emailElement) {
    emailElement.style.cursor = "pointer";
    emailElement.addEventListener("click", () => {
      const email = "mitaga@mit.edu";
      navigator.clipboard.writeText(email).then(() => {
        // Show a temporary tooltip
        const tooltip = document.createElement("div");
        tooltip.textContent = "Email copied!";
        tooltip.style.cssText = `
                    position: absolute;
                    background: #3182ce;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    z-index: 1000;
                    pointer-events: none;
                `;
        document.body.appendChild(tooltip);

        const rect = emailElement.getBoundingClientRect();
        tooltip.style.left = rect.left + "px";
        tooltip.style.top = rect.top - 30 + "px";

        setTimeout(() => {
          document.body.removeChild(tooltip);
        }, 2000);
      });
    });
  }
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Typing effect for hero title
function typeWriter() {
  const text = "Aim + Act + Africa";
  const typingElement = document.getElementById("typing-text");

  if (!typingElement) {
    console.error("Typing element not found");
    return;
  }

  console.log("Starting typing effect for:", text);

  // Clear any existing content
  typingElement.innerHTML = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 150);
    }
  }

  // Start typing immediately
  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", function () {
  console.log("Page loaded, starting typing effect");
  setTimeout(typeWriter, 500);
});

// Also try on DOMContentLoaded as backup
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, checking typing effect");
  const typingElement = document.getElementById("typing-text");
  if (typingElement && typingElement.innerHTML === "") {
    typeWriter();
  }
});

// Add scroll progress indicator
const progressBar = document.createElement("div");
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3182ce, #667eea);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function setTheme(dark) {
  if (dark) {
    document.body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
}

// Load theme from localStorage
const savedTheme = localStorage.getItem("aga-theme");
if (savedTheme) {
  setTheme(savedTheme === "dark");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setTheme(isDark);
  localStorage.setItem("aga-theme", isDark ? "dark" : "light");
});

// Navbar scroll functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector(".hero");

  if (navbar && heroSection) {
    window.addEventListener("scroll", function () {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});

// Header scroll functionality
document.addEventListener("DOMContentLoaded", function () {
  const heroNav = document.querySelector(".hero-nav");
  const heroImage = document.querySelector(".hero-image");

  if (heroNav && heroImage) {
    window.addEventListener("scroll", function () {
      const imageRect = heroImage.getBoundingClientRect();
      const imageHeight = heroImage.offsetHeight;
      const visibleHeight = Math.max(
        0,
        Math.min(imageHeight, imageRect.bottom),
      );
      const visibilityPercentage = (visibleHeight / imageHeight) * 100;

      // Show header when image is less than 30% visible
      if (visibilityPercentage < 30) {
        heroNav.classList.add("fixed");
      } else {
        heroNav.classList.remove("fixed");
      }
    });
  }
});
