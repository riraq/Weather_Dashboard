// beginning of url for calling current weather and forecast apis
var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="
var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q="
// API Key - 6d57a13744a578704f3fd16ba8940763

// variables used for calling the city elements in the html for adding a search history 
var cityOne = document.querySelector("#city1")
var cityTwo = document.querySelector("#city2")
var cityThree = document.querySelector("#city3")
var cityFour = document.querySelector("#city4")
var cityFive = document.querySelector("#city5")

// var used for selecting the search button
var searchBtn = document.querySelector("#searchBtn");

// var for getting cities out of local storage to be used for the search history
var cityOneSearch = localStorage.getItem("cityone");
var cityTwoSearch = localStorage.getItem("citytwo");
var cityThreeSearch = localStorage.getItem("citythree");
var cityFourSearch = localStorage.getItem("cityfour");
var cityFiveSearch = localStorage.getItem("cityfive");

// if statements used to populate the search history if any cities are stored in local storage
if (cityOneSearch !== null){
    cityOne.textContent = cityOneSearch
}
if (cityTwoSearch !== null){
    cityTwo.textContent = cityTwoSearch
}
if (cityThreeSearch !== null){
    cityThree.textContent = cityThreeSearch
}
if (cityFourSearch !== null){
    cityFour.textContent = cityFourSearch
}
if (cityFiveSearch !== null){
    cityFive.textContent = cityFiveSearch
}

