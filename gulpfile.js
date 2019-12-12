const gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var pipeline = require('readable-stream').pipeline;

// gulp.task('compress', function () {
//     gulp.src("./styles/style.css")
//         .pipe(uglify({output: {ascii_only:true}}))
//         .pipe(gulp.dest('./dist/'))
//   });

  
  let cleanCSS = require('gulp-clean-css');
  
  gulp.task('minify-css', () => {
    return gulp.src('./styles/style.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });