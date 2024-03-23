const URL_BASE = "https://digimon-api.com/api/v1/";

//1. Traer los datos de la API!
export const getAllDigimon = async () => {
  try {
    const response = await fetch(`${URL_BASE}digimon`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("No me salio :c");
  }
};

//4. Traer datos de UN SOLO DIGIMON!!

export const getOneDigimon = async (digimon) => {
  try {
    const response = await fetch(`${URL_BASE}digimon/${digimon}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("No me salio :c");
  }
};
