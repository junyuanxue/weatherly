var React = require('react');
var styles = require('../styles');
var DayItem = require('./DayItem');

function Detail (props) {
  return (
    <div style={styles.container}  className='jumbotron text-center'>
      <DayItem />
      <h1> Detail page </h1>
    </div>
  )
}

module.exports = Detail;
