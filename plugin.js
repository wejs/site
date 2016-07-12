
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  plugin.setRoutes({
    // get org repositories
    'get /plugins': {
      title      : 'We.js plugins',
      controller : 'main',
      action     : 'getOrgRepositories',
      template   : 'main/githubRepos',
      layoutName : 'fullwidth',
      githubOrgName: 'wejs',
      githubFilterName: 'we-plugin'
    },
    'get /themes': {
      title      : 'We.js themes',
      controller : 'main',
      action     : 'getOrgRepositories',
      template   : 'main/githubRepos',
      layoutName : 'fullwidth',
      githubOrgName: 'wejs',
      githubFilterName: 'we-theme'
    },
    'get /suport': {
      title      : 'Support We.js Development',
      controller : 'main',
      action     : 'suport',
      template   : 'main/suport',
      layoutName : 'fullwidth'
    }
  });

  return plugin;
};