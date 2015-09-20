'use strict';

var argv = require('yargs').argv,
	gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('serve', function() {
	gulp.src('./build')
		.pipe(webserver({
			host: argv.host || 'localhost',
			port: argv.port || '9000',
			livereload: true
		}));
});
