var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles');
var getDate = require('../helpers/utils');

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

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  var desc = props.day.weather[0].description;
  var maxTemp = props.day.temp.max;
  var minTemp = props.day.temp.min;
  return (
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon +'.svg'} alt={desc} />
      <p style={styles.h2}> {minTemp} °C / {maxTemp} °C </p>
      <h2 style={styles.h2}> {date} </h2>
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
