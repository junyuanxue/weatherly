var React = require('react');
var styles = require('../styles');

function Loading () {
  return (
    <div style={styles.container}  className='jumbotron text-center'>
      <h1 style={styles.h1}> Loading... </h1>
    </div>
  )
}

module.exports = Loading;
