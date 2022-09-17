/* Components */
import headerComponent from "../views/components/header-component.js";

/* Components Logic */
import accordion from "./components/accordion.js";
import header from "./components/header.js";

/* Main */
import main from "./main/main.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  accordion.init();
  header.init();
  headerComponent.init();
  main.init();
}

