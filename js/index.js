import { baseUrl } from "../settings/api.js";
import { getSelectedPlayers } from "./utils/playersFunction.js";

const resultsContainer = document.querySelector(".results-container");
const banner1 = document.querySelector(".banner.player1");
const banner2 = document.querySelector(".banner.player2");

// Go to the battlefield button
const playButton = document.querySelector("#play-button");
// playButton.disabled = true;

playButton.addEventListener("click", function () {
  window.location.href = "../boardGame.html";
});

// Character numbers to add to baseUrl
const characters = [583, 957, 1303, 529, 238, 1052, 823, 743, 565, 148];

// Loop through characters and fetch. Create new urls and get data
async function getCharacters() {
  for (let i = 0; i < characters.length; i++) {
    let newUrl = baseUrl + characters[i];
    let cssClass = "character-cards";

    try {
      const response = await fetch(newUrl);
      const character = await response.json();
      console.log(character);

      if (character.gender === "Female") {
        character.gender = "&#9792;";
      } else {
        character.gender = "&#9794";
      }
      if (character.culture === "") {
        character.culture = "Unknown";
      }

      const characterName = character.name;

      const selectedPlayers = getSelectedPlayers();
      const player1 = selectedPlayers[0]?.name; // "?" ensures that there is a selected player before accessing its name
      const player2 = selectedPlayers[1]?.name;

      const doesObjectExist = selectedPlayers.find((play) => {
        console.log(play);
        return play.name === characterName;
      });

      if (doesObjectExist) {
        cssClass = "character-card";
      }
      resultsContainer.innerHTML += `<div class="character-cards ${cssClass}" data-name="${
        character.name
      }">
      ${
        player1 === characterName
          ? ` <img class="banner player1" src="../img/banner/Player1.png" />`
          : ""
      }
      ${
        player2 === characterName
          ? ` <img class="banner player2" src="../img/banner/Player2.png" />`
          : ""
      }
      <h3>${character.name}</h3>
  
      <img src="../img/characters/${characterName}.png" />
        <p class="gender">Gender: ${character.gender}</p>
        <p>Culture: ${character.culture}</p>
        <p>Born: ${character.born}</p>
    
        </div>`;
    } catch (error) {
      console.log(error);
    }
  }

  // Get individual cards with the data and loop over with forEach
  const characterCards = document.querySelectorAll(".character-cards");
  console.log(characterCards);

  // onClick event
  characterCards.forEach((cards) => {
    cards.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    const name = this.dataset.name;
    const selectedPlayers = getSelectedPlayers();
    const numSelected = selectedPlayers.length;

    if (numSelected === 2 && !this.classList.contains("character-card")) {
      // Already have two selected characters and clicked on non-selected character
      return;
    }

    this.classList.toggle("character-card");

    // Check if player exists in localstorage
    const playerExists = selectedPlayers.find(function (play) {
      return play.name === name;
    });

    if (!playerExists) {
      // Add player to localstorage
      const player = { name: name };
      selectedPlayers.push(player);
      savePlayers(selectedPlayers);
    } else {
      // Remove player from localstorage
      const newPlayers = selectedPlayers.filter((play) => play.name !== name);
      savePlayers(newPlayers);
    }
  }
}

getCharacters();

function savePlayers(players) {
  localStorage.setItem("players", JSON.stringify(players));
}
