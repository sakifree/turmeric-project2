/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
const mongoose = require("./connection")

/********************************** */
// SHOES MODEL
/********************************** */
const { Schema, model } = mongoose

const shoesSchema = new Schema({
    name: String,
    price: Number,
    img: String,
    yearReleased: Number,
    colorway: String,
    isOwned: Boolean,
    isRetro: Boolean,
    username: String
})

const Shoe = model("Shoe", shoesSchema)
/********************************** */
// EXPORT MODEL
/********************************** */
module.exports = Shoe