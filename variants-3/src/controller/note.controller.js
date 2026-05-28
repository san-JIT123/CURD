import ApiResponse from "../../utils/apiResponse.js";
import asyncHandle from "../../utils/asyncHandle.js";
import NoteModel from "../model/note.model.js";
import {
  createNoteService,
  deleteNoteService,
  updateNoteService,
} from "../service/note.service.js";

// create Note Controller
export let createNoteController = asyncHandle(async (req, res) => {
  let result = await createNoteService(req.body);

  console.log(result);
  return res
    .status(201)
    .json(new ApiResponse("create note successfully", result));
});

// fetch Note Controller
export let fetchNoteController = asyncHandle(async (req, res) => {
  let fetchNote = await NoteModel.find();

  return res
    .status(200)
    .json(new ApiResponse("note fetch successfully", fetchNote));
});

// update note controller
export let updateNoteController = asyncHandle(async (req, res) => {
  let updateNote = await updateNoteService(req);

  return res
    .status(200)
    .json(new ApiResponse("update note successfully", updateNote));
});

// delete note controller
export let deleteNoteController = asyncHandle(async (req, res) => {
  let result = await deleteNoteService(req.params);
  console.log(result);
  return res
    .status(200)
    .json(new ApiResponse("delete note successfully", result));
});
