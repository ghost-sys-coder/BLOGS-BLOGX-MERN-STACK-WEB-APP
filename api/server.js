const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

/** import mongodb database */
const connectDB = require("./database/db");

/** import routes */
const homeRoute = require("./routes/home");
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact");

/** load the configuration file */
dotenv.config({ path: "./config/config.env" });


/** initialzing app */
const app = express();
const port = process.env.PORT || 8000;

/** logging */
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

/** middleware and routes */
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


/** routes */
app.use("/api/home", homeRoute)
app.use("/api/auth", authRoute)
app.use("/api/contact", contactRoute)




/** start the server if there is a server connection */
app.listen(port, () => {
    /** the server should only run if there is a mongodb connection */
    connectDB();
    console.log(`The server is running on port ${port}.`)
})