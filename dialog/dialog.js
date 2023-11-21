import { addReadingFields, deliveryDialogFields } from "../constants.js";

const addReadingField = document.querySelector(".mdc-add-reading-fields");
const addDelivery = document.querySelector(".mdc-add-delivery-fields");
const editDeliver = document.querySelector(".mdc-edit-delivery-fields");
const dialog = new mdc.dialog.MDCDialog(document.querySelector(".mdc-dialog"));

dialog.listen("MDCDialog:opened", () => {});
dialog.listen("MDCDialog:cancel", function () {});

dialog.listen("MDCDialog:closing", function () {});

const readingDialog = addReadingFields.inputs.map(({ title }) => {
  return `<div class="text-box add-reading-text-boxs">
      <span class="title mdc-theme--surface">${title}</span>
      <input />
    </div>`;
});
const readingDialogSelect = addReadingFields.select.map(({ title, value }) => {
  return `<div class="text-box add-reading-text-boxs with-select">
      <span class="title mdc-theme--surface">${title}</span>
      <select>
        <option>${value}</option>
      </select>
    </div>`;
});
addReadingField.innerHTML = `<div class="select-fields">${readingDialogSelect.join(
  ""
)}</div><div class="input-fields">${readingDialog.join("")}</div>`;

const deliveryFields = deliveryDialogFields
  .map(({ title, value }, idx) => {
    if (idx === 5) {
      return `<div class='upload'>
                 <button class="mdc-button mdc-button--raised export-btn btn-continue" tabIndex="0"'>
                 <span class="material-icons">
                 upload
                 </span> <span class="mdc-button__label">Upload Document</span>
                </button>
                <input type='file'/>
              </div>`;
    }
    return `<div class="text-box add-reading-text-boxs with-select">
  <span class="title mdc-theme--surface">${title}</span>
  ${
    value
      ? `<select>
    <option>${value}</option>
  </select>`
      : " <input />"
  }
</div>`;
  })
  .join("");

addDelivery.innerHTML = deliveryFields;
editDeliver.innerHTML = deliveryFields;
