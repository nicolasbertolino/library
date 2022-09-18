function init() {
  class Accordion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <details>
        <summary>Lorem ipsum dolor</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero nesciunt impedit eaque nisi sequi inventore doloremque praesentium in, aliquid illum, reprehenderit, ad sunt. Aliquid ratione dignissimos iure natus nam!
      </details>
      <details>
        <summary>Accusantium maiores</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem veniam iste, dolores impedit neque officia atque ducimus, beatae similique quo fugit voluptatem, reprehenderit libero non hic quae consequatur! Eaque!
      </details>
    `;
    }
  }

  customElements.define('accordion-html-component', Accordion);
};

export default { init }