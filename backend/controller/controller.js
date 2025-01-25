const Blog = require('../schemas/blog_schema');
const Message = require('../schemas/messageSchema');
const Project = require('../schemas/project_schema');
require('dotenv').config();

// Import nodemailer
const nodemailer = require('nodemailer');

// Configure transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS // the app password you generated
    }
});

// Utility function to handle errors
const handleError = (res, message, error) => {
    console.error(error);
    res.status(500).json({ message, error });
};

// --- Blog Controllers ---
const createBlogPost = async (req, res) => {
    const fileUrl = req.file ? `uploads/${req.file.filename}` : null;
    const { title, mini_description, description, mediaType, code, programmingLanguage } = req.body;

    if (!title || !mini_description || !description || !code) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const blogPost = new Blog({
            title,
            mini_description,
            description,
            mediaType,
            code,
            programmingLanguage,
            file: fileUrl
        });

        const savedPost = await blogPost.save();
        console.log("Created blog post:", savedPost);
        res.status(201).json({ message: 'Blog post created successfully', blogPost: savedPost });
    } catch (error) {
        handleError(res, 'Error creating blog post', error);
    }
};

const getAllBlogPosts = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        handleError(res, 'Error fetching blog posts', error);
    }
};

const getBlogPostById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog post not found' });

        // Add file URL validation
        if (blog.file) {
            blog.file = blog.file.startsWith('/') ? blog.file : `/uploads/${blog.file}`;
        }

        res.status(200).json(blog);
    } catch (error) {
        handleError(res, 'Error fetching blog post', error);
    }
};

const deleteBlogPostById = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: 'Blog post not found' });
        res.status(200).json({ message: 'Blog post deleted successfully', deletedBlog });
    } catch (error) {
        handleError(res, 'Error deleting blog post', error);
    }
};

// --- Message Controllers ---
const createMessage = async (req, res) => {
    try {
        // Save message to the database
        const message = new Message(req.body);
        await message.save();

        // Prepare email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL, // The email where you want to receive notifications
            subject: 'New Message from Your Website',
            text: `You have received a new message from ${req.body.name}:
                   Email: ${req.body.email || 'Not provided'}
                   Message: ${req.body.message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Message created successfully and email sent', message });
    } catch (error) {
        handleError(res, 'Error creating message or sending email', error);
    }
};

const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        handleError(res, 'Error fetching messages', error);
    }
};

const deleteMessageById = async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
        if (!deletedMessage) return res.status(404).json({ message: 'Message not found' });
        res.status(200).json({ message: 'Message deleted successfully', deletedMessage });
    } catch (error) {
        handleError(res, 'Error deleting message', error);
    }
};

// --- Project Controllers ---
const createProject = async (req, res) => {
    // Define the file URL if a file was uploaded, using the relative path
    const fileUrl = req.file ? `uploads/${req.file.filename}` : null;

    // Extract fields from the request body
    const { title, description, mediaType, url } = req.body;

    if (!title || !description || !mediaType || !url) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Create a new project entry using the Project schema
        const project = new Project({
            title,
            description,
            mediaType,
            url,
            file: fileUrl
        });

        // Save the new project to the database
        await project.save();

        // Respond with success message and created project
        res.status(201).json({ message: 'Project created successfully', project });
    } catch (error) {
        // Respond with an error message if saving the project fails
        handleError(res, 'Error creating project', error);
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        handleError(res, 'Error fetching projects', error);
    }
};

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(project);
    } catch (error) {
        handleError(res, 'Error fetching project', error);
    }
};

const deleteProjectById = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json({ message: 'Project deleted successfully', deletedProject });
    } catch (error) {
        handleError(res, 'Error deleting project', error);
    }
};

module.exports = {
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
};
