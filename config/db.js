const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoUrl')


const connectDb = async () => {
    try{
        await mongoose.connect(db)
        console.log("DB connected")
    }catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDb