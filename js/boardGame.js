import { getSelectedPlayers } from "./utils/playersFunction.js";
const playerContainer = document.querySelector(".results-container");

const selectedPlayers = getSelectedPlayers();

for (let i = 0; i < selectedPlayers.length; i++) {
  console.log(selectedPlayers[i].name);

  playerContainer.innerHTML += `<div class="player">
    <img src="../img/characters/${selectedPlayers[i].name}.png" />
    </div>`;
}

// selectedPlayers.forEach((selected) => {
//   playerContainer.innerHTML += `<div class="player">
//     <img src="../img/characters/${selected.name}.png" />

//     </div>`;
// });
