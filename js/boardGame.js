import { getSelectedPlayers } from "./utils/playersFunction.js";
import { createDice } from "./utils/dice.js";
const playerContainer = document.querySelector(".board-container");

const selectedPlayers = getSelectedPlayers();

selectedPlayers.forEach((selected) => {
  playerContainer.innerHTML += `<div class="player">
    <img src="../assets/img/characters/${selected.name}.png" />

    </div>`;
});
console.log(selectedPlayers);

let player1 = 0;
let player2 = 0;
