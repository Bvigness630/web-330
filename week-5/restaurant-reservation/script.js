/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Boyd Vigness
  Date: 4/26/2026
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 8, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === tableNumber);

  if (!table) {
    callback("Error: Table does not exist.");
    return;
  }

  if (table.isReserved) {
    callback("Error: Table is already reserved.");
  } else {
    table.isReserved = true;

    setTimeout(() => {
      callback("Success! Table " + tableNumber + " reserved.");
    }, time);
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const tableNumber = parseInt(document.getElementById("tableNumber").value);
    const messageEl = document.getElementById("message");

    reserveTable(tableNumber, function (message) {
      messageEl.textContent = name + ": " + message;
    }, 2000);
  });