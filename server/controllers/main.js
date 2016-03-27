/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    res.locals.template = 'home/index';
    res.locals.title = '';
    res.ok();
  },

  getOrgRepositories: function(req, res) {
    var we = req.we;
    var repositories;

    var params = {
      org: res.locals.githubOrgName,
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

      res.locals.data = repositories.filter(function (item) {
        if (
          item.name.indexOf(res.locals.githubFilterName) == -1
        ) {
          return false;
        }

        return true;
      });

      res.ok();
    });
  }
};