// function for search button
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    // selects the element of the input form where cities are searched to be used for taking the search value of the user
    var searchInput = document.querySelector("#searchInput").value
    getWeatherData(searchInput)
    

    // // variables that contain the entire url for the current weather of the searched city and the forecast
    // var cityWeatherURL = weatherURL + searchInput.value + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"
    // var cityForecastURL = forecastURL + searchInput.value + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"

    // // fetch statement for getting the current weather, returns alert if city input does not return any data
    // fetch(cityWeatherURL)
    // .then(function (response) {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       else{
    //         return alert("City Not Found!");
    //       }
    // })

    // .then(function(data){
        // if (data === undefined || data.cod === "404"){
        //     return
        // }

        // if else statements used to populate the search history based on how many previously searched cities there are as well as adding them to local storage for persistence
        if (cityOne.textContent === ""){
            cityOne.textContent = searchInput
            localStorage.setItem("cityone", searchInput);
        }
        else if (cityTwo.textContent === ""){
            cityTwo.textContent = searchInput
            localStorage.setItem("citytwo", searchInput);
        }
        else if (cityThree.textContent === ""){
            cityThree.textContent = searchInput
            localStorage.setItem("citythree", searchInput);
        }
        else if (cityFour.textContent === ""){
            cityFour.textContent = searchInput
            localStorage.setItem("cityfour", searchInput);
        }
        else if (cityFive.textContent === ""){
            cityFive.textContent = searchInput
            localStorage.setItem("cityfive", searchInput);
        }
        // makes the search history a max of five, removes the oldest searched city from list and adds the newest one when five cities are already listed
        else {
            cityOne.textContent = cityTwo.textContent
            localStorage.setItem("cityone", cityOne.textContent);
            cityTwo.textContent = cityThree.textContent
            localStorage.setItem("citytwo", cityTwo.textContent);
            cityThree.textContent = cityFour.textContent
            localStorage.setItem("citythree", cityThree.textContent);
            cityFour.textContent = cityFive.textContent
            localStorage.setItem("cityfour", cityFour.textContent);
            cityFive.textContent = searchInput
            localStorage.setItem("cityfive", searchInput);
        }
    //     // selectors for the current weather in html
    //     var cityName = document.querySelector("#city");
    //     var cityTemperature = document.querySelector("#temperature");
    //     var cityHumidity = document.querySelector("#humidity");
    //     var cityWindspeed = document.querySelector("#windSpeed");
    //     var cityIcon = document.querySelector("#icon")
    //     var date = new Date().toLocaleDateString()
        
    //     // used to change the text in the html with the current weather data
    //     cityName.textContent = data.name + " (" + date + ")";
    //     cityIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
    //     cityTemperature.textContent = "Temperature: " + data.main.temp + "°F";
    //     cityHumidity.textContent = "Humidity: " + data.main.humidity + " %";
    //     cityWindspeed.textContent = "Wind Speed: " + data.wind.speed  + " MPH";
        
    //     // takes the latitude and longitude data from the weather data to be used in getting the uv index data with another call
    //     var cityLon = data.coord.lon;
    //     var cityLat = data.coord.lat;
    //     var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + cityLat + "&lon=" + cityLon + "&appid=6d57a13744a578704f3fd16ba8940763"
        
    //     // fetch statement used to get uvindex, 
    //     fetch(uvIndexURL)
    //     .then(function (response) {
    //         return response.json();
    //     })

    //     // when data is provided for uv index, it is placed in the html and based on the value of the index, a color is applied to the text
    //     .then(function(data){
    //                     var cityUvIndex = document.querySelector("#uvIndex");
    //         cityUvIndex.textContent = "UV Index: " + data.value;
            
    //         if (data.value <=2){
    //             cityUvIndex.setAttribute("class", "green");
    //         }
    //         else if (data.value > 2 || data.value <= 5){
    //             cityUvIndex.setAttribute("class", "yellow");
    //         }
    //         else if (data.value > 5 || data.value <= 7){
    //             cityUvIndex.setAttribute("class", "orange");
    //         }
    //         else if (data.value > 7 || data.value <= 10){
    //             cityUvIndex.setAttribute("class", "red");
    //         }
    //         else if (data.value >10){
    //             cityUvIndex.setAttribute("class", "violet");
    //         }
    //     })
    // });

    // // fetch used for receiving the data of the 5 day forecast weather
    // fetch(cityForecastURL)
    // .then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     else {
    //         return;
    //     }
    // })
    
    // .then (function(data){
    //     if (data === undefined || data.cod === "404"){
    //         return;
    //     }
    //     // selectors for the parent of the forecast, used to manipulate children for each day
    //     var dayOne = document.querySelector("#dayOne");
    //     var dayTwo = document.querySelector("#dayTwo");
    //     var dayThree = document.querySelector("#dayThree");
    //     var dayFour = document.querySelector("#dayFour");
    //     var dayFive = document.querySelector("#dayFive");

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     var dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 1)
    //     dateTime = dateTime.toLocaleDateString()

    //     // first day of forecast, replacing html content with current city forecast
    //     dayOne.children[0].textContent = dateTime;
    //     dayOne.children[1].src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon +"@2x.png";
    //     dayOne.children[2].textContent = "Temp: " + data.list[4].main.temp + " °F";
    //     dayOne.children[3].textContent = "Humidity: " + data.list[4].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 2)
    //     dateTime = dateTime.toLocaleDateString()

    //     // second day of forecast, replacing html content with current city forecast
    //     dayTwo.children[0].textContent = dateTime;
    //     dayTwo.children[1].src = "http://openweathermap.org/img/wn/" + data.list[12].weather[0].icon +"@2x.png";
    //     dayTwo.children[2].textContent = "Temp: " + data.list[12].main.temp + " °F";
    //     dayTwo.children[3].textContent = "Humidity: " + data.list[12].main.humidity + "%";
        
    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 3)
    //     dateTime = dateTime.toLocaleDateString()

    //     // third day of forecast, replacing html content with current city forecast
    //     dayThree.children[0].textContent = dateTime;
    //     dayThree.children[1].src = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon +"@2x.png";
    //     dayThree.children[2].textContent = "Temp: " + data.list[20].main.temp + " °F";
    //     dayThree.children[3].textContent = "Humidity: " + data.list[20].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 4)
    //     dateTime = dateTime.toLocaleDateString()

    //     // fourth day of forecast, replacing html content with current city forecast
    //     dayFour.children[0].textContent = dateTime;
    //     dayFour.children[1].src = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon +"@2x.png";
    //     dayFour.children[2].textContent = "Temp: " + data.list[28].main.temp + " °F";
    //     dayFour.children[3].textContent = "Humidity: " + data.list[28].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 5)
    //     dateTime = dateTime.toLocaleDateString()

    //     // fifth day of forecast, replacing html content with current city forecast
    //     dayFive.children[0].textContent = dateTime;
    //     dayFive.children[1].src = "http://openweathermap.org/img/wn/" + data.list[36].weather[0].icon +"@2x.png";
    //     dayFive.children[2].textContent = "Temp: " + data.list[36].main.temp + " °F";
    //     dayFive.children[3].textContent = "Humidity: " + data.list[36].main.humidity + "%";
    // });
})

