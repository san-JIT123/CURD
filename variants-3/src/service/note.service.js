import ApiError from "../../utils/apiError.js";
import NoteModel from "../model/note.model.js";

//  create Note service
export let createNoteService = async (data) => {
  let { title, des } = data;

  //   validation
  if (!title) throw new ApiError("title is required", 400);
  if (!des) throw new ApiError("title is required", 400);

  if (title.trim().length < 3)
    throw new ApiError("title required 3 character", 400);
  if (des.trim().length < 10)
    throw new ApiError("des required 10 character", 400);

  let newNote = NoteModel.create({
    title,
    des,
  });

  return newNote;
};

// update Note Service
export let updateNoteService = async (data) => {
  let { title, des } = data.body;
  let { id } = data.params;

  if (!title || !des) throw new ApiError("Filed  title and des required ", 400);

  if (title.trim().length < 3)
    throw new ApiError("title is required 3 character  ");

  if (des.trim().length < 10)
    throw new ApiError("title is required 10 character  ");

  let note = await NoteModel.findById(id);
  if (!note) throw new ApiError("note note found", 404);

  note.title = title;
  note.des = des;
  await note.save();

  return note;
};

// delete Note Service
export let deleteNoteService = async (data) => {
  let { id } = data;

  let deleteNote = await NoteModel.findByIdAndDelete(id);

  return deleteNote;
};
