// Variables
const textArea = document.querySelector("textarea#text-input");
const buttons = document.querySelectorAll("button.button");
var placeholder = "Type or paste your content here";
var text;

// Functions
function changeTextArea(newText) {
  textArea.value = newText;
}

function changePlaceholder(newPlaceholderTxt) {
  textArea.placeholder = newPlaceholderTxt;
}

function cleanPlaceholder() {
  placeholder = "Type or paste your content here";
  changePlaceholder(placeholder);
}

function getText() {
  return textArea.value;
}

// Event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    text = getText();
  });
});
