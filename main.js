const sidebarMenu = document.getElementById("menu-sidebar");
const menuIcons = document.querySelectorAll(".menu-icon");
const containers = document.querySelectorAll(".container");
const tabs = document.querySelectorAll('[role="tab"]');
const mainWrapper = document.getElementById("main-wrapper");
const deliveryTable = document.getElementById("deliveries-table");
const regardingsTable = document.getElementById("regardings-table");
let tabFocus = 0;

const tableHeader = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "date",
    value: "Date/ Time",
  },
  {
    key: "tankNo",
    value: "Tank No.",
  },
  {
    key: "product",
    value: "Product",
  },
  {
    key: "orderNo",
    value: "Purchase <br> Order No.",
  },
  {
    key: "registration",
    value: "Registration <br> Origin",
  },
  {
    key: "volume",
    value: "Volume",
  },
  {
    key: "comments",
    value: "Comments",
  },
  {
    key: "edit",
    value: "",
  },
];

const tableRows = [
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    tankNo: "01",
    product: "Diesel",
    orderNo: "6456546",
    registration: "Webpage",
    volume: "58641",
    comments: "Text",
    edit: "edit",
  },
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    tankNo: "01",
    product: "Diesel",
    orderNo: "6456546",
    registration: "Webpage",
    volume: "58641",
    comments: "Text",
    edit: "edit",
  },
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    tankNo: "01",
    product: "Diesel",
    orderNo: "6456546",
    registration: "Webpage",
    volume: "58641",
    comments: "Text",
    edit: "edit",
  },
];

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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTabClass();
    tabFocus = tab.tabIndex;
    tab.classList.add("tab-active")
    containers.forEach((item, index) => {
      if (item.classList.contains("block")) {
        item.classList.remove("block");
      }

      let actions = document.getElementsByClassName("header-actions");
      tabFocus ? actions[0].classList.remove("hide") : actions[0].classList.add("hide");

      tabFocus == index && item.classList.add("block");
      tabFocus == 2 && createTable(deliveryTable, true);
      tabFocus == 3 && createTable(regardingsTable);
    });
  });
});

function removeActiveTabClass() {
  tabs.forEach(tab => tab.classList.remove("tab-active"));
}

function createTable(table, expandable = false) {
  const rows = document.querySelectorAll('tr');
  rows.forEach(row => row.remove())
  // create table header
  const headerRow = document.createElement("tr");
  for (let i = 0; i < tableHeader.length; i++) {
    th = document.createElement("th");
    th.innerHTML = tableHeader[i].value;
    if (i == 7) {
      th.setAttribute("width", "25%");
    }
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  // Create table rows
  for (let i = 0; i < tableRows.length; i++) {
    let row = document.createElement("tr");
    expandable && row.addEventListener("click", () => {
      onRowClick(row);
    });

    for (let j = 0; j < tableHeader.length; j++) {
      let cell = document.createElement("td");
      if (j == 0) {
        if(expandable) {
          const span = document.createElement("span");
          span.innerText = "chevron_right";
          span.setAttribute(
            "class",
            "material-icons row-icon arrow mdc-theme--primary"
          );
          cell.appendChild(span);
        }
      } else if (j == tableHeader.length - 1) {
        const span = document.createElement("span");
        span.innerText = "edit";
        span.setAttribute("class", "material-icons row-icon");
        cell.appendChild(span);
      } else {
        cell.innerText = tableRows[i][tableHeader[j].key];
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function onRowClick(row) {
  let rows = document.querySelectorAll(".expanded");
  rows.forEach(item => item.classList.remove("expanded"));

  const expandedRow = document.getElementById("expanded-row");
  if(expandedRow) {
    expandedRow.remove();
  }

  row.classList.add("expanded");
  let text =
    "So a big tank arrived but it turned out it was empty so we didn’t have any diesel delivered.";
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  tr.setAttribute("id", "expanded-row")
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
