exports.index = function (req, res) {
  var next = req.found.shift();
  if (!next) { throw new Error('Undefined next event'); }
  res.render('index', {
    title: 'Meetdown.js',
    next: next,
    upcoming: req.found
  });
};
