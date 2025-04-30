document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Add animation for extension cards
  const extensionCards = document.querySelectorAll(".extension-card");

  // Add observer to animate cards when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Initially set cards to be invisible
  extensionCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });

  // Add click event for Chrome Web Store links
  const storeLinks = document.querySelectorAll(".cta-button");
  storeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Analytics tracking could go here
      console.log("Extension link clicked:", this.getAttribute("href"));
    });
  });
});
