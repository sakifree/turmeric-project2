/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

/********************************** */
// CREATE ROUTER
/********************************** */
const router = express.Router()

/********************************** */
// ROUTES
/********************************** */
router.get("/signup", (req, res) => {
    res.render("user/signup.ejs")
})

router.post("/signup", async (req,res) => {
    // Encrypt password
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10))

    // Create new user
    User.create(req.body, (err, user) => {
        res.redirect("/user/login")
    })
})

router.get("/login", (req, res) => {
    res.render("user/login.ejs")
})

router.post("/login", (req, res) => {
    // Get the data from the request body
    const { username, password } = req.body
    User.findOne({ username }, (err, user) => {
        if (!user) {
            res.send("USER DOESN'T EXIST")
        } else {
            const result = bcrypt.compareSync(password, user.password)
            if (result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/shoes")
            } else {
                res.send("WRONG PASSWORD")
            }
        }
    })
})

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router