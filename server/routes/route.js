const express = require("express")
const postRouter = require("./post.route")
const appRouter = express.Router()

appRouter.use("/posts", postRouter)

module.exports = appRouter