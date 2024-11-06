// Intialization
let Alert = document.querySelector(".Alert");
let AlertText = document.querySelector("#AlertText");
let Copy = document.querySelector("#Copy");
let DisableButton = false;
let ExcuseButton = document.querySelector("#ExcuseButton");
let ExcuseOutput = document.querySelector("#ExcuseOutput");

let ExcuseArray = [
  "I got stuck in traffic.",
  "My alarm didn't go off.",
  "I thought it was tomorrow.",
  "I had a family emergency.",
  "The weather was terrible.",
  "I misplaced my keys.",
  "My car wouldn't start.",
  "I was feeling unwell.",
  "My dog ate my homework.",
  "I lost track of time.",
  "I accidentally set the wrong date.",
  "I had a doctor’s appointment.",
  "My phone died, and I didn’t have a charger.",
  "I thought it was canceled.",
  "I got caught in a meeting that ran late.",
  "I couldn't find a babysitter.",
  "I was waiting for a delivery.",
  "I had to help a friend with a crisis.",
  "My internet was down.",
  "My GPS took me the wrong way.",
  "My car ran out of gas.",
  "My pet was sick.",
  "I overslept.",
  "My ride was delayed.",
  "I was caught up in work.",
  "I had a sudden plumbing issue.",
  "My computer crashed.",
  "There was an unexpected power outage.",
  "I spilled coffee on my clothes and had to change.",
  "I was stuck behind a slow driver.",
  "My flight was delayed.",
  "I couldn’t find a parking spot.",
  "I forgot my wallet and had to go back.",
  "I locked myself out of my house.",
  "I was on the phone with tech support.",
  "My kid missed the bus.",
  "I was helping a neighbor.",
  "I was at the mechanic.",
  "I ran into an old friend and lost track of time.",
  "I had to reschedule at the last minute.",
  "I got a flat tire.",
  "I didn't get the memo.",
  "I misread the instructions.",
  "I was waiting on a package that needed a signature.",
  "There was an accident on the freeway.",
  "My email went to spam.",
  "I needed to recharge.",
  "My printer ran out of ink.",
  "I had to wait for roadside assistance.",
  "My train was delayed.",
  "I forgot what day it was.",
  "My watch was set to the wrong time.",
  "I was helping my kids with homework.",
  "I got caught in a long line at the store.",
  "I had a headache.",
  "My bike chain broke.",
  "I was feeling overwhelmed.",
  "I had to take my pet to the vet.",
  "I had a sudden migraine.",
  "I thought the event was later.",
  "I was stuck in an elevator.",
  "I didn't hear my phone ring.",
  "My glasses broke.",
  "I was locked out of my car.",
  "I ran out of gas.",
  "I was late coming back from lunch.",
  "I accidentally double-booked myself.",
  "The traffic lights were out.",
  "I couldn’t find my phone.",
  "I was on hold with customer service.",
  "I left my bag at home.",
  "I was helping a stranded friend.",
  "I couldn’t find a pen.",
  "I thought it was online, not in person.",
  "I was reading and lost track of time.",
  "I had to comfort a friend going through a breakup.",
  "I had unexpected guests.",
  "My alarm was set to PM instead of AM.",
  "I was finishing a project.",
  "I tripped and needed a moment to recover.",
  "I was locked in a room.",
  "I was doing laundry and forgot the time.",
  "I thought it was next week.",
  "My computer needed an update.",
  "I spilled something on myself and had to change.",
  "I had to wait for a call.",
  "I was working on my car.",
  "My phone was on silent.",
  "I accidentally muted my alarm.",
  "I was getting my hair done.",
  "I was setting up my new phone.",
  "I had to calm my pet down.",
  "I didn’t hear my reminder.",
  "I was lost and had no signal.",
  "I had a sudden allergic reaction.",
  "I had to help my neighbor move something heavy.",
  "I had to make an emergency grocery run.",
  "I had a sudden burst of cleaning inspiration.",
  "I couldn’t get my contacts in.",
  "I was waiting for an important email.",
  "My GPS froze on me.",
  "I had to reset my password.",
  "I got distracted by a phone notification.",
  "I accidentally unplugged my alarm clock.",
  "I thought I set a reminder but didn't.",
  "I forgot where I parked.",
  "I was in a queue I couldn't leave.",
  "I was doing a puzzle and lost track of time.",
  "I accidentally took a nap.",
  "I was daydreaming and missed my stop.",
  "I was at the dentist.",
  "I accidentally deleted the meeting invite.",
  "I was caught in a power outage.",
  "I was waiting for a prescription.",
  "I thought it started an hour later.",
  "I forgot my glasses.",
  "I was trying to fix my Wi-Fi.",
  "I was searching for my headphones.",
  "I had to wait for my coffee to cool down.",
  "I missed the reminder notification.",
  "I forgot to change my watch back from vacation time.",
  "I thought I could make it, but I was wrong.",
  "I lost my wallet.",
  "I had to help a relative with their tech issue.",
  "My calendar app didn’t sync."];

// Confirm that the copy works, and throw error if it won't
Copy.addEventListener("click", () => {
    if (DisableButton == false) {
        DisableButton = true;
    }
    else {
        return;
    }
    if (!navigator.clipboard) {
        Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
        ThrowAlert("Copying to clipboard isn't supported by your browser and has been disabled.");
        Copy.classList.add("NoClick");
        setTimeout(() => {
        }, 3000);
    } 
    else {
        if (ExcuseOutput.textContent == "") {
            Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
            ThrowAlert("No text to copy.");
            Copy.classList.add("NoClick");
            setTimeout(() => {
                Copy.classList.remove("NoClick");
                Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
            }, 3000);
        }
        else {
            navigator.clipboard.writeText(ExcuseOutput.textContent).then(() => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-check");
                Copy.classList.add("NoClick")
                ThrowAlert("Copied excuse to clipboard!");
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-check", "bi-clipboard2");
                }, 3000);
            }).catch(err => {
                Copy.firstElementChild.classList.replace("bi-clipboard2", "bi-clipboard2-x");
                Copy.classList.add("NoClick");
                ThrowAlert("Error: " + err);
                setTimeout(() => {
                    Copy.classList.remove("NoClick");
                    Copy.firstElementChild.classList.replace("bi-clipboard2-x", "bi-clipboard2");
                }, 3000);
            });   
        }
    }
    setTimeout(() => {
        DisableButton = false;
    }, 3000);
});

// Throw Alert if something goes wrong, use animation to draw user's attention to alert
function ThrowAlert(message) {
    AlertText.textContent = message;
    Alert.classList.add("Alert-Animation");
    setTimeout(() => {
        Alert.classList.replace("Alert-Animation", "Alert-Animation-Reverse");
    }, 1500);
    setTimeout(() => {
        Alert.classList.remove("Alert-Animation-Reverse");
        AlertText.textContent = null;
    }, 3000);
}

// Pick an excuse at random
ExcuseButton.addEventListener("click", () => {
    ExcuseOutput.textContent = null;
    setTimeout(() => {
        ExcuseOutput.textContent = ExcuseArray[Math.floor(Math.random() * ExcuseArray.length)];
    }, 100);
});
