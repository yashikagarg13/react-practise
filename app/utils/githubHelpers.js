var axios = require("axios");

var id = "CLIENT_ID";
var sec = "SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + "/repos" + param + "&per_page=100");
}

function getTotalStars (repos) {
  return repos.data.reduce(function (memo, item) {
    return memo + item.stargazers_count;
  }, 0);
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars,

      }
    });
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}


var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function(player) {
      return getUserInfo(player);
    })).then(function (info) {
      return info.map(function(item) {
        return item.data;
      });
    }).catch(function(error) {
      console.warn('error', error);
    });
  },
  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (error) {
        console.log('error', error);
      });
  },

};

module.exports = helpers;