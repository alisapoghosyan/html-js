import { filtersCard } from "../constants.js";

const filters = document.querySelector(".filter-cards");
const selects = filtersCard.map(({ label }, idx) => {
  return `<div class='select'>
  <span class="material-icons">expand_more</span>
  ${label}</div>
  `;
});
filters.innerHTML = selects.join("");