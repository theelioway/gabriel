const assert = require("assert")
const app = require("../../src/app")

describe("'SagePay' service", () => {
  it("registered the service", () => {
    const service = app.service("sage-pay")

    assert.ok(service, "Registered the service")
  })
})
