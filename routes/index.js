exports.index = function (req, res) {
  var next = req.found.shift();
  res.render('index', {
    title: 'Meetdown.js',
    next: next,
    upcoming: req.found
  });
};
