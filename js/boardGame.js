import { getSelectedPlayers } from "./utils/playersFunction.js";
import { createDice } from "./utils/dice.js";
const playerContainer = document.querySelector(".player-container");

const selectedPlayers = getSelectedPlayers();

selectedPlayers.forEach((selected) => {
  playerContainer.innerHTML += `<div class="player">
  <p>${selected.name}</p>
    <img src="../assets/img/characters/${selected.name}.png" />

    </div>`;
});
console.log(selectedPlayers);

let player1 = selectedPlayers[0].name;
let player2 = selectedPlayers[1].name;
