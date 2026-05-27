import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const NoteModel = mongoose.model("note", noteSchema);

export default NoteModel;
