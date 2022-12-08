/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
const express = require("express")
const Shoe = require("../models/shoe")

/********************************** */
// CREATE ROUTER
/********************************** */
const router = express.Router()

/********************************** */
// ROUTES - INDEX, NEW, UPDATE, CREATE, EDIT, DELETE, SHOW
/********************************** */

// INDEX ROUTE - GET
router.get("/", (req, res) => {
    // Get all shoes from mongo and send them back
    Shoe.find({})
    .then((shoes) => {
        res.render("shoes/index.ejs", { shoes })
    })
    .catch(err => console.log(err))
})

// NEW ROUTE - GET
router.get("/new", (req, res) => {
    res.render("shoes/new.ejs")
})

// CREATE ROUTE - POST
router.post("/", (req, res) => {
    req.body.isRetro = req.body.isRetro === "on" ? true : false
    req.body.isOwned = req.body.isOwned === "on" ? true : false
    Shoe.create(req.body)
    .then((createdFruit) => {
        res.redirect("/shoes")
    })
    .catch(err => console.log(err))
})

// EDIT ROUTE - GET
router.get("/:id/edit", (req, res) => {
    Shoe.findById(req.params.id)
    .then((foundShoe) => {
        res.render("shoes/edit.ejs", { shoe: foundShoe })
    })
    .catch(err => console.log(err))
})

// UPDATE ROUTE - PUT
router.put("/:id", (req, res) => {
    req.body.isRetro = req.body.isRetro === "on" ? true : false
    req.body.isOwned = req.body.isOwned === "on" ? true : false
    Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedShoe) => {
        res.redirect(`/shoes/${req.params.id}`)
    })
})

// DELETE ROUTE - DELETE
router.delete("/:id", (req, res) => {
    Shoe.findByIdAndDelete(req.params.id)
    .then((deletedShoe) => {
        res.redirect("/shoes")
    })
    .catch(err => console.log(err))
})

// SHOW ROUTE - GET
router.get("/:id", (req, res) => {
    // Go and get shoe from database
    Shoe.findById(req.params.id)
    .then((shoe) => {
        res.render("shoes/show.ejs", { shoe })
    })
})

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router