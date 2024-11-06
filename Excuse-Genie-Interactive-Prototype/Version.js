// Initialization
const CurrentVersion = "Alpha v0.0.1a";
const Display = document.createElement("p");
const Holder = document.createElement("span");

// Set VersionHolder to display with proper styling
document.body.appendChild(Holder);
Holder.style.display = "flex";
Holder.style.justifyContent = "right";
Holder.style.position = "relative";
Holder.style.bottom = "10px";



Display.textContent = CurrentVersion;
Holder.appendChild(VersionDisplay);
Display.style.position = "absolute";
Display.style.bottom = "50vh";
Display.style.right = "50vw";