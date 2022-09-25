/* Components */
import accordionComponent from '../views/components/accordion-component.js';
import dropdownDefaultComponent from '../views/components/dropdown-default-component.js';
import headerComponent from '../views/components/header-component.js';
import modalComponent from '../views/components/modal-component.js';

/* Components Logic */
import accordion from './components/accordion.js';
import dropdownDefault from './components/dropdown-default.js';
import header from './components/header.js';
import modal from './components/modal.js'

/* Main */
import main from './main/main.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  accordionComponent.init();
  accordion.init();
  dropdownDefaultComponent.init();
  dropdownDefault.init();
  headerComponent.init();
  header.init();
  main.init();
  modalComponent.init();
  modal.init();
}
