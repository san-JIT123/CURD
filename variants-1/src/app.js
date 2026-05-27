import express from "express";
import NoteModel from "./model/note.model.js";
let app = express();

app.use(express.json());

// create notes
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
export default app;
