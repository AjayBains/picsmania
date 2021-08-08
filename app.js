const path = require("path");
const express = require("express");
const app = express();
const pics = require("./routes/pics");
const connectDB = require("./db/connect");
require("dotenv").config();
// viewing engine
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/pics");
});

app.use("/pics", pics);

// const port = process.env.PORT || 3000;
app.set("port", process.env.PORT || 5000);

const start = async () => {
  try {
    await connectDB(process.env.MONGOURI);
    // app.listen(port, console.log(`server is listening on port ${port}...`));
    app.listen(app.get("port"), function () {
      console.log("Node server is running on port " + app.get("port"));
    });
  } catch (error) {
    console.log(error);
  }
};

start();
