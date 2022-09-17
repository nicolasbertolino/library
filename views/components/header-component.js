function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <div class="logo">Library</div>
        <nav class="nav">
          <ul class="nav__list">
            <li><a class="nav__link nav__link--active" href="#accordion">Accordion</a></li>
            <li><a class="nav__link" href="#buttons">Buttons</a></li>
            <li><a class="nav__link" href="#forms">Forms</a></li>
            <li><a class="nav__link" href="#masonry">Masonry</a></li>
            <li><a class="nav__link" href="#modal">Modal</a></li>
            <li><a class="nav__link" href="#navbar">Navbar</a></li>
            <li><a class="nav__link" href="#tabs">Tabs</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
  }

  customElements.define('header-component', Header);
};

export default { init }