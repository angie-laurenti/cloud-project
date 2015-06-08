module.exports = function(app) {

    //Charge la vue
    app.set('views', __dirname);
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');


    //Charge les methodes d'autoload
    var loader = require(__dirname + '/lib/loader/loader');

    //Charge les controllers de chaque module
    loader.autoloads(__dirname + '/../', 'src/', '/controllers/', 'router', app);

    //Charge la gestion d'erreurs pour les routes
    loader.autoload('/lib/error/', __dirname, 'router', app);

}
