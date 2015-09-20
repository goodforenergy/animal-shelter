'use strict';

var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

gulp.task('images', function() {
	var dest = './build/images';

	return gulp.src('./src/images/**')
		.pipe(imagemin())
		.pipe(gulp.dest(dest));
});

gulp.task('fonts', function() {
	var dest = './build/fonts';

	return gulp.src('./src/fonts/**')
		.pipe(gulp.dest(dest));
});
