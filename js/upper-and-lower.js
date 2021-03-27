// Varibles
const upperCaseButton = document.querySelector("button#upper");
const lowerCaseButton = document.querySelector("button#lower");

// Functions
function toLower() {
  text = text.toLowerCase();
  return text;
}

function toUpper() {
  text = text.toUpperCase();
  return text;
}

// Event Listeners
upperCaseButton.addEventListener("click", () => {
  if (text) {
    changeTextArea(toUpper());
    cleanPlaceholder();
  } else {
    placeholder = changePlaceholder(textArea.placeholder.toUpperCase());
  }
});

lowerCaseButton.addEventListener("click", () => {
  if (text) {
    changeTextArea(toLower());
    cleanPlaceholder();
  } else {
    placeholder = changePlaceholder(textArea.placeholder.toLowerCase());
  }
});
