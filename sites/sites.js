import {
  cardEdit,
  cardRow,
  cardsBtns,
  driverBtn,
  siteCardHead,
  vehicleBtn,
} from "../constants.js";
import { createTable } from "../scripts/table.js";
const table = document.getElementById("cards-table");

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
  td.innerHTML = `
    <div class="appended-card-edit">
    <div class="bg-div"></div>
      <div class="pan-customer-fields">
        <div class="text-box add-reading-text-boxs">
          <span class="title mdc-theme--surface">PAN</span>
          <input placeholder="784560012345" />
        </div>
        <div class="date-with-pin">
          <div class="date-field">
            <div class="text-box add-reading-text-boxs">
              <span class="title mdc-theme--surface">Expiry Date</span>
              <input placeholder="2024 Sep 31" />
            </div>
            <div class="enabled-div">
              <div class="enable">
                <span class="material-icons">check_circle</span>
                <span>
                  OK <br>(Enabled)</br>
                </span>
              </div>
              <div class="text-box add-reading-text-boxs with-select">
                <select>
                  <option>Click to change</option>
                </select>
              </div>
            </div>
          </div>
          <div class="input-select">
            ${cardEdit
              .map(({ label, placeholder, type, value }) => {
                return `<div class="text-box add-reading-text-boxs ${type ? 'text-box-visible':''}">
                  <span class="title mdc-theme--surface">${label}</span>
                  ${
                    placeholder
                      ? `<input placeholder="${placeholder || ""}" type="${
                          type || "text"
                        }"/>`
                      : ` <select>
                      <option>${value}</option>
                    </select>`
                  }
                  ${type ? `<div class="visibility-pass"><span class="material-icons">
                      visibility
                  </span></div>` :''}
                </div>`;
              })
              .join("")}
          </div>
        </div>
      </div>
      <div class="card-holder">
        <div class="text-box add-reading-text-boxs">
          <span class="title mdc-theme--surface">Card Holder Name</span>
          <input placeholder="Joe B" />
        </div>
        <div class="holder-card-btn">
          <div class="links-card">
            <span class="material-icons">style</span>
            <span>
              Links to card <br>pages</br>
            </span>
          </div>
          ${cardsBtns
            .map(({ label }) => {
              return `  <button class="mdc-button mdc-button--raised export-btn">
              <span class="material-icons">
                style
             </span> <span class="mdc-button__label">Card ${label}</span>
          </button>`;
            })
            .join("")}
        </div>
      </div>
      <div class="vehicle-fields">
        <button class="mdc-button mdc-button--raised export-btn">
          <span class="material-icons">local_shipping</span>
          <span class="mdc-button__label">View Vehicle</span>
        </button>
        <div class="radio">
          ${vehicleBtn
            .map(({ label }) => {
              return `<div class="radio-labels">
       <div class="mdc-radio">
             <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked="">
             <div class="mdc-radio__background">
             <div class="mdc-radio__outer-circle"></div>
             <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
      </div> <span>${label}</span></div>`;
            })
            .join("")}
        </div>

        <div class="text-box add-reading-text-boxs">
          <span class="title mdc-theme--surface">Validation</span>
          <select>
            <option>No Validation</option>
          </select>
        </div>
        <div class="propmt">
          <div class="mdc-touch-target-wrapper">
            <div class="mdc-checkbox mdc-checkbox--touch">
              <input
                type="checkbox"
                class="mdc-checkbox__native-control"
                id="checkbox-1"
              />
              <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                  <path
                    class="mdc-checkbox__checkmark-path"
                    fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"
                  />
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
              </div>
              <div class="mdc-checkbox__ripple"></div>
            </div>
          </div>
          <span>Prompt odomter</span>
        </div>
        
      </div>
      <div class="vehicle-fields">
      <button class="mdc-button mdc-button--raised export-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" fill="white" clip-rule="evenodd" d="M11.5738 2.01485C9.7907 2.22932 8.36857 3.59181 8.03349 5.4066C7.96032 5.80282 7.96036 6.54097 8.03355 6.92913C8.20657 7.84655 8.64106 8.64587 9.30162 9.26194C10.3047 10.1974 11.6642 10.5525 12.9703 10.22C14.495 9.83189 15.6793 8.53161 15.9678 6.92913C16.0952 6.22127 16.0354 5.45652 15.799 4.77115C15.3101 3.35336 14.116 2.30755 12.7001 2.05701C12.4028 2.00441 11.8368 1.9832 11.5738 2.01485ZM11.0781 10.9298C9.78293 10.9945 8.48929 11.2858 7.34979 11.7695C7.12084 11.8667 7.08741 11.889 6.9105 12.0622C6.65596 12.3115 6.5715 12.4298 5.81152 13.6008C5.45421 14.1514 4.9793 14.8815 4.75619 15.2232C4.24767 16.0019 3.99722 16.3907 3.74521 16.7926C3.63619 16.9664 3.49127 17.1969 3.42317 17.3048C3.0167 17.9488 2.90309 18.5275 3.08217 19.0418C3.18647 19.3414 3.93329 20.6033 4.19241 20.9178L4.25976 20.9996H6.49822L6.51331 20.7768C6.59921 19.5085 7.45412 18.1616 8.67893 17.3647C9.46801 16.8513 10.3675 16.5479 11.3823 16.4528L11.54 16.4381L12.1032 15.6631C12.4129 15.2368 13.1887 14.1714 13.827 13.2954C14.4654 12.4195 15.0465 11.6219 15.1183 11.5229C15.2212 11.3812 15.2415 11.3407 15.2136 11.3322L15.1392 11.3092C14.9126 11.2386 13.993 11.076 13.4886 11.0173C12.8065 10.9379 11.7123 10.8982 11.0781 10.9298ZM15.9223 11.6647C15.8417 11.775 14.551 13.5468 13.243 15.3427L12.4494 16.4324L12.7043 16.4594C13.914 16.5875 14.9303 16.9863 15.7639 17.6599C16.7661 18.4696 17.4481 19.6789 17.5183 20.7707L17.5324 20.9887L19.602 21L19.6685 20.9398C19.8795 20.749 20.5327 19.7659 20.8396 19.1773C20.9408 18.9833 20.998 18.7272 20.9999 18.4601C21.0026 18.0764 20.9306 17.8993 20.4549 17.1196C19.9898 16.3572 19.7326 15.9507 18.8824 14.6346C18.4216 13.9213 17.9662 13.2052 17.8703 13.0434C17.4986 12.4159 17.1792 12.0661 16.7497 11.8161C16.6316 11.7473 16.106 11.5611 16.03 11.5611C16.0123 11.5611 15.9639 11.6077 15.9223 11.6647ZM11.5625 17.6674C9.98647 17.7984 8.63622 18.5993 8.05768 19.7462C7.98512 19.8901 7.90057 20.093 7.8698 20.1972C7.81175 20.3937 7.74403 20.7833 7.74403 20.9206V20.9996H9.5C9.5 19.895 10.8954 19 12 19C13.1046 19 14.5 19.895 14.5 20.9996H16.2634L16.2482 20.8306C16.1795 20.0648 15.8825 19.456 15.3035 18.894C14.9718 18.5721 14.6711 18.3623 14.2387 18.1509C13.4491 17.765 12.4849 17.5908 11.5625 17.6674Z" fill="black"/>
</svg>

        <span class="mdc-button__label">View Driver</span>
      </button>
      <div class="radio">
        ${driverBtn
          .map(({ label }) => {
            return `<div class="radio-labels">
     <div class="mdc-radio">
           <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked="">
           <div class="mdc-radio__background">
           <div class="mdc-radio__outer-circle"></div>
           <div class="mdc-radio__inner-circle"></div>
    </div>
    <div class="mdc-radio__ripple"></div>
    </div> <span>${label}</span></div>`;
          })
          .join("")}
      </div>

      <div class="text-box add-reading-text-boxs">
        <span class="title mdc-theme--surface">Linked Driver</span>
        <select>
          <option>1124 - Joe B</option>
        </select>
      </div>
      <div class="propmt">
        <div class="mdc-touch-target-wrapper">
          <div class="mdc-checkbox mdc-checkbox--touch">
            <input
              type="checkbox"
              class="mdc-checkbox__native-control"
              id="checkbox-1"
            />
            <div class="mdc-checkbox__background">
              <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path
                  class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"
                />
              </svg>
              <div class="mdc-checkbox__mixedmark"></div>
            </div>
            <div class="mdc-checkbox__ripple"></div>
          </div>
        </div>
        <span>Prompt odomter</span>
      </div>
    </div>
  `;

  tr.appendChild(td);
  row.after(tr);
}
createTable({
  head: siteCardHead,
  rowTable: cardRow,
  table: table,
  expandable: true,
  balance: false,
  checkbox: true,
  onRowClick: onRowClick,
});
