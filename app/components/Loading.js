var React = require("react");
var styles = require("../styles");

var Loading = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    speed: React.PropTypes.number,
  },
  getInitialState: function () {
    this.originalText = this.props.text;
    return {
      text: this.originalText,
    };
  },
  getDefaultProps: function() {
    return {
      text: "Loading",
      speed: 300,
    };
  },
  componentDidMount: function () {
    var stopper = this.originalText + "...";
    this.interval = setInterval(function () {
      if(this.state.text == stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + "."
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;