// Variables
const alternatingCaseButton = document.querySelector("button#alternating");
let newText = "";

// Functions
function toAlternating() {
  for (let i in text) {
    if (i % 2 === 0) {
      newText += text[i].toLowerCase();
    } else {
      newText += text[i].toUpperCase();
    }
  }
}

// Event Listeners
alternatingCaseButton.addEventListener("click", () => {
  if (getText()) {
    toAlternating();
    changeTextArea(newText);
  } else {
    changePlaceholder("tYpE oR pAsTe yOuR cOnTenT hErE");
  }
});
