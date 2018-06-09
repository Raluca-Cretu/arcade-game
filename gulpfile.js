var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('Hello R');
  done();
}

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./css'));
});

var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();