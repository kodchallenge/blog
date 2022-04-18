const withCSS = require("@zeit/next-css");
require("dotenv").config();
module.exports = withCSS({
    env: {
        DOMAIN: process.env.DOMAIN
    },
    devIndicators: {
        autoPrerender: false
    }
})