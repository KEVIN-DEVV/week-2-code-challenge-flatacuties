const baseURL = "http://localhost:3000";

const characterBar = document.querySelector("#character-bar");
const detailedInfo = document.querySelector("#detailed-info");
const votesForm = document.querySelector("#votes-form");
const resetButton = document.querySelector("#reset-btn");

// se all characters names in a div with the id of "character-bar"

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
        <p>${character.description}</p>
        <p>Votes: <span>${character.votes}</span></p>
        `;
        });
    });