import { createTable } from "./scripts/table.js";

export const reconciliationsTableHeader = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "date",
    value: "Date/ Time",
  },
  {
    key: "terminalNo",
    value: "Terminal <br> Number",
  },
  {
    key: "transCount",
    value: "Transaction <br> Count",
  },
  {
    key: "transVol",
    value: "Transaction <br> Volume",
  },
  {
    key: "balance",
    value: "In Balance",
  },
];
export const tableHeader = [
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
export const tableRows = [
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
export const reconciliationRows = [
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    terminalNo: "01",
    transCount: "114",
    transVol: "58641",
    balance: "True",
  },
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    terminalNo: "01",
    transCount: "114",
    transVol: "58641",
    balance: "True",
  },
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    terminalNo: "01",
    transCount: "114",
    transVol: "58641",
    balance: "True",
  },
];

export const terminalsData = [
  {
    number: "01",
    active: "Offline",
    status: "(last activity 23/11/2018 13:04:04)",
    lastActivity: "23 Nov 2018, 1:04 p.m.",
    terminal: 2410,
    lastCard: "2 Jun 2017, 11:24 a.m.",
    lastVol: "2 Jun 2017, 11:24 a.m.",
    terminalType: "Sapphire",
  },
  {
    number: "02",
    active: "Online",
    status: "(last activity 23/11/2018 13:04:04)",
    lastActivity: "23 Nov 2018, 1:04 p.m.",
    terminal: 2410,
    lastCard: "2 Jun 2017, 11:24 a.m.",
    lastVol: "2 Jun 2017, 11:24 a.m.",
    terminalType: "Sapphire",
  },
  {
    number: "03",
    active: "Unknown",
    status: "(last activity 23/11/2018 13:04:04)",
    lastActivity: "23 Nov 2018, 1:04 p.m.",
    terminal: 2410,
    lastCard: "2 Jun 2017, 11:24 a.m.",
    lastVol: "2 Jun 2017, 11:24 a.m.",
    terminalType: "Sapphire",
  },
];
export const addReadingFields = {
  inputs: [
    {
      title: "Date",
    },
    {
      title: "Time",
    },
    {
      title: "Volume",
    },
  ],
  select: [
    {
      title: "Site",
      value: "Office Sapphire",
    },
    {
      title: "Tank",
      value: "Tank 01 (Diesel)",
    },
  ],
};
export const cardsTab = [
  {
    title: "Card Details",
    tabIndex: "0",
  },
  {
    title: "Limits",
    tabIndex: "1",
  },
  {
    title: "History",
    tabIndex: "2",
  },
  {
    title: "Transactions",
    tabIndex: "3",
  },
];
export const cardDetail = [
  {
    title: "Card Holder Name",
    placeholder: "Input text",
  },
  {
    title: "PAN (Read only)",
  },
  {
    title: "Card type",
    type: "select",
    val: "Ordinary",
  },
  {
    title: "ISO",
    type: "select",
    val: "Select ISO",
  },
  {
    title: "Account",
    type: "select",
    val: "Select Account",
  },
  {
    title: "Card Number",
    placeholder: "Input text",
  },
];
export const vehicleRadio = [
  {
    label: "Don’t capture vehicle",
  },
  {
    label: "Link vehicle automatically",
  },
  {
    label: "Prompt vehicle number",
  },
  {
    label: "Prompt vehicle card",
  },
];

