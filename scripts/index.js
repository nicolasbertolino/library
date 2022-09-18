/* Components */
import headerComponent from "../views/components/header-component.js";
import accordionHtmlComponent from "../views/components/accordion-html-component.js";
import accordionJsComponent from "../views/components/accordion-js-component.js";

/* Components Logic */
import accordionJs from "./components/accordion-js.js";
import header from "./components/header.js";

/* Main */
import main from "./main/main.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  accordionHtmlComponent.init();
  accordionJsComponent.init();
  accordionJs.init();
  headerComponent.init();
  header.init();
  main.init();
}
