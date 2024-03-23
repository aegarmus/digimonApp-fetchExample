import { printDigimonCard, printOneDigimonCard } from "./printElements.js";

let digimonCardContainer = document.querySelector(".wrapper");
let digimonSelected = document.querySelector(".digimon-selected");

let inputDigimon = document.querySelector(".search-digimon");
let searchButton = document.querySelector(".search-button");


printDigimonCard(digimonCardContainer);

searchButton.addEventListener("click", async () => {
  let digimon = inputDigimon.value;

  await printOneDigimonCard(digimon,digimonSelected);
});
