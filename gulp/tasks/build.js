var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require ('gulp-uglify')

gulp.task('deleteDistFolder', function() {
  return del("./docs");
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  return gulp.src(['./data.json'])
  .pipe(gulp.dest("./docs"));
})

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./index.html")
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}],
  }))
  .pipe(gulp.dest("./docs"));
})

gulp.task('build', ['deleteDistFolder', 'usemin', 'copyGeneralFiles']);
