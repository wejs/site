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

  getOrgRepositories: function(req, res) {
    var we = req.we;
    var repositories;

    var params = {
      org: req.params.orgName,
      per_page: 500
    };

    we.utils.async.series([
      function getFromCache(done) {
        // first try to get from cache
        we.github.getFromCache({
          params: params
        }, function (err, cache) {
          if (err) return done(err);
          // not have the cache
          if (!cache) return done();
          // check expires date
          if (cache.expires > (new Date().getTime())) {
            repositories = cache.response;
          } else {
            cache.destroy();
          }

          done();
        });
      },
      function getRepos(done) {
        // skip if already loaded from cache
        if (repositories) return done();

        we.github.repos.getFromOrg(params, function (err, res) {
          if (err) return done(err);

          we.github.saveCache({
            params: params,
            res: res
          }, function (err) {
            if (err) return done(err);
            repositories = res;
            done();
          });
        });
      }
    ], function doneAll(err) {
      if (err) return res.serverError(err);

      res.locals.record = repositories.filter(function (item) {
        if (req.query.name && item.name.indexOf(req.query.name) == -1) {
          return false;
        }

        return true;
      });

      res.ok();
    });
  }
};