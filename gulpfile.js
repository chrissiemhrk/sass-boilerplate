const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"));
}

exports.style = style;
