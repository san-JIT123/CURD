import mongoose from "mongoose";

let noteSchema = new mongoose.Schema({
  title: String,
  des: String,
});

let NoteModel = mongoose.model("notes", noteSchema);
export default NoteModel;
