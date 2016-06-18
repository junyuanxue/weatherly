var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApi = require('../helpers/weatherApi');

var ForecastContainer = React.createClass({
  // weatherApi.getCurrentWeather(this.state.city)
  // weatherApi.getForecast(this.state.city)

  render: function () {
    return (
      <Forecast />
    )
  }
});

module.exports = ForecastContainer;
