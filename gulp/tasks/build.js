var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function() {
  return del("./dist");
})

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./index.html")
  .pipe(usemin())
  .pipe(gulp.dest("./dist"));
})

gulp.task('build', ['deleteDistFolder', 'usemin']);
