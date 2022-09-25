function init() {
  class Accordion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <div class="accordion" role="tablist">
        <div class="accordion__panel" role="tabpanel">
          <button class="accordion__btn accordion__btn--active" role="tab" aria-selected="false" aria-expanded="false" data-accordion-btn>Panel 1</button>
          <div class="accordion__content" aria-hidden="true">
            <div class="accordion__container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto repellat totam harum corporis quis!</p>
              <p>Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia.</p>
            </div>
          </div>
        </div>
        <div class="accordion__panel" role="tabpanel">
          <button class="accordion__btn" role="tab" aria-selected="false" aria-expanded="false" data-accordion-btn>Panel 2</button>
          <div class="accordion__content" aria-hidden="true">
            <div class="accordion__container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam aperiam magni cumque nesciunt in laboriosam exercitationem rem incidunt necessitatibus <a href="#">ipsa soluta maiores</a> est dolor labore ratione animi, facere reiciendis a.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quia a tenetur libero, consectetur sed ut officiis hic aliquid at, iure id voluptas esse natus illo aut sint cupiditate adipisci?</p>
            </div>
          </div>
        </div>
        <div class="accordion__panel" role="tabpanel">
          <button class="accordion__btn" role="tab" aria-selected="false" aria-expanded="false" data-accordion-btn>Panel 3</button>
          <div class="accordion__content" aria-hidden="true">
            <div class="accordion__container">
              <p>Ipsam quisquam voluptatem quidem labore aliquam expedita distinctio impedit culpa voluptates amet vero asperiores hic velit beatae, error, in harum temporibus cum.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    }
  }

  customElements.define('accordion-component', Accordion);
};

export default { init }