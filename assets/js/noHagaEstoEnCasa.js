const URL_BASE = "https://digimon-api.com/api/v1/";

const getAllDigimon = async() => {
    const response = await fetch(`${URL_BASE}digimon`);
    const data = await response.json();

    const digimonData = data.content;

    let htmlCode = "";

    digimonData.forEach((digimon) => {
      htmlCode += `
                <div class="digimon-card">
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

    let digimonCardContainer = document.querySelector(".wrapper");

    digimonCardContainer.innerHTML = digimonCollectionCards;
}

getAllDigimon()