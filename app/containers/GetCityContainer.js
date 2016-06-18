var React = require('react');
var GetCity = require('../components/GetCity');
var weatherApi = require('../helpers/weatherApi');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    weatherApi.getCurrentWeather(this.state.city)
    weatherApi.getForecast(this.state.city)
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
