import express from "express";
import createNoteController from "../controller/note.controller.js";

let router = express();

//   note-create
router.post("/create-note", createNoteController);

export default router;
