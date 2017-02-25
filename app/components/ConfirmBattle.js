var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles");
var Link = require("react-router").Link;
var MainContainer = require("./MainContainer");
var Loading = require("./Loading");
var UserDetails = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");

//functional stateless component
function ConfirmBattle(props) {
  return props.isLoading === true
    ? <Loading speed={800} text="Waiting" />
    : <MainContainer>
      <h1> Confirm Players </h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player 1">
          <UserDetails
            info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Player 2">
          <UserDetails
            info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button className="btn btn-success btn-lg" onClick={props.onInitiateBattle}>
            Initiate Battle
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button className="btn btn-danger btn-lg">
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </MainContainer>;
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
};


module.exports = ConfirmBattle;