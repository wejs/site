var we = require('we-core');

we.bootstrap(function(err, we) {
  if (err) return doneAll(err);

  we.db.defaultConnection.sync({force: true})
  .done(doneAll);
});

function doneAll(err) {
  if ( err ) {
    we.log.error('Error on reset database', err);
  }
  //sails.load();
  // end / exit
  process.exit();
}
