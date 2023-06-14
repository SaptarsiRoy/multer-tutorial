import multer from "multer";

// import __dirname
import __dirname from "./dirname";

// set the directory for the uploads to the uploaded to
const DIR: string = __dirname + "/uploads/";

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, 'uploads/');
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// define the type for the file
const upload: any = multer({
    dest: DIR,
    storage: storage,
});

// export the middleware
export default upload;