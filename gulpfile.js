'use strict';
//Importando Modulos
//Modulo que permite correr tareas automaticas
var gulp = require('gulp');
var gulp2 = _interopRequireDefault(gulp);
var wrench = require('wrench');
var runSequence = require("run-sequence");
var runSequence2 = _interopRequireDefault(runSequence);
var gulpMinify = require("gulp-minify");
var gulpMinify2 = _interopRequireDefault(gulpMinify);
var ghPages = require('gulp-gh-pages');

/**
* Esto cargara archivos que se encuentran dentro del directorio
* gulp in el oreden de las tareas de gulp
*/
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return(/\.(js|coffe)$/i).test(file);
}).map(function(file){
  require('./gulp/' + file);
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

gulp2.default.task("copy_jspm_packages", function () {
  return gulp2.default
    .src([
      "public/jspm_packages/system.js",
      "public/jspm_packages/system.src.js",
      "public/jspm_packages/es6-module-loader.js",
      "public/jspm_packages/**/**/external-helpers.js"])
    .pipe(gulp2.default.dest("dist/jspm_packages"));
});

gulp2.default.task("copy_assets", function () {
  return gulp2.default.src("public/assets/**/*", { read: false }).pipe(gulp2.default.dest("dist/assets"));
});

gulp2.default.task("copy_app", function () {
  return gulp2.default.src("public/app/**/*").pipe(gulp2.default.dest("dist/app"));
});

gulp2.default.task("copy_index", function () {
  return gulp2.default.src(["public/index.html", "public/system.config.js"]).pipe(gulp2.default.dest("dist"));
});

gulp2.default.task("minify_config", function () {
  return gulp2.default
      .src("public/system.config.js")
      .pipe((0, gulpMinify2.default)({ ext: { min: ".min.js" }, mangle: false }))
      .pipe(gulp2.default.dest("public"));
});

gulp2.default.task("dist", ["minify_config"], function (callback) {
    var tasks = new Array(["copy_index", "copy_app", "copy_assets", "copy_jspm_packages"]);
    tasks.push(callback);
    return runSequence2.default.apply(undefined, tasks);
});

gulp2.default.task('deploy', function() {

  return gulp2.default.src('dist/**/*.*')
    .pipe(ghPages());
});

gulp.task('default', ['watch']);
