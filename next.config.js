require("dotenv").config();
module.exports = {
    env: {
        DOMAIN: process.env.DOMAIN
    },
    devIndicators: {
        autoPrerender: false
    }
}