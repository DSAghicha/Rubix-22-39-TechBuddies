const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('DB Connected');
}

module.exports = connectDB