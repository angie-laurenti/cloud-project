var gulp     = require('gulp');
var mocha    = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('test', function (cb) {
    gulp.src('src/**/**/*.js')
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
        gulp.src('src/**/**/*.js')
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb)
        .on('end', process.exit);
    });
});

