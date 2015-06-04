
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  plugin.setRoutes({
    'get /sw-import.js': {
      controller: 'main',
      action: 'sw-import.js',
      permission: true
    }
  });

  return plugin;
};