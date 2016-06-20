var React = require('react');
var styles = require('../styles');
var DayItem = require('./DayItem');

function Detail (props) {
  return (
    <div style={styles.container}  className='jumbotron text-center'>
      <h1 style={styles.h1}> {props.city} </h1>
      <DayItem day={props.weather} />
      <p style={styles.p}> {props.weather.weather[0].description} </p>
      <p style={styles.p}> Max temp: {props.weather.temp.max} °C </p>
      <p style={styles.p}> Min temp: {props.weather.temp.min} °C </p>
      <p style={styles.p}> Daytime average: {props.weather.temp.day} °C </p>
      <p style={styles.p}> Evening average: {props.weather.temp.eve} °C </p>
      <p style={styles.p}> Humidity: {props.weather.humidity} </p>
    </div>
  )
}

module.exports = Detail;
