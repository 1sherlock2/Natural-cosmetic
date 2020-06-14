const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");

gulp.task("less", function() {
  return gulp
    .src(["app/less/**/style.less"], { base: "app/less/" })
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")]
      })
    )
    .pipe(gulp.dest("dist/css"));
});

gulp.task("less:watch", function() {
  gulp.watch("app/less/style.less", gulp.series("less"));
});
