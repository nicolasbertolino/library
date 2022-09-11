export default function headerComponent() {
  class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <div class="header__logo">Library</div>
        <nav class="header__nav">
          <ul>
            <li><a href="#accordion">Accordion</a></li>
            <li><a href="#buttons">Buttons</a></li>
            <li><a href="#forms">Forms</a></li>
            <li><a href="#masonry">Masonry</a></li>
            <li><a href="#modal">Modal</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
  }

  customElements.define('header-component', Header);
};
