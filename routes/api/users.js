const express = require("express")

const router = express.Router()

router.get("/", (req, res) => res.send("I am in the folder routers/api"))

module.exports = router