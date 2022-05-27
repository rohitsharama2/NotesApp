const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get("/", (req, res, next) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  console.log("kk", req);
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(" hey am there"));
