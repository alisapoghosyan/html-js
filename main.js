import { createTabs } from "./scripts/tab.js";
import {
  reconciliationRows,
  reconciliationsTableHeader,
  tableHeader,
  tableRows,
} from "../constants.js";
import { createTable } from "./scripts/table.js";
import { headerAppear } from "./scripts/headerAppear.js";

const deliveryTable = document.getElementById("deliveries-table");
const regardingsTable = document.getElementById("regardings-table");
const reconciliationsTable = document.getElementById("reconciliations-table");
const sidebarMenu = document.getElementById("menu-sidebar");
const menuIcons = document.querySelectorAll(".menu-icon");

const mainWrapper = document.getElementById("main-wrapper");

menuIcons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    sidebarMenu.classList.add("show");
    mainWrapper.classList.add("open-menu");
  });
  button.addEventListener("mouseleave", () => {
    sidebarMenu.classList.remove("show");
    mainWrapper.classList.remove("open-menu");
  });
});
function onRowClick(row) {
  let rows = document.querySelectorAll(".expanded");
  rows.forEach((item) => item.classList.remove("expanded"));

  const expandedRow = document.getElementById("expanded-row");
  if (expandedRow) {
    expandedRow.remove();
  }

  row.classList.add("expanded");
  let text =
    "So a big tank arrived but it turned out it was empty so we didn’t have any diesel delivered.";
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  tr.setAttribute("id", "expanded-row");
  td.setAttribute("colspan", 9);

  td.innerHTML = `<div class="nested-row">
                        <div class="text-box">
                            <span class="title mdc-theme--surface">Comments</span>
                            <textarea>${text}</textarea>
                        </div>
                        <div class="text-box">
                            <span class="title mdc-theme--surface">Associated Documents</span>
                            <div class="file-wrapper">
                              <span class="material-icons trash-icon">
                                delete_forever
                              </span>
                              <span class="material-icons eye-icon">
                                visibility
                              </span>
                              <p class="mdc-theme--primary">Delivery 280723.pdf</p>
                            </div>
                            <div class="file-wrapper">
                              <span class="material-icons trash-icon">
                                delete_forever
                              </span>
                              <span class="material-icons eye-icon">
                                visibility
                              </span>
                              <p class="mdc-theme--primary">Purchase order 280723.doc</p>
                            </div>
                    </div>`;

  tr.appendChild(td);
  row.after(tr);
}


const tabFuncianlaity = {
  0: () => {
    headerAppear(false);
  },
  2: () => {
    headerAppear(true);
    createTable({
      head: tableHeader,
      rowTable: tableRows,
      table: deliveryTable,
      expandable: true,
      onRowClick: onRowClick,
      classDialog:'.edit-delivery-dialog'
    });
  },
  3: () => {
    headerAppear(true);
    createTable({
      head: tableHeader,
      rowTable: tableRows,
      table: regardingsTable,
      onRowClick: onRowClick,
    });
  },
  6: () => {
    headerAppear(true);
    createTable({
      head: reconciliationsTableHeader,
      rowTable: reconciliationRows,
      table: reconciliationsTable,
      balance: true,
      onRowClick: onRowClick,
    });
  },
};

[1,4,5].forEach((item) => {
  tabFuncianlaity[`${item}`] = () => {
    headerAppear(true);
  };
});

createTabs(tabFuncianlaity);


// TANKS

let showMoreBtns = document.querySelectorAll(".show-more-btn");
let showLessBtns = document.querySelectorAll(".show-less");
let accordionIcons = document.querySelectorAll('.accordion-icon') 

for(let i = 0; i < showMoreBtns.length; i++) {
  showMoreBtns[i].addEventListener("click", () => {
    accordionIcons[i].style.transform = "rotate(90deg)";
    let content = document.querySelectorAll(".more-content")[i]
    content.style.display = "flex"
    showMoreBtns[i].style.display = 'none'
    if (showLessBtns[i]) {
      showLessBtns[i].style.display = "block"
    }
  });

  showLessBtns[i].addEventListener('click', () => {
    accordionIcons[i].style.transform = "rotate(0deg)";
    let content = document.querySelectorAll(".more-content")[i]
    content.style.display = "none"
    showMoreBtns[i].style.display = 'block'
    showLessBtns[i].style.display = 'none'
  })

}

var chrt = document.getElementById("chartId").getContext("2d");
var chrt2 = document.getElementById("chartId2").getContext("2d");
var chrt3 = document.getElementById("chartId3").getContext("2d");
var chrt4 = document.getElementById("chartId4").getContext("2d");
let data = {
  labels: ["date", "date", "date", "date", "date", "date", "date", "date"],
  datasets: [{
      label: "online tutorial subjects",
      data: [1800, 2000, 1700, 1500, 1600, 1400, 1250 , 1500, 1200, 1000, 800, 1100, 700, 640, 800, 450, 300, 350, 100, 150, 200, 50, 0],
      backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
      borderColor: '#2A94CB',
      borderWidth: 2,
      pointRadius: 0,
  }],
}
let options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
  },            
}
var chartId = new Chart(chrt, {
  type: 'line',
  data: data,
  options: options
});

var chartId2 = new Chart(chrt2, {
  type: 'line',
  data: data,
  options: options
});

var chartId3 = new Chart(chrt3, {
  type: 'line',
  data: data,
  options: options
});

var chartId4 = new Chart(chrt4, {
  type: 'line',
  data: data,
  options: options
});