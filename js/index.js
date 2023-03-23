// 583  - Jon Snow
// 957  - Sansa Stark
// 1303 - Daenerys Targaryen
// 529  - Jaime Lannister
// 238  - Cersei Lannister
// 1052 - Tyrion Lannister
// 823  - Petyr Baelish
// 743  - Melisandre
// 565 - Joffrey Baratheon
// 148  - Arya Stark

import { baseUrl } from "../settings/api.js";
const resultsContainer = document.querySelector(".results-container");

// Character numbers to add to baseUrl
const characters = [583, 957, 1303, 529, 238, 823, 1052, 743, 565, 148];

// Loop through characters and fetch. Create new urls and get data
async function getCharacters() {
  for (let i = 0; i < characters.length; i++) {
    let newUrl = baseUrl + characters[i];

    try {
      const response = await fetch(newUrl);
      const character = await response.json();
      console.log(character);

      if (character.gender === "Female") {
        character.gender = "&#9792;";
      } else {
        character.gender = "&#9794";
      }

      const name = character.name;

      resultsContainer.innerHTML += `<div class="character-cards">
      <h3>${character.name}</h3>
      <img src="../img/characters/${name}.png" />
        <p class="gender">Gender: ${character.gender}</p>
        <p>Culture: ${character.culture}</p>
        <p>Born: ${character.born}</p>
    
        </div>`;
    } catch (error) {
      console.log(error);
    } finally {
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
    console.log(event);
  }
}

getCharacters();
