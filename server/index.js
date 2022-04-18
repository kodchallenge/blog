const express = require("express")
const next = require("next")
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();
const cors = require('cors');
require("./db")
const appRouter = require("./routes/route");
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const nextApp = next({dev, PORT})
const handle = nextApp.getRequestHandler()


nextApp.prepare().then(() => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use(cors())    

    app.use("/api", appRouter)

    app.get("*", (req, res) => {
        return handle(req, res);
      });

    app.listen(PORT, err => {
        if(err) throw err;

        console.log("Server running")
    })
})
