const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectDb = require('./config/db')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use(express.json())

app.use("/api/words", require('./routes/api/words'))

connectDb()



// app.post("/api", (req, res) =>{
//     console.log(req.body.name)
//     res.send("Got the name from api")