export const driverRadio = [
  {
    label: "Don’t capture driver ",
  },
  {
    label: "Link driver automatically",
  },
  {
    label: "Prompt driver number",
  },
  {
    label: "Prompt driver card",
  },
];
export const cardHolderInfo = [
  {
    label: "Address Line 1",
  },
  {
    label: "Address Line 2",
  },
  {
    label: "Additional Info 1",
  },
  {
    label: "City",
  },
  {
    label: "",
    display: true,
  },
  {
    label: "Additional Info 2",
  },
  {
    label: "Zip or Post Code",
  },
  {
    label: "Phone",
  },
  {
    label: "Additional Info 3",
  },
  {
    label: "Country",
  },
  {
    label: "Email",
  },
  {
    label: "Additional Info 4",
  },
];
export const cardLimitsButton = [
  {
    label: "Block Product",
  },
  {
    label: "Allow Product",
  },
  {
    label: "Allow Per 100 Mileage Units",
  },
  {
    label: "Limit Within Days",
  },
];
export const tableLimitsHeader = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "product",
    value: "Product",
  },
  {
    key: "limits",
    value: "Limits",
  },
  {
    key: "icon",
    value: "",
  },
];
export const tableLimitsRows = [
  {
    icon: "arrow",
    product: "Diesel",
    limits: "Allowed with limit by Mileage",
  },
  {
    icon: "arrow",
    product: "AdBlue",
    limits: "Blocked",
  },
  {
    key: "icon",
    value: "",
  },
];
export const cardHistoryTableHeader = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "username",
    value: "Username",
  },
  {
    key: "action",
    value: "Action",
  },
  {
    key: "date",
    value: "Date/ Time",
  },
];
export const cardHistoryRows = [
  {
    icon: "",
    username: "joe@core",
    action: "Enabled card",
    date: "2023 Sep 13 - 11:45",
  },
];
export const transHead = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "date",
    value: "Date/ Time",
  },
  {
    key: "siteNum",
    value: "Site Number",
  },
  {
    key: "siteName",
    value: "Site Name",
  },
  {
    key: "customer",
    value: "Customer",
  },
  {
    key: "holderName",
    value: "Card Holder Name",
  },
  {
    key: "product",
    value: "Product",
  },
  {
    key: "volume",
    value: "Volume",
  },
  {
    key: "iconCheck",
    value: `<div class="mdc-touch-target-wrapper">
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
  </div>`,
  },
];
export const transRow = [
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    siteNum: "10",
    siteName: "Diesel",
    customer: "6456546",
    holderName: "Webpage",
    product: "58641",
    volume: 12.2,
    iconCheck: `<div class="mdc-touch-target-wrapper">
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
  </div>`,
  },
  {
    icon: "arrow",
    date: "19 Mar 2023 14:24",
    siteNum: "10",
    siteName: "Diesel",
    customer: "6456546",
    holderName: "Webpage",
    product: "58641",
    volume: 12.2,
    iconCheck: `<div class="mdc-touch-target-wrapper">
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
  </div>`,
  },
];

export const transEditFields = [
  {
    label: "Date Time",
    placeholder: "2023 Sep 9 21:03",
  },
  {
    label: "Site Name",
    placeholder: "2023 Sep 9 21:03",
  },
  {
    label: "Customer",
    placeholder: "Axac Inc",
  },
  {
    label: "Card Holder Name",
    placeholder: "Joe B",
  },
  {
    label: "Vehicle Number",
    placeholder: 1230,
  },
  {
    label: "Driver Number",
  },
  {
    label: "Product",
    placeholder: "Diesel",
  },
  {
    label: "Site Number",
    placeholder: 10,
  },
  {
    label: "",
    display: true,
  },
  {
    label: "Card Number",
    placeholder: "12345",
  },
  {
    label: "Vehicle Reg",
    placeholder: "AB12455",
  },
  {
    label: "Driver Name",
  },
  {
    label: "Volume",
    placeholder: "12.2",
  },
  {
    label: "Pump Number",
    placeholder: "2",
  },
  {
    label: "",
    display: true,
  },
  {
    label: "PAN",
    placeholder: "784560012345",
  },
  {
    label: "Odometer",
    placeholder: "1234245",
  },
  {
    label: "Driver Group",
  },
  {
    label: "Duration (seconds)",
    placeholder: 20,
  },
  {
    label: "Tank Number",
    placeholder: 1,
  },
  {
    label: "",
    display: true,
  },
  {
    label: "Card Group",
  },
  {
    label: "Vehicle Group",
  },
  {
    label: "",
    display: true,
  },
  {
    label: "",
    display: true,
  },
  {
    label: "Tank Dip",
    placeholder: 20121,
  },
];
export const transCardBtn = [
  {
    label: "View All Details",
    icon: "more_horiz",
  },
  {
    label: "View Site",
    icon: "location_on",
  },
  {
    label: "View Customer",
    icon: " account_box",
  },
  {
    label: "View Card",
    icon: "style",
  },
  {
    label: "View Vehicle",
    icon: "local_shipping ",
  },
  {
    label: "View Driver",
    icon: "Driver.svg",
  },
];

export const filtersCard = [
  {
    label: "Status: OK",
  },
  {
    label: "Card Details",
  },
  {
    label: "Customer",
  },
  {
    label: "Group",
  },
  {
    label: "Expiry",
  },
  {
    label: "Activity",
  },
];

export const siteCardHead = [
  {
    key: "icon",
    value: "",
  },
  {
    key: "Customer",
    value: "Customer",
  },
  {
    key: "CardHolderName",
    value: "Card Holder Name",
  },
  {
    key: "CardNumber",
    value: "Card Number",
  },
  {
    key: "ExpiryDate",
    value: "Expiry Date",
  },
  {
    key: "Groups",
    value: "Groups",
  },
  {
    key: "LinkedVehicle",
    value: "Linked Vehicle",
  },
  {
    key: "LinkedDriver",
    value: "Linked Driver",
  },
  {
    key: "iconCheck",
    value: `<div class="mdc-touch-target-wrapper">
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
  </div>`,
  },
];

