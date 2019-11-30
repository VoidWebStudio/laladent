var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var pug = require('gulp-pug');

gulp.task('connect', function(){
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass',function(){
gulp.src('./scss/**/*.scss')
     .pipe(autoprefixer({
            cascade: false
        }))
    .pipe(sass())
	  .pipe(concat('styles.css'))
 
    .pipe(gulp.dest('./css/'))
});

gulp.task('livereload', function (){
  gulp.src('')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass' , 'livereload']);
  gulp.watch('', ['livereload']);
});
gulp.task('pug', function(){
  return gulp.src('*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest(''));
})

gulp.task('default', ['connect', 'pug', 'watch', 'sass']);