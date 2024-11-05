Alert = document.querySelector(".Alert");
AlertText = document.querySelector("#AlertText");
Copy = document.querySelector("#Copy");
ExcuseOutput = document.querySelector("#ExcuseOutput");

Copy.addEventListener("click", () => {
    if (!navigator.clipboard) {
        Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
    }
    else {
        if (AlertText.textContext == null) {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            setTimeout(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
            }, 2000);
        }
        else {
            navigator.clipboard.writeText(AlertText.textContext).then(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                setTimeout(() => {
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 2000);
            }).catch(err => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                setTimeout(() => {
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 2000);
        }   
        });
    }
});