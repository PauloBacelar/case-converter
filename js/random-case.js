// Variables
const randomCaseButton = document.querySelector("button#random");

// Functions
function toRandom(txt) {
  let newText = "";
  for (let c in txt) {
    let randomNum = Math.floor(Math.random() * 2);

    if (randomNum === 0) {
      newText += txt[c].toLowerCase();
    } else {
      newText += txt[c].toUpperCase();
    }
  }

  return newText;
}

randomCaseButton.addEventListener("click", () => {
  if (getText()) {
    changeTextArea(toRandom(getText()));
  } else {
    changePlaceholder(toRandom("Type or paste your content here"));
  }
});
