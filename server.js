/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

const app = express()

/********************************** */
// DATABASE CONNECTION
/********************************** */
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
.on("open", () => console.log("Mongo Connected"))
.on("close", () => console.log("Mongo Disconnected"))
.on("error", () => console.log(error))

/********************************** */
// MIDDLEWARE
/********************************** */
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("<h1>Server is Working</h1>")
})

/********************************** */
// SERVER LISTENER
/********************************** */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`I wanna dance with somebody on port: ${PORT}`)
}) 