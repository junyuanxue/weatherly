var React = require('react');
var styles = require('../styles');
var GetCityContainer = require('../containers/GetCityContainer');

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <h1>Weatherly</h1>
          <GetCityContainer direction='row' />
        </div>
      {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
