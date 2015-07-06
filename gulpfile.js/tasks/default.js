gulp.task('default', function (callback) {
  runSequence('sass', callback);
  gulp.watch(_paths.src + '/**/*.scss', ['sass']);
});
