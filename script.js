document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission (mock)
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent successfully! (Mock)");
      this.reset();
    });
  }

  // Section reveal on scroll
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("reveal-hidden");
    observer.observe(section);
  });
});
