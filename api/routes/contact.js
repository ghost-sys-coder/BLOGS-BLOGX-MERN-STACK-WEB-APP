const express = require("express");
const router = express.Router();

const { getUserMessage } = require("../controllers/contactController");

/** @description contact page */
/** POST /contact */

router.post("/message", getUserMessage);


module.exports = router;