function init() {
  class Modal extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <button class="modal__btn" data-modal-open>Open modal</button>
    `;
    }
  }

  customElements.define('modal-component', Modal);
};

export default { init }