// API KEYS AND URLS 
import { apiKey } from "./keys.js";
import { apiUrl } from "./keys.js";

// Creating environment vairable
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

// Creating a function using AXIOS to make API third party website. 
async function checkWeather(city) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=e945bb4b32f31db4a881497123459508`
  );
  

    
    // Error message for invalid city search
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".Weather").style.display = "none";

  } else {
 
    const { main, weather, wind, name, country } = response.data;
     

        // Manipulating HTML USING DOM on the required objects
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".temp").innerHTML = Math.round(main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = main.humidity + "%";
        document.querySelector(".wind").innerHTML = wind.speed + "km/h";
        document.querySelector(".pressure").innerHTML = main.pressure + "CI";
       
       
       
        
    

        // Update weather accoding to condition using conditional statement
        if (weather[0].main == "Clouds") {
          weatherIcon.src = "images/clouds.png";
        } else if (weather[0].main == "Clear") {
          weatherIcon.src = "images/clear.png";
        } else if (weather[0].main == "Rain") {
          weatherIcon.src = "images/clear.png";
        } else if (weather[0].main == "Drizzle") {
          weatherIcon.src = "images/clear.png";
        } else if (weather[0].main == "Mist") {
          weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"; 
        document.querySelector(".error").style.display = "none";
    }
}
// Adding an event listerner to the function called
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



