// server start karna
// connecting with mongoose

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

console.log("ram");
await connectDB();
app.listen(3000, () => console.log("server ise working...3000"));
