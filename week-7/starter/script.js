"use strict";

const chefs = [
  { name: "Chef A", specialty: "Italian cuisine", location: "New York" },
  { name: "Chef B", specialty: "French cuisine", location: "Paris" },
  { name: "Chef C", specialty: "Japanese cuisine", location: "Tokyo" }
];

function retrieveChef(index, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chefs[index]), delay);
  });
}

// AI added this shared variable during the refactor.
// It looks like reusing the same variable for async operations
// may be causing the chef data to display incorrectly sometimes.
let currentChef = null;

async function loadChefs() {
  const delays = [600, 900, 1200];

  for (let i = 0; i < chefs.length; i++) {
    try {
      currentChef = await retrieveChef(i, delays[i]);
      // After refreshing the page multiple times,
      // the chef information does not always display consistently.
      // The page is acts as if it is loading one piece at a time,
      // as there is a couple second delay in between each chef.
      // This seems related to the async/await refactor
      // and how the shared variable is being reused.

      const el = document.getElementById(`chef${i + 1}`);
      el.innerHTML = `
        <h2>${currentChef.name}</h2>
        <p>Specialty: ${currentChef.specialty}</p>
        <p>Location: ${currentChef.location}</p>
      `;
    } catch (err) {
      // No rejection expected, but included for completeness
      console.error("Error retrieving chef:", err);
    }
  }
}

loadChefs();
