function init() {
  const accButtons = document.querySelectorAll('[data-accordion-btn]');

  if (!accButtons.length) return;

  for (let i = 0; i < accButtons.length; i++) {

    if (accButtons[i].classList.contains('accordion__btn--active')) {
      showContent(i);
    }

    accButtons[i].addEventListener('click', () => {
      if (accButtons[i].classList.contains('accordion__btn--active')) {
        hideContent(i);
      } else {
        autoCollapse(i);
        showContent(i);
      }
    });
  }

  function showContent(i) {
    accButtons[i].classList.add('accordion__btn--active');
    accButtons[i].setAttribute('aria-expanded', true);
    accButtons[i].setAttribute('aria-selected', true);
    accButtons[i].nextElementSibling.setAttribute('aria-hidden', false);
    accButtons[i].nextElementSibling.style.maxHeight = accButtons[i].nextElementSibling.scrollHeight + 'px';
  }

  function hideContent(i) {
    accButtons[i].classList.remove('accordion__btn--active');
    accButtons[i].setAttribute('aria-expanded', false);
    accButtons[i].setAttribute('aria-selected', false);
    accButtons[i].nextElementSibling.setAttribute('aria-hidden', true);
    accButtons[i].nextElementSibling.style.maxHeight = null;
  }

  function autoCollapse(i) {
    for (let j = 0; j < accButtons.length; j++) {
      accButtons[j].classList.remove('accordion__btn--active');
      accButtons[j].setAttribute('aria-expanded', false);
      accButtons[j].setAttribute('aria-selected', false);
      if (j != i) {
        accButtons[j].nextElementSibling.setAttribute('aria-hidden', true);
        accButtons[j].nextElementSibling.style.maxHeight = null;
      }
    }
  }
}

export default { init }