/*************************************************
 * locations.js
 * Manejo de regiones y ciudades de Chile
 * No usa API externa
 *************************************************/

// Objeto con regiones y ciudades
const locations = {
  "Región Metropolitana": [
    "Santiago",
    "Maipú",
    "Puente Alto",
    "Las Condes"
  ],
  "Valparaíso": [
    "Valparaíso",
    "Viña del Mar",
    "Quilpué",
    "Villa Alemana"
  ],
  "Biobío": [
    "Concepción",
    "Talcahuano",
    "Los Ángeles",
    "Coronel"
  ],
  "La Araucanía": [
    "Temuco",
    "Padre Las Casas",
    "Villarrica",
    "Pucón"
  ]
};

// Referencias a los select
const regionSelect = document.getElementById("region");
const citySelect = document.getElementById("city");

/*************************************************
 * Cargar regiones al iniciar la página
 *************************************************/
function loadRegions() {
  regionSelect.innerHTML = `<option value="">Seleccione región</option>`;

  for (let region in locations) {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  }
}

/*************************************************
 * Cargar ciudades según región seleccionada
 *************************************************/
function loadCities(region) {
  citySelect.innerHTML = `<option value="">Seleccione ciudad</option>`;

  // Si la región no existe, salimos
  if (!locations[region]) return;

  locations[region].forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

/*************************************************
 * Eventos
 *************************************************/

// Cuando cambia la región
regionSelect.addEventListener("change", () => {
  loadCities(regionSelect.value);
});

// Cargar regiones al iniciar
loadRegions();
