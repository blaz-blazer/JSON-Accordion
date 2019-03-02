//these have to be installed - for example npm install gulp-postcss --save-dev
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

//this runs on gulp.start('styles');
gulp.task('styles', function() {
  //on css save get from src and save to dest
  return gulp.src('./css/src/style.css') //source
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //support fot nested css, vars, auto prefixes
  //error handling
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./css')); //save to destination
})
