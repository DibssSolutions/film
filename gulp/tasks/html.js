
var config = require('../config.js');
const gulp = require('gulp');
var gulpif         = require('gulp-if');
const changed = require('gulp-changed');
 

gulp.task('html', function () {
	console.log('hello');
    return gulp
    	.src(config.src.templates + '/**/[^_]*.html')
        .pipe(gulpif(true, changed(config.dest.html))) 
        .pipe(gulp.dest(config.dest.html));
});


gulp.task('html:watch', function() {
    gulp.watch(config.src.templates + '/**/_*.html', ['html']);
});