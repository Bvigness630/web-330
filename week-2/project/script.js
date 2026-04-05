/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Boyd Vigness
  Date: 4/5/2026
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // Implement this function
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // Create character using closure function
  const character = createCharacter(name, gender, characterClass);

  // Display character info
  const outputDiv = document.getElementById("characterOutput");

  outputDiv.innerHTML = `
    <h2>Your Character</h2>
    <p><strong>Name:</strong> ${character.getName()}</p>
    <p><strong>Gender:</strong> ${character.getGender()}</p>
    <p><strong>Class:</strong> ${character.getClass()}</p>
  `;
});