// Intialization
let FavoriteButton = document.querySelector("#Favorite");
let ExcuseOutput = document.querySelector("#ExcuseOutput");
let FavoriteArray = {}

FavoriteButton.addEventListener("click", () => {
    if (ExcuseOutput.textContent) {
        FavoriteArray.push(ExcuseOutput.textContent)
        FavoriteButton.classList.replace("bi-bookmark", "bi-bookmark-check")
        setTimeout(() => {
            FavoriteButton.classList.replace("bi-bookmark-check", "bi-bookmark")
        }, 100);
    }
    else {
        FavoriteButton.classList.replace("bi-bookmark", "bi-bookmark-x")
        setTimeout(() => {
            FavoriteButton.classList.replace("bi-bookmark-x", "bi-bookmark")
        }, 100);
    }
});