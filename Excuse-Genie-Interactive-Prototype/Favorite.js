// Initialization
let FavoriteButton = document.querySelector("#Favorite");
let FavoriteArray = JSON.parse(localStorage.getItem("FavoriteArray")) || [];
let DisableButtonFav = false;
let DisableButtonCopyFav = false;
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
        // Create each item and its associated button
        ModalBody.innerHTML += `
            <span class="FavoriteText">${FavoriteArray[i]}</span>
            <button class="NoButton CopyButton" title="Copy to Clipboard">
                <i class="bi bi-clipboard2"></i>
            </button>
            <br>
        `;
    }

    // Set the modal title
    ModalTitle.textContent = i + " Favorites";
    Cover.classList.add("Dark");
    Modal.classList.add("Modal-Animation");

    // Select the buttons and the favorite text once (outside the loop)
    let CopyFavButtons = document.querySelectorAll('.CopyButton');
    let FavoriteText = document.querySelectorAll('.FavoriteText');

    // Add event listeners to each copy button
    CopyFavButtons.forEach((CopyFavButton, index) => {
        CopyFavButton.addEventListener("click", () => {
            if (DisableButtonCopyFav == false) {
                DisableButtonCopyFav = true;
            } else {
                return;
            }

            if (!navigator.clipboard) {
                CopyFavButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                ThrowAlert("Copying to clipboard isn't supported by your browser and has been disabled.");
                CopyFavButton.classList.add("NoClick");
                setTimeout(() => {
                    CopyFavButton.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 3000);
            } else {
                // Check if there's any text to copy
                if (FavoriteText[index].textContent.trim() === "") {
                    CopyFavButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                    ThrowAlert("No text to copy.");
                    CopyFavButton.classList.add("NoClick");
                    setTimeout(() => {
                        CopyFavButton.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                    }, 3000);
                } else {
                    navigator.clipboard.writeText(FavoriteText[index].textContent).then(() => {
                        CopyFavButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                        CopyFavButton.classList.add("NoClick");
                        ThrowAlert("Copied favorite to clipboard!");
                        setTimeout(() => {
                            CopyFavButton.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                        }, 3000);
                    }).catch(err => {
                        CopyFavButton.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                        CopyFavButton.classList.add("NoClick");
                        ThrowAlert("Error: " + err);
                        setTimeout(() => {
                            CopyFavButton.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                        }, 3000);
                    });
                }
            }

            // Reset the button after a short delay
            setTimeout(() => {
                DisableButtonCopyFav = false;
                CopyFavButton.classList.remove("NoClick");
            }, 3000);
        });
    });
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
                        location.reload();
                    }, 500);
                });
            }, 500);
        });
    }, 500);
});