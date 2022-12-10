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

/********************************** */
// EXPORT ROUTER
/********************************** */
module.exports = router