// Initialization
const CurrentVersion = "Alpha v0.0.1a";
const VersionDisplay = document.createElement("p");
console.log(VersionDisplay)

// Set Version to display with proper styling
VersionDisplay.textContent = CurrentVersion;
VersionDisplay.style.position = "absolute";
VersionDisplay.style.bottom = "5vh";
VersionDisplay.style.right = "5vw";