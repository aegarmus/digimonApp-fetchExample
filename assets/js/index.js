
const URL_BASE = "https://digimon-api.com/api/v1/";

/* let digimonCardContainer = document.getElementsByClassName('wrapper') */

let digimonCardContainer = document.querySelector(".wrapper");
let digimonSelected = document.querySelector('.digimon-selected')

let inputDigimon = document.querySelector(".search-digimon");
let searchButton = document.querySelector(".search-button");

//1. Traer los datos de la API!
const getAllDigimon = async() => {
    try {
        const response = await fetch(`${URL_BASE}digimon`)
        const data = await response.json()
    
        return data

    } catch (error) {
        console.log('No me salio :c')
    }
}


//4. Traer datos de UN SOLO DIGIMON!!


const getOneDigimon = async(digimon) => {
    try {
        const response = await fetch(`${URL_BASE}digimon/${digimon}`)
        const data = await response.json()

        return(data)

    } catch (error) {
        console.log("No me salio :c");
    }
}


//2. Crear tarjetas de Digimon

const createDigimonCard = async() => {
    try {
        const getDigimonData = await getAllDigimon()
        const digimonData = getDigimonData.content

        let htmlCode = '';

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
            `

            return htmlCode //Return del ForEach
        })

        return htmlCode; //Return de mi función grande

    } catch (error) {
        console.log(error)
    }
}

//5. Crear tarjeta para un solo Digimon

const createOneDigimonCard = async(digimon) => {
    try {
        const digimonData = await getOneDigimon(digimon)
    
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
        `                   

        return htmlCode
        
    } catch (error) {
        
    }
}


//7. Crear funcion de ChartJS

const createDigimonChart = (digimon) => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: [
          `${digimon.skills[0].skill}`,
          `${digimon.skills[1].skill}`,
          `${digimon.skills[2].skill}`,
          `${digimon.skills[3].skill}`,
          `${digimon.skills[4].skill}`,
        ],
        datasets: [
          {
            label: "Digimon Skills",
            data: [
              digimon.skills[0].id,
              digimon.skills[1].id,
              digimon.skills[2].id,
              digimon.skills[3].id,
              digimon.skills[4].id,
            ],
            borderWidth: 1,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(201, 203, 207)",
              "rgb(54, 162, 235)",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
}


//3. Imprimir tarjetas en el body

const printDigimonCard = async() => {
    try {
        const digimonCollectionCards = await createDigimonCard()
    
        digimonCardContainer.innerHTML = digimonCollectionCards
        
    } catch (error) {
        console.log(error)
    }
}

//6. Imprimir la tarjeta del Digimon
const printOneDigimonCard = async(digimon, digimonSelected) => {
    try {

        const getDigimon = await getOneDigimon(digimon)
        const digimonCard = await createOneDigimonCard(digimon)
        console.log(digimonCard)
        digimonSelected.innerHTML = digimonCard

        createDigimonChart(getDigimon)
    } catch (error) {
        console.log('Algo malio sal!')
    }
}

printDigimonCard()



searchButton.addEventListener('click', async() => {
    let digimon = inputDigimon.value

    await printOneDigimonCard(digimon)
})

/* async function printDigimonCard2 () {
    const digimonCollectionCards = await createDigimonCard()
} */






//PRINCIPIOS SOLID => 