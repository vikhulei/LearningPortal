const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectDb = require('./config/db')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use(express.json())

connectDb()


// app.use("/api/users")

// app.get("/api", (req, res) => res.send("I am at api"))
// app.get("/", (req, res) => res.send("I am at the root"))

app.post("/", (req, res) =>{

    const { name, jobTitle, location } = req.body

    res.send(`Got the data from the root:
        Name is ${name}
        Job title is ${jobTitle}
        Location is ${location}
        `)
})

// app.post("/api", (req, res) =>{
//     console.log(req.body.name)
//     res.send("Got the name from api")
// })