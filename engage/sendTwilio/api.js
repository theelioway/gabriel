const querystring = require("querystring")
const https = require("https")

const sendTwilio = (phone, msg, cb) => {
  if ((phone, msg)) {
    let payload = {
      From: config.twilio.from,
      To: phone,
      Body: msg,
    }
    let stringPayload = querystring.stringify(payload)
    let requestDetails = {
      protocol: "https",
      hostname: "api.twilio.com",
      method: "post",
      path: `/2010-04-01/Accounts/${config.twilio.accountSid}/Messages.json`,
      auth: `${config.twilio.accountSid}:${config.twilio.authToken}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(stringPayload),
      },
    }
    let req = https.request(requestDetails, (res) => {
      var status = res.statusCode
      if (status === 200 || status === 201) {
        cb(false)
      } else {
        cd(`Status code returned: ${status}`)
      }
    })

    req.on("error", (err) => {
      cd(err)
    })
    req.write(stringPayload)
    req.end()
  } else {
    cb("Invalid parameters.")
  }
}
