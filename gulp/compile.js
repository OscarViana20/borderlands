var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', function (callback) {
  return runSequence(
        ['css', 'css-themes', 'html', 'es6', 'move'],
    callback
  );
});

gulp.task('recompile', function (callback) {
  return runSequence(
    'clean', ['compile'],
    callback
  );
});