// selector applied to all cities listed in previously searched list
var previousCityBtn = document.querySelector("#searchedCities")

// event listener used for any city listed in previously searched list
previousCityBtn.addEventListener("click", function(event){
    event.stopPropagation();
    // gets the text of the button clicked on a previously searched city
    previousCityBtnEl = event.target.innerText
    getWeatherData(previousCityBtnEl)
    
    // // used to call data from api using clicked on city
    // var cityWeatherURL = weatherURL + previousCityBtnEl + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"
    // var cityForecastURL = forecastURL + previousCityBtnEl + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"

    // // fetches url for forecast
    // fetch(cityForecastURL)
    // .then(function (response) {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     else{
    //       return alert("City Not Found!");
    //     }
    // })
    
    // .then (function(data){
    //             if (data === undefined || data.cod === "404"){
    //         return
    //     }
        
    //     // selectors for the parent of the forecast, used to manipulate children for each day
    //     var dayOne = document.querySelector("#dayOne");
    //     var dayTwo = document.querySelector("#dayTwo");
    //     var dayThree = document.querySelector("#dayThree");
    //     var dayFour = document.querySelector("#dayFour");
    //     var dayFive = document.querySelector("#dayFive");

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     var dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 1)
    //     dateTime = dateTime.toLocaleDateString()

    //     // first day of forecast, replacing html content with current city forecast
    //     dayOne.children[0].textContent = dateTime;
    //     dayOne.children[1].src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon +"@2x.png";
    //     dayOne.children[2].textContent = "Temp: " + data.list[4].main.temp + " °F";
    //     dayOne.children[3].textContent = "Humidity: " + data.list[4].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 2)
    //     dateTime = dateTime.toLocaleDateString()

    //     // second day of forecast, replacing html content with current city forecast
    //     dayTwo.children[0].textContent = dateTime;
    //     dayTwo.children[1].src = "http://openweathermap.org/img/wn/" + data.list[12].weather[0].icon +"@2x.png";
    //     dayTwo.children[2].textContent = "Temp: " + data.list[12].main.temp + " °F";
    //     dayTwo.children[3].textContent = "Humidity: " + data.list[12].main.humidity + "%";
        
    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 3)
    //     dateTime = dateTime.toLocaleDateString()

    //     // third day of forecast, replacing html content with current city forecast
    //     dayThree.children[0].textContent = dateTime;
    //     dayThree.children[1].src = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon +"@2x.png";
    //     dayThree.children[2].textContent = "Temp: " + data.list[20].main.temp + " °F";
    //     dayThree.children[3].textContent = "Humidity: " + data.list[20].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 4)
    //     dateTime = dateTime.toLocaleDateString()

    //     // fourth day of forecast, replacing html content with current city forecast
    //     dayFour.children[0].textContent = dateTime;
    //     dayFour.children[1].src = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon +"@2x.png";
    //     dayFour.children[2].textContent = "Temp: " + data.list[28].main.temp + " °F";
    //     dayFour.children[3].textContent = "Humidity: " + data.list[28].main.humidity + "%";

    //     // used to calculate the current date, then adds the corresponding number of days for the future forecast
    //     dateTime = new Date()
    //     dateTime.setDate(dateTime.getDate() + 5)
    //     dateTime = dateTime.toLocaleDateString()

    //     // fifth day of forecast, replacing html content with current city forecast
    //     dayFive.children[0].textContent = dateTime;
    //     dayFive.children[1].src = "http://openweathermap.org/img/wn/" + data.list[36].weather[0].icon +"@2x.png";
    //     dayFive.children[2].textContent = "Temp: " + data.list[36].main.temp + " °F";
    //     dayFive.children[3].textContent = "Humidity: " + data.list[36].main.humidity + "%";
    // });

    // // fetches url for current weather
    // fetch(cityWeatherURL)
    // .then(function (response) {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     else{
    //       return;
    //     }
    // })

    // .then(function(data){
    //     if (data === undefined || data.cod === "404"){
    //         return
    //     }
    //     // selectors for the current weather in html
    //     var cityName = document.querySelector("#city");
    //     var cityTemperature = document.querySelector("#temperature");
    //     var cityHumidity = document.querySelector("#humidity");
    //     var cityWindspeed = document.querySelector("#windSpeed");
    //     var cityIcon = document.querySelector("#icon")
    //     var date = new Date().toLocaleDateString()
        
    //     // used to change the text in the html with the current weather data
    //     cityName.textContent = data.name + " (" + date + ")";
    //     cityIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
    //     cityTemperature.textContent = "Temperature: " + data.main.temp + "°F";
    //     cityHumidity.textContent = "Humidity: " + data.main.humidity + " %";
    //     cityWindspeed.textContent = "Wind Speed: " + data.wind.speed  + " MPH";
        
    //     // takes the latitude and longitude data from the weather data to be used in getting the uv index data with another call
    //     var cityLon = data.coord.lon;
    //     var cityLat = data.coord.lat;
    //     var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + cityLat + "&lon=" + cityLon + "&appid=6d57a13744a578704f3fd16ba8940763"
        
    //     // fetch statement used to get uvindex, 
    //     fetch(uvIndexURL)
    //     .then(function (response) {
    //         return response.json();
    //     })

    //     // when data is provided for uv index, it is placed in the html and based on the value of the index, a color is applied to the text
    //     .then(function(data){
    //                     var cityUvIndex = document.querySelector("#uvIndex");
    //         cityUvIndex.textContent = "UV Index: " + data.value;
            
    //         if (data.value <=2){
    //             cityUvIndex.setAttribute("class", "green");
    //         }
    //         else if (data.value > 2 || data.value <= 5){
    //             cityUvIndex.setAttribute("class", "yellow");
    //         }
    //         else if (data.value > 5 || data.value <= 7){
    //             cityUvIndex.setAttribute("class", "orange");
    //         }
    //         else if (data.value > 7 || data.value <= 10){
    //             cityUvIndex.setAttribute("class", "red");
    //         }
    //         else if (data.value >10){
    //             cityUvIndex.setAttribute("class", "violet");
    //         }
    //     })
    // });
})

