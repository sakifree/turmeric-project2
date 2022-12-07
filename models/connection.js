/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const mongoose = require("mongoose")

/********************************** */
// DATABASE CONNECTION
/********************************** */

// Setup inputs for out connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
    .on("open", () => console.log("Mongoose Connected"))
    .on("close", () => console.log("Mongoose Disconnected"))
    .on("error", () => console.log(error))


/********************************** */
// EXPORT CONNECTION
/********************************** */
module.exports = mongoose