"use strict";

const players = [
    {
    name: "Luka Doncic",
    team: "Los Angeles Lakers",
    position: "Guard"
  },
  {
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "Guard"
  },
    {
    name: "LeBron James",
    team: "Los Angeles Lakers",
    position: "Forward"
  },
  {
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    position: "Forward"
  },
    {
    name: "Nikola Jokic",
    team: "Denver Nuggets",
    position: "Center"
  }
];

function fetchPlayers() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (players.length > 0) {
        resolve(players);
      } else {
        reject("Unable to load player data.");
      }

    }, 1000);

  });
}

async function loadPlayers() {

  const container = document.getElementById("player-container");
  const errorMessage = document.getElementById("error-message");

  container.innerHTML = "";
  errorMessage.textContent = "";

  try {

    // Wait for async operation to finish
    const playerData = await fetchPlayers();

    // Data is passed directly instead of using shared global variables
    playerData.forEach(player => {

      const card = document.createElement("div");
      card.classList.add("player-card");

      card.innerHTML = `
        <h2>${player.name}</h2>
        <p>Team: ${player.team}</p>
        <p>Position: ${player.position}</p>
      `;

      container.appendChild(card);

    });

  } catch (error) {

    errorMessage.textContent = error;

  }
}

document.getElementById("load-btn").addEventListener("click", loadPlayers);