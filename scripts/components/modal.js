function init() {
  const modal = document.querySelector('[data-modal]');
  const modalOpener = document.querySelector('[data-modal-open]');
  const modalClosers = modal.querySelectorAll('[data-modal-close]');

  modalOpener.addEventListener('click', () => {
    openModal();
    trapFocus();
  });

  modalClosers.forEach(modalCloser => {
    modalCloser.addEventListener('click', () => {
      closeModal();
    })
  });

  function openModal() {
    modal.classList.add('modal__wrapper--visible');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutsideClick);
  }

  function closeModal() {
    modal.classList.remove('modal__wrapper--visible');
    document.body.style.overflow = 'initial';
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeModal();
    }
  }

  function handleOutsideClick(e) {
    if (!modal.firstElementChild.contains(e.target) && (!modalOpener.contains(e.target))) {
      closeModal();
    }
  }

  function trapFocus() {
    let focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    let firstFocusableEl = focusableEls[0];
    let lastFocusableEl = focusableEls[focusableEls.length - 1];

    modal.addEventListener('keydown', function (e) {
      let isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

      if (!isTabPressed) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

}

export default { init }