const User = require('../models/User')

exports.register = async (req, res, next) => {
    const {first_name, last_name='', email, password} = req.body

    try {
        const user = await User.create({
            first_name, last_name, email, password
        })

        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    
    if(!email || !password) {
        res.status(400).json({
            success: false,
            error: "Please provide email and password"
        })
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user){
            res.status(404).json({
                success: false,
                error: "User is not registered!"
            })
        }

        const isMatch = await user.matchPasswords(password)

        if(!isMatch){
            res.status(404).json({
                success: false,
                error: "Password is incorrect."
            })
        }

        res.status(200).json({
            success: true,
            token: "tr1452asdf"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        })
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route")
}

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route")
}
