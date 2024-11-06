// Initialization
const CurrentVersion = "Alpha v0.0.1a";
const Display = document.createElement("p");
const Holder = document.createElement("span");

// Set VersionHolder to display with proper styling
document.body.appendChild(Holder);
Holder.style.display = "flex";
Holder.style.justifyContent = "flex-end";
Holder.style.position = "absolute";
Holder.style.bottom = "10px";
Holder.style.width = "90vw";


Display.textContent = CurrentVersion;
Holder.appendChild(Display);