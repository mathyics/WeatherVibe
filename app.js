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


        
