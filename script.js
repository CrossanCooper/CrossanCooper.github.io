const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${i * 90}ms`;
  observer.observe(el);
});
