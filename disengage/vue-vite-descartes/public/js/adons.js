!(function () {
  function e() {}
  for (
    var n,
      o = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      i = o.length,
      r = (window.console = window.console || {});
    i--;

  )
    r[(n = o[i])] || (r[n] = e)
})()
