'use strict';

var argv = require('yargs').argv,
	concat = require('gulp-concat'),
	flatten = require('gulp-flatten'),
	gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	jshint = require('gulp-jshint'),
	streamqueue = require('streamqueue'),
	uglify = require('gulp-uglify'),

	destRoot = './build/js';

// Must be included but we don't need a reference
require('jshint-stylish');

gulp.task('clientJS', function() {
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(gulpIf(!argv.debug, uglify()))
		.pipe(flatten())
		.pipe(gulp.dest(destRoot));
});

gulp.task('libJS', function() {
	var jquery,
		lib;

	jquery = gulp.src('src/js/lib/jquery.js');

	lib = gulp.src(['src/js/lib/**', '!src/js/lib/jquery.js']);

	// jQuery has to go first
	return streamqueue({ objectMode: true }, jquery, lib)
		.pipe(gulpIf(!argv.debug, uglify()))
		.pipe(concat('lib.js'))
		.pipe(gulp.dest(destRoot));
});

gulp.task('js', ['libJS', 'clientJS']);
