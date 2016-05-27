//backend logic
var apiKey = require('./../.env').apiKey;

exports.GithubUser = function(user) {
  var userName = user;
}

exports.GithubUser.prototype.getUser = function(){
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey).then(function(response){
    $("#userInput").hide();
    $("#userLookupError").hide();
    $("#userOutput").show();



    console.log(response);
  }).fail(function(error){
    $("#userLookupError").show();
    console.log(error.responseJSON.message);
  });
};

exports.GithubUser.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