export const cardRow = [
  {
    icon: "arrow",
    Customer: "Ajax Inc.",
    CardHolderName: "Joe B",
    CardNumber: "1234515",
    ExpiryDate: "2024 Sep 1",
    Groups: "Shell Cards",
    LinkedVehicle: "-",
    LinkedDriver: "Joe B",
    iconCheck: ``,
  },
  {
    icon: "arrow",
    Customer: "Ajax Inc.",
    CardHolderName: "Joe B",
    CardNumber: "1234515",
    ExpiryDate: "2024 Sep 1",
    Groups: "Shell Cards",
    LinkedVehicle: "-",
    LinkedDriver: "Joe B",
    iconCheck: ``,
  },
  {
    icon: "arrow",
    Customer: "Ajax Inc.",
    CardHolderName: "Joe B",
    CardNumber: "1234515",
    ExpiryDate: "2024 Sep 1",
    Groups: "Shell Cards",
    LinkedVehicle: "-",
    LinkedDriver: "Joe B",
    iconCheck: ``,
  },
  {
    icon: "arrow",
    Customer: "Ajax Inc.",
    CardHolderName: "Joe B",
    CardNumber: "1234515",
    ExpiryDate: "2024 Sep 1",
    Groups: "Shell Cards",
    LinkedVehicle: "-",
    LinkedDriver: "Joe B",
    iconCheck: ``,
  },
  {
    icon: "arrow",
    Customer: "Ajax Inc.",
    CardHolderName: "Joe B",
    CardNumber: "1234515",
    ExpiryDate: "2024 Sep 1",
    Groups: "Shell Cards",
    LinkedVehicle: "-",
    LinkedDriver: "Joe B",
    iconCheck: ``,
  },
];
export const cardEdit = [
  {
    label: "PIN",
    type: "password",
    placeholder: "****",
  },
  {
    label: "Customer",
    value: "Axac Inc",
  },
  {
    label: "Groups",
    value: "Shell Cards",
  },
  {
    label: "Last Transaction",
    placeholder: "2023 Aug 12 21:03",
  },
];
export const cardsBtns = [
  {
    label: "Details",
  },
  {
    label: "Limits",
  },
  {
    label: "History",
  },
  {
    label: "Transactions",
  },
];
export const vehicleBtn = [
  {
    label: "Don’t capture vehicle",
  },
  {
    label: "Link vehicle automatically",
  },
  {
    label: "Prompt vehicle number",
  },
  {
    label: "Prompt vehicle card",
  },
];

export const driverBtn = [
  {
    label: "Don’t capture driver",
  },
  {
    label: "Link driver automatically",
  },
  {
    label: "Prompt driver number",
  },
  {
    label: "Prompt driver card",
  },
];

