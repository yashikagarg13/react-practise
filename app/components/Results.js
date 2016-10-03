var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles");
var Link = require("react-router").Link;
var Loading = require("./Loading");
var MainContainer = require("./MainContainer");
var UserDetails = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");


function StartOverButton() {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={styles.space}>
        <Link to="/playerOne">
          <button className="btn btn-danger btn-lg">
            Start Over
          </button>
        </Link>
      </div>
    </div>
  );
}

//functional stateless component
function Results(props) {
  if (props.isLoading == true) {
    return <Loading text="One moment" speed={100} />
  }

  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>Its a tie</h1>
        <StartOverButton />
      </MainContainer>
    );
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails
            score={props.scores[winningIndex]}
            info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails
            score={props.scores[loserIndex]}
            info={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <StartOverButton />
      </div>
    </MainContainer>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};


module.exports = Results;