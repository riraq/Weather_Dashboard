var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="

// API Key - 6d57a13744a578704f3fd16ba8940763

var searchBtn = document.querySelector("#searchBtn")

// function for search button
searchBtn.addEventListener("click", function(event){
    event.preventDefault();

    
    var searchInput = document.querySelector("#searchInput")
    var cityWeatherURL = weatherURL + searchInput.value + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"
    
    fetch(cityWeatherURL)
    .then(function (response) {
        //   if (!response.ok) {
        //     throw response.json();
        //   }

        return response.json();
    })

    .then(function(data){
        console.log(data)
        var cityName = document.querySelector("#city");
        var cityTemperature = document.querySelector("#temperature");
        var cityHumidity = document.querySelector("#humidity");
        var cityWindspeed = document.querySelector("#windSpeed");
        var date = new Date().toLocaleDateString()

        cityName.textContent = data.name + " (" + date + ")";
        cityTemperature.textContent = "Temperature: " + data.main.temp + "°F";
        cityHumidity.textContent = "Humidity: " + data.main.humidity + " %";
        cityWindspeed.textContent = "Wind Speed: " + data.wind.speed  + " MPH";
        
        var cityLon = data.coord.lon;
        var cityLat = data.coord.lat;
        var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + cityLat + "&lon=" + cityLon + "&appid=6d57a13744a578704f3fd16ba8940763"
        
        fetch(uvIndexURL)
        .then(function (response) {
            return response.json();
        })

        .then(function(data){
            var cityUvIndex = document.querySelector("#uvIndex");
            cityUvIndex.textContent = "UV Index: " + data.value;
    })
    })
})