let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

// Append value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result and save history
function calculateResult() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Add calculation to history
function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.prepend(li);
}

// Listen for keyboard input
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}