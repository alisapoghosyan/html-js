export function createTable({
  head,
  rowTable,
  table,
  expandable = false,
  balance = false,
  onRowClick,
  checkbox=false,
  group=false,
  eye=true,
  classDialog=''
}) {
  if(!group){
    const rows = document.querySelectorAll("tr");
    rows.forEach((row) => row.remove());
  }
  // create table header
  const headerRow = document.createElement("tr");
  for (let i = 0; i < head.length; i++) {
    const th = document.createElement("th");
    th.innerHTML = head[i].value;
    if (i == 7) {
      th.setAttribute("width", "25%");
    }
    headerRow.appendChild(th);
  }

  table.appendChild(headerRow);

  // Create table rows
  for (let i = 0; i < rowTable.length; i++) {
    let row = document.createElement("tr");
    expandable &&
      row.addEventListener("click", () => {
        onRowClick(row);
      });

    for (let j = 0; j < head.length; j++) {
      let cell = document.createElement("td");
      if (j == 0) {
        if (expandable) {
          const span = document.createElement("span");
          span.innerText = "chevron_right";
          span.setAttribute(
            "class",
            "material-icons row-icon arrow mdc-theme--primary"
          );
          cell.appendChild(span);
        }
      } else if (j == head.length - 1 && !balance) {
        const div = document.createElement("div");
        if(checkbox){
          const check=document.createElement("div");
          const checkbox=`<div class="mdc-touch-target-wrapper">
          <div class="mdc-checkbox mdc-checkbox--touch">
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-1"/>
            <div class="mdc-checkbox__background">
              <svg class="mdc-checkbox__checkmark"
                   viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
              </svg>
              <div class="mdc-checkbox__mixedmark"></div>
            </div>
            <div class="mdc-checkbox__ripple"></div>
          </div>
        </div>`
        check.innerHTML=checkbox
        div.appendChild(check)
        }
        else{
          const span = document.createElement("span");
          if(group){
            span.innerText = "visibility";
          }
          else{
            span.innerText = "edit";
          }
          span.setAttribute("class", "material-icons row-icon cursor-poiner");
          div.appendChild(span);
          div.addEventListener("click", () => {
          const dialog = new mdc.dialog.MDCDialog(document.querySelector(classDialog || ".mdc-dialog"));
            dialog.open();
          });
        }
        cell.appendChild(div);
      } else {
        cell.innerHTML = rowTable[i][head[j].key];
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
