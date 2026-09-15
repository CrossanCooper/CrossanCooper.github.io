const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Toggle paper abstracts while keeping button state available to screen readers.
document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const abstractId = button.getAttribute("aria-controls");
  const abstract = document.getElementById(abstractId);
  const label = button.querySelector(".bracketed-link-label");

  if (!abstract || !label) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const shouldExpand = !isExpanded;

    button.setAttribute("aria-expanded", String(shouldExpand));
    label.textContent = shouldExpand ? "hide abstract" : "abstract";
    abstract.hidden = !shouldExpand;
  });
});
