import express from "express";
import {
  createNoteController,
  fetchNoteController,
  updateNoteController,
} from "../controller/note.controller.js";
let router = express();

//   note-create
router.post("/create-note", createNoteController);

// note-fetch
router.get("/fetch-note", fetchNoteController);

// note-update
router.patch("/update-note/:id", updateNoteController);

export default router;
