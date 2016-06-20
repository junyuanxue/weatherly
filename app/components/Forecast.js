var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles');

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <ForecastUI city={props.city} forecast={props.forecast} />
}

function ForecastUI (props) {
  return (
    <div style={styles.container}  className='jumbotron text-center'>
      <h1 style={styles.h1}> {props.city} </h1>
      <div style={styles.listContainer}>
        {props.forecast.map(function (day) {
          return <DayItem key={day.dt} day={day} />
        })}
      </div>
    </div>
  )
}

function DayItem (props) {
  return (
    <div style={styles.dayContainer}>
      Day Item
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired
}

module.exports = Forecast;
