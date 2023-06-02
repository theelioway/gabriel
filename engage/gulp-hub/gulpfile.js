var { parallel, series, src, task, watch } = require("gulp")
var browserSync = require("browser-sync").create()

// Create a convenient and descriptive list
// of the sub folders this "hub" will be
// targeting.
const HUB = ["admin-site", "public-site"]

// A config object listing all the `stylesheet.scss`
// we want to `watch` AND the gulpfiles whose tasks
// we will run.
const FILES = {
  watch: HUB.map((hub) => `./${hub}/stylesheet.scss`).concat(
    "./stylesheet.scss"
  ),
  gulpers: HUB.map((hub) => `./${hub}/gulpfile.js`),
}

// Map the gulpfiles into a list of tasks. `.build`
// specifically targets the build task.
const builders = FILES.gulpers.map((GULPFILE) => require(GULPFILE).build)

// Group the tasks into a `parallel` set.
const buildHub = parallel(builders)

// Standard watch task which launches the server
// then calls the buildHub task when the stylesheet
// files change.
function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  })
  watch(FILES.watch, buildHub).on("change", browserSync.stream)
}

// Export a series task to first build all the
// stylesheets start the watchTask.
exports.default = series(buildHub, watchTask)
