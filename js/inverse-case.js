// Variables
const inverseCaseButton = document.querySelector("button#inverse");

// Functions
function toInverse(txt) {
  let newWord = "";

  for (let char of txt) {
    if (char === char.toUpperCase()) {
      newWord += char.toLowerCase();
    } else {
      newWord += char.toUpperCase();
    }
  }

  return newWord;
}

// Event listener
inverseCaseButton.addEventListener("click", () => {
  if (getText()) {
    changeTextArea(toInverse(text));
    a;
  } else {
    placeholder = changePlaceholder(toInverse(textArea.placeholder));
  }
});
