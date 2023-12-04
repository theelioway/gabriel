const { src, dest, watch, series, parallel } = require("gulp")
const autoprefixer = require("autoprefixer"),
  concat = require("gulp-concat"),
  cssnano = require("cssnano"),
  // postcss = require('gulp-postcss'),
  purge = require("gulp-css-purge"),
  rename = require("gulp-rename"),
  replace = require("gulp-replace"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify")
// var browserSync = require('browser-sync').create()
var path = require("path")

const APPNAME = process.cwd().split(path.sep).pop()

const FILES = {
  scssWatch: [
    "./stylesheets/*.scss",
    "./stylesheets/**/*.scss",
    //'!' + 'stylesheets/a/inline.scss', // to exclude any specific files
  ],
  cssPath: [
    "./css/main.css",
    "./css/normalize.css",
    // './node_modules/sanitize.css/sanitize.css',
    // './node_modules/sanitize.css/forms.css',
    // './node_modules/sanitize.css/typography.css',
    // './node_modules/sanitize.css/page.css',
    `./css/${APPNAME}.css`,
  ],
  jsPath: ["./js/plugins.js", "./js/adon/adon*.js"],
  imgPath: ["./*.png", "./*.ico", "./*.svg"],
  alsoWatch: ["./index.html", "./js/main.js"],
  dist: "public",
}

function scssTask() {
  return src("./stylesheets/judge.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename(`${APPNAME}.css`))
    .pipe(purge({ trim: false }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"))
}

function cssTask() {
  return (
    src(FILES.cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat(`${APPNAME}.min.css`))
      // .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write("."))
      .pipe(dest(`${FILES.dist}/css`))
  )
}

function adonTask() {
  return src(FILES.jsPath)
    .pipe(concat("adons.js"))
    .pipe(uglify())
    .pipe(dest(`${FILES.dist}/js`))
  // .pipe(browserSync.stream())
}

function jsTask() {
  return src("./js/main.js")
    .pipe(uglify())
    .pipe(dest(`${FILES.dist}/js`))
  // .pipe(browserSync.stream())
}

function imagesTask() {
  return src(FILES.imgPath).pipe(dest(`${FILES.dist}`))
  // .pipe(browserSync.stream())
}

const cacheBustTask = () => {
  let cbString = new Date().getTime()
  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("."))
}

const build = parallel(series(scssTask, cssTask), adonTask, jsTask, imagesTask)

const watchTask = () => {
  // browserSync.init({
  //   server: {
  //     baseDir: './'
  //   }
  // })
  return watch(
    FILES.scssWatch.concat(FILES.alsoWatch).concat(FILES.jsPath),
    build,
  ) //.on('change', console.log("RELOAD INNIT")) // , browserSync.reload
}

exports.build = series(build, cacheBustTask)

exports.default = series(build, watchTask)
