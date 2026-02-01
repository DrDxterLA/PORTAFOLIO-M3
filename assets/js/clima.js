const API_KEY = "33267e7ed97e11f39cc922a5c1666627";

// Función principal de la app
function getWeather() {
  const city = document.getElementById("city").value;
  const days = document.getElementById("days").value;

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
    .then(res => res.json())
    .then(data => renderWeather(data, days));
}

// Renderizar tarjetas app
function renderWeather(data, days) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  // Cada 8 registros = 1 día
  for (let i = 0; i < days * 8; i += 8) {
    const d = data.list[i];

    container.innerHTML += `
      <div class="col-md-3">
        <div class="card text-center shadow">
          <div class="card-body">
            <h5>${new Date(d.dt_txt).toLocaleDateString()}</h5>
            <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png">
            <p>${d.weather[0].description}</p>
            <p>${d.main.temp} °C</p>
          </div>
        </div>
      </div>
    `;
  }
}
