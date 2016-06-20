var React = require('react');
var Forecast = require('../components/Forecast');
var weatherApi = require('../helpers/weatherApi');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecast={this.state.forecast}
        handleClick={this.handleClick} />
    )
  }
});

module.exports = ForecastContainer;
