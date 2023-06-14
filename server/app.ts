// imports
import express from "express";
import path from "path";
import cors from "cors";

// import multer middleware
import upload from "./multerMiddleware";

// import __dirname
import __dirname from "./dirname";

// Define the port to run on
const port = 5000;

// create express app
const app = express();

// use cors
app.use(cors());

// add reactjs static files
app.use(express.static(path.join(__dirname, "..", "/build")));

// get request to serve the index.html file
app.get("/", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "..", "/build", "index.html"));
});

// post request to upload a file
app.post('/upload', upload.array('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
})


// listen on port 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
