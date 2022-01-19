const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

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
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    
    if(!email || !password) {
        return next(new ErrorResponse('Please provide email and password', 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user){
            return next(new ErrorResponse('User is not registered!', 401))
        }

        const isMatch = await user.matchPasswords(password)

        if(!isMatch){
            return next(new ErrorResponse('Password is incorrect!', 401))
        }

        res.status(200).json({
            success: true,
            token: "tr1452asdf"
        })
    } catch (error) {
        return next(new ErrorResponse(error.message, 500))
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route")
}

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route")
}
