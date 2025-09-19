// Static demo values (metric)
const temperatureC = 8;
const windSpeedKmh = 8;

// Wind chill formula (metric, °C)
const calculateWindChill = (tC, vKmh) =>
    13.12 +
    0.6215 * tC -
    11.37 * Math.pow(vKmh, 0.16) +
    0.3965 * tC * Math.pow(vKmh, 0.16);

// Format number with fixed decimals
function formatNumber(num, decimals = 1) {
    return Number(num).toFixed(decimals);
}

// Check validity constraints for wind chill
function canCalculateWindChill(tC, vKmh) {
    return tC <= 10 && vKmh > 4.8;
}

// Inject wind chill row into weather section
function renderWindChill() {
    const weatherData = document.querySelector(
        ".weather-section .weather-data"
    );
    if (!weatherData) return;

    const item = document.createElement("div");
    item.className = "weather-item wind-chill-item";

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = "Wind Chill:";

    const value = document.createElement("span");
    value.className = "value";

    if (canCalculateWindChill(temperatureC, windSpeedKmh)) {
        const wc = calculateWindChill(temperatureC, windSpeedKmh);
        value.textContent = `${formatNumber(wc)}°C`;
    } else {
        value.textContent = "N/A";
    }

    item.appendChild(label);
    item.appendChild(value);

    weatherData.appendChild(item);
}

// Run immediately if DOM already parsed, else wait
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderWindChill);
} else {
    renderWindChill();
}
