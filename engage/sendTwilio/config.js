const environments = {}

environments.staging = {
  httpPort: 5000,
  httpsPort: 5001,
  env: "staging",
  hashingSecret: "123456abcdef",
  host: "localhost:5001",
  twilio: {
    accountSid: "123",
    authToken: "ABC",
    from: "0123456789",
  },
}

environments.production = {
  httpPort: 80,
  httpsPort: 443,
  env: "production",
  hashingSecret: "123456abcdef",
  host: "www.elioway.com",
  twilio: {
    accountSid: "123",
    authToken: "ABC",
    from: "0123456789",
  },
}

let currentEnv = process.env.NODE_ENV || "staging"

module.exports = environments[currentEnv.toLowerCase()]
