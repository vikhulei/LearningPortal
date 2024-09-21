const express = require("express")

const router = express.Router()

router.post("/", (req, res) =>{

    const { ukrainian, english, tag, topic } = req.body

    res.send(`Got the data from the root:
        Ukrainian is ${ukrainian}
        English is ${english}
        Topic is ${topic}
        `)
})

module.exports = router