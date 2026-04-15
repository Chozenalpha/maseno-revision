const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/papers", require("./routes/papers"));

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/masenoDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
