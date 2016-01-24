var React = require('react');
var ReactDOM = require('react-dom');

var reactMount = document.getElementById('react-mount');

var Container = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h2>Hello from inside foundation</h2>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Container />,
  reactMount
);
