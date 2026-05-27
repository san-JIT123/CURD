import express from "express";
import NoteModel from "./model/notes.model.js";

let app = express();
app.use(express.json());

export default app;
