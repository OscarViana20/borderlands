var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var changed = require('gulp-changed');
var config = require('../config');
var ngAnnotate = require('gulp-ng-annotate');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('es6', function () {
  return gulp.src(config.path.source)
    .pipe(cache('es6'))
    .pipe(plumber())
    .pipe(changed(config.path.output, {
      extension: '.js'
    }))
    .pipe(sourcemaps.init())
    .pipe(babel(config.compilerOptions))
    .pipe(ngAnnotate({
      sourceMap: true,
      gulpWarnings: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});
