/**
 * Widget home-example-plugins main file
 *
 * See https://github.com/wejs/we-core/blob/master/lib/class/Widget.js for all Widget prototype functions
 */

module.exports = function homeExamplePluginsWidget(projectPath, Widget) {
  var widget = new Widget('home-example-plugins', __dirname);
  return widget;
};