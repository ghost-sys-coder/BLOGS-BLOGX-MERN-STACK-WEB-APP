const express = require("express");
const router = express.Router();

const { getHomeInfo } = require("../controllers/homeController")


/** @description home page */
/** GET */

router.get("/", getHomeInfo)

module.exports = router;