var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function () {
    console.log(this.props)
    return (
      <Detail />
    );
  }
});

module.exports = DetailContainer;
