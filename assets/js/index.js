
const URL_BASE = "https://digimon-api.com/api/v1/";

const getAllDigimon = async() => {
    try {
        const response = await fetch(`${URL_BASE}digimon`)
        const data = await response.json()
    
        console.log(data)
        return data

    } catch (error) {
        console.log('No me salio :c')
    }
}

getAllDigimon()