// server Instance creation karna
// server configuration : loggers eg. ,morgan,rate limiting

import express from "express";
import NoteModel from "./model/note.model.js";

const app = express();
app.use(express.json());

app.post("/api/note", async (req, res) => {
  let { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  if (!description) {
    return res.status(400).json({
      error: "Description is required",
    });
  }

  if (title.trim().length < 4) {
    return res.status(400).json({
      error: "Title  must be at least 3 character long",
    });
  }
  if (description.trim().length < 10) {
    return res.status(400).json({
      error: "description  must be at least 9 character long",
    });
  }

  const newNote = await NoteModel.create({
    title,
    description,
  });
  return res.status(201).json({
    message: "successfully create user note",
    note: newNote,
  });
});

app.get("/api/note", async (req, res) => {
  let user = await NoteModel.find();
  return res.status(200).json({
    message: "fetch data successfully",
    user: user,
  });
});

app.patch("/api/note/update/:id", async (req, res) => {
  let { id } = req.params;
  let { description } = req.body;
  if (!description) {
    return res.status(400).json({
      error: "Description is required",
    });
  }

  if (description.trim().length < 10) {
    return res.status(400).json({
      error: "description  must be at least 9 character long",
    });
  }

  let note = await NoteModel.findById(id);

  if (!note) {
    return res.status(400).json({
      error: "Note not found ",
    });
  }

  note.description = description;
  await note.save();
  return res.status(200).json({
    message: "update note successfully",
    note: note,
  });
});

export default app;
