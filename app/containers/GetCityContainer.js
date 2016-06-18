var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    console.log(this.state.city)
  },
  handleUpdateCity: function (event) {
    console.log(event)
    this.setState({
      city: event.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
