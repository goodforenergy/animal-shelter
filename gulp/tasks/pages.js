'use strict';

var changed = require('gulp-changed'),
	dest = './build',
	gulp = require('gulp');

gulp.task('pages', function() {
	return gulp.src('src/*.html')
		.pipe(changed(dest))
		.pipe(gulp.dest(dest));
});
