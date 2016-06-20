var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApi = require('../helpers/weatherApi');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function () {
    var city = this.props.routeParams.city;
    weatherApi.getForecast(city)
      .then(function (forecastData) {
        this.setState({
          forecastData: forecastData,
          isLoading: false
        })
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecastData={this.state.forecastData} />
    )
  }
});

module.exports = ForecastContainer;
