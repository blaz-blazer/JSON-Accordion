//these have to be installed - for example npm install gulp-watch --save-dev
var gulp = require('gulp');
var watch = require ('gulp-watch');
var browserSync = require('browser-sync').create();
//call gulp watch
gulp.task('watch', function() {
  //browser sync
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  })

  //watch html and run task on change - browser sync
  watch('./index.html', function() {
    browserSync.reload();
  });
  //watch css and run task on change - cssInject
  watch('./css/src/**/*.css', function() {
    gulp.start('cssInject');
  });

});

//auto inject latest css - styles is dependency - it runs the styles task
gulp.task('cssInject',['styles'], function() {
  return gulp.src('./css/style.css')
  .pipe(browserSync.stream());
})
