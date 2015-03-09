/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.we;
    var context = req.context;

    we.log.info('rodou o main.index', context);

    res.locals.template = 'home/index';

    res.view({ title: 'Express' });
  }
}