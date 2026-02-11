import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Card, connectDb } from "./db.js";

const app = express();
app.use(express.json());

connectDb();

app.get("/cards", async (req, res) => {
  try {
    const result = await Card.find();
    return res.status(200).json({
      message: "Cards fetched successfully",
      data: result
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/cards", async (req, res) => {
  try {
    const { title, description, interests } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Each required field is necessary" });
    }

    const card = await Card.create({
      title,
      description,
      interests: Array.isArray(interests) ? interests : []
    });

    return res.status(201).json({
      message: "Card added successfully",
      data: card
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Title already exists" });
    }
    return res.status(500).json({ message: "Server error" });
  }
});

app.put("/card", async (req, res) => {
  try {
    const { title, description, interests } = req.body;

    const data = await Card.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: "Title does not exist" });
    }

    const updatedData = await Card.updateOne(
      { title },
      {
        $set: {
          description,
          interests: Array.isArray(interests) ? interests : []
        }
      }
    );

    return res.status(200).json({
      message: "Card updated",
      data: updatedData
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.delete("/card", async (req, res) => {
  try {
    const { title } = req.body;

    const data = await Card.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: "Title does not exist" });
    }

    await Card.deleteOne({ title });
    return res.status(200).json({ message: "Deleted card" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
