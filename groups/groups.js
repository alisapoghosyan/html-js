import { batchBasket, cardRow, siteCardHead } from "../constants.js";
import { createTable } from "../scripts/table.js";

// (async () => {
//   await import("../sites/sites.js");
// })();

const steps = document.querySelector(".batchSteps");
const step = batchBasket.steps.map(({ label, info, step, content, open }) => {
  return `
    <div class="batch-step-container">
      <div class="batch-steps">
        <div class="number-steps ${step == "1" ? "active-round":''}">${step}</div>
        <div class="aditional-info">
          <span>${label}</span>
          <span>${info}</span>
        </div>
      </div>
    <div class="content-open-groups">
    ${step !== 5 ? `<div class="step-line"></div>` : ""}
     ${content}
        </div>
    </div>
  `;
});

steps.innerHTML = step.join("");

const tabs = document.querySelectorAll(".btn-continue");
const containers = document.querySelectorAll("#step");
const stepRound = document.querySelectorAll(".number-steps");
const line = document.querySelectorAll(".step-line");
function removeActiveTabClass() {
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
}

let tabFocus = 1;
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTabClass();
    tabFocus = tab.tabIndex + 1;
    tab.classList.add("tab-active");
    containers.forEach((item, index) => {
      if (item.classList.contains("block")) {
        item.innerHTML = "";
      }
      if (stepRound[index].classList.contains("active-round")) {
        stepRound[index].classList.remove("active-round");
      }
      tabFocus == index && item.classList.add("block");
      if (tabFocus == index) {
        line[index].classList.add("hidden");
        stepRound[index].classList.add("active-round");
       
      }
    });
  });
});


const tablea = document.getElementById("cards-step4");
const table = document.getElementById("cards-table");
createTable({
  head: siteCardHead,
  rowTable: cardRow,
  table: table,
  expandable: true,
  balance: false,
  checkbox: true,
});

createTable({
  head: siteCardHead,
  rowTable: cardRow,
  table: tablea,
  expandable: true,
  balance: false,
  group: true,
  eye: true,
});
