'use strict';

var gulp = require('gulp');

gulp.task('watch', ['build'], function() {
	gulp.watch('src/js/*.js', ['clientJS']);
	gulp.watch('src/js/lib/*.js', ['libJS']);

	gulp.watch(['src/*.html'], ['pages']);
	gulp.watch(['src/fonts/**/*'], ['fonts']);
	gulp.watch(['src/images/**/*'], ['images']);

	gulp.watch('src/sass/*.scss', ['clientSass']);
	gulp.watch(['src/sass/lib/*.scss', 'src/sass/lib/*.css'], ['libSass']);
});
