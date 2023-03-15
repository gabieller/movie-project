require("dotenv").config();
const express = require("express");
const cors = require("cors");

const path = require("path");

const apiRouter = require("./backend/routes/apiRouter");

const config = require("./config");

const app = express();

// if (config == "dev") {
//   app.use(cors());
// }

app.use(express.static("public"));

app.use("/api", apiRouter);

// app.use((res) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

const port = process.env.PORT || 3000;

app.listen(port);
