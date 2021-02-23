var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['serve'], function () {
  var watcher = gulp.watch([config.path.source, config.path.html, config.path.imputLess, config.path.json], ['compile']);
  watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
