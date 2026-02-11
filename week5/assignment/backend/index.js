import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { Card, connectDb } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDb();

const formatPayload = (payload) => ({
  name: payload.name?.trim(),
  description: payload.description?.trim(),
  linkedIn: payload.linkedIn?.trim() || "",
  twitter: payload.twitter?.trim() || "",
  otherSocial: payload.otherSocial?.trim() || "",
  interests: Array.isArray(payload.interests)
    ? payload.interests.map((interest) => String(interest).trim()).filter(Boolean)
    : []
});

app.get("/cards", async (req, res) => {
  try {
    const result = await Card.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Cards fetched successfully",
      data: result
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/cards/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    return res.status(200).json({
      message: "Card fetched successfully",
      data: card
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/cards", async (req, res) => {
  try {
    const payload = formatPayload(req.body);

    if (!payload.name || !payload.description) {
      return res.status(400).json({ message: "Name and description are required" });
    }

    const card = await Card.create(payload);

    return res.status(201).json({
      message: "Card added successfully",
      data: card
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.put("/cards/:id", async (req, res) => {
  try {
    const payload = formatPayload(req.body);

    if (!payload.name || !payload.description) {
      return res.status(400).json({ message: "Name and description are required" });
    }

    const updatedData = await Card.findByIdAndUpdate(req.params.id, payload, { new: true });
    if (!updatedData) {
      return res.status(404).json({ message: "Card not found" });
    }

    return res.status(200).json({
      message: "Card updated",
      data: updatedData
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.delete("/cards/:id", async (req, res) => {
  try {
    const deleted = await Card.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Card not found" });
    }

    return res.status(200).json({ message: "Deleted card", data: deleted });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
