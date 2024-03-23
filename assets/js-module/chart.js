//7. Crear funcion de ChartJS

export const createDigimonChart = (digimon) => {
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
};
