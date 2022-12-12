/********************************** */
// IMPORT DEPENDENCIES
/********************************** */
require("dotenv").config()
const Shoe = require("./shoe")
const mongoose = require("./connection")

/********************************** */
// SEED CODE
/********************************** */
mongoose.connection.on("open", () => {
    // Define data we want to put in the database
    const startingShoes = [
      { name: "Dunk Low 'Medium Olive'",
      price: 110,
      img: "https://sneakernews.com/wp-content/uploads/2022/04/nike-dunk-low-medium-olive-DD1503-120-6.jpg",
      yearReleased: 2022,
      colorway: "White/Medium Olive-White",
      isOwned: true,
      isRetro: false,
      username: "example" }, 

      { name: "Air Jordan 1 Retro High OG 'Starfish'",
      price: 180,
      img: "https://sneakernews.com/wp-content/uploads/2022/07/air-jordan-1-retro-high-og-starfish-do9369-101-7.jpg",
      yearReleased: 2022,
      colorway: "White/Starfish/Cacao Wow/Sail",
      isOwned: true,
      isRetro: true, 
      username: "example" }, 

      { name: "Adidas Yeezy 500 'Taupe Light'",
      price: 200,
      img: "https://sneakernews.com/wp-content/uploads/2021/06/adidas-Yeezy-500-Taupe-Light-1.jpg?w=1140",
      yearReleased: 2021,
      colorway: "Taupe Light",
      isOwned: false,
      isRetro: false, 
      username: "example" }, 

      { name: "New Balance 9060 'Ivory'",
      price: 150,
      img: "https://sneakernews.com/wp-content/uploads/2022/11/new-balance-9060-ivory-u9060wcg-4.jpg",
      yearReleased: 2022,
      colorway: "Ivory Cream/Pink Sand/Light Moonstone",
      isOwned: false,
      isRetro: false, 
      username: "example" }, 

      { name: "Jordan 1 Retro High OG 'Pine Green'",
      price: 170,
      img: "https://sneakernews.com/wp-content/uploads/2020/02/air-jordan-1-retro-high-og-pine-green-555088-030-2.jpg",
      yearReleased: 2020,
      colorway: "Black/White-Pine Green/Gym Red Orange",
      isOwned: true,
      isRetro: true, 
      username: "example" }, 
    ]

    // Delete all shoes
    Shoe.deleteMany({}, (err, data) => {

        // Create new shoes once old shoes are deleted
        Shoe.create(startingShoes, (err, createdShoes) => {
            console.log("--------SHOES CREATED----------")
            console.log(createdShoes)
            console.log("--------SHOES CREATED----------")

            // Close the DB Connection
            mongoose.connection.close()
        })
    })
})