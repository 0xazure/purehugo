var gulp = require('gulp')
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css');

gulp.task('compress', function() {
  gulp.src(['assets/css/blog.css', 'assets/css/syntax-highlighter.css', 'assets/css/custom.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});
