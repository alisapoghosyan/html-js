const addDelivery = document.querySelector("#add-delivery");
addDelivery.addEventListener("click", () => {
  const dialog = new mdc.dialog.MDCDialog(
    document.querySelector(".mdc-dialog-add-delivery")
  );
  dialog.open();
});

