const tableBody = document.querySelector("#tableBody");
const data = [
  { field: "Customer", value: "Ajax Inc", active: true },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: true },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: true },
  { field: "Customer", value: "Ajax Inc", active: false },
  { field: "Customer", value: "Ajax Inc", active: true },
  { field: "Customer", value: "Ajax Inc", active: false },
];

const tableData = data.map(({ field, value, active }) => {
  return `<tr class="template-card-rows">
          <td>${field}</td>
          <td>${value}</td>
          <td>
            ${
              active
                ? `<button
              class="mdc-switch mdc-switch--selected"
              type="button"
              role="switch"
              aria-checked="true"
            >
              <div class="mdc-switch__track"></div>
              <div class="mdc-switch__handle-track">
                <div class="mdc-switch__handle">
                  <div class="mdc-switch__shadow">
                    <div class="mdc-elevation-overlay"></div>
                  </div>
                  <div class="mdc-switch__ripple"></div>
                </div>
              </div>
            </button>`
                : `<button id="disabled-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch" aria-checked="false" disabled>
            <div class="mdc-switch__track"></div>
            <div class="mdc-switch__handle-track">
              <div class="mdc-switch__handle">
                <div class="mdc-switch__shadow">
                  <div class="mdc-elevation-overlay"></div>
                </div>
                <div class="mdc-switch__ripple"></div>
                
              </div>
            </div>
          </button>`
            }
          </td>
          <td>
            <input class="${!active && "template-disable"}"/>
          </td>
        </tr>`;
});

tableBody.innerHTML = tableData.join("");
