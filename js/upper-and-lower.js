// Varibles
const upperCaseButton = document.querySelector("button#upper");
const lowerCaseButton = document.querySelector("button#lower");

// Event Listeners
upperCaseButton.addEventListener("click", () => {
  if (text) {
    text = text.toUpperCase();
    changeTextArea(text);
    cleanPlaceholder();
  } else {
    placeholder = placeholder.toUpperCase();
    changePlaceholder(placeholder);
  }
});

lowerCaseButton.addEventListener("click", () => {
  if (text) {
    text = text.toLowerCase();
    changeTextArea(text);
    cleanPlaceholder();
  } else {
    placeholder = placeholder.toLowerCase();
    changePlaceholder(placeholder);
  }
});
