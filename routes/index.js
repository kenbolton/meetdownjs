exports.index = function(req, res){
  req.app.settings.db.collection('events', function(error, events) {
    if (!error) {
      events
        .find({ starts_at: { $gt: new Date() }})
        .sort({ starts_at: 1 })
        .toArray(function(error, found) {
          var next = found.shift();
          res.render('index', {
            title: 'Meetdown.js',
            next: next,
            upcoming: found
          });
        });
    }
  });
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
