import { terminalsData } from "../constants.js";
{
  /* <span class="material-icons mdc-theme--error">
warning
</span>
  <span class="material-icons check-icon">
  check_circle
</span>
 <span class="material-icons error-icon">
 error
</span> */
}

const statusIcon = {
  Offline: {class: "mdc-theme--error", text: "warning"},
  Online:{class:"check-icon",text:"check_circle"},
  Unknown:{class:"error-icon",text:"error"}
}

const terminalsContainer = document.getElementById("site-terminals");
const df = terminalsData.map(
  ({
    number,
    active,
    status,
    lastActivity,
    terminal,
    lastCard,
    lastVol,
    terminalType,
  }) => {
    return `<div class='terminals-items'>
        <div class='terminals-container'>
          <div class='flex'><span class='font-montserrat ticket-num'>Terminal Number:</span> <div class='font-montserrat ticket-num'>${number}</div></div>
          <div class='flex'><span>Status</span> <div class='status-activity'>
               <span class="material-icons ${statusIcon[active].class}">
          ${statusIcon[active].text}
          </span>
          ${active + "" + status}</div></div>
          <div class='flex'><span>Last Activity</span> <div>${lastActivity}</div></div>
          <div class='flex'><span>Terminal Identifier</span>  <div>${terminal}</div></div>
          <div class='flex'><span>Last Card Transaction</span>   <div>${lastCard}</div></div>
          <div class='flex'><span>Last Volume Card Transaction</span>  <div>${lastVol}</div></div>
          <div class='flex'><span>Terminal Type</span> <div>${terminalType}</div></div>
        </div>
        </div>`
  }
);
terminalsContainer.innerHTML = df.join("");
