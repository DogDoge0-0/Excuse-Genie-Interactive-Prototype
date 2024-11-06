// Initialization
const CurrentVersion = "Alpha v0.0.1a";
const VersionDisplay = document.createElement("p");

// Set Version to display with proper styling
VersionDisplay.textContent = CurrentVersion;
document.body.appendChild(VersionDisplay);
VersionDisplay.style.position = "absolute";
VersionDisplay.style.bottom = "50%";
VersionDisplay.style.right = "50%";