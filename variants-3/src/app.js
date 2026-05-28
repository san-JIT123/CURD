import express from "express";
import noteRouter from "./routes/note.routes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

let app = express();

app.use(express.json());

// Note api
app.use("/api/notes", noteRouter);

app.use(errorMiddleware);
export default app;
