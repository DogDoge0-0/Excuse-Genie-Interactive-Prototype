// Intialization
let Alert = document.querySelector(".Alert");
let AlertText = document.querySelector("#AlertText");
let Copy = document.querySelector("#Copy");
let DisableButton = false;
let ExcuseButton = document.querySelector("#ExcuseButton");
let ExcuseOutput = document.querySelector("#ExcuseOutput");

let ExcuseArray = ["lol", "lol2", "lol3"];


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
        }, 4000);
    } 
    else {
        if (AlertText.textContent == null) {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            ThrowAlert("No text to copy.");
            Copy.classList.add("NoClick");
            setTimeout(() => {
                Copy.classList.remove("NoClick");
                Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
            }, 4000);
        }
        else {
            navigator.clipboard.writeText(AlertText.textContent).then(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                Copy.classList.add("NoClick")
                ThrowAlert("Copied excuse to clipboard!");
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 4000);
            }).catch(err => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                Copy.classList.add("NoClick");
                ThrowAlert("Error: " + err);
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 4000);
            });   
        }
    }
    setTimeout(() => {
        DisableButton = false;
    }, 4000);
});

// Throw Alert if something goes wrong, use animation to draw user's attention to alert
function ThrowAlert(message) {
    AlertText.textContent = message;
    Alert.classList.add("Alert-Animation");
    setTimeout(() => {
        Alert.classList.replace("Alert-Animation", "Alert-Animation-Reverse");
    }, 2000);
    setTimeout(() => {
        Alert.classList.remove("Alert-Animation-Reverse");
        AlertText.textContent = null;
    }, 4000);
}

// Pick an excuse at random
ExcuseButton.addEventListener("click", () => {
    ExcuseOutput.textContent = null;
    setTimeout(() => {
        ExcuseOutput.textContent = ExcuseArray[Math.floor(Math.random() * ExcuseArray.length)];
    }, 100);
});