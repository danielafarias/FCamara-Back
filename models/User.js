const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    unidade: {
        type: String,
        require: true,
    }

})

const User = mongoose.model("User", UserSchema);
module.exports = User;