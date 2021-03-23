// Variables
const capitalizedButton = document.querySelector("button#capitalized");

// Functions
function toCapital() {
  let brokenText = text.split(" ");
  let newText = "";

  for (let word of brokenText) {
    newText +=
      word.charAt(0).toUpperCase() + word.substring(1, word.length) + " ";
  }

  return newText.trim();
}

// Event Listener
capitalizedButton.addEventListener("click", () => {
  if (getText()) {
    changeTextArea(toCapital());
    cleanPlaceholder();
  } else {
    changePlaceholder("Type Or Paste Your Content Here");
  }
});
