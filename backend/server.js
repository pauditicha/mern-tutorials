const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 7000
const errorHandler = require("./middleware/errorMiddleware")
const colors = require("colors")
const connectDB = require("./Config/db")
app.listen(port, ()=>console.log(`App listening on port ${port}`));


connectDB()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", require("./Routes/goalRoutes"))
app.use(errorHandler);
