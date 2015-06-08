var fs = require("fs");
var path;

function load(path, type, app) {
    if (type === "router") {
        app.use(require(path));
    } else {
        require(path);
    }
}

//Permet de charger tous les fichiers d'un dossier
function autoload(path, prefix, type, app) {
    prefix = prefix === undefined ? '' : prefix;
    type = type === undefined ? '' : type;
    route = prefix + path;
    if (fs.lstatSync(route).isDirectory()) {
        fs.readdirSync(route).forEach(function(file) {
            load(route + file, type, app);
        });
    } else {
        load(route, type, app);
    }
}

//Charge des fichiers de chaque module
function autoloads(prefix, dirname, suffix, type, app) {
    var rel_path = prefix + dirname;
    fs.readdirSync(rel_path).forEach(function(moduledir) {
        path = rel_path + moduledir + suffix;
        try {
            if (fs.lstatSync(path).isDirectory()) {
                fs.readdirSync(path).forEach(function(file) {
                    load(path + file, type, app);
                });
            }
        } catch (e) { }
    });
}

module.exports = {
    "autoload" : autoload,
    "autoloads" : autoloads
};
