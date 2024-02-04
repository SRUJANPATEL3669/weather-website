function getWeather() {
    const apiKey = 'd949e6903732fc366e9e325191a85669'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city-input').value;

    if (city === '') {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('temperature').innerText = `Temperature: ${temperature} °C`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error(error);
        });
}
