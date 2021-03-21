// Variables
const sentenceButton = document.querySelector("button#sentence");

// Event listener
sentenceButton.addEventListener("click", () => {
  if (text) {
    text =
      text.charAt(0).toUpperCase() +
      text.substring(1, text.length).toLowerCase();
    changeTextArea(text);
  } else {
    placeholder = "Type or paste your content here";
    changePlaceholder(placeholder);
  }
});
