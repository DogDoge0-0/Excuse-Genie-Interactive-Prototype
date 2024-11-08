// Initialization
let Alert = document.querySelector(".Alert");
let AlertText = document.querySelector("#AlertText");
let Copy = document.querySelector("#Copy");
let DisableButton = false;

// Confirm that the copy works, and throw error if it won't
Copy.addEventListener("click", () => {
    if (DisableButton == false) {
        DisableButton = true;
    }
    else {
        return;
    }
    if (!navigator.clipboard) {
        Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
        ThrowAlert("Copying to clipboard isn't supported by your browser and has been disabled.");
        Copy.classList.add("NoClick");
        setTimeout(() => {
        }, 3000);
    }
    else {
        if (ExcuseOutput.textContent == "") {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            ThrowAlert("No text to copy.");
            Copy.classList.add("NoClick");
            setTimeout(() => {
                Copy.classList.remove("NoClick");
                Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
            }, 3000);
        }
        else {
            navigator.clipboard.writeText(ExcuseOutput.textContent).then(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                Copy.classList.add("NoClick")
                ThrowAlert("Copied excuse to clipboard!");
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 3000);
            }).catch(err => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                Copy.classList.add("NoClick");
                ThrowAlert("Error: " + err);
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 3000);
            });
        }
    }
    setTimeout(() => {
        DisableButton = false;
    }, 3000);
});

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