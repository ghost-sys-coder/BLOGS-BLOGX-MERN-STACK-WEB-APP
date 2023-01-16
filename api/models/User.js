const mongoose = require("mongoose");

/** user schema */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});

/** user model */
const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;
