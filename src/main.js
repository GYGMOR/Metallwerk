import './style.css';
import './header.css';
import './hero.css';
import './services.css';
import './about.css';
import './projects.css';
import './process.css';
import './footer.css';

console.log("Metallwerk Swiss App Started");

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Scroll Effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Intersection Observer for Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-up').forEach(el => {
    observer.observe(el);
  });
});
