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

    var description = 'Server side javascript framework for build accessible '+
        'real time applications, sites or blogs';

    res.locals.metatag =
      '<meta property="og:url" content="https://wejs.org" />'+
      '<meta property="og:title" content="We.js framework site" />' +
      '<meta property="og:site_name" content="We.js framework" />'+
      '<meta property="og:description" content="'+description+'" />'+

      '<meta property="og:image" content="https://wejs.org/public/plugin/we-core/files/images/logo.png">'+
      '<meta property="og:image:type" content="image/png">'+

      '<meta name="description" content="'+description+'" />'+

      '<meta property="og:type" content="website" />';

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