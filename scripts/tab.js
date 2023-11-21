let tabFocus = 0;

// const tableArray = [2, 3, 6];
const tabs = document.querySelectorAll('[role="tab"]');
const containers = document.querySelectorAll(".container");
export const createTabs = (tabFuncianlaity) => {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      removeActiveTabClass();
      tabFocus = tab.tabIndex;
      tab.classList.add("tab-active");
      containers.forEach((item, index) => {
        if (item.classList.contains("block")) {
          item.classList.remove("block");
        }
        tabFocus == index && item.classList.add("block");
        const callback = tabFuncianlaity[tabFocus];
        if(callback) {
          callback();
        }
      });
    });
  });
}

function removeActiveTabClass() {
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
}

