//backend logic
var apiKey = require('./../.env').apiKey;

exports.GithubUser = function(userName) {
  this.userName = userName;
};

exports.GithubUser.prototype.getUser = function(){
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey).then(function(response){
    $("#userInput").hide();
    $("#userLookupError").hide();
    $("#userOutput").show();

    //print github username
    $("#githubName").html("Username: " + response.login);
    //print user's github URL
    $("#githubURL").html("URL: <a href='" + response.html_url + "'>" + response.html_url + "</a>");
  }).fail(function(error){
    $("#userLookupError").show();
    console.log(error.responseJSON.message);
  });
};

exports.GithubUser.prototype.getRepos = function(){
  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    response.forEach( function(repo) {

      $("#userRepos").append("<h4>" + repo.name + "</h4>");
      if(repo.description === "") {
        $("#userRepos").append("no description present");
      } else {
        $("#userRepos").append("<p>" + repo.description + "</p>");
      }

    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
