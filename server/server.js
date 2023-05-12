import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/artists", async (req, res) => {
  try {
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/submit", async (req, res) => {
  try {
    if (req.body) {
      res.send(`Stemme på ${req.body.name} registrert`);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(3500);
