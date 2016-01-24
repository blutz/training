var gulp = require('gulp');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var browserify = require('browserify');

gulp.task('default', function() {
  var b = browserify({
    entries: './front/script.js',
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('./static/'));
});


gulp.task('watch', function() {
  gulp.watch('./front/*', ['default']);
});
