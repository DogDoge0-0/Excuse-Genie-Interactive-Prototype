Alert = document.querySelector(".Alert");
AlertText = document.querySelector("#AlertText");
Copy = document.querySelector("#Copy");
ExcuseOutput = document.querySelector("#ExcuseOutput");

Copy.addEventListener("click", () => {
    Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
    setTimeout(() => {
        Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
    }, 2000);
}