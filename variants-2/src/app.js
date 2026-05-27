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


// 
export default app;
