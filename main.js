const characters = document.querySelectorAll(".character");
characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removeSelectionCharacter();
    character.classList.add("selected");

    changeImageCharacterSelected(character);
    changeNameselected(character);

    changeDescriptionCharacter(character);
  });
});

function changeImageCharacterSelected(character) {
  const imageCharacterBig = document.querySelector(".big-weight");
  const idCharacter = character.attributes.id.value;
  imageCharacterBig.src = `src/imagens/card-${idCharacter}.png`;
}

function changeDescriptionCharacter(character) {
  const descriptionCharacter = document.getElementById("description_character");
  descriptionCharacter.innerText = character.getAttribute("data-description");
}

function changeNameselected(character) {
  const nameCharacter = document.getElementById("name_character");
  nameCharacter.innerText = character.getAttribute("data-name");
}

function removeSelectionCharacter() {
  const characterSelected = document.querySelector(".selected");
  characterSelected.classList.remove("selected");
}
