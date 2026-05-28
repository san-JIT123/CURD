import ApiResponse from "../../utils/apiResponse.js";
import asyncHandle from "../../utils/asyncHandle.js";
import createNoteService from "../service/note.service.js";

// createNoteController
let createNoteController = asyncHandle(async (req, res) => {
  let result = await createNoteService(req.body);

  console.log(result);
  return res
    .status(201)
    .json(new ApiResponse("create note successfully", result));
});

export default createNoteController;
