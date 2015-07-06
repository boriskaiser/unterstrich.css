gulp.task('sass', function () {
  return gulp.src(_paths.src + '/*.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError({
        title: "Sass task failed",
        message: "<%= error.message %>"
      })
    }))
    .pipe($.sass())
    .pipe(gulp.dest(_paths.dist));
});
