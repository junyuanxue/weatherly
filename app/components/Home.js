var React = require('react');
var styles = require('../styles')

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Enter a City </h1>
      <div>
        <form>
          <div>
            <input placeholder='eg. London' type='text' />
          </div>
          <div>
            <button> Get Weather </button>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = Home;
