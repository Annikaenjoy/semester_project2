// check if selected players are in local storage, if not return an empty array, else return the player name
export function getSelectedPlayers() {
  const players = localStorage.getItem("players");

  if (!players) {
    return [];
  } else {
    return JSON.parse(players);
  }
}
