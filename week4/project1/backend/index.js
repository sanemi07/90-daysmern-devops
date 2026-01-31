import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/simple", (req, res) => {
  const principle = Number(req.query.principle);
  const rate = Number(req.query.rate);
  const time = Number(req.query.time);

  const result = (principle * rate * time) / 100;

  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
