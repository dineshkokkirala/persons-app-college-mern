const express = require("express");
const app = express();
const db = require("./config/db");

//connect DB
db();

app.use(express.json({}));

app.use("/api/person", require("./routes/person"));

// app.get("/", (req, res) => res.send("Dinesh from Server"));
//serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
