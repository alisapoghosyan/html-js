import { limitDayFields } from "../constants.js";

const limitBlock = document.querySelector("#limit-block-product");
limitBlock.addEventListener("click", () => {
  const dialog = new mdc.dialog.MDCDialog(
    document.querySelector(".mdc-dialog-limit-block")
  );
  dialog.open();
});
const allowProd = document.querySelector("#allow-prod");
allowProd.addEventListener("click", () => {
  const dialog = new mdc.dialog.MDCDialog(
    document.querySelector(".mdc-dialog-allow-product")
  );
  dialog.open();
});

const dayLimit = document.querySelector("#day-limit");
dayLimit.addEventListener("click", () => {
  const dialog = new mdc.dialog.MDCDialog(
    document.querySelector(".mdc-dialog-withhin-day")
  );
  dialog.open();
});

const dayFields = document.querySelector(".limit-dialog-fields");
const fields = limitDayFields
  .map(({ title, value, select }) => {
    if (select) {
      return ` <div class="text-box add-reading-text-boxs">
          <span class="title mdc-theme--surface">Vehicle</span>
          <select>
            <option>Diesel</option>
          </select>
        </div>
     `;
    }
    return ` <div class="text-box add-reading-text-boxs with-select">
      <span class="title mdc-theme--surface">${title}</span>$
      <input value=${value}>
      }
    </div>
 `;
  })
  .join("");

dayFields.innerHTML = fields;
