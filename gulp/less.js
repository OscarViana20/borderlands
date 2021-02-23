var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var changed = require('gulp-changed');
var config = require('../config');
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var lessPluginCleanCSS = require("less-plugin-clean-css");
var cleancss = new lessPluginCleanCSS({advanced: true});

gulp.task('less', function () {
  return gulp.src(config.path.imputLess)
    .pipe(cache('less'))
    .pipe(plumber())
    .pipe(changed(config.path.output, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [cleancss]
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.path.outputCss))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('less-themes', function () {
  return gulp.src(config.path.themes)
    .pipe(cache('less-themes'))
    .pipe(plumber())
    .pipe(changed(config.path.outputCss, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [cleancss]
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.path.themesOutput))
    .pipe(browserSync.reload({ stream: true }));
});
