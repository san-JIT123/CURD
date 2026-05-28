import express from "express";
import noteRouter from "./routes/note.routes.js";

let app = express();

app.use(express.json());

// Note api
app.use("/api/notes", noteRouter);
export default app;
