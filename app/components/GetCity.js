var React = require('react');
var styles = require('../styles');

function GetWeatherButton (props) {
  return (
    <button className='btn btn-success' style={styles.margin}>
      Get Weather
    </button>
  )
}

function InputCityField (props) {
  return (
    <input className='form-control' style={styles.margin} placeholder='London' type='text' />
  )
}

function GetCity (props) {
  return (
    <div>
      <form>
        <InputCityField />
        <GetWeatherButton />
      </form>
    </div>
  )
}

module.exports = GetCity;
