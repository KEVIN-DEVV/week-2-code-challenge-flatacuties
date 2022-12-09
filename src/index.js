const baseURL = "http://localhost:3000";

const characterBar = document.querySelector("#character-bar");
const detailedInfo = document.querySelector("#detailed-info");
const votesForm = document.querySelector("#votes-form");
const resetButton = document.querySelector("#reset-btn");
const votesInput = document.querySelector("#votes");
const votesSpan = document.querySelector("#vote-count");


fetch(`${baseURL}/characters`)
  .then((res) => res.json())
  .then((characters) => {
    characters.forEach((character) => {
      const span = document.createElement("span");
      span.innerText = character.name;
      characterBar.append(span);
    });
  });
characterBar.addEventListener("click", (e) => {
  const characterName = e.target.innerText;
  fetch(`${baseURL}/characters`)
    .then((res) => res.json())
    .then((characters) => {
      const character = characters.find(
        (character) => character.name === characterName
      );
      detailedInfo.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}"/>
        <p>Votes: <span>${character.votes}</span></p>
        `;
    });
    
});
// reset button
resetButton.addEventListener("click", (e) => {
  votesSpan.innerText = 0;
});

votesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const votes = parseInt(votesInput.value);
  const currentVotes = parseInt(votesSpan.innerText);
  votesSpan.innerText = votes + currentVotes;
  votesInput.value = "";
});

// reset button
resetButton.addEventListener("click", (e) => {
  votesSpan.innerText = 0;
});