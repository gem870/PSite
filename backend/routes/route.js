const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    deleteBlogPostById,
    createMessage,
    getAllMessages,
    deleteMessageById,
    createProject,
    getAllProjects,
    getProjectById,
    deleteProjectById
} = require('../controller/controller');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});








const upload = multer({ storage: storage, limits: { fileSize: 300 * 1024 * 1024 } });



// Blog Routes with file handling
router.post('/blog', upload.single('file'), (req, res, next) => {
    // Handle Multer errors
    if (req.fileValidationError) {
        return res.status(400).json({ message: req.fileValidationError });
    }
    createBlogPost(req, res);
});

router.get('/blog', getAllBlogPosts);
router.get('/blog/:id', getBlogPostById);
router.delete('/blog/:id', deleteBlogPostById);

// Message Routes
router.post('/message', createMessage);
router.get('/message', getAllMessages);
router.delete('/message/:id', deleteMessageById);


// Project Routes with file handling
router.post('/project', upload.single('file'), (req, res, next) => {
    // Handle Multer errors
    if (req.fileValidationError) {
        return res.status(400).json({ message: req.fileValidationError });
    }
    createProject(req, res);
});

router.get('/project', getAllProjects);
router.get('/project/:id', getProjectById);
router.delete('/project/:id', deleteProjectById);


module.exports = router;