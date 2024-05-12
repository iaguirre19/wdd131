window.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('last-modified').textContent = formattedDate;

    const cityData = {
        area: '431.91 km²',
        population: '1.9 million',
        capital: 'N/A',
        language: 'Portuguese',
        currency: 'Brazilian Real',
        timezone: 'Brasilia Time (BRT)',
        callingCode: '+55',
        internetTld: '.br'
    };

    document.getElementById('area').textContent = cityData.area;
    document.getElementById('population').textContent = cityData.population;
    document.getElementById('capital').textContent = cityData.capital;
    document.getElementById('language').textContent = cityData.language;
    document.getElementById('currency').textContent = cityData.currency;
    document.getElementById('timezone').textContent = cityData.timezone;
    document.getElementById('callingCode').textContent = cityData.callingCode;
    document.getElementById('internetTld').textContent = cityData.internetTld;

    const temperatureCelsius = 25; // °C
    const windSpeedKmph = 10; // km/h

    const calculateWindChill = (temperature, windSpeed) => {
        let windChill;
        windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    }

    if (temperatureCelsius <= 10 && windSpeedKmph > 4.8) {
        const windChillFactor = calculateWindChill(temperatureCelsius, windSpeedKmph);
        document.getElementById('windChill').textContent = windChillFactor + ' °C';
    } else {
        document.getElementById('windChill').textContent = 'N/A';
    }

    const temperature = 25; // °C
    const condition = "Sunny";
    const wind = 10; // km/h

    document.getElementById('temperature').textContent = temperature + ' °C';
    document.getElementById('condition').textContent = condition;
    document.getElementById('wind').textContent = wind + ' km/h';
});
