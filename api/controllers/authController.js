const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


/** auth pages */
/** get user info from the registration page */
const getRegistrationInfo = async (req, res) => {
    
    
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            password: hash
            
        })
        await newUser.save();
        res.status(200).json(newUser)
    } catch (err) {
        res.status(400).json(err)
    }
}

/** get user info from the login page */
const getLoginInfo = async (req, res) => {
    const {username, password} = req.body;
    
    try {
        const user = await User.findOne({ username: username });
        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            jwt.sign({
                username, id: user._id
            }, process.env.JWT_TOKEN, {}, (err, token) => {
                if (err) throw err;
                res.cookie("token", token).json("okay");
            })
        } else {
            res.status(400).send("wrong username or password")
        }
       
    } catch (err) {
        res.status(400).json(err);
    }
    
}

/** @description profile */
const profile = async (req, res) => {
    const { token } = req.cookies;

    jwt.verify(token, process.env.JWT_TOKEN, {}, (err, userInfo) => {
        if (err) throw err;
        res.status(200).json(userInfo)
    });
}

/** @description logout user */
const logout =  (req, res) => {
    res.cookie("token", "").json("okay")
}

module.exports = {
    getRegistrationInfo,
    getLoginInfo,
    profile,
    logout
}