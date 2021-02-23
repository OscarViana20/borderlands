var gulp = require('gulp');
var manifest = require('gulp-manifest');

gulp.task('manifest', function(){
  gulp.src(['public/index.html','public/**/*.js', 'public/**/*.css', 'public/**/*.json'])
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest'
     }))
    .pipe(gulp.dest('public'));
});
