const { src, dest } = require("gulp")
const sass = require("gulp-sass")

const HUBNAME = "admin-site"

function scssTask() {
  return src(`./${HUBNAME}/stylesheet.scss`)
    .pipe(sass())
    .pipe(dest(`./${HUBNAME}/dist`))
}

exports.build = scssTask
exports.default = scssTask
