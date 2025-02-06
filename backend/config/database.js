const mongoose = require('mongoose')
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/pos_db';
const connectDatabase = async () => {
    try {
        const connected = await mongoose.connect(uri)
        console.log(`mongodb: ${connected.connection.host}`)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = connectDatabase 