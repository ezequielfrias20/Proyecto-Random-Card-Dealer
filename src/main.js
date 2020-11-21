/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let valueCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suice = [
    { color: "black", simbolo: "♠" },
    { color: "black", simbolo: "♣" },
    { color: "red", simbolo: "♥" },
    { color: "red", simbolo: "♦" }
  ];
  let numberRandom = Math.trunc(Math.random() * valueCard.length);
  let suiceRandom = Math.trunc(Math.random() * suice.length);

  document.querySelector(".fondo").innerHTML = `
  
  <div class="card">
    <div class="top">
      <div class="symbol-top ${suice[suiceRandom].color}">${suice[suiceRandom].simbolo}</div>
    </div>

        <div class="middle">${valueCard[numberRandom]}</div>
        <div class="bottom">
          <div class="symbol-bottom ${suice[suiceRandom].color}">${suice[suiceRandom].simbolo}</div>
        </div>
  </div>
  
  
  
  
  
  
  `;
};
