// require express and path
import express from "express";
import path from "path";

// import multer middleware
import upload from "./multerMiddleware";


import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// create express app
const app = express();

// add reactjs static files
app.use(express.static(path.join(__dirname, "..", "/build")));

// get request to serve the index.html file
app.get("/", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "..", "/build", "index.html"));
});

// post request to upload a file
app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
})


// listen on port 3000
app.listen(3000, () => {
    console.log("Server started!");
});
