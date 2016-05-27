var GithubUser = require('./../js/github_lookup.js').GithubUser;

//user interface logic
$( document ).ready(function() {

  $("#userSubmit").click(function() {
    var currentUser = new GithubUser($("#userName").val());
    currentUser.getUser();
    currentUser.getRepos();
  });

  $("#userRetry").click(function() {
    $("#userInput").show();
    $("#userOutput").hide();
  });

});
