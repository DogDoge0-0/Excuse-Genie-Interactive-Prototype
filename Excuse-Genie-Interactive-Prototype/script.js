// Intialization
Alert = document.querySelector(".Alert");
AlertText = document.querySelector("#AlertText");
Copy = document.querySelector("#Copy");
ExcuseOutput = document.querySelector("#ExcuseOutput");


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
                ThrowAlert("Error: " + err);
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                setTimeout(() => {
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 2000);
            });   
        }
    }
});

//
ThrowAlert(string message) {
    AlertText.textContext = message;
    Alert.classList.add("Alert-Animation");
    setTimeout(() => {
        Alert.classList.replace("Alert-Animation", "Alert-Animation-Reverse");
    }, 2000);
    setTimeout(() => {
        Alert.classList.remove("Alert-Animation-Reverse");
    }, 2000);
    AlertText.textContext = null;
}