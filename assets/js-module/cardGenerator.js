import { getOneDigimon, getAllDigimon } from "./fetchApi.js";

export const createDigimonCard = async () => {
  try {
    const getDigimonData = await getAllDigimon();
    const digimonData = getDigimonData.content;

    let htmlCode = "";

    digimonData.forEach((digimon, index) => {
      htmlCode += `
                <div class="digimon-card grid-${index}">
                    <div class="digimon-img">
                        <img src="${digimon.image}" alt="${digimon.name} image">
                    </div>
                    <div class="digimon-card-body">
                        <h3 class="digimon.title">${digimon.name}</h3>
                        <p class="digimon-id">N° ${digimon.id}</p>
                        <button class="btn-digimon-card">Click for More Info!</button>
                    </div>
                </div>
            `;

      return htmlCode; //Return del ForEach
    });

    return htmlCode; //Return de mi función grande
  } catch (error) {
    console.log(error);
  }
};

//5. Crear tarjeta para un solo Digimon

export const createOneDigimonCard = async (digimon) => {
  try {
    const digimonData = await getOneDigimon(digimon);

    let htmlCode = `
            <div class = "one-digimon-card">
                <div class = "one-digimon-header">
                    <div class="one-digimon-img">
                        <img src="${digimonData.images[0].href}" alt="${digimonData.name}">
                    </div>
                    <h2 class = "one-digimon-name">${digimonData.name}</h2>
                    <p class="one-digimon-id> ID: ${digimonData.id} </p>
                    <div class= "one-digimon-fields">
                        <h3>Fields</h3>
                        <div class="field-container">
                            <span class="field"><img src="${digimonData.fields[0].image}" alt="${digimonData.fields[0].field}"></span>
                            <span class="field"><img src="${digimonData.fields[1].image}" alt="${digimonData.fields[1].field}"></span>
                            <span class="field"><img src="${digimonData.fields[2].image}" alt="${digimonData.fields[2].field}"></span>
                        </div>
                        <div class="one-digimon-body">
                            <p class="digimon-info"> Level: <span class="digimon-text"> ${digimonData.levels[0].level} </span></p>
                            <p class="digimon-info"> attributes: <span class="digimon-text"> ${digimonData.attributes[0].attribute} </span></p>
                            <p class="digimon-info"> Level: <span class="digimon-text"> ${digimonData.types[0].type} </span></p>

                            <h3>Description</h3>
                            <p class="digimon-description">${digimonData.descriptions[1].description}</p>
                        </div>

                        <div>
                            <canvas id="myChart">
                                
                            </canvas>
                        </div>
        `;

    return htmlCode;
  } catch (error) {}
};



