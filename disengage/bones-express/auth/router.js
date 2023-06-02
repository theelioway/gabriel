"use strict"

const { Router } = require("express")

const ThingModel = require("../ThingModel")

const jwtAuthGuard = require("./jwtAuthGuard")

const loginT = require("../crudities/loginT")

const logoutT = require("../crudities/logoutT")

const signupT = require("../crudities/signupT")

const authRouter = Router()
authRouter.post("/login", loginT(ThingModel))
authRouter.get("/logout", jwtAuthGuard(ThingModel), logoutT(ThingModel))
authRouter.post("/:engage/signup", signupT(ThingModel))
module.exports = authRouter
