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

  plugin: function(req, res) {
    var we = req.getWe();

    res.locals.template = 'home/plugin';

    // use fullwidth layout in home page
    res.locals.layoutName = 'fullwidth';

    res.view({ title: we.config.appName });
  },

  theme: function(req, res) {
    var we = req.getWe();

    res.locals.template = 'home/theme';

    // use fullwidth layout in home page
    res.locals.layoutName = 'fullwidth';

    res.view({ title: we.config.appName });
  }
};