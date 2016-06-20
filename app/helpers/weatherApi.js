var axios = require('axios');

var _BASE_URL = 'http://api.openweathermap.org/data/2.5/';
var _API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function _getQuery(city) {
  return '?q=' + city + '&type=accurate&units=metric&APPID=' + _API_KEY;
}

function getForecast (city) {
  var query = _getQuery(city);
  var url = _BASE_URL + 'forecast/daily' + query;
  return axios.get(url)
    .then(function (forecast) {
      console.log('***FORECAST***' + city)
      console.log(forecast.data.list)
      return forecast.data.list;
    });
}

module.exports = getForecast;
