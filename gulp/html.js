var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var changed = require('gulp-changed');
var config = require('../config');
var gulp = require('gulp');
var htmlMin = require('gulp-minify-html');
var ngHtml2Js = require('gulp-ng-html2js');
var plumber = require('gulp-plumber');


gulp.task('html', function () {
  return gulp.src(config.path.templates)
    .pipe(cache('html'))
    .pipe(plumber())
    .pipe(changed(config.path.output, {
      extension: '.html'
    }))
    .pipe(htmlMin({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      template: "import angular from 'angular';\n" +
        "export default angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
        "   $templateCache.put('<%= template.url %>',\n    '<%= template.prettyEscapedContent %>');\n" +
        "}]);\n"
    }))
    .pipe(babel(config.compilerOptions))
    .pipe(gulp.dest(config.path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});
