var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require("../components/Main");
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer");
var ConfirmBattleContainer = require("../containers/ConfirmBattleContainer");
var ResultsContainer = require("../containers/ResultsContainer");


var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} /> /* Active only when no other route is active */
      <Route component={PromptContainer} header="Player One" path="playerOne" />
      <Route component={PromptContainer} header="Player Two" path="playerTwo/:playerOne" />
      <Route component={ConfirmBattleContainer} header="Player Two" path="battle" />
      <Route component={ResultsContainer} path="results" />
    </Route>
  </Router>
);


module.exports = routes;