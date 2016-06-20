var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles');
var DayItem = require('./DayItem');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <ForecastUI
        city={props.city}
        forecast={props.forecast}
        handleClick={props.handleClick} />
}

function ForecastUI (props) {
  return (
    <div style={styles.container}  className='jumbotron text-center'>
      <h1 style={styles.h1}> {props.city} </h1>
      <div style={styles.listContainer}>
        {props.forecast.map(function (day) {
          return <DayItem key={day.dt} day={day} handleClick={props.handleClick.bind(null, day)} />
        })}
      </div>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;
