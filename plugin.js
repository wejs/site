
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  plugin.setRoutes({
    // get org repositories
    'get /plugins': {
      controller : 'main',
      action     : 'getOrgRepositories',
      template   : 'main/githubRepos',
      layoutName : 'fullwidth',
      githubOrgName: 'wejs',
      githubFilterName: 'we-plugin'
    },
    'get /themes': {
      controller : 'main',
      action     : 'getOrgRepositories',
      template   : 'main/githubRepos',
      layoutName : 'fullwidth',
      githubOrgName: 'wejs',
      githubFilterName: 'we-theme'
    }
  });

  return plugin;
};