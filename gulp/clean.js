var config = require('../config');
var del = require('del');
var gulp = require('gulp');
var vinylPaths = require('vinyl-paths');

gulp.task('clean', function () {
  return gulp.src([config.path.output])
    .pipe(vinylPaths(del));
});
