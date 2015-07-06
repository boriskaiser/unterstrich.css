gulp.task('test', function () {
  return gulp.src(_paths.src + '/*.scss')
    .pipe($.sass());
});
