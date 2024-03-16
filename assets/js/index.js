
const URL_BASE = "https://digimon-api.com/api/v1/";


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



//3. Imprimir tarjetas en el body

const printDigimonCard = async() => {
    const digimonCollectionCards = await createDigimonCard()
    console.log(digimonCollectionCards)
}

printDigimonCard()


/* async function printDigimonCard2 () {
    const digimonCollectionCards = await createDigimonCard()
} */






//PRINCIPIOS SOLID => 