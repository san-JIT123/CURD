import express from "express";
import NoteModel from "./model/note.model.js";
let app = express();

app.use(express.json());

// create notes api
app.post("/api/notes", async (req, res) => {
  let { title, des } = req.body;

  //   validation
  if (!title) return res.status(400).json({ error: "Title is required" });
  if (!des) return res.status(400).json({ error: "Description is required" });

  if (title.trim().length < 3)
    return res
      .status(400)
      .json({ error: "Title must be at least 3 characters long" });

  if (des.trim().length < 10)
    return res
      .status(400)
      .json({ error: "Description must be at least 10 characters long" });

  // create note
  let newNotes = await NoteModel.create({
    title,
    des,
  });

  return res.status(201).json({
    message: "Note create successfully",
  });
});

// fetch Note api
app.get("/api/notes", async (req, res) => {
  let notes = await NoteModel.find();
  return res.status(200).json({
    message: "Fetched  Notes  successfully",
    notes: notes,
  });
});

//  Update Note   api
app.patch("/api/notes/:id", async (req, res) => {
  let { id } = req.params;
  let { des } = req.body;

  //   validation
  if (!des)
    return res.status(400).json({
      error: "Description is required",
    });

  if (des.trim().length < 10)
    return res.status(400).json({
      error: "Description must be al least 10 character long",
    });

  let note = await NoteModel.findById(id);
  if (!note)
    return res.status(404).json({
      error: "Note not found",
    });

  note.des = des;
  await note.save();

  return res.status(200).json({
    message: "Note update successfully",
    update: note,
  });
});
export default app;
