// Mobile menu toggle
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    
    // Animate links slide in
    const links = document.querySelectorAll('.nav-links li');
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (navLinks) navLinks.classList.remove("active");
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
    }
  });
});

// Set active navigation link
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const navLinksList = document.querySelectorAll(".nav-links a");

  navLinksList.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else if (currentPage === "" && linkPage === "index.html") {
       link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ---------------- Storytelling Animation Logic ---------------- //
  
  // 1. Prepare elements for animation
  const animatedContainers = document.querySelectorAll('.services-grid, .mission-container, .mission-boxes, .industries-grid, .details-container, .team-members, .advantages, .testimonial-container');
  
  animatedContainers.forEach(container => {
    const children = Array.from(container.children);
    children.forEach((child, index) => {
      child.classList.add('story-hidden');
      // Add stagger delay classes cyclically (1-5)
      const staggerIndex = (index % 5) + 1;
      child.classList.add(`stagger-${staggerIndex}`);
    });
  });

  // Also animate individual section headers and solitary content
  const soloElements = document.querySelectorAll('.section-intro, .contact-info, .contact-form, .map-container');
  soloElements.forEach(el => el.classList.add('story-hidden'));

  // 2. Intersection Observer
  const observerOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
  };

  const storyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('story-visible');
        observer.unobserve(entry.target); // Play once
      }
    });
  }, observerOptions);

  // Observe all hidden elements
  document.querySelectorAll('.story-hidden').forEach(el => storyObserver.observe(el));
});

// Load Footer (Embedded for local file compatibility)
document.addEventListener("DOMContentLoaded", function () {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
    <footer class="metallic-footer">
      <div class="footer-top-bar"></div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">MECH<span>A</span>PEX</a>
            <p class="brand-desc">
              Providing innovative engineering solutions across diverse
              industries with a commitment to quality and excellence.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/mechapex-technologies-340b62363/" target="_blank" class="social-btn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-btn"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-btn"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-btn"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="services.html"><i class="fas fa-chevron-right"></i> Services</a></li>
              <li><a href="industries.html"><i class="fas fa-chevron-right"></i> Industries</a></li>
              <li><a href="why-choose-us.html"><i class="fas fa-chevron-right"></i> Why Us</a></li>
              <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="services.html"><i class="fas fa-cog"></i> Engineering Design</a></li>
              <li><a href="services.html"><i class="fas fa-cog"></i> Structural Steel</a></li>
              <li><a href="services.html"><i class="fas fa-cog"></i> System Engineering</a></li>
              <li><a href="services.html"><i class="fas fa-cog"></i> CAE & Validation</a></li>
              <li><a href="services.html"><i class="fas fa-cog"></i> HR Staffing</a></li>
            </ul>
          </div>
          <div class="footer-links contact-details">
            <h3>Contact Info</h3>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> <span>Plot No.29, Shivagiri, Dharwad, Karnataka, INDIA</span></li>
              <li><i class="fas fa-envelope"></i> <span>info@mechapex.com</span></li>
              <li><i class="fas fa-phone"></i> <span>+91 78292 07007</span></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2026 MECHAPEX Engineering Solutions. All Rights Reserved.</p>
          <div class="metal-plate-screws"><span>+</span><span>+</span></div>
        </div>
      </div>
    </footer>
    `;
  }

});
