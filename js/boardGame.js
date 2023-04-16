import { getSelectedPlayers } from "./utils/playersFunction.js";
import { createDice } from "./utils/dice.js";
const playerContainer = document.querySelector(".player-container");
const board = document.querySelector(".board");
const score = document.querySelector(".tile");

const selectedPlayers = getSelectedPlayers();

selectedPlayers.forEach((selected) => {
  playerContainer.innerHTML += `<div class="player">
  <p>${selected.name}</p>
    <img src="../assets/img/characters/${selected.name}.png" />
    </div>`;
});

console.log(selectedPlayers[0].name);
console.log(selectedPlayers[1].name);

let player1 = selectedPlayers[0].name;
let player2 = selectedPlayers[1].name;

const NUMBER_OF_TILES = 30;
const NUMBER_OF_PLAYERS = 2;

const playerTokens = [
  document.querySelector(".p1"),
  document.querySelector(".p2"),
];

const playerPositions = [0, 0]; // starting position for each player

// set starting position of player tokens
playerTokens.forEach((token, i) => {
  token.style.left = `${playerPositions[i] * 100}px`;
});

let currentPlayer = 0; // start with player 1

const btnRollDice = document.querySelector(".btn-roll-dice");
const diceContainer = document.querySelector(".dice-container");

btnRollDice.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 6 + 1);

  const dice = createDice(random);
  diceContainer.innerHTML = "";
  diceContainer.appendChild(dice);

  let newPosition = playerPositions[currentPlayer] + random;
  if (newPosition > NUMBER_OF_TILES) {
    newPosition = NUMBER_OF_TILES - (newPosition - NUMBER_OF_TILES);
  }

  const tile = document.querySelector(`[data-position="${newPosition}"]`);
  const boardRect = board.getBoundingClientRect();
  const tileRect = tile.getBoundingClientRect();
  const offsetLeft = tileRect.left - boardRect.left;

  playerTokens[currentPlayer].style.left = `${offsetLeft}px`;
  playerPositions[currentPlayer] = newPosition;

  if (random === 6) {
    // player rolls again
  } else {
    currentPlayer = (currentPlayer + 1) % NUMBER_OF_PLAYERS;
  }
});
