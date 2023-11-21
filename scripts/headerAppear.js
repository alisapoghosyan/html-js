export const headerAppear = (show) => {
    let actions = document.getElementsByClassName("header-actions");
    show  ? actions[0].classList.remove("hide")
    : actions[0].classList.add("hide");
}