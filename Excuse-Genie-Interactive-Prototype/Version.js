// Initialization
const CurrentVersion = "Alpha v0.0.2b";
const Display = document.createElement("p");
const Holder = document.createElement("span");

// Give Holder proper style and structure
document.body.appendChild(Holder);
Holder.classList.add("VersHolder");

// Display Version
Display.textContent = CurrentVersion;
Display.classList.add("Vers");
Holder.appendChild(Display);