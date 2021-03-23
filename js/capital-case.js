// Variables
const capitalizedButton = document.querySelector("button#capitalized");

// Event Listener
capitalizedButton.addEventListener("click", () => {
  let brokenText = text.split(" ");
  let newWord = "";

  if (getText()) {
    for (let word of brokenText) {
      newWord +=
        word.charAt(0).toUpperCase() + word.substring(1, word.length) + " ";
    }

    text = newWord.trim();
    changeTextArea(text);
    cleanPlaceholder();
  } else {
    placeholder = "Type Or Paste Your Content Here";
    changePlaceholder(placeholder);
  }
});
