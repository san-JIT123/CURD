import express from "express";
import {
  createNoteController,
  fetchNoteController,
} from "../controller/note.controller.js";
let router = express();

//   note-create
router.post("/create-note", createNoteController);

// note-fetch
router.get("/fetch-note", fetchNoteController);
 
export default router;
