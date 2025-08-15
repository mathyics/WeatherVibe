const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const apiKey = "85c5a4de7e722525b59613df77cdd851";

        const cityInput = document.getElementById('cityInput');
        const searchBtn = document.getElementById('searchBtn');
        const weatherCard = document.getElementById('weatherCard');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const weatherBg = document.getElementById('weatherBg');

        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');


         const cityName = document.getElementById('cityName');
        const temperature = document.getElementById('temperature');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');

        function initTheme() {
            const savedTheme = localStorage.getItem('weatherapp-theme') || 'light';
            setTheme(savedTheme);
        }

        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('weatherapp-theme', theme);
            
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }

async function checkWeather(city) {
    if (!city.trim()) return;
    loading.classList.add('show');
    weatherCard.classList.remove('show');
    error.classList.remove('show');
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        updateBackground(data.weather[0].main.toLowerCase());
        loading.classList.remove('show');
        weatherCard.classList.add('show');
    } catch (err) {
        loading.classList.remove('show');
        error.classList.add('show');
        console.error('Error fetching weather data:', err);
    }
}


function updateBackground(weatherType) {
    document.body.className = '';
    switch(weatherType) {
        case 'clear':
            document.body.classList.add('clear-bg');
            break;
        case 'clouds':
            document.body.classList.add('clouds-bg');
            break;
        case 'rain':
        case 'drizzle':
            document.body.classList.add('rain-bg');
            break;
        case 'snow':
            document.body.classList.add('snow-bg');
            break;
        case 'thunderstorm':
            document.body.classList.add('thunderstorm-bg');
            break;
        default:
            document.body.classList.add('clear-bg');
    }
}
