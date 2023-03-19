// 583  - Jon Snow
// 957  - Sansa Stark
// 1303 - Daenerys Targaryen
// 529  - Jaime Lannister
// 238  - Cersei Lannister
// 1052 - Tyrion Lannister
// 16  - Margaery Tyrell
// 2126  - Ygritte
// 565 - Joffrey Baratheon
// 148  - Arya Stark

import { baseUrl } from "../settings/api.js";
const resultsContainer = document.querySelector(".results-container");

const characters = [583, 957, 1303, 529, 238, 1052, 16, 2126, 565, 148];

for (let i = 0; i < characters.length; i++) {
  let newUrl = baseUrl + characters[i];

  async function getCharacters() {
    try {
      const response = await fetch(newUrl);
      const character = await response.json();
      console.log(character);

      resultsContainer.innerHTML += `<div class="character-cards">
        <h4>${character.name}</h4>
        <p>${character.gender}</p>
        <p>Culture: ${character.culture}</p>
        <p>Born: ${character.born}</p>
        </div>`;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  getCharacters();
}
