const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Toggle paper abstracts while keeping button state available to screen readers.
document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const abstractId = button.getAttribute("aria-controls");
  const abstract = document.getElementById(abstractId);

  if (!abstract) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const shouldExpand = !isExpanded;

    button.setAttribute("aria-expanded", String(shouldExpand));
    button.textContent = shouldExpand ? "Hide abstract" : "Abstract";
    abstract.hidden = !shouldExpand;
  });
});
