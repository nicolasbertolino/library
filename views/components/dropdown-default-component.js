function init() {
  class dropdownDefault extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      test
    `;
    }
  }

  customElements.define('dropdown-default-component', dropdownDefault);
};

export default { init }