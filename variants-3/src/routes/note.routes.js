import express from "express";
import {
  createNoteController,
  fetchNoteController,
  updateNoteController,
  deleteNoteController,
} from "../controller/note.controller.js";
let router = express();

//   note-create
router.post("/create-note", createNoteController);

// note-fetch
router.get("/fetch-note", fetchNoteController);

// note-update
router.patch("/update-note/:id", updateNoteController);

// note-delete
router.delete("/delete-note/:id", deleteNoteController);

export default router;
