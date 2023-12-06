let newFlashcardButton = document.querySelector("#create-flashcard-btn");
newFlashcardButton.addEventListener("click", () => {
  let newFlashcardWord = document.querySelector(
    "#current-flashcard-word"
  ).value;
  let newFlashcardDefinition = document.querySelector(
    "#current-flashcard-definition"
  ).value;

  let newFlashcard = document.createElement("div");
  newFlashcard.className = "flashcard";
  let newFlashcardWordSpan = document.createElement("span");
  newFlashcardWordSpan.className = "flashcard-text";
  newFlashcardWordSpan.innerText = newFlashcardWord;
  let newFlashcardDefinitionSpan = document.createElement("span");
  newFlashcardDefinitionSpan.className = "flashcard-text";
  newFlashcardDefinitionSpan.innerText = newFalshcardDefinition;
  newFlashcard.appendChild(newFlashcardWordSpan);
  newFlashcard.appendChild(newFlashcardDefinitionSpan);

  let flashcardContainer = document.querySelector("#set-cards-container");
  flashcardContainer.insertBefore(
    newFlashcard,
    flashcardContainer.lastElementChild
  );
});
