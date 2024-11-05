// Intialization
Alert = document.querySelector(".Alert");
AlertText = document.querySelector("#AlertText");
Copy = document.querySelector("#Copy");
ExcuseButton = document.querySelector("#ExcuseButton");
ExcuseOutput = document.querySelector("#ExcuseOutput");

ExcuseArray = ["lol", "lol2", "lol3"];


// Confirm that the copy works, and throw error if it won't
Copy.addEventListener("click", () => {
    if (!navigator.clipboard) {
        Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
        ThrowAlert("Copying to clipboard isn't supported by your browser and has been disabled");
        Copy.classList.add("NoClick")
    } 
    else {
        if (AlertText.textContext == null) {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            ThrowAlert("No text to copy");
            Copy.classList.add("NoClick")
            setTimeout(() => {
                Copy.classList.remove("NoClick")
                Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
            }, 4000);
        }
        else {
            navigator.clipboard.writeText(AlertText.textContext).then(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                Copy.classList.add("NoClick")
                setTimeout(() => {
                    Copy.classList.remove("NoClick")
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 4000);
            }).catch(err => {
                ThrowAlert("Error: " + err);
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                Copy.classList.add("NoClick")
                setTimeout(() => {
                    Copy.classList.remove("NoClick")
                    Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 4000);
            });   
        }
    }
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
    ExcuseOutput.textContent = ExcuseArray[Math.floor(Math.random() * ExcuseArray.length)];
});