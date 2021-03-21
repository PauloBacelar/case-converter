// Variables
const capitalizedButton = document.querySelector("button#capitalized");
const brokenText = getText().split();
let newWord = "";

// Event Listener
capitalizedButton.addEventListener("click", () => {
  if (getText()) {
    for (let word of brokenText) {
      newWord +=
        word.charAt(0).toUpperCase() + word.substring(1, word.length) + " ";
    }

    text = newWord;
    changeTextArea(newWord);
    cleanPlaceholder();
  } else {
    placeholder = "Type Or Paste Your Content Here";
    changePlaceholder(placeholder);
  }
});
