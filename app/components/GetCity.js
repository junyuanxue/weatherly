var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function GetWeatherButton (props) {
  return (
    <button className='btn btn-success' style={styles.margin}
      onClick={props.onSubmitCity}>
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

function formStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity (props) {
  return (
    <div style={formStyles(props)}>
      <InputCityField onUpdateCity={props.onUpdateCity} />
      <GetWeatherButton onSubmitCity={props.onSubmitCity} />
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
