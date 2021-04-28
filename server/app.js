//import
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/routes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 7000;

//middelware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
//routes
app.use("/api/post", router);

//database connect
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB COONECT");
  })
  .catch((error) => console.log(`DB_ERROR: ${error.message}`));

//start server
app.listen(port, () => console.log(`http://localhost:${port}`));