export const batchBasket = {
  steps: [
    {
      step: 1,
      open: true,
      label: "Step 1 - Select items",
      info: "Select items to change. You can also remove items from your batch basket here, prior to an update.",
      content: `<div id="step" class="block"><div class="content-step step1 "  >
      <div class="select-table">
        10 out of 100 Selected <a>Select all 100 Cards</a>
      </div>
      <table
        class="cards-table transactions-table cards-batch"
        id="cards-table"
      ></table>
      <div class="pagination">
        <span>Rows per page:</span>
        <div class="per-page">
          <span>10</span>
          <span class="material-icons">arrow_drop_down</span>
        </div>
        <span>1-10 of 100</span>
        <div class="buttons">
          <span class="material-icons">navigate_before</span>
          <span class="material-icons">navigate_next</span>
        </div>
      </div>
      <div class="step-buttons">
          <button class="mdc-button mdc-button--raised export-btn btn-continue" tabIndex="0"'>
            <span class="mdc-button__label">Continue</span>
          </button>
          <button class="mdc-button mdc-button--raised export-btn">
             <span class="mdc-button__label">Remove from Basket</span>
         </button>
      </div>
      </div></div>`,
    },
    {
      step: 2,
      open: false,
      label: "Step 2 - Remove Data",
      info: "Choose which groups or limits you want to remove.",
      content: `<div id="step"><div class="step2-remodve-data step2" >
          <div class="remove-btn">
            <button class="mdc-button mdc-button--raised export-btn ">
              <span class="mdc-button__label">Previous Step</span>
            </button>
            <div class="check-step">
              <div>
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
                <span class="check-span">Remove Product Limits</span>
              </div>
              <div>
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
                <span class="check-span">Remove selected Groups</span>
              </div>
              <button class="mdc-button mdc-button--raised export-btn btn-continue" tabIndex="1" >
                <span class="mdc-button__label">Continue</span>
              </button>
            </div>
          </div>
          <div class="step2-select">
            <div class="text-box add-reading-text-boxs">
              <span class="title mdc-theme--surface"> Groups</span>
              <select>
                <option>Dep</option>
                <option>Depot1</option>
                <option>Depot2</option>
              </select>
             <div class="shell-card">
             <div>
             <span>Shell Card</span>
             <span class="material-icons">cancel</span>
           </div>
           <div>
             <span>Spare</span>
             <span class="material-icons">cancel</span>
           </div>
             </div>
            </div>
          </div>
        </div></div>`,
    },
    {
      step: 3,
      open: false,
      label: "Step 3 - Set Data",
      info: "Choose which fields you want to update and with what changes.",
      content: `<div id="step"><div class="step3-setdata step3">
          <button class="mdc-button mdc-button--raised export-btn prev-btn">
            <span class="mdc-button__label">Previous Step</span>
          </button>
          <div class="step3-selects">
            <div class="text-box add-reading-text-boxs">
              <select>
                <option>Click to browse all fields for item type ‘Card’</option>
              </select>
            </div>
            <div class="text-box add-reading-text-boxs">
              <select>
                <option>Choose the new contents for this field</option>
              </select>
            </div>
          </div>
          <button class="mdc-button mdc-button--outlined add-more">
            <span class="mdc-button__ripple"></span>
            <span class="material-icons">add</span>
            <span class="mdc-button__label">Add more batch changes</span>
          </button>
          <button class="mdc-button mdc-button--raised export-btn btn-continue" tabIndex="2">
            <span class="mdc-button__label">Continue</span>
          </button>
        </div></div>`,
    },
    {
      step: 4,
      open: false,
      label: "Step 4 - Preview",
      info: "Preview your changes and check the changes work as you expect.Click the eye / view icon for details",
      content: `<div id="step"><div class="content-step step-4 step4" >
      <button class="mdc-button mdc-button--raised export-btn prev-btn">
            <span class="mdc-button__label">Previous Step</span>
          </button>
          <table
          class="cards-table transactions-table cards-batch"
          id="cards-step4"
        >
        </table>
      <div class="pagination">
        <span>Rows per page:</span>
        <div class="per-page">
          <span>10</span>
          <span class="material-icons">arrow_drop_down</span>
        </div>
        <span>1-10 of 100</span>
        <div class="buttons">
          <span class="material-icons">navigate_before</span>
          <span class="material-icons">navigate_next</span>
        </div>
      </div>
      <div class="step-buttons">
          <button class="mdc-button mdc-button--raised export-btn btn-continue" tabIndex="3">
            <span class="mdc-button__label">Continue</span>
          </button>
        
      </div>
      </div></div>`,
    },
    {
      step: 5,
      open: false,
      label: "Step 5 - Confirm",
      info: "Confirm your changes to your items. This step cannot be undone or rolled back.",
      content: `<div id="step"><div class="step5-confirm step5">
          <button class="mdc-button mdc-button--raised export-btn prev-btn">
            <span class="mdc-button__label">Previous Step</span>
          </button>
          <div class="step5-check">
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
            <span class="confirm-txt">
              I confirm that I have previewed my requested changes and
              understand that the changes I am about to do cannot be rolled back
            </span>
          </div>
          <button class="mdc-button mdc-button--raised export-btn ">
            <span class="mdc-button__label">Update items</span>
          </button>
        </div></div>`,
    },
  ],
};

export const previewDialog = {
  before: [
    {
      label: "Groups",
      value: "Shell Card ",
    },
    {
      label: "Prompt Odometer",
      value: "True",
    },
  ],
  after: [
    {
      label: "Groups",
      value: "",
    },
    {
      label: "Prompt Odometer",
      value: "False",
    },
  ],
};

export const deliveryDialogFields = [
  {
    title: "Tank",
    value: "Tank 01 (Diesel)",
  },
  {
    title: "Date",
  },
  {
    title: "Time",
  },
  {
    title: "Volume",
  },
  {
    title: "Purchase Orderm Number",
  },
  {
    type: "file",
  },
];

export const limitDayFields = [
  {
    title: "Product",
    value: "Diesel",
    select: true,
  },
  {
    title: "Max Litres",
    value: 2000,
  },
  {
    title: "Within the last number of days",
    value: 7,
  },
  {
    title: "Max amount (option)",
    value: 3000,
  },
  {
    title: "Max transactions (optional)",
    value: 10,
  }
];
