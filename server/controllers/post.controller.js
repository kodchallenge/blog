const PostModel = require("../models/post.model")

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await PostModel.find().sort({date: -1})
        res.json({data: posts, success: true})
    }
    catch(err) {
        res.json({...err})
    } 
}

const getPost = async (req, res, next) => {
    const {slug} = req.params
    try {
        const post = await PostModel.findOne({slug: slug})
        res.json({data: post, success: true})
    } catch(err) {
        res.json({...err})
    }
}

module.exports = {
    getAllPosts,
    getPost
}