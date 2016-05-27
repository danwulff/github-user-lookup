//backend logic
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getUser = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $("#userInput").hide();
    $("#userLookupError").hide();
    $("#userOutput").show();
    console.log(response);
  }).fail(function(error){
    $("#userLookupError").show();
    console.log(error.responseJSON.message);
  });
};
