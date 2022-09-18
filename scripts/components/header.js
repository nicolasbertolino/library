function init() {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

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