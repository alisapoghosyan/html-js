import {
  cardDetail,
  cardHistoryRows,
  cardHistoryTableHeader,
  cardHolderInfo,
  cardsTab,
  driverRadio,
  tableLimitsHeader,
  tableLimitsRows,
  transCardBtn,
  transEditFields,
  transHead,
  transRow,
  vehicleRadio,
} from "../constants.js";
import { headerAppear } from "../scripts/headerAppear.js";
import { createTable } from "../scripts/table.js";
const cardsTabConatiner = document.querySelector(
  ".mdc-tab-scroller__scroll-content-cards"
);
const details = document.querySelector(".details-container");
const vehicleContainer = document.querySelector(".vehicle-radio-btn");
const diverContainer = document.querySelector(".driver-radio-btn");
const holderContainer = document.querySelector(".card-holder-info");
const limitCardsBtn = document.querySelector(".card-limits");
const limitsTable = document.getElementById("limits-table");
const historyTable = document.getElementById("history-table");
const transTable = document.getElementById("transactions-table");
const editTrans = document.querySelector(".edit-card-trans");
const editTransBtn = document.querySelector(".edit-trans-buttons");
// const transBox=document.querySelector(".trans-box")
const tabs = cardsTab.map(({ title, tabIndex }) => {
  return `<button class="mdc-tab" role="tab" aria-selected="true" autofocus
  tabindex=${tabIndex}>
  <span class="mdc-tab__content">
  <span class="mdc-tab__text-label mdc-theme--primary">${title}
  </span>
  </span>
  <span class="mdc-tab-indicator">
  <span
  class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
  </span>
  <span class="mdc-tab__ripple"></span> 
  </button>`;
});
cardsTabConatiner.innerHTML = tabs.join("");

const cards = cardDetail.map(({ title, type, val, placeholder }) => {
  return `<div class="text-box add-reading-text-boxs">
  <span class="title mdc-theme--surface">${title}</span>
  ${
    type
      ? `<select>
    <option>${val}</option>
    </select>`
      : `<input placeholder="${placeholder || ""}"/>`
  }
  </div>`;
});
details.innerHTML = cards.join("");

const vehicle = vehicleRadio.map(({ label }) => {
  return `<div class="mdc-form-field">
  <div class="mdc-radio">
  <input class="mdc-radio__native-control" type="radio" id="radio-1"
          name="radios" checked>
      <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
      </div>
      <label for="radio-1">${label}</label>
      </div>
      `;
});
vehicleContainer.innerHTML = vehicle.join("");

const driver = driverRadio.map(({ label }) => {
  return `<div class="mdc-form-field">
  <div class="mdc-radio">
      <input class="mdc-radio__native-control" type="radio" id="radio-1"
          name="radios" checked>
      <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
  </div>
  <label for="radio-1">${label}</label>
  </div>
  `;
});
diverContainer.innerHTML = driver.join("");

const holder = cardHolderInfo.map(({ label, display }) => {
  return `<div class="text-box add-reading-text-boxs ${
    display ? "hidden" : ""
  }">
  <span class="title mdc-theme--surface">${label}</span>
  <input />
</div>`;
});
holderContainer.innerHTML = holder.join("");

function onRowClick(row) {
  let rows = document.querySelectorAll(".expanded");
  rows.forEach((item) => item.classList.remove("expanded"));

  const expandedRow = document.getElementById("expanded-row");
  if (expandedRow) {
    expandedRow.remove();
  }
  row.classList.add("expanded");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  tr.setAttribute("id", "expanded-row");
  td.setAttribute("colspan", 9);
  td.innerHTML = ` <div class="trans-box"><div class="bg-div"></div>
  <div class="edit-trans-buttons">
  ${transCardBtn.map(({ label, icon }, idx) => {
    return `  <button class="mdc-button mdc-button--raised ${idx===5 ? "gray-btn":''}">
    ${
      idx !== 5
        ? `<span class="material-icons">${icon}</span>`
        : `<img src="../assets/${icon}"/>`
    }
    <span class="mdc-button__label">${label}</span>
  </button>`
  }).join("")}
  </div>
  <div class="edit-card-trans">
  
  ${ transEditFields.map(({ label, placeholder, display }) => {
    return `<div class="text-box add-reading-text-boxs ${
      display ? "hidden" : ""
    }">
    <span class="title mdc-theme--surface">${label}</span>
    <input placeholder=${placeholder || ""}>
  </div>`
  }).join("")}
  </div>
</div>`

  tr.appendChild(td);
  row.after(tr);
}

const tabFuncianlaity = {
  0: () => {
    headerAppear(true);
  },
  1: () => {
    headerAppear(false);
    createTable({
      head: tableLimitsHeader,
      rowTable: tableLimitsRows,
      table: limitsTable,
      expandable: false,
    });
  },
  2: () => {
    headerAppear(false);
    createTable({
      head: cardHistoryTableHeader,
      rowTable: cardHistoryRows,
      table: historyTable,
      expandable: false,
      balance: true,
    });
  },
  3: () => {
    headerAppear(false);
    createTable({
      head: transHead,
      rowTable: transRow,
      table: transTable,
      expandable: true,
      balance: true,
      onRowClick:onRowClick
    });
  },
};

const transFields = transEditFields.map(({ label, placeholder, display }) => {
  return `<div class="text-box add-reading-text-boxs ${
    display ? "hidden" : ""
  }">
  <span class="title mdc-theme--surface">${label}</span>
  <input placeholder=${placeholder || ""}>
</div>`;
});

// editTrans.innerHTML = transFields.join("");

const transButton = transCardBtn.map(({ label, icon }, idx) => {
  return `  <button class="mdc-button mdc-button--raised ${idx===5 ? "gray-btn":''}">
  ${
    idx !== 5
      ? `<span class="material-icons">${icon}</span>`
      : `<img src="../assets/${icon}"/>`
  }
  <span class="mdc-button__label">${label}</span>
</button>`;
});
// editTransBtn.innerHTML = transButton.join("");

(async () => {
  const { createTabs } = await import("../scripts/tab.js");
  createTabs(tabFuncianlaity);
})();
