/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.getWe();

    res.locals.template = 'home/index';

    res.view({ title: we.config.appName });
  },

  'sw-import.js': function(req, res) {
    res.set('Content-Type', 'application/javascript')
    .send("importScripts('/public/project/client/bower_components/platinum-sw/service-worker.js');");
  }
};