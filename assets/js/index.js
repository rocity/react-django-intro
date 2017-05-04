var React = require('react')
var ReactDOM = require('react-dom')

const element = React.createElement(
  'h1',
  'Hello react!'
);

ReactDOM.render(element,
document.getElementById('container'))