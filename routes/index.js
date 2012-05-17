
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Meetdown.js' });
};

exports.user = {
  index: function (req, res) {
    req.app.settings.db.collection('users', function(error, users) {
      if (!error) {
        users.find().toArray(function(error, found) {
          if (req.params.format === 'json') {
            res.send(found[0]);
          } else {
            res.render('user', found[0]);
          }
        });
      }
    });
  }
};
