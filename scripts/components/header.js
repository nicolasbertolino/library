function init() {
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");

  // Add an event listener listening for scroll
  window.addEventListener("scroll", () => {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 0;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav__list a[href*=" + sectionId + "]").classList.add("nav__link--active");
      } else {
        document.querySelector(".nav__list a[href*=" + sectionId + "]").classList.remove("nav__link--active");
      }
    });
  });

}

export default { init }