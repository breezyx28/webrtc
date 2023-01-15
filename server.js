const express = require("express");
const app = express();
const server = require("http").Server(app);

// set our engine
app.set("view engine", "ejs"); // set in view engine
app.use(express.static("public")); // using public folder as base folder

app.get("/live", (req, res) => {
  res.render("live");
});

app.get("/streamer", (req, res) => {
  res.render("streamer");
});

app.get("/", (req, res) => {
  res.redirect(`/streamer`);
});

server.listen(5000);
