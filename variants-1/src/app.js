import express from "express";

let app = express();

app.use(express.json());

// create notes
app.post("/api/notes", (req, res) => {
    
});
export default app;
