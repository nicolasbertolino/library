function init() {
  const buttons = document.querySelectorAll("[data-accordion-btn]");

  buttons.forEach(button => {
    const content = button.nextElementSibling;
    button.addEventListener("click", function () {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.setAttribute("aria-expanded", false);
        content.style.maxHeight = null;
        content.setAttribute("aria-hidden", true);
      } else {
        button.classList.add("active");
        button.setAttribute("aria-expanded", true);
        content.style.maxHeight = content.scrollHeight + "px";
        content.setAttribute("aria-hidden", false);
      }
    })
  });
}

export default { init }