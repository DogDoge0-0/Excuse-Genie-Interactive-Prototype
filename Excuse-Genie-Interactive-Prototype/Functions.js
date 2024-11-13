// Initialization
let Alert = document.querySelector(".Alert");
let AlertText = document.querySelector("#AlertText");
let Modal = document.querySelector("#Modal");
let ModalTitle = document.querySelector("#ModalTitle");
let ModalBody = document.querySelector("#ModalBody");
let CloseModal = document.querySelector("#CloseModal");
let Cover = document.querySelector("#Cover");

// Throw Alert if something goes wrong, use animation to draw user's attention to alert
function ThrowAlert(message) {
    AlertText.textContent = message;
    Alert.classList.add("Alert-Animation");
    setTimeout(() => {
        Alert.classList.replace("Alert-Animation", "Alert-Animation-Reverse");
    }, 1500);
    setTimeout(() => {
        Alert.classList.remove("Alert-Animation-Reverse");
        AlertText.textContent = null;
    }, 3000);
}

// Close Modal
function CloseModalFunc() {
    Modal.classList.replace("Modal-Animation", "Modal-Close-Animation");
    Cover.classList.add("DarkReverse");
    setTimeout(() => {
        Modal.classList.remove("Modal-Close-Animation");
        ModalBody.textContent = "";
        Cover.classList.remove("Dark", "DarkReverse");
    }, 500);
}
CloseModal.addEventListener("click", CloseModalFunc);