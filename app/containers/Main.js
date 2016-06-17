var React = require('react');
var styles = require('../styles')

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.headerContainer}>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
