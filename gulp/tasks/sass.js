'use strict';

var argv = require('yargs').argv,
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	gulpFilter = require('gulp-filter'),
	flatten = require('gulp-flatten'),
	gulpIf = require('gulp-if'),
	minifyCSS = require('gulp-minify-css'),
	pixrem = require('gulp-pixrem'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),

	destRoot = './build/css';

gulp.task('clientSass', function() {
	return gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(prefix('last 2 versions', 'ie 9'))
		.pipe(gulpIf(!argv.debug, minifyCSS()))
		.pipe(pixrem())
		.pipe(flatten())
		.pipe(gulp.dest(destRoot));
});

gulp.task('libSass', function() {

	var needsSassing = gulpFilter(['*.scss'], {restore: true});

	return gulp.src('src/sass/lib/**')
		.pipe(needsSassing)
		.pipe(sass())
		.pipe(needsSassing.restore)

		.pipe(gulpIf(!argv.debug, minifyCSS()))
		.pipe(concat('lib.css'))
		.pipe(gulp.dest(destRoot));
});

gulp.task('sass', ['clientSass', 'libSass']);
