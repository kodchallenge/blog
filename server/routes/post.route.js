const express = require("express")
const { getAllPosts, getPost } = require("../controllers/post.controller")

const postRouter = express.Router()

postRouter.get("/", getAllPosts)
postRouter.get("/:slug", getPost)


module.exports = postRouter