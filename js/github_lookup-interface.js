var getRepos = require('./../js/github_lookup.js').getRepos;
var getUser = require('./../js/github_lookup.js').getUser;

//user interface logic
$( document ).ready(function() {

  $("#userSubmit").click(function() {
    getRepos($("#userName").val());
  });


});
