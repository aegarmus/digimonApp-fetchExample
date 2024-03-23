import { getOneDigimon } from "./fetchApi.js";
import { createDigimonCard, createOneDigimonCard } from "./cardGenerator.js";
import { createDigimonChart } from "./chart.js";


//3. Imprimir tarjetas en el body

export const printDigimonCard = async (digimonCardContainer) => {
  try {

    const digimonCollectionCards = await createDigimonCard();

    digimonCardContainer.innerHTML = digimonCollectionCards;
  } catch (error) {
    console.log(error);
  }
};

//6. Imprimir la tarjeta del Digimon
export const printOneDigimonCard = async (digimon, digimonSelected) => {
  try {
    const getDigimon = await getOneDigimon(digimon);
    const digimonCard = await createOneDigimonCard(digimon);
   
    digimonSelected.innerHTML = digimonCard;
    createDigimonChart(getDigimon);

  } catch (error) {
    console.log("Algo malio sal!");
  }
};
