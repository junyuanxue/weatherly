var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var getDate = require('../helpers/utils');

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

module.exports = DayItem;
