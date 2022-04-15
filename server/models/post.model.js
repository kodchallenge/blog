const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: String,
    slug: {
        type: String,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    image: String,
    description: String,
})

const PostModel = mongoose.model("posts", PostSchema)

module.exports = PostModel