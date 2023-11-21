const changePassType = document.querySelector(".visible-pass");
const inputPass = document.querySelector(".input-pass");
const icon=document.querySelector(".visible")

changePassType.addEventListener("click", () => {
  if (inputPass.type === "text") {
    inputPass.type = "password";
    icon.innerText='visibility'
} else {
      icon.innerText='visibility_off'
    inputPass.type = "text";
  }
});
