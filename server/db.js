const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect to database")
}).catch((err) => {
    console.error("Not connected to database", err)
})