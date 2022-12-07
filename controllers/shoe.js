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

})

// NEW ROUTE - GET
router.get("/new", (req, res) => {
    res.render("shoes/new.ejs")
})

// CREATE ROUTE - POST
router.post("/", (req, res) => {

})

// EDIT ROUTE - GET
router.get("/:id/edit", (req, res) => {

})

// UPDATE ROUTE - PUT
router.put("/:id", (req, res) => {

})

// DELETE ROUTE - DELETE
router.delete("/:id", (req, res) => {
    
})

// SHOW ROUTE - GET
router.get("/:id", (req, res) => {

})

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router