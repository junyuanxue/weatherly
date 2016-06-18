var React = require('react');
var styles = require('../styles');

function GetCity(props) {
  return (
    <div>
      <form>
        <div className='form-group'>
          <input className='form-control' style={styles.margin} placeholder='eg. London' type='text' />
        </div>
        <div>
          <button className='btn btn-success' style={styles.margin}>
            Get Weather
          </button>
        </div>
      </form>
    </div>
  )
}

module.exports = GetCity;
