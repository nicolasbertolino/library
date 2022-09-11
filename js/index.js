/* Components */
import headerComponent from "../views/components/header-component.js";

/* Scripts */
import header from "./scripts/header.js";
import main from "./scripts/main.js";

document.addEventListener("DOMContentLoaded", function() {
  header();
  headerComponent();
  main();
});
