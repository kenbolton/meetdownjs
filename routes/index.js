
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.user = {
    index: function (req, res) {
        res.send("Hello, you!");
    }
};
