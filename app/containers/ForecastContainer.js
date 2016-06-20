var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApi = require('../helpers/weatherApi');

var ForecastContainer = React.createClass({
  // weatherApi.getCurrentWeather(this.state.city)
  // weatherApi.getForecast(this.state.city)
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    this.setState({
      isLoading: true
    })
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading} />
    )
  }
});

module.exports = ForecastContainer;
