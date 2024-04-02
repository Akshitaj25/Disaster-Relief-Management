const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Disaster_manModel = mongoose.model("users", UserSchema)
module.exports = Disaster_manModel