
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Meetdown.js' });
};

exports.users = {
  index: function (req, res) {
    var format, callback;
    format = req.params.format;
    if (format === 'json') {
      callback = function (error, found) {
        res.send(found);
      };
    } else if (!format) {
      callback = function (error, found) {
        res.render('users', {
            title: 'Users',
            users: found
        });
      };
    } else {
      throw new Error("Unsupported format");
    }

    req.app.settings.db.collection('users', function(error, users) {
      if (!error) {
        users.find().toArray(callback);
      }
    });
  }
};
