var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

gulp.task('lint', function () {
  return gulp.src(['jsx/**/*'])
  .pipe(eslint({
    rules: {
      'strict': 2,
      'quotes': 1
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
 
// Basic usage 
gulp.task('scripts', function() {
 var entryFile = './index.js';

  var bundler = browserify({
    extensions: ['.js', '.es6.js', '.jsx'],
    transform: ['babelify']
  });

  bundler.add(entryFile);

  var stream = bundler.bundle();
  stream.on('error', function (err) { console.error(err.toString()) });

  stream
    .pipe(source(entryFile))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('compress', function() {
  return gulp.src('./public/js/index.js')
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch(['index.js'], ['scripts', 'compress']);
});
gulp.task('default', ['watch']);
