const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

app.get("/", (req, res) => res.send("Test is running"))


app.post("/", (req, res) => {
    const { name } = req.body
    console.log(name)

    res.json({
        message: "Data received",
        data: name
    })
})