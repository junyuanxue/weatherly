var React = require('react');
var styles = require('../styles');
var GetCityContainer = require('../containers/GetCityContainer');

function Home (props) {
  return (
    <div style={styles.container}  className='jumbotron text-center' >
      <h1 style={styles.header}> Enter a City </h1>
      <GetCityContainer />
    </div>
  )
}

module.exports = Home;
