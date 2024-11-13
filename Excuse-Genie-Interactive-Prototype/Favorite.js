// Initialization
let FavoriteButton = document.querySelector("#Favorite");
let FavoriteArray = JSON.parse(localStorage.getItem("FavoriteArray")) || [];
let DisableButtonFav = false;
let ClearLocalStorage = document.querySelector("#ClearLocalStorage");
let ShowAllFavorites = document.querySelector("#OpenFavModal");

// Callback function for mutation events
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList" || mutation.type === "characterData") {
            const excuseText = ExcuseOutput.textContent

            if (FavoriteArray.includes(excuseText)) {
                FavoriteButton.firstElementChild.classList.replace("bi-bookmark", "bi-bookmark-check");
                FavoriteButton.title = "This excuse is saved in your favorites";
            } else {
                FavoriteButton.firstElementChild.classList.replace("bi-bookmark-check", "bi-bookmark");
                FavoriteButton.title = "Save this excuse to favorites";
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
            ThrowAlert("Favorites list updated");
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

// Show all favorites
ShowAllFavorites.addEventListener("click", () => {
    let i;
    for (i = 0; i < FavoriteArray.length; i++) {
        console.log("hi");
        ModalBody.innerHTML += FavoriteArray[i] + '<button class="NoButton" id="Copy" title="Copy to Clipboard"><i class="bi bi-clipboard2"></i></button><br>';
    }
    ModalTitle.textContent = i + " Favorites";
    Cover.classList.add("Dark");
    Modal.classList.add("Modal-Animation");
});

// Clear All Favorites
ClearLocalStorage.addEventListener("click", () => {
    ClearLocalStorage.textContent = "Are you sure?";
    ClearLocalStorage.classList.add("NoClick");
    setTimeout(() => {
        ClearLocalStorage.classList.remove("NoClick");
        ClearLocalStorage.addEventListener("click", () => {
            ClearLocalStorage.classList.add("NoClick");
            ClearLocalStorage.textContent = "There is no going back";
            setTimeout(() => {
                ClearLocalStorage.classList.remove("NoClick");
                ClearLocalStorage.addEventListener("click", () => {
                    CloseModalFunc();
                    setTimeout(() => {
                        localStorage.clear();
                        FavoriteArray = {};
                        ClearLocalStorage.textContent = "Clear all Favorites";
                    }, 500);
                });
            }, 500);
        });
    }, 500);
});