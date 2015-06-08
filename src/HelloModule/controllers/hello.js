var express = require('express');
var router  = express.Router();

router.get('/hello/:name', function(req, res){
  res.render('../src/HelloModule/views/hello.html', {name: req.params.name});
});

module.exports = router;
