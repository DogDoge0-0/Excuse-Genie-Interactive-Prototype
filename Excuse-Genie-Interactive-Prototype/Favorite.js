// Initialization
let FavoriteButton = document.querySelector("#Favorite");
let FavoriteArray = JSON.parse(localStorage.getItem("FavoriteArray")) || [];
let DisableButtonFav = false;

// Callback function for mutation events
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList" || mutation.type === "characterData") {
            const excuseText = ExcuseOutput.textContent

            if (FavoriteArray.includes(excuseText)) {
                FavoriteButton.firstElementChild.classList.replace("bi-bookmark", "bi-bookmark-check");
                FavoriteButton.title = "This excuse is saved in your favorites";
                console.log("yo");
            } else {
                FavoriteButton.firstElementChild.classList.replace("bi-bookmark-check", "bi-bookmark");
                FavoriteButton.title = "Save this excuse to favorites";
                console.log("nah");
            }
        }
    }
};

// Create and start observing
const observer = new MutationObserver(callback);
observer.observe(ExcuseOutput, { childList: true, subtree: true, characterData: true });

// Save new favorite
FavoriteButton.addEventListener("click", () => {
    if (DisableButtonFav) return;

    DisableButtonFav = true;
    FavoriteButton.classList.add("NoClick");


    const excuseText = ExcuseOutput.textContent;
    if (excuseText) {
        if (!FavoriteArray.includes(excuseText)) {
            FavoriteArray.push(excuseText);
            localStorage.setItem("FavoriteArray", JSON.stringify(FavoriteArray));
            FavoriteButton.firstElementChild.classList.replace("bi-bookmark", "bi-bookmark-check");
            ThrowAlert("Favorites list updated")
        } else {
            FavoriteButton.firstElementChild.classList.replace("bi-bookmark", "bi-bookmark-x");
            ThrowAlert("This excuse is already in your favorites");
            setTimeout(() => {
                FavoriteButton.firstElementChild.classList.replace("bi-bookmark-x", "bi-bookmark");
            }, 3000);
        }
    } else {
        FavoriteButton.firstElementChild.classList.replace("bi-bookmark", "bi-bookmark-x");
        ThrowAlert("Nothing to favorite");
        setTimeout(() => {
            FavoriteButton.firstElementChild.classList.replace("bi-bookmark-x", "bi-bookmark");
        }, 3000);
    }

    setTimeout(() => {
        DisableButtonFav = false;
        FavoriteButton.classList.remove("NoClick");
    }, 3000);
});