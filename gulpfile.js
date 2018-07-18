var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');


// task to copy all htm/html files from app directory to dist directory
gulp.task('copyhtml', function() {
  return gulp.src('app/*.+(htm|html)')
	.pipe(gulp.dest('dist/'))
 });

gulp.task('copyimages', function(){
  return gulp.src('app/images/*.+(png|jpg)')
  .pipe(gulp.dest('dist/images'))
})

gulp.task('copyjs', function(){
  return gulp.src('app/*.js')
    .pipe(gulp.dest('dist/js/'))
  });

// function to change sass code to css
gulp.task('sass', function() {
	return gulp.src('app/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('watch', function() {
	gulp.watch('app/*', ['copyhtml', 'copyimages', 'sass', 'copyjs'])
});

gulp.task('default', function(callback) {
	runSequence(['sass', 'copycss'], callback)
});
