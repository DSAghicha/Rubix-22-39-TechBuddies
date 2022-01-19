require('dotenv').config({path: "./config.env"})

const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// Connect to MongoDB
connectDB()

const app = express()

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server is running @ ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
    console.error(`Logged Error: ${err}`);
    server.close(() => process.exit(1))
})