// used to get weather data
function getWeatherData(getCityWeather){

    // used to call data from api using clicked on city
    var cityWeatherURL = weatherURL + getCityWeather + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"
    var cityForecastURL = forecastURL + getCityWeather + "&units=imperial&appid=6d57a13744a578704f3fd16ba8940763"

    // fetches url for forecast
    fetch(cityForecastURL)
    .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        else{
          return alert("City Not Found!");
        }
    })
    
    .then (function(data){
                if (data === undefined || data.cod === "404"){
            return
        }
        
        // selectors for the parent of the forecast, used to manipulate children for each day
        var dayOne = document.querySelector("#dayOne");
        var dayTwo = document.querySelector("#dayTwo");
        var dayThree = document.querySelector("#dayThree");
        var dayFour = document.querySelector("#dayFour");
        var dayFive = document.querySelector("#dayFive");

        // used to calculate the current date, then adds the corresponding number of days for the future forecast
        var dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 1)
        dateTime = dateTime.toLocaleDateString()

        // first day of forecast, replacing html content with current city forecast
        dayOne.children[0].textContent = dateTime;
        dayOne.children[1].src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon +"@2x.png";
        dayOne.children[2].textContent = "Temp: " + data.list[4].main.temp + " °F";
        dayOne.children[3].textContent = "Humidity: " + data.list[4].main.humidity + "%";

        // used to calculate the current date, then adds the corresponding number of days for the future forecast
        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 2)
        dateTime = dateTime.toLocaleDateString()

        // second day of forecast, replacing html content with current city forecast
        dayTwo.children[0].textContent = dateTime;
        dayTwo.children[1].src = "http://openweathermap.org/img/wn/" + data.list[12].weather[0].icon +"@2x.png";
        dayTwo.children[2].textContent = "Temp: " + data.list[12].main.temp + " °F";
        dayTwo.children[3].textContent = "Humidity: " + data.list[12].main.humidity + "%";
        
        // used to calculate the current date, then adds the corresponding number of days for the future forecast
        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 3)
        dateTime = dateTime.toLocaleDateString()

        // third day of forecast, replacing html content with current city forecast
        dayThree.children[0].textContent = dateTime;
        dayThree.children[1].src = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon +"@2x.png";
        dayThree.children[2].textContent = "Temp: " + data.list[20].main.temp + " °F";
        dayThree.children[3].textContent = "Humidity: " + data.list[20].main.humidity + "%";

        // used to calculate the current date, then adds the corresponding number of days for the future forecast
        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 4)
        dateTime = dateTime.toLocaleDateString()

        // fourth day of forecast, replacing html content with current city forecast
        dayFour.children[0].textContent = dateTime;
        dayFour.children[1].src = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon +"@2x.png";
        dayFour.children[2].textContent = "Temp: " + data.list[28].main.temp + " °F";
        dayFour.children[3].textContent = "Humidity: " + data.list[28].main.humidity + "%";

        // used to calculate the current date, then adds the corresponding number of days for the future forecast
        dateTime = new Date()
        dateTime.setDate(dateTime.getDate() + 5)
        dateTime = dateTime.toLocaleDateString()

        // fifth day of forecast, replacing html content with current city forecast
        dayFive.children[0].textContent = dateTime;
        dayFive.children[1].src = "http://openweathermap.org/img/wn/" + data.list[36].weather[0].icon +"@2x.png";
        dayFive.children[2].textContent = "Temp: " + data.list[36].main.temp + " °F";
        dayFive.children[3].textContent = "Humidity: " + data.list[36].main.humidity + "%";
    });

    // fetches url for current weather
    fetch(cityWeatherURL)
    .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        else{
          return;
        }
    })

    .then(function(data){
        if (data === undefined || data.cod === "404"){
            return
        }
        // selectors for the current weather in html
        var cityName = document.querySelector("#city");
        var cityTemperature = document.querySelector("#temperature");
        var cityHumidity = document.querySelector("#humidity");
        var cityWindspeed = document.querySelector("#windSpeed");
        var cityIcon = document.querySelector("#icon")
        var date = new Date().toLocaleDateString()
        
        // used to change the text in the html with the current weather data
        cityName.textContent = data.name + " (" + date + ")";
        cityIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
        cityTemperature.textContent = "Temperature: " + data.main.temp + "°F";
        cityHumidity.textContent = "Humidity: " + data.main.humidity + " %";
        cityWindspeed.textContent = "Wind Speed: " + data.wind.speed  + " MPH";
        
        // takes the latitude and longitude data from the weather data to be used in getting the uv index data with another call
        var cityLon = data.coord.lon;
        var cityLat = data.coord.lat;
        var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + cityLat + "&lon=" + cityLon + "&appid=6d57a13744a578704f3fd16ba8940763"
        
        // fetch statement used to get uvindex, 
        fetch(uvIndexURL)
        .then(function (response) {
            return response.json();
        })

        // when data is provided for uv index, it is placed in the html and based on the value of the index, a color is applied to the text
        .then(function(data){
                        var cityUvIndex = document.querySelector("#uvIndex");
            cityUvIndex.textContent = "UV Index: " + data.value;
            
            if (data.value <=2){
                cityUvIndex.setAttribute("class", "green");
            }
            else if (data.value > 2 || data.value <= 5){
                cityUvIndex.setAttribute("class", "yellow");
            }
            else if (data.value > 5 || data.value <= 7){
                cityUvIndex.setAttribute("class", "orange");
            }
            else if (data.value > 7 || data.value <= 10){
                cityUvIndex.setAttribute("class", "red");
            }
            else if (data.value >10){
                cityUvIndex.setAttribute("class", "violet");
            }
        })
    });
}

// loops through previously searched cities list in order to find the last one in the list to display upon refresh of the page
for (var i=4; i>=0; i--){
        if (previousCityBtn.children[i].children[0].textContent !== ""){
        getWeatherData(previousCityBtn.children[i].children[0].textContent);
        break;
    }
}