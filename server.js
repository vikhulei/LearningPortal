const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectDb = require('./config/db')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use(express.json())

app.use("/api/users", require('./routes/api/users'))

connectDb()