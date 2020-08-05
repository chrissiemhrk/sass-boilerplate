const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"))
    .pipe(browserSync.stream());
}

// browsersync setup

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src/",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./src/*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
