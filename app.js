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


        
