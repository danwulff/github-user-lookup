var getRepos = require('./../js/github_lookup.js').getRepos;
var getUser = require('./../js/github_lookup.js').getUser;

//user interface logic
$( document ).ready(function() {

  $("#userSubmit").click(function() {
    var userOutput = getUser($("#userName").val());
  });

  $("#userRetry").click(function() {
    $("#userInput").show();
    $("#userOutput").hide();
  });

});
