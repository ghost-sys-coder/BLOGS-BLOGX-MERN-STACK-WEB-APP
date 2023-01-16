const express = require("express");
const router = express.Router();

const { getRegistrationInfo, getLoginInfo, profile, logout } = require("../controllers/authController");

/** @description register */
/** /register */

router.post("/register", getRegistrationInfo);

/** @description login */
/** /login */
router.post("/login", getLoginInfo);

/** @description profile */
/** /profile */
router.get("/profile", profile);

/** @description logout */
/** /logout */
router.post("/logout", logout)


module.exports = router;