
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  plugin.setRoutes({
    // get org repositories
    'get /github/organization/:orgName/repos': {
      controller : 'main',
      action     : 'getOrgRepositories',
      template   : 'main/githubRepos',
      layoutName     : 'fullwidth'
    }
  });

  return plugin;
};