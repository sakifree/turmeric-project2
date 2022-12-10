/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const ShoeRouter = require("./controllers/shoe")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

/********************************** */
// EXPRESS APPLICATION OBJECT
/********************************** */
const app = express()

/********************************** */
// MIDDLEWARE
/********************************** */
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false
}))
app.use("/shoes", ShoeRouter)
app.use("/user", UserRouter)

/********************************** */
// HOME ROUTE
/********************************** */
app.get("/", (req, res) => {
    res.render("main.ejs")
})

/********************************** */
// SERVER LISTENER
/********************************** */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`I wanna dance with somebody on port: ${PORT}`)
}) 