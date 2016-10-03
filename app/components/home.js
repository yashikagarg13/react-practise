var React = require("react");
var Link = require("react-router").Link;
var MainContainer = require("./MainContainer")

var home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead"></p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </MainContainer>
    );
  }
});

module.exports = home;