var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <div>
        Hello this is Forecast Page
      </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
