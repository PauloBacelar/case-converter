// Variables
const sentenceButton = document.querySelector("button#sentence");

// Functions
function toSentence() {
  text =
    text.charAt(0).toUpperCase() + text.substring(1, text.length).toLowerCase();
  return text;
}

// Event listener
sentenceButton.addEventListener("click", () => {
  if (text) {
    changeTextArea(toSentence());
  } else {
    placeholder = "Type or paste your content here";
    changePlaceholder(placeholder);
  }
});
