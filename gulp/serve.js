var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');

gulp.task('serve', ['recompile'], function (done) {
  browserSync({
    open: false,
    port: config.serve.port,
    server: {
    baseDir: [config.serve.rootPath],
    middleware: function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      },
      routes: {
        '/system.config.js': './system.config.js',
        '/jspm_packages': './jspm_packages'
      }
    }
  }, done);
});
