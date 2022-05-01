const fs = require("fs-extra");
const gulp = require("gulp");
const gulpConcat = require("gulp-concat");

const main = async () => {
  gulp.task("css", function () {
    return gulp
      .src("./dist/css/*.css")
      .pipe(gulpConcat("influx-ui.css"))
      .pipe(gulp.dest("./dist/"))
      .on("end", function () {
        fs.remove("./dist/css");
      });
  });

  gulp.series(gulp.task("css"))();

  fs.copy("package.json", "dist/package.json");
};

if (require.main === module) {
  main();
}
