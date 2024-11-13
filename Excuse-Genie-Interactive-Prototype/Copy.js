// Initialization
let CopyButton = document.querySelector("#Copy");
let DisableButton = false;

// Confirm that the copy works, and throw error if it won't
CopyButton.addEventListener("click", () => {
    if (DisableButton == false) {
        DisableButton = true;
    }
    else {
        return;
    }
    if (!navigator.clipboard) {
        CopyButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
        ThrowAlert("Copying to clipboard isn't supported by your browser and has been disabled.");
        CopyButton.classList.add("NoClick");
        setTimeout(() => {
        }, 3000);
    }
    else {
        if (ExcuseOutput.textContent == "") {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            ThrowAlert("No text to copy.");
            CopyButton.classList.add("NoClick");
            setTimeout(() => {
                CopyButton.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
            }, 3000);
        }
        else {
            navigator.clipboard.writeText(ExcuseOutput.textContent).then(() => {
                CopyButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                CopyButton.classList.add("NoClick")
                ThrowAlert("Copied excuse to clipboard!");
                setTimeout(() => {
                    CopyButton.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 3000);
            }).catch(err => {
                CopyButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                CopyButton.classList.add("NoClick");
                ThrowAlert("Error: " + err);
                setTimeout(() => {
                    CopyButton.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 3000);
            });
        }
    }
    setTimeout(() => {
        DisableButton = false;
        CopyButton.classList.remove("NoClick");
    }, 3000);
});