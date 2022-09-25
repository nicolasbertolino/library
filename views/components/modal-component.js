function init() {
  class Modal extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <button class="modal__btn" data-modal-open>Open modal</button>
      <div class="modal__wrapper" data-modal>
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal__title">
          <h3 id="modal__title">Modal title</h3>
          <input type="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">At pariatur eveniet</a> hic, doloremque ullam consequuntur eaque neque maxime! Inventore laborum ducimus facere, maxime voluptatem expedita animi quidem dolores perspiciatis perferendis.</p>
          <div class="modal__actions">
            <button class="modal__btn" data-modal-close>Cancel</button>
            <button class="modal__btn">Other button</button>
          </div>
          <button class="modal__cross" data-modal-close>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    `;
    }
  }

  customElements.define('modal-component', Modal);
};

export default { init }