var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var config = require('../config');
var gulp = require('gulp');

gulp.task('move', function () {
  return gulp.src([
        './src/**/*.json',
        './src/**/*.svg',
        './src/**/*.woff',
        './src/**/*.ttf',
        './src/**/*.png',
        './src/**/*.gif',
        './src/**/*.ico',
        './src/**/*.jpg',
        './src/**/*.eot'])
    .pipe(cache('move'))
    //.pipe(changed(path.output, { extension: '.json' }))
    .pipe(gulp.dest(config.path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});
