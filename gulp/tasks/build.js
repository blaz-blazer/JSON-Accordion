var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require ('gulp-uglify')

gulp.task('deleteDistFolder', function() {
  return del("./dist");
})

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./index.html")
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}],
  }))
  .pipe(gulp.dest("./dist"));
})

gulp.task('build', ['deleteDistFolder', 'usemin']);
