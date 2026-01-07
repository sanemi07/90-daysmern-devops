import express from "express";
import data from "./data.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// CREATE NOTE
app.post("/api/v1/notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: data.length + 1,
    title,
    content,
  };

  data.push(newNote);

  res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
});

// GET ALL NOTES
app.get("/api/v1/notes", (req, res) => {
  res.status(200).json(data);
});

// GET NOTE BY ID
app.get("/api/v1/notes/:id", (req, res) => {
  const id = req.params.id;
  const parsedId= parseInt(id);
  //console.log("Requested ID:", typeof parsedId, parsedId);
  const note = data.find((n) => n.id === parsedId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json(note);
});

// UPDATE NOTE
app.put("/api/v1/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const note = data.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.title = title || note.title;
  note.content = content || note.content;

  res.status(200).json({
    message: "Note updated successfully",
    note,
  });
});

// DELETE NOTE
app.delete("/api/v1/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  data.splice(index, 1);

  res.status(200).json({ message: "Note deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
