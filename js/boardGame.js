import { getSelectedPlayers } from "./utils/playersFunction.js";
import { createDice } from "./utils/dice.js";
const playerContainer = document.querySelector(".board-container");

const selectedPlayers = getSelectedPlayers();

for (let i = 0; i < selectedPlayers.length; i++) {
  console.log(selectedPlayers[i].name);

  playerContainer.innerHTML += `<div class="player">
    <img src="../img/characters/${selectedPlayers[i].name}.png" />
    </div>`;
}
