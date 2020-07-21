const express = require("express");
const app = express();
const db = require("./config/db");

//connect DB
db();

app.use(express.json({}));

app.use("/api/person", require("./routes/person"));

// app.get("/", (req, res) => res.send("Dinesh from Server"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
