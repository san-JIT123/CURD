import ApiError from "../../utils/apiError.js";
import NoteModel from "../model/note.model.js";

//  create Note service
let createNoteService = async (data) => {
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

export default createNoteService;
