(function(module) {
  var repoView = {};
  repos.requestRepos(repoView.index);
  var ui = function() {
    var $gitRepos = $('#gitRepos');
    $gitRepos.find('ul').empty();
    $gitRepos.show().siblings().hide();
  };
  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '"> '+ repo.name +' </a>');
  };
  repoView.index = function() {
    ui();
    $('#gitRepos ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
