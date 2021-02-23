var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var cache = require('gulp-cached');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
  return gulp.src(config.path.css)
    .pipe(cache('css'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('css-themes', function () {
  return gulp.src(config.path.themes)
    .pipe(cache('css-themes'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.path.themesOutput))
    .pipe(browserSync.reload({
      stream: true
    }));
});
