const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '5d7ab5f26724ece0b04060fb71a1d397';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;


function getCoordinates(location){
    return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast(lat, lng){
    
    return fetch(`${WEATHER_API_URL}${lat},${lng}`)
    .then(response => response.json());
}

function getAddress(lat,lng){
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}

function getEmbedURL(lat,lng){
    return `https://maps.darksky.net/@temperature,${lat},${lng},3?domain=&quot;+encodeURIComponent(window.location.href)+&quot;&amp;auth=1568312002_90f4149f72c482bb381cc1acbb06e010&amp;embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=temperature&amp;defaultUnits=_f`;
}
export default {
    getEmbedURL,
    getAddress,
    getForecast,
    getCoordinates        
};