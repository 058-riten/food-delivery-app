const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Database connected.")
})
.catch((error) => {
    console.log(error)
})