var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApi = require('../helpers/weatherApi');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  },
  makeRequest: function (city) {
    weatherApi.getForecast(city)
      .then(function (forecastData) {
        this.setState({
          forecast: forecastData,
          isLoading: false
        })
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecast={this.state.forecast} />
    )
  }
});

module.exports = ForecastContainer;
