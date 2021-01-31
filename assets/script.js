var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="
var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q="
// API Key - 6d57a13744a578704f3fd16ba8940763

var searchBtn = document.querySelector("#searchBtn");


// function for search button
searchBtn.addEventListener("click", function(event){
    event.preventDefault();

    
    var searchInput = document.querySelector("#searchInput")
    var cityWeatherURL = weatherURL + searchInput.value + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"
    var cityForecastURL = forecastURL + searchInput.value + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"

    fetch(cityForecastURL)
    .then(function (response) {
        return response.json();
    })
    
    .then (function(data){
        console.log(data)

        var dayOne = document.querySelector("#dayOne");
        var dayTwo = document.querySelector("#dayTwo");
        var dayThree = document.querySelector("#dayThree");
        var dayFour = document.querySelector("#dayFour");
        var dayFive = document.querySelector("#dayFive");

        var dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 1)
        dateTime = dateTime.toLocaleDateString()

        dayOne.children[0].textContent = dateTime;
        dayOne.children[1].src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon +"@2x.png";
        dayOne.children[2].textContent = "Temp: " + data.list[4].main.temp + " °F";
        dayOne.children[3].textContent = "Humidity: " + data.list[4].main.humidity + "%";

        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 2)
        dateTime = dateTime.toLocaleDateString()

        dayTwo.children[0].textContent = dateTime;
        dayTwo.children[1].src = "http://openweathermap.org/img/wn/" + data.list[12].weather[0].icon +"@2x.png";
        dayTwo.children[2].textContent = "Temp: " + data.list[12].main.temp + " °F";
        dayTwo.children[3].textContent = "Humidity: " + data.list[12].main.humidity + "%";
        
        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 3)
        dateTime = dateTime.toLocaleDateString()

        dayThree.children[0].textContent = dateTime;
        dayThree.children[1].src = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon +"@2x.png";
        dayThree.children[2].textContent = "Temp: " + data.list[20].main.temp + " °F";
        dayThree.children[3].textContent = "Humidity: " + data.list[20].main.humidity + "%";

        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 4)
        dateTime = dateTime.toLocaleDateString()

        dayFour.children[0].textContent = dateTime;
        dayFour.children[1].src = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon +"@2x.png";
        dayFour.children[2].textContent = "Temp: " + data.list[28].main.temp + " °F";
        dayFour.children[3].textContent = "Humidity: " + data.list[28].main.humidity + "%";

        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 5)
        dateTime = dateTime.toLocaleDateString()

        dayFive.children[0].textContent = dateTime;
        dayFive.children[1].src = "http://openweathermap.org/img/wn/" + data.list[36].weather[0].icon +"@2x.png";
        dayFive.children[2].textContent = "Temp: " + data.list[36].main.temp + " °F";
        dayFive.children[3].textContent = "Humidity: " + data.list[36].main.humidity + "%";



    });

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
    });
})