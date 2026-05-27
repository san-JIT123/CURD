import express from "express";
import NoteModel from "./model/notes.model.js";

let app = express();
app.use(express.json());

// create notes api
app.post("/api/notes", async (req, res) => {
  let { title, des } = req.body;

  if (!title || !des)
    return res.status(400).json({ error: "All Field are required" });

  if (title.trim().length < 3)
    return res.status(400).json({
      error: "title required 3 character long",
    });
  if (des.trim().length < 10)
    return res.status(400).json({
      error: "title required 10 character long",
    });

  let newNote = await NoteModel.create({
    title,
    des,
  });

  return res.status(201).json({
    message: "Note create successfully",
    note: newNote,
  });
});

// fetch api

app.get("/api/notes", async (req, res) => {
  let notes = await NoteModel.find();

  return res.status(200).json({
    message: "fetch note successfully",
    note: notes,
  });
});
// updated note api
app.patch("/api/notes/:id", async (req, res) => {
  let { id } = req.params;
  let { title, des } = req.body;

  if (!des) return res.status(400).json({ error: "Description is required" });

  if (des.trim().length < 10)
    return res.status(400).json({
      error: "title required 10 character long",
    });

  let note = await NoteModel.findById(id);

  if (!note)
    return res.status(404).json({
      error: "Notes note found",
    });

  note.des = des;
  await note.save();

  return res.status(200).json({
    message: "Update note Successfully",
    updateNote: note,
  });
});

export default app;
