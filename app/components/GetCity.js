var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function GetWeatherButton () {
  return (
    <button className='btn btn-success' style={styles.margin} type='submit'>
      Get Weather
    </button>
  )
}

function InputCityField (props) {
  return (
    <input className='form-control' style={styles.margin} placeholder='London' type='text'
      onChange={props.onUpdateCity}
      value={props.city} />
  )
}

function GetCity (props) {
  return (
    <div>
      <form onSubmit={props.onSubmitCity}>
        <InputCityField onUpdateCity={props.onUpdateCity} />
        <GetWeatherButton />
      </form>
    </div>
  )
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
