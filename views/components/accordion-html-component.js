function init() {
  class Accordion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <details>
        <summary>Lorem ipsum dolor</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero nesciunt <a href="#">ipsa soluta maiores</a> impedit eaque nisi sequi inventore doloremque praesentium in, aliquid illum, reprehenderit, ad sunt. Aliquid ratione dignissimos iure natus nam!</p>
      </details>
      <details>
        <summary>Accusantium maiores</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem veniam iste, dolores impedit neque officia atque ducimus, beatae similique quo fugit voluptatem, reprehenderit libero non hic quae consequatur! Eaque!</p>
      </details>
    `;
    }
  }

  customElements.define('accordion-html-component', Accordion);
};

export default { init }