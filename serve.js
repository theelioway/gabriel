import { add, format } from "date-fns"
import express from "express"
import axios from "axios"
import {
  getRulers,
  hourIsActive,
  parseTime,
} from "./src/gameobjects/PlanetaryClock/utils.js"

let LOGGER = []
const DOMAIN = "localhost"
const PORT = "5053"
const GEO = "-1.8251776,-80.7501824"
const url = `http://${DOMAIN}:${PORT}/`
// const DOMAIN = process.env.DOMAIN
// const GEO = process.env.GEO
// const PORT = process.env.PORT

const app = express()
app.get("/", (req, res) =>
  res.send({
    ["@usage"]: "`/day` or `/hour` with `| ?date=YYYY-MM-DD&geo=lng,lat`\n|",
  })
)

app.get("/day", (req, res) => {
  let { date, geo, url } = query(req.query)
  get(date, geo, url).then((data) => res.send(data))
})

app.get("/hour", (req, res) => {
  let { date, geo, url } = query(req.query)
  get(date, geo, url).then((data) => {
    let hours = { ...data.Response.SolarHours, ...data.Response.LunarHours }
    let targetHour = hours[hour]
    let tables = []
    let startTime = parseTime(targetHour.Start)
    let endTime = parseTime(targetHour.End)
    let time = startTime
    while (hourIsActive(time, startTime, endTime)) {
      let rulers = getRulers(time)
      tables.push({
        time: format(time, "HH:mm:ss"),
        hourRuler: targetHour.Ruler,
        minRuler: rulers[0],
        secRuler: rulers[1],
      })
      time = add(time, { seconds: 1 })
    }
    return res.send(tables)
  })
})

app.get("/log", (req, res) => res.send(LOGGER))

app.listen(PORT, () => {
  console.log(`PlanetaryTimeAPI is running at http://${DOMAIN}:${PORT}`)
})

function get(date, geo, url) {
  LOGGER.push({ date, geo, url })
  return axios
    .get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then(({ data }) => data)
    .catch((ex) => console.log(ex))
}

function query(querystring) {
  const hoy = new Date().toISOString().slice(0, 10)
  let { date, geo } = querystring
  if (!date) date = hoy
  if (!geo) geo = GEO
  let url = `http://www.planetaryhoursapi.com/api/${date}/${geo}`
  return { date, geo, url }
}
