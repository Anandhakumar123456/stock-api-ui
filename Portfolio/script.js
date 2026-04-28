document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-section");

  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach((section) => {
    appearOnScroll.observe(section);
  });
});
