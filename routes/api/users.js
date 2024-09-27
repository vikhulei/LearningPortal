const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')

router.post("/", [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please provide a valid email address')
        .not()
        .isEmpty()
        .isEmail(),
    check('password', 'Please enrer password with 6 or more charachters')
        .isLength( {min: 6} )
],
    
    async (req, res) =>{

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { name, email, password, date } = req.body

    let user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({ errors:[{msg: "User already exists"}] })
    }

try {
    user = new User({
        name,
        email,
        password,
        date 
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    res.send("User registered")

} catch(err){
    console.log(err.message)
    req.status(500).send('Server error')
}
    
    
})

module.exports = router