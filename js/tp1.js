const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Dejar de observar una vez que es visible
    }
  });
}, observerOptions);

// Observar todas las secciones con la clase .fade-in
const sectionsToFade = document.querySelectorAll(".fade-in");
sectionsToFade.forEach((section) => {
  fadeInObserver.observe(section);
});
