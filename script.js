const apiKey = `554eb06ca4b1491d89d191625231107`;
const cityTextInput = document.querySelector("#textInput");
const submitButton = document.querySelector("#submitButton");
const displayCityName = document.querySelector('#cityName');
const temperature = document.querySelector('#temp');
const imagePlaceholder = document.querySelector('img');
const windGust = document.querySelector('#wind');
const weatherDataBlock = document.querySelector('#weatherData');

submitButton.addEventListener('click', async () => {

    const city = cityTextInput.value;

    const response = await axios.get(
        'http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+city+'&aqi=no'
    );
    // Test to see response
    console.log(response);

    const temperature_f = response.data.current.temp_f;
    const imageSrcAddress = response.data.current.condition.icon;
    const wind = response.data.current.gust_mph + ' mph ' + response.data.current.wind_dir;
    const cityValueReturned = response.data.location.name + ', ' +  response.data.location.region;
    displayCityName.innerText = 'Current Weather: ' + cityValueReturned;
    temperature.innerText = 'Temperature: ' + temperature_f + ' °F';
    windGust.innerText = 'Wind: ' + wind;
    imagePlaceholder.src = 'https:' + imageSrcAddress;
    weatherDataBlock.style.backgroundColor = '#FFFDD0';

})