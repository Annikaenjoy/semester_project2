import { getSelectedPlayers } from "./utils/playersFunction.js";
const playerContainer = document.querySelector(".results-container");

const selectedPlayers = getSelectedPlayers();

selectedPlayers.forEach((selected) => {
  playerContainer.innerHTML += `<div class="player">
    <img src="../img/characters/${selected.name}.png" />

    </div>`;
});
