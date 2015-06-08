var app = require('../app/app.js');

var server = app.listen(80, '0.0.0.0', function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Application listening at http://%s:%s', host, port);

});
